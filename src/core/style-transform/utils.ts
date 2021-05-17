import * as immutable from 'object-path-immutable';

import css from './css';
import { CSSMap, CSSProps, CSSTree, Obj } from './typings';

x => x as CSSProps;

export const undefOrNull = x => x === null || x === undefined;

export const isObject = (v: any) =>
  Object.prototype.toString.call(v) === '[object Object]';

export const flatten = <T>(array: (T[] | T | undefined)[]) =>
  array.reduce<T[]>((res, v) => res.concat(v || []), []);

const uniqueFromArray = <T>(array: T[]) => Array.from(new Set(array));
export const unique = <T>(array: (T[] | T | undefined)[]) =>
  uniqueFromArray(flatten(array));

export const mapToTree = (styleMap: CSSMap): CSSTree => {
  let branchStyles = {} as Obj;

  for (const k of Object.keys(styleMap)) {
    if (k !== '') {
      branchStyles = (immutable as any).set(branchStyles, k, styleMap[k]);
    }
  }

  return { ...styleMap[''], ...branchStyles };
};

export const treeToMap = (styleTree?: CSSTree): CSSMap => {
  if (!styleTree) return { '': {} };

  const result: CSSMap = { '': {} };
  for (const p of Object.keys(styleTree)) {
    if (isObject(styleTree[p])) {
      const flat = treeToMap(styleTree[p]);
      for (const k of Object.keys(flat)) {
        const key = k === '' ? p : [...p.split('.'), k].sort().join('.');
        if (result[key] || Object.keys(flat[k]).length > 0) {
          result[key] = css.merge(result[key], flat[k]);
        }
      }
    } else {
      result[''][p] = styleTree[p];
    }
  }

  return result;
};

export const mergeMaps = (...styleMaps: CSSMap[]): CSSMap => {
  const keys = unique(styleMaps.map(m => Object.keys(m)));
  return keys.reduce(
    (res, k) => ({ ...res, [k]: css.merge(...styleMaps.map(m => m[k])) }),
    {},
  );
};
