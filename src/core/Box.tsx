import React from 'react';

import { Div, Icon, Txt } from './elements';
import st from './style-transform';
import { useHover, useToggle, useWidth } from './utils';

import styles, { colors, icons } from './styles';

export default ({ title, color = 'black', border, toggle, children }: any) => {
  const [isHovered, hoverProps] = useHover();
  const [setWidthElem, small] = useWidth(819);
  const [isOpen, toggleIsOpen] = useToggle();
  const style = st({
    background: colors[color],
    padding: '10px 45px',
    position: 'relative',
    cursor: toggle ? 'pointer' : 'default',
    hover: { background: colors[`${color}Dark`] },
  }).mergeKeys({ hover: isHovered });
  return (
    <div>
      <div
        onClick={toggle && toggleIsOpen}
        {...hoverProps}
        style={style}
        ref={setWidthElem}
      >
        <Txt
          style={{
            ...styles.title,
            lineHeight: 1.3,
            color: '#f2f2f2',
            fontSize: small ? 20 : 30,
          }}
        >
          {title}
        </Txt>
        {toggle && (
          <Icon
            {...(isOpen ? icons.up : icons.down)}
            style={{
              color: '#f2f2f2',
              fontSize: 30,
              position: 'absolute',
              top: small ? 5 : 10,
              right: small ? 5 : 10,
            }}
          />
        )}
      </div>
      <Div
        style={{
          display: !toggle || isOpen ? 'block' : 'none',
          spacing: 30,
          paddingTop: border ? 30 : 50,
          paddingBottom: border ? 30 : 50,
          background: 'white',
          ...(border
            ? {
                border: '2px solid black',
                borderColor: colors.black,
                borderTop: 0,
              }
            : {}),
        }}
      >
        {children}
      </Div>
    </div>
  );
};
