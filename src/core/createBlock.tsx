import * as React from 'react';
import { branch, compose, enclose, map, render, restyle } from 'mishmash';
import { css, Mark, Txt } from 'elmnt';
import { createBlock } from 'common-client';
import { root } from 'common';
import * as debounce from 'lodash.debounce';

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

export default (color: 'yellow' | 'purple', admin: boolean = false) => {
  return createBlock(
    ['title', 'info'],
    branch(
      ({ fields }) => !fields,
      compose(
        branch(
          ({ title }) => title,
          render(({ title }) => (
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
          ({ info }) => info,
          render(({ info }) => (
            <Mark style={{ ...styles.markdown(color), fontSize: 16 }}>
              {info}
            </Mark>
          )),
        ),
        render(),
      ),
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
    compose(
      branch(
        ({ getAddress }) => getAddress !== undefined,
        enclose(({ initialProps: { field }, onProps }) => {
          let unsubscribes = [] as (() => void)[];
          let first = true;
          const updateAddress = debounce(address => {
            codeAddress(address).then(location => {
              root.rgo.set({
                key: [field.key[0], field.key[1], 'mapaddress'],
                value: location,
              });
            });
          }, 1000);
          unsubscribes.push(updateAddress.cancel, root.rgo.query(
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
          ) as any);
          onProps(props => !props && unsubscribes.forEach(u => u()));
          return props => props;
        }),
      ),
      branch(
        ({ mapAddress }) => mapAddress,
        compose(
          map(restyle([['filter', ...css.groups.text]])),
          render(({ value, style }) => (
            <Txt style={style}>
              {value === null ? 'No' : value === true ? 'Checking...' : 'Yes'}
            </Txt>
          )),
        ),
      ),
    ),
  );
};
