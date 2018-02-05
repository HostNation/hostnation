import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import { createForm, Spinner } from 'common-client';

import Button from './Button';
import createBlock from './createBlock';
import styles, { colors, icons } from './styles';

const errorStyle = {
  ...styles.base,
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
            <Button
              onClick={submit}
              color={color}
              style={{ width: 200, margin: '0 auto' }}
            >
              {button || 'Submit'}
            </Button>
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
