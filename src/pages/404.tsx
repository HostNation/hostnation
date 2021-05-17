import React from 'react';
import Helmet from 'react-helmet';

import logoWide from '../img/logo-wide.png';

import { Div, Txt } from '../core/elements';
import Layout from '../core/Layout';
import styles from '../core/styles';

export default () => (
  <Layout>
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <Helmet title="Page Not Found | HostNation" />

      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Txt
        style={{
          ...styles.text,
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Sorry, we couldn't find that page!
      </Txt>
    </Div>
  </Layout>
);
