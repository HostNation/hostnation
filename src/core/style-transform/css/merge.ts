import { CSSProps } from '../typings';
import { unique } from '../utils';

import expandFor from './expandFor';

export default function merge(...styles: (CSSProps | undefined)[]): CSSProps {
  const expandProps = unique(styles.map(s => Object.keys(s || {})));

  return Object.assign({}, ...styles.map(s => expandFor(s, ...expandProps)));
}
