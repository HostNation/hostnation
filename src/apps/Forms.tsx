import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import { Hover } from 'mishmash';
import { createForm, Spinner } from 'common-client';

import createBlock from './createBlock';
import styles, { colors, icons } from './styles';

const errorStyle = {
  ...styles.text,
  color: colors.red,
  fontWeight: 'bold' as 'bold',
  fontStyle: 'italic' as 'italic',
};

const buildForm = (color: 'yellow' | 'purple') =>
  createForm<{ button?: string }>(
    ({ blocks, attempted, submit, invalid, button }) => (
      <Div style={{ spacing: 50 }}>
        {blocks ? (
          <Div style={{ spacing: 50 }}>
            {blocks.map((blockSet, i) => (
              <Div style={{ spacing: 25 }} key={i}>
                {blockSet}
              </Div>
            ))}
          </Div>
        ) : (
          <Spinner style={{ color: colors[color] }} />
        )}
        {blocks && (
          <Div style={{ spacing: 10 }}>
            <Hover
              style={{ ...styles.button(color), width: 200, margin: '0 auto' }}
            >
              <Txt onClick={submit}>{button || 'Submit'}</Txt>
            </Hover>
            {invalid &&
              attempted && (
                <Div style={{ layout: 'bar', spacing: 12, margin: '0 auto' }}>
                  <Icon {...icons.error} style={errorStyle} />
                  <Txt style={errorStyle}>Please correct any errors.</Txt>
                </Div>
              )}
          </Div>
        )}
      </Div>
    ),
    createBlock(color),
  );

export default {
  Yellow: buildForm('yellow'),
  Purple: buildForm('purple'),
};
