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
        .markdown {
          font-family: Lato, sans-serif;
          font-size: 18px;
          color: #2f3644;
          line-height: 1.4;
          font-weight: 300;
          text-align: left;
        }
        .markdown p {
          padding-bottom: 10px;
          padding-top: 10px;
        }
        .markdown h2 {
          font-weight: bold;
          font-size: 26px;
          padding: 10px 0 10px 0;
        }
        .markdown strong {
          font-weight: bold;
        }
        .markdown em {
          font-style: italic;
          padding-left: 20px;
          padding-right: 20px;
          display: block;
          border-left: 2px solid rgb(150,150,150);
        }
        .markdown img {
          padding: 10px 0 10px 0;
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
