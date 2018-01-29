import * as React from 'react';
import {
  branch,
  compose,
  renderComponent,
  withHandlers,
  withState,
} from 'recompose';
import { Txt } from 'elmnt';

import * as blocks from '../../blocks';
import Forms from '../../Forms';
import styles, { colors } from '../../styles';

export default compose<any, any>(
  withState('complete', 'setComplete', false),
  branch(
    ({ complete }: any) => complete,
    renderComponent(() => (
      <Txt
        style={{
          ...styles.text,
          fontSize: 30,
          lineHeight: '40px',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '50px 0',
          color: colors.purple,
        }}
      >
        Thanks for completing your referral, we’ll be in touch soon!
      </Txt>
    )),
  ),
  withHandlers({
    onSubmit: ({ setComplete }: any) => () => setComplete(true),
  }),
)(({ onSubmit }) => (
  <Forms.Purple
    objects={{
      refugee: {
        type: 'refugees',
        initial: { mapaddress: null },
      },
    }}
    blocks={blocks.refer()}
    onSubmit={onSubmit}
  />
));
