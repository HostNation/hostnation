import * as React from 'react';
import { withHover } from 'mishmash';
import { Txt } from 'elmnt';
import st from 'style-transform';
import { Link } from 'common-client';

import styles from './styles';

export default withHover<any>(
  ({
    to,
    newTab,
    onClick,
    color,
    style,
    isHovered: hover,
    hoverProps,
    children,
  }) =>
    onClick ? (
      <Txt
        onClick={onClick}
        {...hoverProps}
        style={st({ ...styles.button(color), ...style }, [
          ['mergeKeys', { hover }],
        ])}
      >
        {children}
      </Txt>
    ) : (
      <Link
        to={to}
        newTab={newTab}
        style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
      >
        <Txt
          {...hoverProps}
          style={st({ ...styles.button(color), ...style }, [
            ['mergeKeys', { hover }],
          ])}
        >
          {children}
        </Txt>
      </Link>
    ),
);
