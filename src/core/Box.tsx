import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import m, { watchHover } from 'mishmash';
import st from 'style-transform';

import styles, { colors, icons } from '../core/styles';

export default m
  .doIf(
    ({ toggle }) => toggle,
    m
      .merge((_, push) => ({
        isOpen: false,
        toggleIsOpen: () => push(({ isOpen }) => ({ isOpen: !isOpen })),
      }))
      .do(watchHover),
  )
  .merge(
    'color',
    'toggle',
    'isHovered',
    (color = 'black', toggle, isHovered) => ({
      style: st({
        background: colors[color],
        padding: '10px 45px',
        position: 'relative',
        cursor: toggle ? 'pointer' : 'default',
        hover: { background: colors[`${color}Dark`] },
      }).mergeKeys({ hover: isHovered }),
    }),
  )(
  ({
    title,
    toggle,
    isOpen,
    toggleIsOpen,
    hoverProps = {},
    style,
    children,
  }) => (
    <div>
      <div onClick={toggleIsOpen} {...hoverProps} style={style}>
        <Txt style={{ ...styles.title, color: '#f2f2f2', fontSize: 30 }}>
          {title}
        </Txt>
        {toggle && (
          <Icon
            {...(isOpen ? icons.up : icons.down)}
            style={{
              color: '#f2f2f2',
              fontSize: 30,
              position: 'absolute',
              top: 10,
              right: 10,
            }}
          />
        )}
      </div>
      <Div
        style={{
          display: !toggle || isOpen ? 'block' : 'none',
          spacing: 30,
          padding: 40,
          background: 'white',
        }}
      >
        {children}
      </Div>
    </div>
  ),
);
