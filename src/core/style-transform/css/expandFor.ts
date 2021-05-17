import { CSSProps } from '../typings';
import { undefOrNull, unique } from '../utils';

import expandProp from './expandProp';
import { longToShort, ShorthandProp } from './shorthands';

const orders = {
  border: 1,
  borderWidth: 2,
  borderStyle: 2,
  borderColor: 2,
  borderTop: 3,
  borderRight: 3,
  borderBottom: 3,
  borderLeft: 3,
};

export default function expandFor(
  style: CSSProps = {},
  ...props: string[]
): CSSProps {
  const shorthands = unique<string>(props.map(p => longToShort[p]));
  const expanded = Object.assign(
    {},
    ...shorthands
      .sort((a, b) => (orders[a] || 0) - (orders[b] || 0))
      .map(p => expandProp(style, p as ShorthandProp)),
  );

  return Array.from(new Set([...Object.keys(style), ...Object.keys(expanded)]))
    .map(k => ({
      key: k,
      value: undefOrNull(style[k]) ? expanded[k] : style[k],
    }))
    .filter(
      ({ key, value }) => !shorthands.includes(key) && !undefOrNull(value),
    )
    .reduce((res, { key, value }) => ({ ...res, [key]: value }), {});
}
