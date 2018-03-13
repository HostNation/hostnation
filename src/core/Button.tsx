import * as React from 'react';
import m, { watchHover } from 'mishmash';
import { Txt } from 'elmnt';
import st from 'style-transform';
import { Link } from 'common-client';

import styles from './styles';

export default m
  .do(watchHover)
  .merge('color', 'style', 'isHovered', (color, style, isHovered) => ({
    style: st({ ...styles.button(color), ...style }).mergeKeys({
      hover: isHovered,
    }),
  }))(
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
