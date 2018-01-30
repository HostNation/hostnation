import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  branch,
  compose,
  renderComponent,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import {
  combineState,
  Hover,
  memoizeObject,
  renderLayer,
  renderLifted,
  withHover,
} from 'mishmash';
import { Div, Input, Mark, Txt } from 'elmnt';
import { Query } from 'rgo';
import { getValueString, Obj, root } from 'common';
import { getData, parseFilter, Spinner } from 'common-client';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import * as debounce from 'lodash.debounce';

import styles, { colors } from '../core/styles';

const icons = {
  redQuestionLight:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1594-help_4x.png&highlight=ff000000,FF5252,ff000000&scale=2.0',
  redQuestionDark:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1594-help_4x.png&highlight=ff000000,C2185B,ff000000&scale=2.0',
  yellowStarLight:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,FFEA00,ff000000&scale=2.0',
  yellowStarDark:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,FBC02D,ff000000&scale=2.0',
  greenStarLight:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,7CB342,ff000000&scale=2.0',
  greenStarDark:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,097138,ff000000&scale=2.0',
  blueStarLight:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,0288D1,ff000000&scale=2.0',
  blueStarDark:
    'https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1502-shape_star_4x.png&highlight=ff000000,01579B,ff000000&scale=2.0',
};

import Form from './Form';
import { createUrl, toUrl } from './index';

const MapMarker = compose<any, any>(
  withHandlers({
    onClick: ({ index, openInfo }: any) => () => openInfo(index),
  }),
)(({ position, icon, title, info, isOpen, closeInfo, onClick }) => (
  <Marker
    position={position}
    icon={{
      url: icon,
      scaledSize: new (window as any).google.maps.Size(30, 30),
      anchor: new (window as any).google.maps.Point(15, 15),
    }}
    onClick={onClick}
  >
    {isOpen && (
      <InfoWindow onCloseClick={closeInfo}>
        {
          <Div style={{ padding: 10, spacing: 10 }}>
            <Txt style={{ ...styles.base, fontSize: 18, fontWeight: 'bold' }}>
              {title}
            </Txt>
            <table>
              <tbody>
                {info
                  .filter(([_, value]) => value)
                  .map(([header, value], i) => (
                    <tr key={i}>
                      <td style={{ padding: '15px 15px 0 0' }}>
                        <Txt
                          style={{
                            ...styles.base,
                            fontSize: 14,
                            fontWeight: 'bold',
                          }}
                        >
                          {header}
                        </Txt>
                      </td>
                      <td style={{ padding: '15px 0 0 0' }}>
                        <Txt style={{ ...styles.base, fontSize: 14 }}>
                          {value}
                        </Txt>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Div>
        }
      </InfoWindow>
    )}
  </Marker>
));

const getFieldHelp = field => {
  if (field.meta && field.meta.options) {
    return 'selection:\n' + field.meta.options.join('\n');
  }
  if (field.scalar === 'boolean') return 'true / false';
  if (field.scalar === 'int') return 'whole number';
  if (field.scalar === 'float') return 'decimal number';
  if (field.scalar === 'string') return 'text';
  return field.scalar;
};

const TableFilter = compose<any, any>(
  withState('text', 'setText', null),
  withState('filter', 'setFilter', null),
  withState('isOpen', 'setIsOpen', false),
  combineState(({ initialProps: { onChange } }) => {
    let debounceChange = debounce(onChange, 1000);
    return props => ({ ...props, onChange: debounceChange });
  }),
  withHandlers({
    setText: ({ type, onChange, setText, setFilter }) => text => {
      setText(text);
      const parsedValue = parseFilter(text, type);
      const filter = !parsedValue ? parsedValue : memoizeObject(parsedValue);
      setFilter(filter);
      onChange(filter);
    },
    toggleOpen: ({ isOpen, setIsOpen }) => () => setIsOpen(!isOpen),
  }),
  renderLifted(
    ({ type, toggleOpen }) => (
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'rgba(0,0,0,0.5)',
        }}
      >
        <div
          onClick={toggleOpen}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <div
          style={{
            position: 'relative',
            height: '100%',
            padding: 50,
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          <Div
            style={{
              height: ' 100%',
              background: 'white',
              boxShadow: '0 2px 20px 5px rgba(0,0,0,0.4)',
              borderRadius: 3,
              padding: 40,
              overflow: 'auto',
              spacing: 25,
            }}
          >
            <Txt style={{ ...styles.base, fontWeight: 'bold', fontSize: 30 }}>
              Filtering
            </Txt>
            <Txt style={{ ...styles.base, fontWeight: 'bold' }}>
              A basic filter is a rule in the format:
            </Txt>
            <Txt
              style={{
                ...styles.base,
                fontStyle: 'italic',
                color: colors.purple,
                paddingLeft: 40,
              }}
            >
              [field] [operation] [value]
            </Txt>
            <Txt style={{ ...styles.base, fontWeight: 'bold' }}>
              For example:
            </Txt>
            <Txt
              style={{
                ...styles.base,
                fontStyle: 'italic',
                color: colors.purple,
                paddingLeft: 40,
              }}
            >
              firstname = David
            </Txt>
            <Txt style={{ ...styles.base, fontWeight: 'bold' }}>
              Multiple of these basic filters can be combined together, using
              commas, 'OR', and brackets:
            </Txt>
            <Div style={{ spacing: 15 }}>
              <Txt
                style={{
                  ...styles.base,
                  fontStyle: 'italic',
                  color: colors.purple,
                  paddingLeft: 40,
                }}
              >
                firstname = David, (lastname = Smith OR sex = Male)
              </Txt>
              <Txt
                style={{
                  ...styles.base,
                  fontSize: 14,
                  opacity: 0.7,
                  fontStyle: 'italic',
                  paddingLeft: 40,
                }}
              >
                (This filter will show records where firstname equals 'David',
                and either lastname equals 'Smith' or sex equals 'Male')
              </Txt>
            </Div>
            <Txt style={styles.base}>
              Note: If the current filter is invalid the input will go red and
              the page will act as if no filter is entered.
            </Txt>
            <Txt style={{ ...styles.base, fontWeight: 'bold' }}>
              The available operations are:
            </Txt>
            <Div style={{ spacing: 10, paddingLeft: 40 }}>
              {[
                ['=', 'equal to'],
                ['!=', 'not equal to'],
                ['<', 'less than'],
                ['>', 'greater than'],
                ['<=', 'less than or equal to'],
                ['>=', 'greater than or equal to'],
              ].map(([op, label], i) => (
                <Div style={{ layout: 'bar', spacing: 10 }} key={i}>
                  <Txt
                    style={{
                      ...styles.base,
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      width: 40,
                    }}
                  >
                    {op}
                  </Txt>
                  <Txt
                    style={{
                      ...styles.base,
                      fontStyle: 'italic',
                      fontWeight: 'bold',
                    }}
                  >
                    {label}
                  </Txt>
                </Div>
              ))}
            </Div>
            <Txt style={styles.base}>
              Note: The last 4 operations are only valid for number and date
              fields.
            </Txt>
            <Div
              style={{
                spacing: 20,
                background: '#eee',
                borderRadius: 3,
                padding: 20,
              }}
            >
              <Txt style={{ ...styles.base, fontWeight: 'bold', fontSize: 20 }}>
                Available fields
              </Txt>
              <Div style={{ spacing: 15 }}>
                {Object.keys(root.rgo.schema[type])
                  .sort()
                  .map((field, i) => (
                    <Div
                      style={{
                        layout: 'bar',
                        spacing: 10,
                        verticalAlign: 'top',
                      }}
                      key={i}
                    >
                      <Txt
                        style={{ ...styles.base, fontSize: 14, width: 130 }}
                        key={field}
                      >
                        {field}
                      </Txt>
                      <Txt style={{ ...styles.base, fontSize: 14 }} key={field}>
                        {getFieldHelp(root.rgo.schema[type][field])}
                      </Txt>
                    </Div>
                  ))}
              </Div>
            </Div>
          </Div>
        </div>
      </div>
    ),
    ({ isOpen }) => isOpen,
  ),
)(({ text, setText, filter, toggleOpen }) => (
  <Div
    style={{
      layout: 'bar',
      spacing: 10,
      width: '100%',
      padding: 10,
      background: '#eee',
      borderRadius: 3,
    }}
  >
    <Txt
      style={{
        ...styles.base,
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        width: 50,
      }}
    >
      Filter:
    </Txt>
    <Input
      type="string"
      value={text}
      onChange={setText}
      style={{ ...styles.field('purple', true), fontSize: 14, padding: 8 }}
      spellCheck={false}
      invalid={text && !filter}
    />
    <Hover
      style={{
        ...styles.base,
        fontSize: 14,
        fontWeight: 'bold',
        width: 75,
        color: colors.purple,
        cursor: 'pointer',
        textAlign: 'right',
        hover: { color: colors.purpleDark },
      }}
    >
      <Txt onClick={toggleOpen}>Open help</Txt>
    </Hover>
  </Div>
));

const TableLink = compose<any, any>(withHover)(
  ({ values, to, index, hoverProps, isHovered }) => (
    <tr {...hoverProps} style={{ cursor: 'pointer' }}>
      {[`${index + 1}`, ...values].map((v, j) => (
        <td
          style={{
            position: 'relative',
            verticalAlign: 'middle',
            background: isHovered
              ? colors.purple
              : index % 2 === 0 ? 'white' : '#f9f9f9',
            ...(isHovered
              ? {
                  borderTopLeftRadius: j === 0 ? 3 : 0,
                  borderTopRightRadius: j === values.length ? 3 : 0,
                  borderBottomRightRadius: j === values.length ? 3 : 0,
                  borderBottomLeftRadius: j === 0 ? 3 : 0,
                }
              : {}),
            width: j ? 'auto' : 50,
          }}
          key={j}
        >
          <Txt
            style={{
              ...styles.base,
              fontSize: 13,
              color: isHovered
                ? colors.white
                : j ? colors.purple : colors.black,
              fontWeight: j ? 'normal' : 'bold',
              padding: `8px 25px 8px ${j || 8}px`,
            }}
          >
            {v}
          </Txt>
          <Link
            to={to}
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
        </td>
      ))}
    </tr>
  ),
);

const processQuery = (query: Partial<Query>) => ({
  ...query,
  fields: [
    ...(query.fields || ['id']).map(
      f => (typeof f === 'string' ? f : processQuery(f)),
    ),
  ],
});

export default compose<any, any>(
  branch(
    ({ type }: any) => type === 'links',
    compose(
      branch(
        ({ links }: any) => typeof links[links.length - 1] === 'function',
        compose(
          getData(({ links }) => links[0]),
          branch(
            ({ data }: any) => !data,
            renderComponent(() => <Spinner style={{ color: colors.purple }} />),
          ),
          withProps(({ data, links }: any) => ({ links: links[1](data) })),
        ),
        withProps(({ links }: any) => ({
          links: links.map(
            link =>
              Array.isArray(link)
                ? [link[0], toUrl(link[1])]
                : [link.link, toUrl(link.name)],
          ),
        })),
      ),
      renderComponent(({ path, title, prefix, links }: any) => (
        <Div style={{ spacing: 15 }}>
          {title && (
            <Txt style={{ ...styles.header, fontSize: 30 }}>{title}</Txt>
          )}
          {links.map(
            ([link, name], i) =>
              name ? (
                <Link
                  to={createUrl([
                    ...path.map(p => p.url),
                    `${prefix ? `${prefix}-` : ''}${name}`,
                  ])}
                  key={i}
                >
                  <Hover
                    style={{
                      padding: 15,
                      background: colors.purple,
                      hover: { background: colors.purpleDark },
                    }}
                  >
                    <div>
                      <Mark
                        style={{
                          ...styles.markdown,
                          fontSize: 16,
                          color: 'white',
                          heading: { fontSize: 30 },
                        }}
                      >
                        {link}
                      </Mark>
                    </div>
                  </Hover>
                </Link>
              ) : (
                <Mark
                  style={{
                    ...styles.markdown,
                    fontSize: 16,
                    heading: { fontSize: 30 },
                    marginTop: i !== 0 && 20,
                  }}
                  key={i}
                >
                  {link}
                </Mark>
              ),
          )}
        </Div>
      )),
    ),
  ),
  branch(
    ({ type }: any) => type === 'tablelinks',
    compose(
      withState('filter', 'setFilter', null),
      renderLayer(({ title, links, setFilter, children }) => (
        <Div style={{ spacing: 15 }}>
          {title && (
            <Txt style={{ ...styles.header, fontSize: 30 }}>{title}</Txt>
          )}
          <TableFilter type={links[0].name} onChange={setFilter} />
          {children}
        </Div>
      )),
      getData(({ links, filter }) => ({
        ...links[0],
        ...(filter ? { filter: ['AND', links[0].filter, filter] } : {}),
      })),
      branch(
        ({ data }: any) => !data,
        renderComponent(() => <Spinner style={{ color: colors.purple }} />),
      ),
      withProps(({ data, links }: any) => {
        const result = links[1](data);
        return {
          links:
            typeof (result[0] && result[0][0]) === 'string'
              ? result
              : [['', result]],
        };
      }),
      renderComponent(({ path, prefix, columns, links }: any) => (
        <table style={{ width: '100%' }}>
          <tbody>
            {links.reduce(
              (res, [group, values], i) => [
                ...res,
                ...(group
                  ? [
                      <tr key={`${i}_0`}>
                        <td
                          colSpan={columns.length}
                          style={{ verticalAlign: 'top' }}
                        >
                          <Mark
                            style={{
                              ...styles.markdown,
                              fontSize: 13,
                              heading: { fontSize: 30 },
                              marginTop: i && 30,
                              marginBottom: 15,
                            }}
                          >
                            {group}
                          </Mark>
                        </td>
                      </tr>,
                    ]
                  : []),
                <tr key={`${i}_1`}>
                  {['#', ...columns].map((c, j) => (
                    <td
                      style={{
                        background: '#e0e0e0',
                        verticalAlign: 'middle',
                        padding: `10px 25px 8px ${j || 8}px`,
                        borderTopLeftRadius: j === 0 ? 3 : 0,
                        borderTopRightRadius: j === columns.length ? 3 : 0,
                        borderBottomRightRadius: j === columns.length ? 3 : 0,
                        borderBottomLeftRadius: j === 0 ? 3 : 0,
                      }}
                      key={c}
                    >
                      <Txt
                        style={{
                          ...styles.base,
                          fontSize: 13,
                          fontWeight: 'bold',
                        }}
                      >
                        {c}
                      </Txt>
                    </td>
                  ))}
                </tr>,
                ...values.map((v, j) => (
                  <TableLink
                    values={v[0]}
                    to={createUrl([
                      ...path.map(p => p.url),
                      `${prefix ? `${prefix}-` : ''}${v[1]}`,
                    ])}
                    index={j}
                    key={`${i}_${j + 2}`}
                  />
                )),
              ],
              [],
            )}
          </tbody>
        </table>
      )),
    ),
  ),
  branch(
    ({ type }: any) => type === 'form',
    renderComponent(({ title, objects, blocks, button, redirect }: any) => (
      <Div style={{ spacing: 15 }}>
        {title && <Txt style={{ ...styles.header, fontSize: 30 }}>{title}</Txt>}
        <Form
          objects={objects}
          blocks={blocks}
          button={button}
          redirect={redirect}
        />
      </Div>
    )),
  ),
  branch(
    ({ type }: any) => type === 'download',
    compose(
      withHandlers({
        onClick: ({ query, filename }: any) => async () => {
          const fullData = await root.rgo.query(processQuery(query));
          const headers: string[] = [];
          const processLayer = (
            { name, alias, fields }: Query,
            data: (Obj | null)[],
            type: string,
            indent = '',
          ) => {
            headers.push(`${indent}${alias || name}`);
            const fullValues = fields.reduce<any[]>((result, f) => {
              if (typeof f === 'string') {
                headers.push(`${indent}      ${f}`);
                return [
                  ...result,
                  data.map(d => [
                    getValueString(
                      d && d[f],
                      (root.rgo.schema[type][f] as any).scalar || 'string',
                    ),
                  ]),
                ];
              }
              const val = processLayer(
                f,
                data.reduce<Obj[]>(
                  (res, d) => res.concat(d && d[f.alias || f.name]),
                  [],
                ),
                (root.rgo.schema[type][f.name] as any).type,
                indent + '      ',
              );
              return [
                ...result,
                ...val.map(row => {
                  let index = 0;
                  return data.map(d =>
                    []
                      .concat(d && d[f.alias || f.name])
                      .reduce<any[]>(res => [...res, ...row[index++]], []),
                  );
                }),
              ];
            }, []);
            const spans = data.map((_, i) =>
              Math.max(...fullValues.map(row => row[i].length)),
            );
            return [
              spans.map(s => Array(s).fill('')),
              ...fullValues.map(row =>
                row.map((v, i) => {
                  const start = v.length;
                  v[spans[i] - 1] = v[spans[i] - 1] || '';
                  return v.fill('', start, spans[i]);
                }),
              ),
            ];
          };
          const rows = Array.isArray(query)
            ? query
            : [query].reduce(
                (res, q) => [
                  ...res,
                  ...processLayer(q, fullData[q.alias || q.name], q.name),
                ],
                [],
              );

          const csv = rows
            .map((row, i) =>
              [headers[i], ...row[0]].map(v => `°${v || ''}°`).join(','),
            )
            .join('\n')
            .replace(/"/g, '""')
            .replace(/°/g, '"');

          const link = document.createElement('a');
          link.setAttribute(
            'href',
            encodeURI(`data:text/csv;charset=utf-8,${csv}`),
          );
          link.setAttribute('download', `${filename || 'data'}.csv`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
      }),
      renderComponent(({ title, text, onClick }: any) => (
        <Div style={{ spacing: 15 }}>
          {title && (
            <Txt style={{ ...styles.header, fontSize: 30 }}>{title}</Txt>
          )}
          <Txt
            onClick={onClick}
            style={{ ...styles.button, fontSize: 22, width: 500 }}
          >
            {text}
          </Txt>
        </Div>
      )),
    ),
  ),
  branch(
    ({ type }: any) => type === 'map',
    compose(
      getData(
        {
          name: 'befrienders',
          filter: ['AND', ['archived', null], ['mapaddress', '!=', null]],
          fields: [
            'firstname',
            'lastname',
            'address',
            'postcode',
            'mapaddress',
            'sex',
            'ready',
            'match',
          ],
        },
        {
          name: 'refugees',
          filter: ['mapaddress', '!=', null],
          fields: [
            'firstname',
            'lastname',
            'address',
            'postcode',
            'mapaddress',
            'sex',
          ],
        },
      ),
      branch(
        ({ data }: any) => !data,
        renderComponent(() => <Spinner style={{ color: colors.purple }} />),
      ),
      renderLayer(({ children }) => (
        <Div style={{ layout: 'stack', spacing: 30 }}>
          {children}
          <Div style={{ layout: 'stack', spacing: 5 }}>
            <Div style={{ layout: 'bar', spacing: 5 }}>
              <img src={icons.redQuestionLight} style={{ height: 20 }} />
              <img src={icons.redQuestionDark} style={{ height: 20 }} />
              <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
                Unready
              </Txt>
            </Div>
            <Div style={{ layout: 'bar', spacing: 5 }}>
              <img src={icons.blueStarLight} style={{ height: 20 }} />
              <img src={icons.blueStarDark} style={{ height: 20 }} />
              <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
                Ready
              </Txt>
            </Div>
            <Div style={{ layout: 'bar', spacing: 5 }}>
              <img src={icons.greenStarLight} style={{ height: 20 }} />
              <img src={icons.greenStarDark} style={{ height: 20 }} />
              <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
                Matched
              </Txt>
            </Div>
            <Div style={{ layout: 'bar', spacing: 5 }}>
              <img src={icons.yellowStarLight} style={{ height: 20 }} />
              <img src={icons.yellowStarDark} style={{ height: 20 }} />
              <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
                Refugee
              </Txt>
            </Div>
            <Txt
              style={{
                ...styles.base,
                fontSize: 14,
                paddingTop: 10,
                fontStyle: 'italic',
              }}
            >
              (Light = Female, Dark = Male)
            </Txt>
          </Div>
        </Div>
      )),
      withProps(({ data: { befrienders, refugees } }: any) => ({
        markers: [
          ...befrienders.map(
            ({
              firstname,
              lastname,
              address,
              postcode,
              mapaddress,
              sex,
              ready,
              match,
            }) => ({
              position: mapaddress,
              icon:
                icons[
                  `${
                    ready ? (match ? 'greenStar' : 'blueStar') : 'redQuestion'
                  }${sex === 'Male' ? 'Dark' : 'Light'}`
                ],
              title: `${firstname} ${lastname}`,
              info: [
                ['Address', `${address}\n${postcode}`],
                ['Sex', sex],
                ['Ready', ready ? 'Yes' : 'No'],
                ['Match', match],
              ],
            }),
          ),
          ...refugees.map(
            ({ firstname, lastname, address, postcode, mapaddress, sex }) => ({
              position: mapaddress,
              icon: icons[`yellowStar${sex === 'Male' ? 'Dark' : 'Light'}`],
              title: `${firstname} ${lastname}`,
              info: [['Address', `${address}\n${postcode}`], ['Sex', sex]],
            }),
          ),
        ],
        googleMapURL:
          'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ8P7-0kTGz2_tkcHjOo0IUiMB_z9Bbp4',
        containerElement: <div style={{ height: 500 }} />,
        loadingElement: <Spinner style={{ color: colors.purple }} />,
        mapElement: <div style={{ height: '100%' }} />,
      })),
      withScriptjs,
      withGoogleMap,
      withState('openIndex', 'setOpenIndex', -1),
      withHandlers({
        openInfo: ({ openIndex, setOpenIndex }: any) => index =>
          index !== openIndex && setOpenIndex(index),
        closeInfo: ({ setOpenIndex }: any) => () => setOpenIndex(-1),
      }),
      renderComponent(({ markers, openIndex, openInfo, closeInfo }: any) => (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 51.507614, lng: -0.127771 }}
          onClick={closeInfo}
        >
          {markers.map((props, i) => (
            <MapMarker
              {...props}
              index={i}
              isOpen={openIndex === i}
              openInfo={openInfo}
              closeInfo={closeInfo}
              key={i}
            />
          ))}
        </GoogleMap>
      )),
    ),
  ),
)(() => null);
