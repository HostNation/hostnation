import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import r, { branch } from 'refluent';
import { restyle, watchHover, withWidth } from '../common-client';

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
      border,
      isOpen,
      toggleIsOpen,
      hoverProps = {},
      style,
      children,
    }) => (
      <div>
        {withWidth(819)({
          next: ({ small = false, setWidthElem }) => (
            <div
              onClick={toggleIsOpen}
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
          ),
        })}
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
    ),
  );
