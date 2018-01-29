import * as peg from 'pegjs';
import { Field, fieldIs, Scalar } from 'rgo';
import { Obj, root } from 'common';

const parser = peg.generate(String.raw`

start
= _ main:or _ { return main[0]; }
/ _ { return {}; }

or
= lhs:and _ '|' _ rhs:or2 { return [['OR'].concat(lhs).concat(rhs)]; }
/ and

or2
= lhs:block _ '|' _ rhs:or2 { return lhs.concat(rhs); }
/ and

and
= lhs:block _ ',' _ rhs:and2 { return [['AND'].concat(lhs).concat(rhs)]; }
/ block

and2
= lhs:block _ ',' _ rhs:and2 { return lhs.concat(rhs); }
/ block

block
= '(' _ sentence:or _ ')' { return sentence; }
/ statement

statement
= f:field _ o:op _ e:expr { return [[f, o, e]]; }
/ '!' _ f:field { return [[f, '=', 'null']]; }
/ f:field { return [[f, '!=', 'null']]; }

field
= '\'' f:[a-z0-9-_]i+ '\'' { return f.join(''); }
/ '"' f:[a-z0-9-_]i+ '"' { return f.join(''); }
/ f:[a-z0-9-_]i+ { return f.join(''); }

op
= '!=' / '<=' / '>=' / '=' / '<' / '>' { return text(); }

expr
= '\'' t:[^']* '\'' { return t.join('').trim(); }
/ '"' t:[^"]i* '"' { return t.join('').trim(); }
/ '[' t:[^\]]i* ']' { return t.join('').split(',').map(function(s) { return s.trim() }); }
/ t:[^'",|()]* { return t.join('').trim(); }

_
= whiteSpace*

whiteSpace
= [ \t\n\r]+

`).parse;

const parseValue = (value: string, scalar: Scalar) => {
  if (value === 'null') return null;
  if (scalar === 'boolean') return { true: true, false: false }[value];
  if (scalar === 'int') return parseInt(value, 10);
  if (scalar === 'float') return parseFloat(value);
  if (scalar === 'date') {
    const parts = value
      .split(/^(\d\d?)\/(\d\d?)\/(\d\d(?:\d\d)?)$/)
      .slice(1)
      .map(parseFloat);
    if (parts.length === 0) return undefined;

    const dd = parts[0];
    const mm = parts[1] - 1;
    const yy = parts[2] + (parts[2] < 100 ? (parts[2] < 30 ? 2000 : 1900) : 0);

    const d = new Date(yy, mm, dd);
    if (d.getDate() !== dd || d.getMonth() !== mm || d.getFullYear() !== yy) {
      return undefined;
    }

    return d;
  }
  return value;
};

const parseFilterValues = (filter: any[], fields: Obj<Field>) => {
  if (filter[0] === 'AND' || filter[0] === 'OR') {
    return [
      filter[0],
      ...filter.slice(1).map(f => parseFilterValues(f, fields)),
    ];
  }
  const field = fields[filter[0]];
  if (!field || !fieldIs.scalar(field)) throw new Error('Invalid field');
  const op = filter.length === 3 ? filter[1] : '=';
  const value = filter[filter.length - 1];
  if (
    ['boolean', 'string', 'json'].includes(field.scalar) &&
    !['=', '!='].includes(op)
  ) {
    throw new Error('Invalid operator for data type');
  }
  if (
    field.scalar === 'boolean' &&
    (op === '=' || op === '!=') &&
    value === 'null'
  ) {
    return [
      op === '=' ? 'OR' : 'AND',
      [[filter[0], op, null], [filter[0], op, false]],
    ];
  }
  const parsedValue = parseValue(value, field.scalar);
  if (parsedValue === undefined || parsedValue !== parsedValue) {
    throw new Error('Invalid value');
  }
  return [filter[0], op, parsedValue];
};

export default function parseFilter(filter: string, type: string) {
  try {
    return parseFilterValues(
      parser(filter.replace(/OR/g, '|')),
      root.rgo.schema[type],
    );
  } catch (error) {
    return null;
  }
}
