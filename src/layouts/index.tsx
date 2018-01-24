import * as React from 'react';
import Helmet from 'react-helmet';
import { Txt } from 'elmnt';
import { withSize } from 'mishmash';

import '../core/base.css';

import Menu from '../core/menu';
import styles, { colors } from '../core/styles';

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

export default ({ location, children }) => (
  <>
    <Helmet title="HostNation">
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
        rel="stylesheet"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.min.js" />
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ8P7-0kTGz2_tkcHjOo0IUiMB_z9Bbp4" />
    </Helmet>
    {location.pathname === '/dashboard' ? (
      children()
    ) : (
      <>
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
    )}
  </>
);
