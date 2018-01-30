import * as React from 'react';
import {
  branch,
  compose,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose';
import { Hover, renderLayer } from 'mishmash';
import { Div, Input, Txt } from 'elmnt';
import { Spinner } from 'common-client';

import styles, { colors } from '../core/styles';

export default compose<any, any>(
  renderLayer(({ children }) => (
    <div style={{ height: '100%' }}>
      <div
        style={{
          minHeight: '100%',
          marginBottom: -80,
          padding: '50px 100px 60px',
          position: 'relative',
        }}
      >
        {children}
        <div style={{ height: 80 }} />
      </div>
      <div style={{ height: 80, padding: '0 100px', position: 'relative' }}>
        <div style={{ borderTop: '4px solid #e0e0e0', paddingTop: 13 }} />
      </div>
    </div>
  )),
  withState(
    'token',
    'setToken',
    typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('authToken'),
  ),
  branch(
    ({ token }: any) => !token,
    compose(
      renderLayer(({ children }) => (
        <Div style={{ padding: '100px 0', spacing: 40 }}>
          <Txt
            style={{
              ...styles.header,
              textAlign: 'center',
              color: colors.purple,
              fontSize: 40,
            }}
          >
            HostNation
          </Txt>
          {children}
        </Div>
      )),
      withState('processing', 'setProcessing', false),
      branch(
        ({ processing }: any) => processing,
        renderComponent(() => <Spinner style={{ color: colors.purple }} />),
      ),
      withState('password', 'setPassword', null),
      withHandlers({
        submit: ({ setToken, setProcessing, password }: any) => async () => {
          if (password) {
            setProcessing(true);
            const token = await (await fetch(`${process.env.DATA_URL!}/auth`, {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'text/plain' }),
              body: password,
            })).text();
            if (token) {
              sessionStorage.setItem('authToken', token);
              setToken(token);
            } else {
              setProcessing(false);
            }
          }
        },
      }),
      withHandlers({
        onKeyDown: ({ submit }: any) => event => {
          if (event.keyCode === 13) submit();
        },
      }),
      renderComponent(({ password, setPassword, submit, onKeyDown }: any) => (
        <Div
          onKeyDown={onKeyDown}
          style={{
            maxWidth: 500,
            margin: '0 auto',
            layout: 'bar',
            width: '100%',
          }}
        >
          <Input
            type="string"
            value={password}
            onChange={setPassword}
            password
            placeholder="Password"
            style={styles.field('purple', true)}
          />
          <Hover
            style={{
              ...styles.button('purple'),
              fontSize: 16,
              padding: 11,
              width: 100,
            }}
          >
            <Txt onClick={submit}>Log in</Txt>
          </Hover>
        </Div>
      )),
    ),
  ),
);
