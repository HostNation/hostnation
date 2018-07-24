import * as React from 'react';
import r, { branch } from 'refluent';
import { css, Div, Mark, Txt } from 'elmnt';
import { getData, restyle, Spinner } from 'common-client';

import Filter from './Filter';
import Link from './Link';

const joinFilters = (...filters) => {
  const f = filters.filter(f => f);
  if (f.length === 0) return undefined;
  if (f.length === 1) return f[0];
  return ['AND', ...f];
};

export default r
  .do(
    restyle(style => ({
      base: style,
      spinner: style.mergeKeys('spinner'),
      header: style.mergeKeys('header'),
      columnCell: style
        .mergeKeys('column')
        .filter(...css.groups.box, ...css.groups.other)
        .expandFor('paddingLeft', 'borderTopLeftRadius'),
      columnText: style.mergeKeys('column').filter(...css.groups.text),
      link: style.mergeKeys('link').merge({ position: 'relative' }),
      filter: style.mergeKeys('filter'),
    })),
  )
  .do((_, push) => ({
    filter: null,
    setFilter: filter => push({ filter }),
  }))
  .yield(({ rows, setFilter, style, next }) => (
    <Div style={{ spacing: 15 }}>
      <Filter type={rows[0].name} onChange={setFilter} style={style.filter} />
      {next()}
    </Div>
  ))
  .do(
    getData(({ rows, filter }) => ({
      ...rows[0],
      filter: joinFilters(rows[0].filter, filter),
    })),
  )
  .yield(
    branch(
      ({ data }) => !data,
      ({ style }) => <Spinner style={style.spinner} />,
    ),
  )
  .do('rows', 'data', (rows, data) => {
    const result = rows[1](data);
    return {
      rows: Array.isArray(result[0] && result[0][1]) ? result : [['', result]],
    };
  })
  .yield(({ path, columns, rows, style }) => (
    <table style={{ width: '100%' }}>
      <tbody>
        {rows.reduce(
          (res, [group, values], i) => [
            ...res,
            ...(group
              ? [
                  <tr key={`${i}_0`}>
                    <td
                      colSpan={columns.length}
                      style={{ verticalAlign: 'top' }}
                    >
                      <Mark style={style.header}>{group}</Mark>
                    </td>
                  </tr>,
                ]
              : []),
            <tr key={`${i}_1`}>
              {['#', ...columns].map((c, j) => (
                <td
                  style={{
                    ...style.columnCell,
                    ...(j !== 0
                      ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
                      : {}),
                    ...(j !== columns.length
                      ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
                      : { paddingRight: style.columnCell.paddingLeft }),
                  }}
                  key={c}
                >
                  <Txt style={style.columnText}>{c}</Txt>
                </td>
              ))}
            </tr>,
            ...values.map((v, j) => (
              <Link
                path={path}
                values={v}
                index={j}
                style={style.link}
                key={`${i}_${j + 2}`}
              />
            )),
          ],
          [],
        )}
      </tbody>
    </table>
  ));
