import * as React from 'react';
import { Div } from 'elmnt';
import m from 'mishmash';
import { Redirect } from 'react-router-dom';
import { Spinner } from 'common-client';

import Button from '../core/Button';
import createForm from '../core/createForm';
import { colors } from '../core/styles';

const FormBar = ({ valid, button, submit }: any) => (
  <Div
    style={{
      background: '#bbb',
      minHeight: 42,
    }}
  >
    {valid && (
      <Button
        onClick={submit}
        color="purple"
        style={{
          fontSize: 22,
          padding: '10px 20px',
          display: 'inline-block',
          float: 'right',
          margin: '0 20px 0 0',
        }}
      >
        {button || 'Save'}
      </Button>
    )}
  </Div>
);

export default m.doIf(
  'redirect',
  m
    .merge((_, push) => ({
      values: null,
      onSubmit: values => push({ values }),
    }))
    .doIf(
      'values',
      m.yield(({ redirect, values }) => <Redirect to={redirect(values)} />),
    ),
)(
  createForm(
    ({ setHeightElem, height, blocks, invalid, submit, button }) => (
      <div>
        <FormBar valid={blocks && !invalid} button={button} submit={submit} />
        <div
          style={{
            background: '#eee',
            borderLeft: '5px solid #bbb',
            padding: '40px 20px',
          }}
        >
          <div
            ref={setHeightElem}
            style={{ position: 'relative', height, minHeight: 60 }}
          >
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
          </div>
        </div>
        <FormBar valid={blocks && !invalid} button={button} submit={submit} />
      </div>
    ),
    'purple',
    true,
  ),
);
