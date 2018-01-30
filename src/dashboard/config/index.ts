import { encodeId } from 'common';
import * as moment from 'moment';

import befriender from './befriender';
import refugee from './refugee';

const duration = (date?: Date) =>
  date &&
  `${moment(date).format('DD/MM/YY')}    (${moment(date).fromNow()})`.replace(
    / /g,
    '\xa0',
  );

export default {
  name: 'HostNation',
  title: 'HostNation',
  sections: [
    {
      type: 'links',
      title: 'Befrienders',
      links: [
        {
          link: '# Unmatched',
          name: 'Unmatched',
          title: 'Unmatched',
          sections: {
            type: 'tablelinks',
            columns: [
              'Name',
              'Registration date',
              'Region',
              'Sex',
              'Age',
              'Languages',
              'Map',
              'Screened',
            ],
            links: [
              {
                name: 'befrienders',
                filter: ['AND', ['match', '=', null], ['archived', '=', null]],
                sort: ['-createdat', 'firstname', 'lastname'],
                fields: [
                  'id',
                  'firstname',
                  'lastname',
                  'createdat',
                  'region',
                  'sex',
                  'dob',
                  'languages',
                  'mapaddress',
                  'notes',
                  'starrating',
                ],
              },
              ({ befrienders }) =>
                befrienders.map(
                  ({
                    id,
                    firstname,
                    lastname,
                    createdat,
                    region,
                    sex,
                    dob,
                    languages,
                    mapaddress,
                    notes,
                    starrating,
                  }) => [
                    [
                      `${firstname || '-'} ${lastname || '-'}`,
                      duration(createdat) || '-',
                      region || '-',
                      sex || '-',
                      dob
                        ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) *
                            10}s`
                        : '-',
                      languages || '-',
                      mapaddress ? 'Y' : 'N',
                      notes !== null || starrating !== null ? 'Y' : 'N',
                    ],
                    encodeId(id),
                  ],
                ),
            ],
            page: befriender,
          },
        },
        {
          link: '# Matched',
          name: 'Matched',
          title: 'Matched',
          sections: {
            type: 'tablelinks',
            columns: [
              'Name',
              'Start Date',
              'Region',
              'Sex',
              'Age',
              'Languages',
              'Map',
            ],
            links: [
              {
                name: 'befrienders',
                filter: ['match', '!=', null],
                sort: ['-startdate', 'firstname', 'lastname'],
                fields: [
                  'id',
                  'firstname',
                  'lastname',
                  'startdate',
                  'region',
                  'sex',
                  'dob',
                  'languages',
                  'mapaddress',
                ],
              },
              ({ befrienders }) =>
                befrienders.map(
                  ({
                    id,
                    firstname,
                    lastname,
                    startdate,
                    region,
                    sex,
                    dob,
                    languages,
                    mapaddress,
                  }) => [
                    [
                      `${firstname || '-'} ${lastname || '-'}`,
                      duration(startdate) || '-',
                      region || '-',
                      sex || '-',
                      dob
                        ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) *
                            10}s`
                        : '-',
                      languages || '-',
                      mapaddress ? 'Y' : 'N',
                    ],
                    encodeId(id),
                  ],
                ),
            ],
            page: befriender,
          },
        },
        {
          link: '# Archived',
          name: 'Archived',
          title: 'Archived',
          sections: {
            type: 'tablelinks',
            columns: [
              'Name',
              'Registration date',
              'Region',
              'Sex',
              'Age',
              'Languages',
              'Map',
            ],
            links: [
              {
                name: 'befrienders',
                filter: ['archived', '!=', null],
                sort: ['-createdat', 'firstname', 'lastname'],
                fields: [
                  'id',
                  'firstname',
                  'lastname',
                  'createdat',
                  'region',
                  'sex',
                  'dob',
                  'languages',
                  'mapaddress',
                ],
              },
              ({ befrienders }) =>
                befrienders.map(
                  ({
                    id,
                    firstname,
                    lastname,
                    createdat,
                    region,
                    sex,
                    dob,
                    languages,
                    mapaddress,
                  }) => [
                    [
                      `${firstname || '-'} ${lastname || '-'}`,
                      duration(createdat) || '-',
                      region || '-',
                      sex || '-',
                      dob
                        ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) *
                            10}s`
                        : '-',
                      languages || '-',
                      mapaddress ? 'Y' : 'N',
                    ],
                    encodeId(id),
                  ],
                ),
            ],
            page: befriender,
          },
        },
      ],
    },
    {
      type: 'links',
      title: 'Refugees',
      links: [
        {
          link: '# Referrals',
          name: 'Referrals',
          title: 'Referrals',
          sections: {
            type: 'tablelinks',
            columns: [
              'Name',
              'Referral date',
              'Region',
              'Age',
              'Match',
              'Matched by',
              'Referral Org',
              'Referrer',
              'Map',
            ],
            links: [
              {
                name: 'refugees',
                sort: ['-createdat', 'firstname', 'lastname'],
                fields: [
                  'id',
                  'firstname',
                  'lastname',
                  'createdat',
                  'region',
                  'dob',
                  'match',
                  'matchedby',
                  'contactorg',
                  'contactname',
                  'mapaddress',
                ],
              },
              ({ refugees }) =>
                refugees.map(
                  ({
                    id,
                    firstname,
                    lastname,
                    createdat,
                    region,
                    dob,
                    match,
                    matchedby,
                    contactorg,
                    contactname,
                    mapaddress,
                  }) => [
                    [
                      `${firstname || '-'} ${lastname || '-'}`,
                      duration(createdat) || '-',
                      region || '-',
                      dob
                        ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) *
                            10}s`
                        : '-',
                      match || '-',
                      matchedby || '-',
                      contactorg || '-',
                      contactname || '-',
                      mapaddress ? 'Y' : 'N',
                    ],
                    encodeId(id),
                  ],
                ),
            ],
            page: refugee,
          },
        },
      ],
    },
    {
      type: 'links',
      title: 'Tools',
      links: [
        {
          link: '# Map',
          name: 'Map',
          title: 'HostNation Map',
          sections: {
            type: 'map',
          },
        },
      ],
    },
  ],
};
