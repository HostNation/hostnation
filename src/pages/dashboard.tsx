import * as React from 'react';
import Helmet from 'react-helmet';
import r from 'refluent';
import { Div, Mark, Txt } from 'elmnt';
import { encodeId } from 'common';
import * as moment from 'moment';
import { watchHover } from 'common-client';

import befriendBlocks from '../blocks/befriend';
import referBlocks from '../blocks/refer';

import auth from '../core/auth';
import Map from '../core/Map';
import {
  Breadcrumbs,
  getLocation,
  Link,
  Route,
  withBreadcrumbs,
  withLocation,
} from '../core/router';
import { FormsRoute, LinksRoute } from '../core/Routes';
import styles, { colors } from '../core/styles';

const duration = (date?: Date) =>
  date &&
  `${moment(date).format('DD/MM/YY')}    (${moment(date).fromNow()})`.replace(
    / /g,
    '\xa0',
  );

const MarkLink = r
  .do(watchHover)
  .yield(({ to, text, isHovered, hoverProps }) => (
    <Link to={to} route>
      <div
        {...hoverProps}
        style={{
          padding: 15,
          background: isHovered ? colors.purpleDark : colors.purple,
        }}
      >
        <Mark
          style={{
            ...styles.markdown,
            fontSize: 16,
            color: 'white',
            heading: { fontSize: 30 },
          }}
        >
          {text}
        </Mark>
      </div>
    </Link>
  ));

const BefriendersLinksRoute = ({
  path,
  title,
  dateLabel,
  dateField,
  screened = false,
  filter,
}) => (
  <LinksRoute
    path={path}
    title={title}
    columns={[
      'Name',
      dateLabel,
      'Region',
      'Sex',
      'Age',
      'Languages',
      'Map',
      ...(screened ? ['Screened'] : []),
      ...(title === 'Matched' ? ['Match'] : []),
      ...(title === 'Unmatched' ? ['Repeat'] : []),
    ]}
    rows={[
      {
        name: 'befrienders',
        filter: [
          'AND',
          filter,
          ['OR', ['firstname', '!=', null], ['lastname', '!=', null]],
        ],
        sort: [`-${dateField}`, 'firstname', 'lastname'],
        fields: [
          'id',
          'firstname',
          'lastname',
          dateField,
          'region',
          'sex',
          'dob',
          'languages',
          'mapaddress',
          ...(screened ? ['notes', 'starrating'] : []),
          ...(title === 'Matched' ? ['match'] : []),
          ...(title === 'Unmatched' ? ['review1month', 'review3months'] : []),
        ],
      },
      ({ befrienders }) =>
        befrienders.map(
          ({
            id,
            firstname,
            lastname,
            region,
            sex,
            dob,
            languages,
            mapaddress,
            notes,
            starrating,
            ...data
          }) => [
            encodeId(id),
            `${firstname || '-'} ${lastname || '-'}`,
            duration(data[dateField]) || '-',
            region || '-',
            sex || '-',
            dob
              ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) * 10}s`
              : '-',
            languages || '-',
            mapaddress ? 'Y' : 'N',
            ...(screened
              ? [notes !== null || starrating !== null ? 'Y' : 'N']
              : []),
            ...(title === 'Matched' ? [data.match] : []),
            ...(title === 'Unmatched'
              ? [
                  data.review1month !== null || data.review3months !== null
                    ? 'Y'
                    : 'N',
                ]
              : []),
          ],
        ),
    ]}
  />
);

const Content = r.yield(getLocation).yield(() => (
  <div>
    <Route
      path="/dashboard"
      exact
      label="HostNation"
      render={() => (
        <Div style={{ spacing: 40 }}>
          <Txt style={{ ...styles.header, fontSize: 50 }}>HostNation</Txt>
          <Div style={{ spacing: 15 }}>
            <Txt style={{ ...styles.header, fontSize: 30 }}>Befrienders</Txt>
            <MarkLink to="/dashboard/unmatched" text="# Unmatched" />
            <MarkLink to="/dashboard/matched" text="# Matched" />
            <MarkLink to="/dashboard/archived" text="# Archived" />
            <MarkLink to="/dashboard/befrienders-record" text="# Record" />
          </Div>
          <Div style={{ spacing: 15 }}>
            <Txt style={{ ...styles.header, fontSize: 30 }}>Refugees</Txt>
            <MarkLink to="/dashboard/referrals" text="# Referrals" />
            <MarkLink to="/dashboard/referrals-record" text="# Record" />
          </Div>
          <Div style={{ spacing: 15 }}>
            <Txt style={{ ...styles.header, fontSize: 30 }}>Tools</Txt>
            <MarkLink to="/dashboard/map" text="# Map" />
          </Div>
        </Div>
      )}
    />
    <BefriendersLinksRoute
      path="/dashboard/unmatched"
      title="Unmatched"
      dateLabel="Registration date"
      dateField="createdat"
      screened
      filter={['AND', ['match', '=', null], ['archived', '=', null]]}
    />
    <BefriendersLinksRoute
      path="/dashboard/matched"
      title="Matched"
      dateLabel="Start date"
      dateField="startdate"
      filter={['match', '!=', null]}
    />
    <BefriendersLinksRoute
      path="/dashboard/archived"
      title="Archived"
      dateLabel="Registration date"
      dateField="createdat"
      filter={['archived', '!=', null]}
    />
    <FormsRoute
      path="/dashboard/:path(unmatched|matched|archived)"
      type="befrienders"
      title={[
        ['firstname', 'lastname'],
        ({ firstname, lastname }) => `${firstname} ${lastname}`,
      ]}
      forms={[
        {
          title: 'Internal info',
          object: 'befriender',
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
          title: 'Registration',
          object: 'befriender',
          blocks: befriendBlocks(true),
        },
      ]}
    />
    <LinksRoute
      path="/dashboard/befrienders-record"
      title="Befrienders Record"
      columns={['Id']}
      rows={[
        {
          name: 'befrienders',
          sort: ['-createdat'],
          filter: ['AND', ['firstname', '=', null], ['lastname', '=', null]],
          fields: ['id'],
        },
        ({ befrienders }) =>
          befrienders.map(b => [encodeId(b.id), encodeId(b.id)]),
      ]}
    />
    <FormsRoute
      path="/dashboard/befrienders-record"
      type="befrienders"
      title={[['id'], ({ id }) => `Befriender: ${encodeId(id)}`]}
      forms={[
        {
          title: 'Internal info',
          object: 'befriender',
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
      ]}
    />
    <LinksRoute
      path="/dashboard/referrals"
      title="Referrals"
      columns={[
        'Name',
        'Referral date',
        'Region',
        'Age',
        'Match',
        'Matched by',
        'Referral org',
        'Referrer',
        'Map',
        'Sustained',
      ]}
      rows={[
        {
          name: 'refugees',
          sort: ['-createdat', 'firstname', 'lastname'],
          filter: ['OR', ['firstname', '!=', null], ['lastname', '!=', null]],
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
            'sustained',
          ],
        },
        ({ refugees }) =>
          refugees.map(r => [
            encodeId(r.id),
            `${r.firstname || '-'} ${r.lastname || '-'}`,
            duration(r.createdat) || '-',
            r.region || '-',
            r.dob
              ? `${Math.floor(moment().diff(moment(r.dob), 'y') / 10) * 10}s`
              : '-',
            r.match || '-',
            r.matchedby || '-',
            r.contactorg || '-',
            r.contactname || '-',
            r.mapaddress ? 'Y' : 'N',
            { Yes: 'Y', No: 'N' }[r.sustained] || '-',
          ]),
      ]}
    />
    <FormsRoute
      path="/dashboard/referrals"
      type="refugees"
      title={[
        ['firstname', 'lastname'],
        ({ firstname, lastname }) => `${firstname} ${lastname}`,
      ]}
      forms={[
        {
          title: 'Internal info',
          object: 'refugee',
          blocks: [
            [
              {
                text: 'Notes',
                field: 'refugee.notes',
                rows: 3,
                optional: true,
              },
              {
                text: 'Sustained',
                field: 'refugee.sustained',
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
          title: 'Referral',
          object: 'refugee',
          blocks: referBlocks(true),
        },
      ]}
    />
    <LinksRoute
      path="/dashboard/referrals-record"
      title="Referrals Record"
      columns={['Id']}
      rows={[
        {
          name: 'refugees',
          sort: ['-createdat'],
          filter: ['AND', ['firstname', '=', null], ['lastname', '=', null]],
          fields: ['id'],
        },
        ({ refugees }) => refugees.map(r => [encodeId(r.id), encodeId(r.id)]),
      ]}
    />
    <FormsRoute
      path="/dashboard/referrals-record"
      type="refugees"
      title={[['id'], ({ id }) => `Referral: ${encodeId(id)}`]}
      forms={[
        {
          title: 'Internal info',
          object: 'refugee',
          blocks: [
            [
              {
                text: 'Notes',
                field: 'refugee.notes',
                rows: 3,
                optional: true,
              },
              {
                text: 'Sustained',
                field: 'refugee.sustained',
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
      ]}
    />
    <Route
      path="/dashboard/map"
      exact
      label="Map"
      render={({ location }) => (
        <Div style={{ spacing: 40 }}>
          <Txt style={{ ...styles.header, fontSize: 50 }}>HostNation Map</Txt>
          <Map id={location.search.slice(4)} />
        </Div>
      )}
    />
  </div>
));

const Dashboard = r
  .yield(withLocation)
  .yield(auth)
  .yield(withBreadcrumbs('dashboard'))
  .yield(({ breadcrumbs }) => (
    <Div style={{ spacing: 15 }}>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        style={{
          ...styles.base,
          fontWeight: 'bold',
          fontStyle: 'italic',
          link: {
            color: colors.purple,
            hover: { color: colors.purpleDark },
          },
        }}
      />
      <Content />
    </Div>
  ));

export default () => (
  <>
    <Helmet title="Dashboard | HostNation">
      <style>{`
      html {
        background: white !important;
      }
      `}</style>
    </Helmet>
    <Dashboard />
  </>
);
