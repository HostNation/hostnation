import * as React from 'react';
import {
  branch,
  compose,
  mapProps,
  renderComponent,
  renderNothing,
} from 'recompose';
import { Div, Mark, Txt } from 'elmnt';
import { Comp, cssGroups, mapStyle, renderLayer } from 'mishmash';

import Field from './Field';
import styles, { colors } from './styles';

const promptStyle = {
  ...styles.base,
  fontSize: 13,
  fontStyle: 'italic' as 'italic',
  color: '#888',
};

const TableHeading = mapStyle([
  ['filter', ...cssGroups.text],
  [
    'merge',
    {
      textAlign: 'center',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'italic',
      padding: '8px 15px',
    },
  ],
])(Txt);

export default (color: 'yellow' | 'purple', admin?: boolean) =>
  [
    ['title', 'info', 'text', 'prompt', 'vertical', 'bar', 'view'],
    compose<any, any>(
      branch(
        ({ fields }: any) => !fields,
        compose(
          branch(
            ({ title }: any) => title,
            renderComponent(({ title }: any) => (
              <Txt
                style={{
                  ...styles.header,
                  fontSize: 30,
                  padding: '5px 0 5px',
                  color: colors[color],
                }}
              >
                {title}
              </Txt>
            )),
          ),
          branch(
            ({ info }: any) => info,
            renderComponent(({ info }: any) => (
              <Mark style={{ ...styles.markdown(color), fontSize: 16 }}>
                {info}
              </Mark>
            )),
          ),
          renderNothing,
        ),
      ),
      mapProps(({ fields, attempted, ...props }: any) => ({
        fields: fields.map(
          ({ scalar, isList, file, type, invalid, ...field }) => ({
            ...field,
            type: `${file ? 'file' : scalar || 'string'}${
              isList && field.index === undefined ? 'list' : ''
            }`,
            relation: type,
            invalid: invalid && (admin || attempted),
            style: {
              ...styles.field(color, admin),
              ...(admin ? { fontSize: 15, padding: 7 } : {}),
              ...field.style,
            },
            view: props.view,
            ...(admin ? { addNull: true, showFile: true } : {}),
          }),
        ),
        ...props,
        ...(admin ? { prompt: undefined, vertical: false } : {}),
      })),
      renderLayer(
        ({ text, prompt, vertical, view, fields, children }) =>
          text ? (
            <Div style={{ spacing: 10 }}>
              {vertical ? (
                <Div style={{ spacing: 10 }}>
                  <Txt
                    style={{
                      ...styles.base,
                      ...(admin ? { fontSize: 15 } : {}),
                      fontWeight: 'bold',
                    }}
                  >
                    {text}
                    {fields.some(f => !f.optional) && (
                      <span style={{ color: colors.red }}>&nbsp;*</span>
                    )}
                  </Txt>
                  {prompt && <Txt style={promptStyle}>{prompt}</Txt>}
                  {children}
                </Div>
              ) : (
                <Div
                  style={{
                    layout: 'bar',
                    width: '100%',
                    verticalAlign: 'top',
                    spacing: 30,
                  }}
                >
                  <Div
                    style={{
                      spacing: 10,
                      width: 200,
                      paddingTop:
                        !view &&
                        (fields[0].type === 'boolean' ||
                        (fields[0].options &&
                          fields[0].style.layout !== 'modal')
                          ? admin ? 3 : 4
                          : admin ? 8 : 11),
                    }}
                  >
                    <Txt
                      style={{
                        ...styles.base,
                        ...(admin ? { fontSize: 15 } : {}),
                        fontWeight: 'bold',
                      }}
                    >
                      {text}
                      {fields.some(f => !f.optional) && (
                        <span style={{ color: colors.red }}>&nbsp;*</span>
                      )}
                    </Txt>
                    {prompt && <Txt style={promptStyle}>{prompt}</Txt>}
                  </Div>
                  {children}
                </Div>
              )}
            </Div>
          ) : (
            children
          ),
      ),
      branch(
        ({ fields }: any) => fields.length > 1,
        renderComponent(
          ({ fields, bar }: any) =>
            bar ? (
              <div>
                <Div style={{ layout: 'bar', width: '100%', spacing: '4%' }}>
                  <Field
                    {...fields[0]}
                    style={{ ...fields[0].style, width: '48%' }}
                  />
                  <Field
                    {...fields[1]}
                    style={{ ...fields[1].style, width: '52%' }}
                  />
                </Div>
              </div>
            ) : fields[0].style.layout === 'table' ? (
              <table style={{ width: '100%' }}>
                <tbody>
                  <tr>
                    <td />
                    {(fields[0].labels || fields[0].options).map(l => (
                      <td style={{ verticalAlign: 'middle' }} key={l}>
                        <TableHeading style={fields[0].style}>{l}</TableHeading>
                      </td>
                    ))}
                  </tr>
                  {fields.map((field, i) => (
                    <Field
                      {...field}
                      labels={field.options.map(() => '')}
                      key={i}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <Div style={{ spacing: 10 }}>
                {fields.map((field, i) => <Field {...field} key={i} />)}
              </Div>
            ),
        ),
        mapProps(({ fields }: any) => fields[0]),
      ),
    )(Field),
  ] as [string[], Comp];
