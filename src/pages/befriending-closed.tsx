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
          textAlign: 'center',
        }}
      >
        Due to unprecedented traffic on our site over the summer, we have had to close our registration for London.  
        <br /><br />
        If you are keen to befriend through HostNation, please submit the form below so we can add you to our waiting list and be in touch as and when we need more befrienders.          <br /><br />
        <Button
          to="https://forms.gle/517pgsohaaTm4v4RA"
          newTab
          color="yellow"
          style={{ margin: '0 auto', fontSize: 22, padding: 10 }}
        >
          JOIN WAITING LIST
        </Button>

        <br /><br />

        Meanwhile please consider a small, regular donation to support our work.
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
