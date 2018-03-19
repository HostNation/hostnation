import * as React from 'react';
import m from 'mishmash';
import { css, Mark, Txt } from 'elmnt';
import { createForm } from 'common-client';
import { root } from 'common';
import * as debounce from 'lodash.debounce';
import st from 'style-transform';

import styles, { colors } from './styles';

const codeAddress = async (address: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address,
    )}&key=AIzaSyCQ8P7-0kTGz2_tkcHjOo0IUiMB_z9Bbp4`,
    { method: 'GET' },
  );
  if (!response.ok) return null;
  const result = (await response.json()).results[0];
  if (!result) return null;
  return result.geometry.location;
};

export default (
  container,
  color: 'yellow' | 'purple',
  admin: boolean = false,
) =>
  createForm(
    container,
    ['title', 'info'],
    m.doIf(
      ({ fields }) => !fields,
      m.yield(
        ({ title, info }) =>
          title ? (
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
          ) : info ? (
            <Mark style={{ ...styles.markdown(color), fontSize: 16 }}>
              {info}
            </Mark>
          ) : null,
      ),
    ),
    m
      .doIf(
        ({ getAddress }) => getAddress !== undefined,
        m.merge('field', (field, _) => {
          let first = true;
          const updateAddress = debounce(async address => {
            const location = await codeAddress(address);
            root.rgo.set({
              key: [field.key[0], field.key[1], 'mapaddress'],
              value: location,
            });
          }, 1000);
          const unsubscribes = [
            updateAddress.cancel,
            root.rgo.query(
              {
                name: field.key[0],
                filter: field.key[1],
                fields: ['address', 'postcode'],
              },
              data => {
                if (data) {
                  const { address, postcode } = data[field.key[0]][0];
                  if (!first) {
                    root.rgo.set({
                      key: [field.key[0], field.key[1], 'mapaddress'],
                      value: true,
                    });
                  }
                  first = false;
                  updateAddress(`${address}, ${postcode}`);
                }
              },
            ),
          ];
          return () => unsubscribes.forEach(u => u());
        }),
      )
      .doIf(
        ({ mapAddress }) => mapAddress,
        m
          .merge('style', style => ({
            style: st(style).filter(...css.groups.text),
          }))
          .yield(({ value, style }) => (
            <Txt style={style}>
              {value === null ? 'No' : value === true ? 'Checking...' : 'Yes'}
            </Txt>
          )),
      ),
    {
      ...styles.field(color, admin),
      ...(admin ? { fontSize: 15, padding: 7 } : {}),
      question: { fontWeight: 'bold' },
      required: { color: colors.red },
      prompt: { fontSize: 13, fontStyle: 'italic', color: '#888' },
      column: { fontSize: 14, fontWeight: 'bold', fontStyle: 'italic' },
    },
    admin,
  );
