import React from 'react';
import Helmet from 'react-helmet';

import logoWide from '../img/logo-wide.png';

import { Div, Txt, Hover, Icon } from '../core/elements';
import Layout from '../core/Layout';
import Button from '../core/Button';
import contactIcon from '../img/icons/contact.png';
import styles, { colors, icons } from '../core/styles';



export default () => (
  <Layout>
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <Helmet title="Befriending Closed | HostNation" />

      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Txt
        style={{
          ...styles.text,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >
        Due to unprecedented traffic on our site we have had to temporarily close our registration for London.
        <br /><br />

        We believe this to be a humanitarian response to the dreadful situation in Afghanistan but as we are a small organisation making matches between refugees and residents in London, we cannot process too many registrations at once.
        <br /><br />

        If you’d like to help please consider a small, regular donation to support our work.
      </Txt>
          <Button
          to="https://www.totalgiving.co.uk/donate/hostnation"
          newTab
          color="purple"
          style={{ margin: '0 auto', fontSize: 22, padding: 10 }}
          >
          DONATE HERE
        </Button>
    </Div>
    <Div style={{ spacing: 35 }}>
        <Div style={{ spacing: 15 }}>
          <img src={contactIcon} style={{ width: 100, margin: '0 auto' }} />
          <Hover
            style={{
              ...styles.subtitle,
              color: colors.purple,
              hover: { color: colors.purpleDark },
            }}
          >
            {({ hoverProps, style }) => (
              <a href="mailto:info@hostnation.org.uk">
                <Txt {...hoverProps} style={style}>
                  info@hostnation.org.uk
                </Txt>
              </a>
            )}
          </Hover>
        </Div>
        <Div style={{ layout: 'bar', spacing: 40, margin: '0 auto' }}>
          {[
            {
              link: 'https://www.facebook.com/HostNationUK',
              icon: icons.fbThin,
            },
            {
              link: 'https://twitter.com/hostnationuk',
              icon: icons.twitter,
            },
          ].map(({ link, icon }, i) => (
            <Hover
              style={{
                display: 'block',
                padding: 12,
                margin: -5,
                background: colors.purple,
                borderRadius: 100,
                hover: { background: colors.purpleDark },
              }}
              key={i}
            >
              {({ hoverProps, style }) => (
                <a href={link} target="_blank" {...hoverProps} style={style}>
                  <Icon {...icon} style={{ color: 'white', fontSize: 24 }} />
                </a>
              )}
            </Hover>
          ))}
        </Div>
        <Div></Div>
      </Div>
  </Layout>
);
