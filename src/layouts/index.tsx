if (!Symbol.asyncIterator) {
  (Symbol as any).asyncIterator = Symbol('asyncIterator');
}

import * as React from 'react';
import { Txt } from 'elmnt';
import { withSize } from 'mishmash';
import rgo, { resolvers } from 'rgo';
import { root } from 'common';
import Helmet from 'react-helmet';

import '../core/base.css';

import Menu from '../core/menu';
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

const Sticky = withSize('bounds', 'setBoundsElem')(
  ({ content, footer, bounds = { height: 0 }, setBoundsElem }) => (
    <>
      <div style={{ minHeight: '100%', marginBottom: -bounds.height }}>
        {content}
        <div style={{ height: bounds.height }} />
      </div>
      <div ref={setBoundsElem}>{footer}</div>
    </>
  ),
) as any;

export default ({ location, children }) =>
  location.pathname.startsWith('/dashboard') ? (
    <>
      <Helmet>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        />
      </Helmet>
      {children()}
    </>
  ) : (
    <>
      <Helmet>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        />
      </Helmet>
      <Menu active={location.pathname} />
      <Sticky
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
          <div style={{ background: colors.grey, padding: 15 }}>
            <Txt
              style={{
                ...styles.text,
                color: '#f2f2f2',
                fontSize: 14,
                textAlign: 'center',
                fontWeight: 'normal' as 'normal',
              }}
            >
              HostNation is a restricted fund under the auspices of Prism the
              Gift Fund, charity no. 1099682
            </Txt>
          </div>
        }
      />
    </>
  );
