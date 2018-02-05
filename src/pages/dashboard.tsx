import * as React from 'react';
import Helmet from 'react-helmet';
import { compose, withHover } from 'mishmash';
import { Div, Mark, Txt } from 'elmnt';
import { encodeId } from 'common';
import {
  Breadcrumbs,
  Link,
  Route,
  routerPure,
  withRouter,
} from 'common-client';
import * as moment from 'moment';

import befriendBlocks from '../blocks/befriend';
import referBlocks from '../blocks/refer';
import styles, { colors } from '../core/styles';

import auth from '../core/auth';
import Map from '../core/Map';
import { FormsRoute, LinksRoute } from '../core/Routes';

const duration = (date?: Date) =>
  date &&
  `${moment(date).format('DD/MM/YY')}    (${moment(date).fromNow()})`.replace(
    / /g,
    '\xa0',
  );

const MarkLink = withHover<any>(({ to, text, isHovered, hoverProps }) => (
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
    ]}
    rows={[
      {
        name: 'befrienders',
        filter,
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
          ],
        ),
    ]}
  />
);

const Content = routerPure(() => (
  <div>
    <Route
      path="/"
      exact
      label="HostNation"
      render={() => (
        <Div style={{ spacing: 40 }}>
          <Txt style={{ ...styles.header, fontSize: 50 }}>HostNation</Txt>
          <Div style={{ spacing: 15 }}>
            <Txt style={{ ...styles.header, fontSize: 30 }}>Befrienders</Txt>
            <MarkLink to="/unmatched" text="# Unmatched" />
            <MarkLink to="/matched" text="# Matched" />
            <MarkLink to="/archived" text="# Archived" />
          </Div>
          <Div style={{ spacing: 15 }}>
            <Txt style={{ ...styles.header, fontSize: 30 }}>Refugees</Txt>
            <MarkLink to="/referrals" text="# Referrals" />
          </Div>
          <Div style={{ spacing: 15 }}>
            <Txt style={{ ...styles.header, fontSize: 30 }}>Tools</Txt>
            <MarkLink to="/map" text="# Map" />
          </Div>
        </Div>
      )}
    />
    <BefriendersLinksRoute
      path="/unmatched"
      title="Unmatched"
      dateLabel="Registration date"
      dateField="createdat"
      screened
      filter={['AND', ['match', '=', null], ['archived', '=', null]]}
    />
    <BefriendersLinksRoute
      path="/matched"
      title="Matched"
      dateLabel="Start date"
      dateField="startdate"
      filter={['match', '!=', null]}
    />
    <BefriendersLinksRoute
      path="/archived"
      title="Archived"
      dateLabel="Registration date"
      dateField="createdat"
      filter={['archived', '!=', null]}
    />
    <FormsRoute
      path="/:path(unmatched|matched|archived)"
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
      path="/referrals"
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
      ]}
      rows={[
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
          ]),
      ]}
    />
    <FormsRoute
      path="/referrals"
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
    <Route
      path="/map"
      exact
      label="Map"
      render={() => (
        <Div style={{ spacing: 40 }}>
          <Txt style={{ ...styles.header, fontSize: 50 }}>HostNation Map</Txt>
          <Map />
        </Div>
      )}
    />
  </div>
));

const Dashboard = compose(auth, withRouter('dashboard'))(({ breadcrumbs }) => (
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
    <Helmet title="HostNation">
      <title>Dashboard | HostNation</title>
      <style>{`
      html {
        background: white !important;
      }
      `}</style>
    </Helmet>
    <Dashboard />
  </>
);
