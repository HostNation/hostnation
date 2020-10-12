import * as React from 'react';
import { Txt } from 'elmnt';
import rgo, { resolvers } from 'rgo';
import { cssBase, StickyFooter, root } from '../common-client';
import Helmet from 'react-helmet';

import Menu from '../core/Menu';
import styles, { colors } from '../core/styles';

root.rgo = rgo(
  resolvers.fetch(process.env.DATA_URL!, () => {
    const token =
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('authToken');
    return token ? { Authorization: `Bearer ${token}` } : null;
  }),
  process.env.NODE_ENV !== 'production',
);

export default ({ location, children }) => (
  <>
    <Helmet title="HostNation">
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      />
      <style>
        {`
        ${cssBase}
        html {
          background: #f6f6f6;
        }
        #___gatsby {
          height: 100%;
        }
        @keyframes upload-bar {
          from {
            background-position: 40px 0;
          }
          to {
            background-position: 0 0;
          }
        }
        `}
      </style>
    </Helmet>
    {location.pathname.startsWith('/dashboard') ? (
      children()
    ) : (
      <>
        <Menu active={location.pathname} />
        <StickyFooter
          content={
            <div
              style={{
                margin: '0 auto',
                padding: '50px 15px 0',
                maxWidth: 850,
              }}
            >
              {children()}
            </div>
          }
          footer={
            <div style={{ background: colors.black, padding: 15 }}>
              <Txt
                style={{
                  ...styles.text,
                  color: '#f2f2f2',
                  fontSize: 14,
                  textAlign: 'center',
                  fontWeight: 'normal' as 'normal',
                }}
              >
                HostNation is a charity. Registered charity number 1180004
              </Txt>
            </div>
          }
        />
      </>
    )}
  </>
);
