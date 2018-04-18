import * as React from 'react';
import r from 'refluent';
import { Txt } from 'elmnt';
import { Link, restyle, watchHover } from 'common-client';

import styles from './styles';

export default r
  .do(watchHover)
  .do(
    restyle('color', 'isHovered', (color, isHovered, style) =>
      style.defaults(styles.button(color)).mergeKeys({ hover: isHovered }),
    ),
  )
  .yield(
    ({ to, newTab, onClick, style, hoverProps, children }) =>
      onClick ? (
        <Txt onClick={onClick} {...hoverProps} style={style}>
          {children}
        </Txt>
      ) : (
        <Link
          to={to}
          newTab={newTab}
          style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
        >
          <Txt {...hoverProps} style={style}>
            {children}
          </Txt>
        </Link>
      ),
  );
