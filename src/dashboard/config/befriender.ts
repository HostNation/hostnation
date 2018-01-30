import { decodeId } from 'common';

import * as blocks from '../../core/blocks';

export default url => [
  {
    name: 'befrienders',
    filter: decodeId(url),
    fields: ['id', 'firstname', 'lastname'],
  },
  ({ befrienders: [{ id, firstname, lastname }] }) => ({
    name: `${firstname} ${lastname}`,
    title: `${firstname} ${lastname}`,
    sections: [
      {
        type: 'form',
        title: 'Internal info',
        objects: { befriender: { type: 'befrienders', id } },
        blocks: [
          [
            {
              text: 'Notes',
              field: 'befriender.notes',
              rows: 3,
              optional: true,
            },
            {
              text: 'Star rating',
              field: 'befriender.starrating',
              optional: true,
            },
            {
              text: 'Ready',
              field: 'befriender.ready',
              options: { on: true },
              optional: true,
            },
            {
              text: 'Archived',
              field: 'befriender.archived',
              optional: true,
            },
          ],
          [
            {
              text: 'Start date',
              field: 'befriender.startdate',
              optional: true,
            },
            {
              text: 'Match',
              field: 'befriender.match',
              optional: true,
            },
            {
              text: 'Matched by',
              field: 'befriender.matchedby',
              optional: true,
            },
          ],
          [
            {
              text: '1 month review',
              field: 'befriender.review1month',
              rows: 3,
              optional: true,
            },
            {
              text: '3 months review',
              field: 'befriender.review3months',
              rows: 3,
              optional: true,
            },
          ],
        ],
      },
      {
        type: 'form',
        title: 'Registration',
        objects: { befriender: { type: 'befrienders', id } },
        blocks: blocks.befriend(true),
      },
    ],
  }),
];
