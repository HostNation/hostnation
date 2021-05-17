import { CSSProps } from '../typings';
import { undefOrNull, unique } from '../utils';

import expandFor from './expandFor';
import { shortToLong } from './shorthands';

export default function filter(
  style: CSSProps | undefined,
  ...props: string[]
): CSSProps {
  if (!style) return {};

  const expanded = expandFor(style, ...props);

  return unique<string>(props.map(p => [p, ...(shortToLong[p] || [])]))
    .filter(p => !undefOrNull(expanded[p]))
    .reduce((res, p) => ({ ...res, [p]: expanded[p] }), {});
}
