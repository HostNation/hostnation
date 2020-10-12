import { Rgo, Scalar } from 'rgo';
import * as moment from 'moment';

export type Obj<T = any> = { [key: string]: T };

export const noUndef = (v: any) => (v === undefined ? null : v);

const getValueStringSub = (value: any, scalar: Scalar) => {
  if (value === undefined) return '';
  else if (value === null) return '---';
  else if (scalar === 'boolean') return value ? 'Yes' : 'No';
  else if (scalar === 'date') return moment(value).format('DD/MM/YY');
  return `${value}`;
};
export const getValueString = (value: any, scalar: Scalar) => {
  if (Array.isArray(value)) {
    if (value.length === 0) return '---';
    return value.map(v => getValueStringSub(v, scalar)).join(', ');
  }
  return getValueStringSub(value, scalar);
};

export const root =
  typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    : typeof global !== 'undefined'
    ? global
    : ({} as Window | Global);

declare global {
  interface Window {
    rgo: Rgo;
  }
  interface Global {
    rgo: Rgo;
  }
}
declare global {
  namespace NodeJS {
    interface Global {
      rgo: Rgo;
    }
  }
}
