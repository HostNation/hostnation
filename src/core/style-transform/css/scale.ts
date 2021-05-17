import { CSSProps, Obj } from '../typings';
import { flatten, isObject, unique } from '../utils';

import expandFor from './expandFor';

const dirProps = {
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  borderWidth: [
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
  ],
};

const round = (value: number) =>
  value > 0 ? Math.round(value) : -Math.round(-value);

export default function scale(
  style: CSSProps | undefined,
  scales: Obj<number | Obj<number>>,
): CSSProps {
  const scaleProps = Object.keys(scales);
  const allProps = unique(
    [
      ...scaleProps,
      ...flatten(
        scaleProps
          .filter(k => isObject(scales[k]))
          .map(k => Object.keys(scales[k])),
      ),
    ].map(k => dirProps[k] || k),
  );
  if (allProps.includes('lineHeight')) allProps.push('fontSize');

  const expanded = expandFor(style, ...allProps);
  const result = { ...expanded };
  if (typeof expanded.lineHeight === 'number') {
    expanded.lineHeight = `${(expanded.lineHeight as any) *
      parseFloat(expanded.fontSize as string)}px`;
  }

  for (const key of scaleProps) {
    if (!dirProps[key]) {
      if (typeof scales[key] === 'number') {
        result[key] = round(
          parseFloat(expanded[key] || 0) * (scales[key] as number),
        );
      } else {
        result[key] = round(
          Object.keys(scales[key]).reduce(
            (res, k) => res + parseFloat(expanded[k] || 0) * scales[key][k],
            0,
          ),
        );
      }
      if (key === 'lineHeight') result[key] += 'px';
    } else {
      dirProps[key].forEach((p, i) => {
        if (typeof scales[key] === 'number') {
          result[p] = round(
            parseFloat(expanded[p] || 0) * (scales[key] as number),
          );
        } else {
          result[p] = round(
            Object.keys(scales[key]).reduce(
              (res, k) =>
                res +
                parseFloat(expanded[dirProps[k] ? dirProps[k][i] : k] || 0) *
                  scales[key][k],
              0,
            ),
          );
        }
      });
    }
  }

  return result;
}
