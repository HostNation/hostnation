import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import { Hover } from 'mishmash';
import { branch, compose, withHandlers, withState } from 'recompose';

import styles, { colors, icons } from '../core/styles';

export default branch(
  ({ toggle }: any) => toggle,
  compose(
    withState('isOpen', 'setIsOpen', false),
    withHandlers({
      toggleIsOpen: ({ isOpen, setIsOpen }) => () => setIsOpen(!isOpen),
    }),
  ),
)(({ title, color = 'grey', toggle, isOpen, toggleIsOpen, children }: any) => (
  <div>
    <Hover
      style={{
        background: colors[color],
        padding: '10px 45px',
        position: 'relative',
        cursor: toggle ? 'pointer' : 'default',
        hover: { background: colors[`${color}Dark`] },
      }}
    >
      <div onClick={toggleIsOpen}>
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
    </Hover>
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
