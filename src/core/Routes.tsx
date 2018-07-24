import * as React from 'react';
import { Div, Txt } from 'elmnt';
import { decodeId } from 'common';
import { Spinner } from 'common-client';

import { Route } from '../core/router';
import styles, { colors } from '../core/styles';
import TableLinks from '../core/tableLinks';

import DashboardForm from './DashboardForm';

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
        {forms.map(({ title, object, blocks }, i) => (
          <Div style={{ spacing: 15 }} key={i}>
            <Txt style={styles.header}>{title}</Txt>
            <DashboardForm
              objects={{ [object]: { type, id: data[type][0].id } }}
              blocks={blocks}
            />
          </Div>
        ))}
      </Div>
    )}
  />
);
