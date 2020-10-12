import * as React from 'react';
import r from 'refluent';

import resizeRef from './resizeRef';

export default r
  .do((_, push) => ({
    setBoundsElem: resizeRef(({ height = 0 }) => push({ height })),
  }))
  .yield(({ content, footer, height, setBoundsElem }) => (
    <>
      <div style={{ minHeight: '100%', marginBottom: -height }}>
        {content}
        <div style={{ height: height }} />
      </div>
      <div ref={setBoundsElem}>{footer}</div>
    </>
  ));
