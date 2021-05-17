export { CSSProps, CSSTree, Style } from './typings';

import css from './css';
import { CSSMap, CSSProps, CSSTree, Obj, Style } from './typings';
import { isObject, mergeMaps, treeToMap } from './utils';

x => x as CSSProps;

const blankAsString = x => {
  x.toString = () => '';
  return x;
};

const st = (styleMap: CSSMap): Style => ({
  ...styleMap[''],

  defaults: blankAsString((...styleTrees) =>
    st(mergeMaps(...styleTrees.map(treeToMap), styleMap)),
  ),

  expandFor: blankAsString((...props) =>
    st({ ...styleMap, '': css.expandFor(styleMap[''], ...props) }),
  ),

  filter: blankAsString((...props) =>
    st({ ...styleMap, '': css.filter(styleMap[''], ...props) }),
  ),

  map: blankAsString(map => st({ ...styleMap, '': map(styleMap['']) })),

  merge: blankAsString((...styleTrees: (CSSTree | undefined)[]) =>
    st(mergeMaps(styleMap, ...styleTrees.map(treeToMap))),
  ),

  mergeKeys: blankAsString((...args: (string | Obj<boolean>)[]) => {
    const keys = isObject(args[0])
      ? Object.keys(args[0]).filter(k => args[0][k])
      : (args as string[]);
    return st(
      Object.keys(styleMap)
        .map(k => ({
          split: k ? k.split('.') : [],
          style: styleMap[k],
        }))
        .sort((a, b) => a.split.length - b.split.length)
        .map(({ split, style }) => ({
          newKey: split.filter(k => !keys.includes(k)).join('.'),
          style,
        }))
        .reduce(
          (res, { newKey, style }) => ({
            ...res,
            [newKey]: css.merge(res[newKey], style),
          }),
          {},
        ),
    );
  }),

  numeric: blankAsString((...props: string[]) => {
    const result = css.expandFor(styleMap[''], ...props);
    for (const k of props) result[k] = parseFloat(result[k] || 0);
    return st({ ...styleMap, '': result });
  }),

  scale: blankAsString((scales: Obj<number | Obj<number>> = {}) =>
    st({ ...styleMap, '': css.scale(styleMap[''], scales) }),
  ),
});

export default (style: Style | CSSTree | undefined): Style =>
  style && (style as Style).expandFor ? (style as Style) : st(treeToMap(style));
