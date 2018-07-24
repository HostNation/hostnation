import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import r, { branch } from 'refluent';
import { restyle, watchHover } from 'common-client';

import styles, { colors, icons } from './styles';

export default r
  .yield(
    branch(
      ({ toggle }) => toggle,
      r
        .do((props$, push) => ({
          isOpen: false,
          toggleIsOpen: () => push({ isOpen: !props$(true).isOpen }),
        }))
        .do(watchHover),
    ),
  )
  .do('color', 'toggle', (color = 'black', toggle) => ({
    style: {
      background: colors[color],
      padding: '10px 45px',
      position: 'relative',
      cursor: toggle ? 'pointer' : 'default',
      hover: { background: colors[`${color}Dark`] },
    },
  }))
  .do(
    restyle('isHovered', (isHovered, style) =>
      style.mergeKeys({ hover: isHovered }),
    ),
  )
  .yield(
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
