import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import { compose, enclose, withHover, withSize, Wrap } from 'mishmash';
import { Link } from 'common-client';

import styles, { colors, icons } from '../core/styles';

const textStyle = active => ({
  ...styles.text,
  color: active ? 'white' : '#f2f2f2',
  fontSize: 18,
  fontWeight: 'normal' as 'normal',
});

const MenuLink = withHover(
  ({ text, to, newTab, active, setClosed, isHovered, hoverProps }: any) => (
    <Link
      to={to}
      newTab={newTab}
      onClick={setClosed}
      {...hoverProps}
      style={{
        display: 'block',
        padding: 5,
        margin: -5,
        textAlign: 'center',
      }}
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
        <Txt style={textStyle(isHovered || active === to)}>{text}</Txt>
      </div>
    </Link>
  ),
);

export default compose(
  withSize('small', 'setBoundsElem', ({ width = 0 }) => width <= 800),
  enclose(
    ({ setState }) => {
      const toggle = () => setState(({ isOpen }) => ({ isOpen: !isOpen }));
      const setClosed = () => setState({ isOpen: false });
      return (props, state) => {
        if (state.isOpen && !props.small) setTimeout(setClosed);
        return { ...props, ...state, toggle, setClosed };
      };
    },
    { isOpen: false },
  ),
)(({ active, isOpen, toggle, setClosed, small, setBoundsElem }) => (
  <div
    style={{
      background: colors.black,
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
          <Link
            to="/"
            onClick={setClosed}
            style={{ display: 'block', padding: 5, margin: -5 }}
          >
            <Wrap hoc={withHover}>
              {({ isHovered, hoverProps }) => (
                <Txt
                  {...hoverProps}
                  style={{
                    ...textStyle(isHovered),
                    fontSize: 21,
                    marginRight: 20,
                  }}
                >
                  HostNation
                </Txt>
              )}
            </Wrap>
          </Link>
          <a
            href="https://www.facebook.com/HostNationUK"
            target="_blank"
            style={{ display: 'block', padding: 5, margin: -5 }}
          >
            <Wrap hoc={withHover}>
              {({ isHovered, hoverProps }) => (
                <Icon
                  {...icons.fb}
                  {...hoverProps}
                  style={{
                    ...textStyle(isHovered),
                    fontSize: 19,
                    padding: 5,
                    margin: -5,
                  }}
                />
              )}
            </Wrap>
          </a>
          <a
            href="https://twitter.com/hostnationuk"
            target="_blank"
            style={{ display: 'block' }}
          >
            <Wrap hoc={withHover}>
              {({ isHovered, hoverProps }) => (
                <Icon
                  {...icons.twitter}
                  {...hoverProps}
                  style={{
                    ...textStyle(isHovered),
                    fontSize: 19,
                    padding: 5,
                    margin: -5,
                  }}
                />
              )}
            </Wrap>
          </a>
        </Div>
        {small ? (
          <Wrap hoc={withHover}>
            {({ isHovered, hoverProps }) => (
              <Div
                onClick={toggle}
                {...hoverProps}
                style={{
                  spacing: 5,
                  float: 'right',
                  padding: '8px 5px',
                  margin: '-8px -5px',
                  cursor: 'pointer',
                  ...(isHovered ? { background: colors.blackLight } : {}),
                }}
              >
                <div style={{ width: 28, height: 3, background: '#f2f2f2' }} />
                <div style={{ width: 28, height: 3, background: '#f2f2f2' }} />
                <div style={{ width: 28, height: 3, background: '#f2f2f2' }} />
              </Div>
            )}
          </Wrap>
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
              setClosed={setClosed}
            />
            <MenuLink
              text="Befriend"
              to="/befriend"
              active={active}
              setClosed={setClosed}
            />
            <MenuLink
              text="Refer"
              to="/refer"
              active={active}
              setClosed={setClosed}
            />
            <MenuLink
              text="Befrienders’ guide"
              to="/guide.pdf"
              newTab
              setClosed={setClosed}
            />
            <MenuLink
              text="News"
              to="https://hostnationblog.wordpress.com"
              newTab
              setClosed={setClosed}
            />
          </Div>
        </div>
      )}
    </Div>
  </div>
));
