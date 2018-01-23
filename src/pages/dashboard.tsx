import * as React from 'react';
import Helmet from 'react-helmet';

import App from '../core/app';

export default () => (
  <>
    <Helmet title="HostNation">
      <style>{`
      html {
        background: white;
      }
      `}</style>
    </Helmet>
    <App app="dashboard" color="purple" full />
  </>
);
