import * as React from 'react';
import { Div, Hover, Icon, Txt } from 'elmnt';
import r from 'refluent';
import { watchHover, withWidth } from 'common-client';

import { Link } from './router';
import styles, { colors, icons } from './styles';

const textStyle = active => ({
  ...styles.text,
  color: active ? 'white' : '#f2f2f2',
  fontSize: 18,
  fontWeight: 'normal' as 'normal',
});

const MenuLink = r
  .do(watchHover)
  .yield(({ text, to, newTab, active, setClosed, isHovered, hoverProps }) => (
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
  ));

export default r
  .yield(withWidth(800))
  .do('small', (small = true) => ({ small }))
  .do((props$, push) => ({
    isOpen: false,
    toggle: () => push({ isOpen: !props$(true).isOpen }),
    setClosed: () => push({ isOpen: false }),
  }))
  .do(
    ({ small, isOpen }) => !small && isOpen,
    'setClosed',
    (shouldClose, setClosed) => shouldClose && setTimeout(setClosed),
  )
  .yield(({ active, isOpen, toggle, setClosed, small, setWidthElem }) => (
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
            <Div style={{ layout: 'bar', spacing: 25, float: 'right' }}>
              <MenuLink text="About Us" to="/about-us" active={active} />
              <MenuLink text="Befriend" to="/befriend" active={active} />
              <MenuLink text="Refer" to="/refer" active={active} />
              <MenuLink
                text="Donate"
                to="https://www.totalgiving.co.uk/donate/hostnation"
                newTab
              />
              <MenuLink text="Guide" to="/guide.pdf" newTab />
              <MenuLink text="Links" to="/links.pdf" newTab />
              <MenuLink
                text="News"
                to="https://us19.campaign-archive.com/home/?u=cb14839efac03c56ff20ec9b9&id=08cc528166"
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
              <MenuLink
                text="News"
                to="https://us19.campaign-archive.com/home/?u=cb14839efac03c56ff20ec9b9&id=08cc528166"
                newTab
                setClosed={setClosed}
              />
            </Div>
          </div>
        )}
      </Div>
    </div>
  ));
