import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import { branch, enclose, Use, withHover } from 'mishmash';

import styles, { colors, icons } from '../core/styles';

export default branch(
  ({ toggle }) => toggle,
  enclose(({ setState }) => {
    setState({ isOpen: false });
    return (props, state) => ({
      ...props,
      ...state,
      toggleIsOpen: () => setState(({ isOpen }) => ({ isOpen: !isOpen })),
    });
  }),
)(({ title, color = 'black', toggle, isOpen, toggleIsOpen, children }: any) => (
  <div>
    <Use hoc={withHover}>
      {({ isHovered, hoverProps }) => (
        <div
          onClick={toggleIsOpen}
          {...hoverProps}
          style={{
            background: isHovered ? colors[`${color}Dark`] : colors[color],
            padding: '10px 45px',
            position: 'relative',
            cursor: toggle ? 'pointer' : 'default',
          }}
        >
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
      )}
    </Use>
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
));
