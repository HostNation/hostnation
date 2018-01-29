import * as React from 'react';
import { branch, compose, renderComponent, withStateHandlers } from 'recompose';
import { Div, Txt } from 'elmnt';
import { Hover } from 'mishmash';
import { Redirect } from 'react-router-dom';
import { createForm, Spinner } from 'common-client';

import styles, { colors } from '../../styles';

import createBlock from '../../createBlock';

const FormBar = ({ valid, button, submit }: any) => (
  <Div
    style={{
      background: '#bbb',
      minHeight: 42,
    }}
  >
    {valid && (
      <Hover
        style={{
          ...styles.button('purple'),
          fontSize: 22,
          padding: '10px 20px',
          display: 'inline-block',
          float: 'right',
          margin: '0 20px 0 0',
        }}
      >
        <Txt onClick={submit}>{button || 'Save'}</Txt>
      </Hover>
    )}
  </Div>
);

export default branch(
  ({ redirect }: any) => redirect,
  compose(
    withStateHandlers(
      { values: null },
      { onSubmit: () => values => ({ values }) },
    ),
    branch(
      ({ values }: any) => values,
      renderComponent(({ redirect, values }: any) => (
        <Redirect to={redirect(values)} />
      )),
    ),
  ),
)(
  createForm<{ button?: string }>(
    ({ HeightWrap, blocks, invalid, submit, button }) => (
      <div>
        <FormBar valid={blocks && !invalid} button={button} submit={submit} />
        <div
          style={{
            background: '#eee',
            borderLeft: '5px solid #bbb',
            padding: '40px 20px',
          }}
        >
          <HeightWrap style={{ height: 60 }}>
            {blocks ? (
              <Div style={{ spacing: 20 }}>
                {blocks.reduce(
                  (res, blockSet, i) => [
                    ...res,
                    ...(i !== 0
                      ? [
                          <div
                            style={{
                              height: 4,
                              background: '#bbb',
                              margin: '20px 0',
                            }}
                            key={i}
                          />,
                        ]
                      : []),
                    ...blockSet,
                  ],
                  [],
                )}
              </Div>
            ) : (
              <Spinner
                style={{
                  color: colors.purple,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            )}
          </HeightWrap>
        </div>
        <FormBar valid={blocks && !invalid} button={button} submit={submit} />
      </div>
    ),
    createBlock('purple', true),
  ),
);
