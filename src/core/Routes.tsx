import * as React from 'react';
import { Div, Txt } from 'elmnt';
import { decodeId } from 'common';
import { Spinner } from 'common-client';
import r from 'refluent';
import { Redirect } from 'react-router-dom';

import DashboardForm from './DashboardForm';
import { Route } from './router';
import styles, { colors } from './styles';
import TableLinks from './tableLinks';

export const LinksRoute = ({ path, title, columns, rows }) => (
  <Route
    path={path}
    exact
    label={title}
    render={() => (
      <Div style={{ spacing: 40 }}>
        <Txt style={{ ...styles.header, fontSize: 50 }}>{title}</Txt>
        <TableLinks
          path={path}
          columns={columns}
          rows={rows}
          style={styles.tableLinks}
        />
      </Div>
    )}
  />
);

const DeleteButton = r
  .do('dataKey', (dataKey, push) => ({
    deleted: false,
    onClick: () => {
      if (
        window.confirm(
          'This action is permanent - are you sure you want to delete this record?',
        )
      ) {
        push({ deleted: true });
        window.rgo.set({ key: dataKey, value: null });
        window.rgo.commit(dataKey);
      }
    },
  }))
  .yield(
    ({ deleted, onClick }) =>
      deleted ? (
        <Redirect
          to={window.location.pathname.substring(
            0,
            window.location.pathname.lastIndexOf('/'),
          )}
        />
      ) : (
        <Txt
          onClick={onClick}
          style={{
            ...styles.subtitle,
            color: 'white',
            background: 'red',
            padding: 10,
            width: 300,
            cursor: 'pointer',
          }}
        >
          DELETE
        </Txt>
      ),
  );

const partialDeleteFields = {
  befrienders: [
    'firstname',
    'lastname',
    'dob',
    'sex',
    'nationality',
    'address',
    'postcode',
    'mapaddress',
    'address2',
    'postcode2',
    'mapaddress2',
    'address2type',
    'mobile',
    'landline',
    'email',
    'city',
    'region',
    'duration',
    'passport',
    'children',
    'workstatus',
    'profession',
    'experience',
    'dbsdate',
    'dbsscan',
    'languages',
    'religion',
    'interests',
    'whyfriend',
    'preferences',
    'activitieslist',
    'activities',
    'additional',
    'availability',
    'photo',
    'referee1',
    'referee1email',
    'referee2',
    'referee2email',
    'communication',
    'fundraising',
    'consentupdates',
  ],
  refugees: [
    'firstname',
    'lastname',
    'dob',
    'sex',
    'country',
    'languages',
    'address',
    'postcode',
    'mapaddress',
    'addresstime',
    'mobile',
    'whatsapp',
    'email',
    'city',
    'region',
    'status',
    'financial',
    'family',
    'ukduration',
    'englishskill',
    'professionaltraining',
    'occupation',
    'otherorg',
    'availability',
    'interests',
    'religion',
    'personality',
    'healthissues',
    'regulartreatment',
    'attitudes',
    'ratepositivity',
    'rateconfidence',
    'ratelondon',
    'whyfriend',
    'activitieslist',
    'activities',
    'unhappywith',
    'additional',
    'refugeecontact',
    'contactintroduce',
    'contactintroduceinfo',
    'contactorg',
    'contactaddress',
    'contacttime',
    'contactname',
    'contactemail',
    'contactmobile',
    'contactphone',
    'contactrelation',
    'contactrelationother',
    'referrercontact',
  ],
};
const PartialDeleteButton = r
  .do('dataKey', (dataKey, push) => ({
    deleted: false,
    onClick: () => {
      if (
        window.confirm(
          `This action is permanent - are you sure you want to delete this ${
            dataKey[0] === 'befrienders' ? 'registration' : 'referral'
          }?`,
        )
      ) {
        push({ deleted: true });
        const keys = partialDeleteFields[dataKey[0]].map(f => [...dataKey, f]);
        window.rgo.set(...keys.map(key => ({ key, value: null })));
        window.rgo.commit(...keys);
      }
    },
  }))
  .yield(
    ({ deleted, onClick }) =>
      deleted ? (
        <Redirect
          to={window.location.pathname.substring(
            0,
            window.location.pathname.lastIndexOf('/'),
          )}
        />
      ) : (
        <Txt
          onClick={onClick}
          style={{
            ...styles.subtitle,
            color: 'white',
            background: 'red',
            padding: 10,
            width: 300,
            cursor: 'pointer',
          }}
        >
          RECORD
        </Txt>
      ),
  );

const MapButton = r
  .do('dataId', (dataId, push) => ({
    mapId: null,
    onClick: () => push({ mapId: dataId }),
  }))
  .yield(
    ({ mapId, onClick }) =>
      mapId ? (
        <Redirect push to={`/dashboard/map?id=${mapId}`} />
      ) : (
        <Txt
          onClick={onClick}
          style={{
            ...styles.subtitle,
            color: 'white',
            background: colors.purple,
            padding: 10,
            width: 300,
            cursor: 'pointer',
          }}
        >
          VIEW ON MAP
        </Txt>
      ),
  );

export const FormsRoute = ({ path, type, title, forms }) => (
  <Route
    path={`${path}/:id`}
    label={({ id }) => [
      {
        name: type,
        filter: decodeId(id),
        fields: ['id', ...title[0]],
      },
      data => title[1](data[type][0]),
    ]}
    loader={<Spinner style={{ color: colors.purple, paddingTop: 300 }} />}
    render={({ data }) => (
      <Div style={{ spacing: 40 }}>
        <Txt style={{ ...styles.header, fontSize: 50 }}>
          {title[1](data[type][0])}
        </Txt>
        <MapButton dataId={data[type][0].id} />
        {forms.map(({ title, object, blocks }, i) => (
          <Div style={{ spacing: 15 }} key={i}>
            <Txt style={styles.header}>{title}</Txt>
            <DashboardForm
              objects={{ [object]: { type, id: data[type][0].id } }}
              blocks={blocks}
            />
          </Div>
        ))}
        <Div style={{ layout: 'bar', spacing: 50 }}>
          <DeleteButton dataKey={[type, data[type][0].id]} />
          {(data[type][0].firstname || data[type][0].lastname) && (
            <PartialDeleteButton dataKey={[type, data[type][0].id]} />
          )}
        </Div>
      </Div>
    )}
  />
);
