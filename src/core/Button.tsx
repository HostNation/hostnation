import React from 'react';

import { Txt } from './elements';
import st from './style-transform';
import { useHover } from './utils';

import Link from './Link';
import styles from './styles';

export default ({ to, newTab, onClick, color, style, children }: any) => {
  const [isHovered, hoverProps] = useHover();
  const buttonStyle = st(style)
    .defaults(styles.button(color) as any)
    .mergeKeys({ hover: isHovered });
  if (!to || onClick) {
    return (
      <div style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}>
        <Txt onClick={onClick} {...hoverProps} style={buttonStyle}>
          {children}
        </Txt>
      </div>
    );
  }
  return (
    <Link
      to={to}
      newTab={newTab}
      style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
    >
      <Txt {...hoverProps} style={buttonStyle}>
        {children}
      </Txt>
    </Link>
  );
};
