import { decodeId } from 'common';

import * as blocks from '../../core/blocks';

export default url => [
  {
    name: 'refugees',
    filter: decodeId(url),
    fields: ['id', 'firstname', 'lastname'],
  },
  ({ refugees: [{ id, firstname, lastname }] }) => ({
    name: `${firstname} ${lastname}`,
    title: `${firstname} ${lastname}`,
    sections: [
      {
        type: 'form',
        title: 'Internal info',
        objects: { refugee: { type: 'refugees', id } },
        blocks: [
          [
            {
              text: 'Notes',
              field: 'refugee.notes',
              rows: 3,
              optional: true,
            },
          ],
          [
            {
              text: 'Start date',
              field: 'refugee.startdate',
              optional: true,
            },
            {
              text: 'Match',
              field: 'refugee.match',
              optional: true,
            },
            {
              text: 'Matched by',
              field: 'refugee.matchedby',
              optional: true,
            },
          ],
        ],
      },
      {
        type: 'form',
        title: 'Referral',
        objects: { refugee: { type: 'refugees', id } },
        blocks: blocks.refer(true),
      },
    ],
  }),
];
