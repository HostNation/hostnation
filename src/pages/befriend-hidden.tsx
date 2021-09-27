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
      <Helmet title="Befriending Sign Up | HostNation" />

      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Txt
        style={{
          ...styles.text,
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Sign up to HostNation London using the link below:         <br /><br />
        <Button
          to="https://airtable.com/shrEs9XBHYuJxLEaP?prefill_Type=Befriender"
          newTab
          color="yellow"
          style={{ margin: '0 auto', fontSize: 22, padding: 10 }}
        >
          LONDON BEFRIENDER REGISTRATION FORM
        </Button>


      </Txt>


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
