import * as React from 'react';
import r, { branch } from 'refluent';
import { Div, Hover, Input, Modal, Txt } from 'elmnt';
import { Spinner } from 'common-client';

import Button from './Button';
import styles, { colors } from './styles';

export default r
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
  .do((_, push) => ({
    token:
      typeof sessionStorage !== 'undefined' &&
      sessionStorage.getItem('authToken'),
    setToken: token => push({ token }),
    logout: () => {
      sessionStorage.removeItem('authToken');
      window.rgo.flush();
      push({ token: null });
    },
  }))
  .yield(
    branch(
      ({ token }) => !token,
      r
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
        .do((_, push) => ({
          processing: false,
          setProcessing: processing => push({ processing }),
        }))
        .yield(
          ({ processing, next }) =>
            processing ? <Spinner style={{ color: colors.purple }} /> : next(),
        )
        .do((props$, push) => {
          const submit = async () => {
            const { setToken, setProcessing } = props$();
            const { password } = props$(true);
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
    ),
  )
  .yield(
    r
      .do((props$, push, commit) => {
        if (commit) {
          let countdownTimer;
          const openPrompt = () => {
            push({ isOpen: true, countdown: 60 });
            countdownTimer = setInterval(() => {
              const current = props$(true).countdown;
              if (current === 1) props$().logout();
              else push({ countdown: props$(true).countdown - 1 });
            }, 1000);
          };
          push({
            isOpen: false,
            dismiss: () => {
              clearInterval(countdownTimer);
              push({ isOpen: false });
            },
          });

          let inactivityTimer;
          const resetInactivity = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(openPrompt, 600000);
          };
          resetInactivity();
          ['mousemove', 'mousedown', 'click', 'scroll', 'keypress'].forEach(e =>
            window.addEventListener(e, resetInactivity),
          );
          return () => {
            clearInterval(countdownTimer);
            clearTimeout(inactivityTimer);
            ['mousemove', 'mousedown', 'click', 'scroll', 'keypress'].forEach(
              e => window.removeEventListener(e, resetInactivity),
            );
          };
        }
      })
      .yield(({ isOpen, countdown, dismiss, next }) => (
        <Modal
          isOpen={isOpen}
          style={{ fontSize: 0, maxWidth: 420, background: 'white' }}
          next={next}
        >
          <Div style={{ padding: 40, spacing: 35 }}>
            <Txt
              style={{ ...styles.title, fontSize: 28, color: colors.purple }}
            >
              Automatic logout due to inactivity
            </Txt>
            <Txt style={styles.text}>
              You will be logged out in: {countdown} seconds
            </Txt>
            <Hover style={{ ...styles.button('purple'), fontSize: 28 }}>
              {({ hoverProps, style }) => (
                <Txt onClick={dismiss} {...hoverProps} style={style}>
                  Close
                </Txt>
              )}
            </Hover>
          </Div>
        </Modal>
      )),
  );
