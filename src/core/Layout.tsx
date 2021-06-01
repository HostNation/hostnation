import React from 'react';
import Helmet from 'react-helmet';

import { Txt } from './elements';
import { cssBase, StickyFooter } from './utils';

import Menu from '../core/Menu';
import styles, { colors } from '../core/styles';

export default ({ location, children }: any) => (
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
        #___gatsby, #gatsby-focus-wrapper {
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
        .markdown {
          font-family: Lato, sans-serif;
          font-size: 20px;
          color: #2f3644;
          line-height: 1.4;
          font-weight: 300;
          text-align: left;
        }
        `}
      </style>
    </Helmet>
    <Menu active={location} />
    <StickyFooter
      content={
        <div
          style={{
            margin: '0 auto',
            padding: '50px 15px 0',
            maxWidth: 850,
          }}
        >
          {children}
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
);
