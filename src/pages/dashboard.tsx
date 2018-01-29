import * as React from 'react';
import Helmet from 'react-helmet';

import DashboardApp from '../apps/apps/dashboard';

export default () => (
  <>
    <Helmet title="HostNation">
      <title>Dashboard | HostNation</title>
      <style>{`
      html {
        background: white !important;
      }
      `}</style>
    </Helmet>
    <DashboardApp />
  </>
);
