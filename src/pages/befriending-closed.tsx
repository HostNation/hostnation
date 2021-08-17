import React from 'react';
import Helmet from 'react-helmet';

import logoWide from '../img/logo-wide.png';

import { Div, Txt } from '../core/elements';
import Layout from '../core/Layout';
import styles from '../core/styles';

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
        Due to unprecendented traffic on our site we have had to temporarily close our registration for London.
        <br /><br />

        We believe this to be a humanitarian response to the dreadful situation in Afghanistan but as we are a small organisation making matches between refugees and residents in London, we cannot process too many registrations at once.
        <br /><br />


        Thank you for your interest and please feel free to get in contact with us directly if you are keen to befriend in the future info@hostnation.org.uk.
      </Txt>
    </Div>
  </Layout>
);
