import * as React from 'react';
import { branch, compose, enclose, render } from 'mishmash';
import { Div, Input, Txt } from 'elmnt';
import { Spinner } from 'common-client';

import Button from '../core/Button';
import styles, { colors } from '../core/styles';

export default compose(
  render(({ next }) => (
    <div style={{ height: '100%' }}>
      <div
        style={{
          minHeight: '100%',
          marginBottom: -80,
          padding: '50px 100px 60px',
          position: 'relative',
        }}
      >
        {next()}
        <div style={{ height: 80 }} />
      </div>
      <div style={{ height: 80, padding: '0 100px', position: 'relative' }}>
        <div style={{ borderTop: '4px solid #e0e0e0', paddingTop: 13 }} />
      </div>
    </div>
  )),
  enclose(
    ({ setState }) => (props, state) => ({
      ...props,
      ...state,
      setToken: token => setState({ token }),
    }),
    {
      token:
        typeof sessionStorage !== 'undefined' &&
        sessionStorage.getItem('authToken'),
    },
  ),
  branch(
    ({ token }) => !token,
    compose(
      render(({ next }) => (
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
          {next()}
        </Div>
      )),
      enclose(
        ({ setState }) => (props, state) => ({
          ...props,
          ...state,
          setProcessing: processing => setState({ processing }),
        }),
        { processing: false },
      ),
      branch(
        ({ processing }) => processing,
        render(() => <Spinner style={{ color: colors.purple }} />),
      ),
      enclose(
        ({ setState }) => {
          const setPassword = password => setState({ password });
          return ({ setToken, setProcessing, ...props }, { password }) => {
            const submit = async () => {
              if (password) {
                setProcessing(true);
                const token = await (await fetch(
                  `${process.env.DATA_URL!}/auth`,
                  {
                    method: 'POST',
                    headers: new Headers({ 'Content-Type': 'text/plain' }),
                    body: password,
                  },
                )).text();
                if (token) {
                  sessionStorage.setItem('authToken', token);
                  setToken(token);
                } else {
                  setProcessing(false);
                }
              }
            };
            return {
              ...props,
              password,
              setPassword,
              submit,
              onKeyDown: event => {
                if (event.keyCode === 13) submit();
              },
            };
          };
        },
        { password: null },
      ),
      render(({ password, setPassword, submit, onKeyDown }) => (
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
          <Button
            onClick={submit}
            color="purple"
            style={{
              fontSize: 16,
              padding: 11,
              width: 100,
            }}
          >
            Log in
          </Button>
        </Div>
      )),
    ),
  ),
);
