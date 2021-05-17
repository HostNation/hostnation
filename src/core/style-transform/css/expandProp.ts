import * as cssExpand from 'css-shorthand-expand';

import { CSSProps, Obj } from '../typings';
import { undefOrNull } from '../utils';

import { ShorthandProp } from './shorthands';

const toString = (x?: number | string | null): string => {
  if (undefOrNull(x)) return '';
  return typeof x === 'number' ? `${x}px` : x!;
};

export default function expandProp(
  style: CSSProps,
  property: ShorthandProp,
): CSSProps {
  const value = style[property];

  if (undefOrNull(value)) return {};

  const expanded = {} as Obj;
  if (property === 'borderRadius') {
    let split = typeof value === 'string' ? value.split(/\s+/) : [value];
    expanded.borderTopLeftRadius = split[0];
    expanded.borderTopRightRadius = split[1] || split[0];
    expanded.borderBottomRightRadius = split[2] || split[0];
    expanded.borderBottomLeftRadius = split[3] || split[1] || split[0];
  } else {
    const kebabProp = property.replace(
      /([a-z][A-Z])/g,
      g => `${g[0]}-${g[1].toLowerCase()}`,
    );
    const kebabExpanded = cssExpand(kebabProp, toString(value));
    Object.keys(kebabExpanded).forEach(p => {
      const camelProp = p.replace(/-([a-z])/g, g => g[1].toUpperCase());
      expanded[camelProp] =
        typeof value === 'number'
          ? parseFloat(kebabExpanded[p])
          : kebabExpanded[p];
    });
  }

  return expanded;
}
