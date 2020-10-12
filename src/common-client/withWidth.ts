import r from 'refluent';
import * as memoize from 'fast-memoize';

import resizeRef from './resizeRef';

export default (memoize as any)(toggleWidth =>
  r.do((_, push) => ({
    setWidthElem: resizeRef(({ width }) =>
      push({ small: width && width <= toggleWidth }),
    ),
  })),
);