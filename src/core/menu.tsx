import * as React from 'react';
import Link from 'gatsby-link';
import { Div, Icon, Txt } from 'elmnt';
import { Hover, withBounds, withHover } from 'mishmash';
import { compose, withHandlers, withProps, withState } from 'recompose';

import styles, { colors, icons } from '../core/styles';

const textStyle = {
  ...styles.text,
  color: '#f2f2f2',
  fontSize: 18,
  fontWeight: 'normal' as 'normal',
  hover: { color: 'white' },
};

const MenuLink = withHover(
  ({ text, to, newTab, active, toggle, isHovered, hoverProps }: any) => {
    const external = to.startsWith('http');
    const Comp = external ? 'a' : Link;
    return (
      <Comp
        {...(external ? { href: to } : { to })}
        style={{
          display: 'block',
          padding: 5,
          margin: -5,
          textAlign: 'center',
        }}
        target={newTab ? '_blank' : undefined}
        onClick={toggle}
        {...hoverProps}
      >
        <div
          style={{
            display: 'inline-block',
            paddingBottom: 3,
            borderBottomWidth: 2,
            borderBottomStyle: 'solid',
            borderBottomColor:
              isHovered || active === to ? 'white' : 'transparent',
            marginBottom: -5,
          }}
        >
          <Txt
            style={{
              ...textStyle,
              ...(isHovered || active === to ? { color: 'white' } : {}),
            }}
          >
            {text}
          </Txt>
        </div>
      </Comp>
    );
  },
);

export default compose<any, any>(
  withState('isOpen', 'setIsOpen', false),
  withHandlers({
    toggle: ({ isOpen, setIsOpen }) => () => setIsOpen(!isOpen),
  }),
  withBounds(
    'small',
    'setBoundsElem',
    ({ width } = { width: 0 }) => width <= 800,
  ),
  withProps(({ isOpen, toggle, small }: any) => {
    if (isOpen && !small) toggle();
  }),
)(({ active, isOpen, setIsOpen, toggle, small, setBoundsElem }) => (
  <div
    style={{
      background: colors.grey,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
    }}
    ref={setBoundsElem}
  >
    <Div>
      <Div
        style={{
          layout: 'bar',
          maxWidth: 850,
          padding: '14px 15px 15px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Div style={{ layout: 'bar', spacing: 13 }}>
          <Link to="/" style={{ display: 'block', padding: 5, margin: -5 }}>
            <Hover
              style={{
                ...textStyle,
                fontSize: 21,
                marginRight: 20,
              }}
            >
              <Txt>HostNation</Txt>
            </Hover>
          </Link>
          <a
            href="https://www.facebook.com/HostNationUK"
            target="_blank"
            style={{ display: 'block', padding: 5, margin: -5 }}
          >
            <Hover style={{ ...textStyle, fontSize: 19 }}>
              <Icon {...icons.fb} />
            </Hover>
          </a>
          <a
            href="https://twitter.com/hostnationuk"
            target="_blank"
            style={{ display: 'block' }}
          >
            <Hover
              style={{ ...textStyle, fontSize: 19, padding: 5, margin: -5 }}
            >
              <Icon {...icons.twitter} />
            </Hover>
          </a>
        </Div>
        {small ? (
          <Hover
            style={{
              spacing: 5,
              float: 'right',
              padding: '8px 5px',
              margin: '-8px -5px',
              cursor: 'pointer',
              hover: { background: colors.greyLight },
            }}
          >
            <Div onClick={toggle}>
              <div style={{ width: 28, height: 3, background: '#f2f2f2' }} />
              <div style={{ width: 28, height: 3, background: '#f2f2f2' }} />
              <div style={{ width: 28, height: 3, background: '#f2f2f2' }} />
            </Div>
          </Hover>
        ) : (
          <Div style={{ layout: 'bar', spacing: 30, float: 'right' }}>
            <MenuLink text="About Us" to="/about-us" active={active} />
            <MenuLink text="Befriend" to="/befriend" active={active} />
            <MenuLink text="Refer" to="/refer" active={active} />
            <MenuLink text="Befrienders’ guide" to="/guide.pdf" newTab />
            <MenuLink
              text="News"
              to="https://hostnationblog.wordpress.com"
              newTab
            />
          </Div>
        )}
      </Div>
      {small && (
        <div
          style={{
            overflow: 'hidden',
            transition: 'height 0.35s ease',
            height: isOpen ? 213 : 0,
          }}
        >
          <Div style={{ spacing: 20, padding: '20px 0' }}>
            <MenuLink
              text="About Us"
              to="/about-us"
              active={active}
              toggle={toggle}
            />
            <MenuLink
              text="Befriend"
              to="/befriend"
              active={active}
              toggle={toggle}
            />
            <MenuLink
              text="Refer"
              to="/refer"
              active={active}
              toggle={toggle}
            />
            <MenuLink
              text="Befrienders’ guide"
              to="/guide.pdf"
              newTab
              toggle={toggle}
            />
            <MenuLink
              text="News"
              to="https://hostnationblog.wordpress.com"
              newTab
              toggle={toggle}
            />
          </Div>
        </div>
      )}
    </Div>
  </div>
));
