import * as React from 'react';
import m from 'mishmash';
import { Div, Input, Txt } from 'elmnt';
import { Spinner } from 'common-client';

import Button from '../core/Button';
import styles, { colors } from '../core/styles';

export default m
  .yield(({ next }) => (
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
  ))
  .merge((_, push) => ({
    token:
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('authToken'),
    setToken: token => push({ token }),
  }))
  .doIf(
    ({ token }) => !token,
    m
      .yield(({ next }) => (
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
      ))
      .merge((_, push) => ({
        processing: false,
        setProcessing: processing => push({ processing }),
      }))
      .doIf(
        ({ processing }) => processing,
        m.yield(() => <Spinner style={{ color: colors.purple }} />),
      )
      .merge((observe, push) => {
        const submit = async () => {
          const { setToken, setProcessing, $password } = observe();
          if ($password) {
            setProcessing(true);
            const token = await (await fetch(`${process.env.DATA_URL!}/auth`, {
              method: 'POST',
              headers: new Headers({ 'Content-Type': 'text/plain' }),
              body: $password,
            })).text();
            if (token) {
              sessionStorage.setItem('authToken', token);
              setToken(token);
            } else {
              setProcessing(false);
            }
          }
        };
        return {
          password: null,
          setPassword: password => push({ password }),
          submit,
          onKeyDown: event => event.keyCode === 13 && submit(),
        };
      })
      .yield(({ password, setPassword, submit, onKeyDown }) => (
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
  );
