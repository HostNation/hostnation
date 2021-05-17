import React from 'react';

import { Div, Hover, Icon, Txt } from './elements';
import { useHover, useToggle, useWidth } from './utils';

import Link from './Link';
import styles, { colors, icons } from './styles';

const textStyle = (active) => ({
  ...styles.text,
  color: active ? 'white' : '#f2f2f2',
  fontSize: 18,
  fontWeight: 'normal' as 'normal',
});

const MenuLink = ({ text, to, newTab, active, setClosed }: any) => {
  const [isHovered, hoverProps] = useHover();
  return (
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
  );
};

export default ({ active }: any) => {
  const [setWidthElem, small = true] = useWidth(800);
  const [isOpen, toggle, setIsOpen] = useToggle();
  const setClosed = () => setIsOpen(false);
  if (!small && isOpen) setTimeout(setClosed);
  return (
    <div
      style={{
        background: colors.black,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
      }}
      ref={setWidthElem}
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
              <Hover>
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
              </Hover>
            </Link>
            <a
              href="https://www.facebook.com/HostNationUK"
              target="_blank"
              style={{ display: 'block', padding: 5, margin: -5 }}
            >
              <Hover>
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
              </Hover>
            </a>
            <a
              href="https://twitter.com/hostnationuk"
              target="_blank"
              style={{ display: 'block' }}
            >
              <Hover>
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
                hover: { background: colors.blackLight },
              }}
            >
              {({ hoverProps, style }) => (
                <Div onClick={toggle} {...hoverProps} style={style}>
                  <div
                    style={{ width: 28, height: 3, background: '#f2f2f2' }}
                  />
                  <div
                    style={{ width: 28, height: 3, background: '#f2f2f2' }}
                  />
                  <div
                    style={{ width: 28, height: 3, background: '#f2f2f2' }}
                  />
                </Div>
              )}
            </Hover>
          ) : (
            <Div style={{ layout: 'bar', spacing: 20, float: 'right' }}>
              <MenuLink text="About Us" to="/about-us" active={active} />
              <MenuLink text="Befriend" to="/befriend" active={active} />
              <MenuLink text="Refer" to="/refer" active={active} />
              <MenuLink text="Refugee" to="/refugee" active={active} />
              <MenuLink
                text="Donate"
                to="https://www.totalgiving.co.uk/donate/hostnation"
                newTab
              />
              <MenuLink text="Guide" to="/guide.pdf" newTab />
              <MenuLink text="Links" to="/links.pdf" newTab />
            </Div>
          )}
        </Div>
        {small && (
          <div
            style={{
              overflow: 'hidden',
              transition: 'height 0.35s ease',
              height: isOpen ? 290 : 0,
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
                text="Refugee"
                to="/refugee"
                active={active}
                setClosed={setClosed}
              />
              <MenuLink
                text="Donate"
                to="https://www.totalgiving.co.uk/donate/hostnation"
                newTab
                setClosed={setClosed}
              />
              <MenuLink
                text="Guide"
                to="/guide.pdf"
                newTab
                setClosed={setClosed}
              />
              <MenuLink
                text="Links"
                to="/links.pdf"
                newTab
                setClosed={setClosed}
              />
            </Div>
          </div>
        )}
      </Div>
    </div>
  );
};
