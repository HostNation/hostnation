import * as React from 'react';
import { branch, compose, renderComponent, withProps } from 'recompose';
import { Div, Input, Txt } from 'elmnt';
import {
  combineState,
  cssGroups,
  Hover,
  mapStyle,
  renderLayer,
} from 'mishmash';
import { getValueString, root } from 'common';
import * as debounce from 'lodash.debounce';

import styles from './styles';

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

export default compose<any, any>(
  branch(
    ({ type, options, addNull }: any) =>
      addNull && !type.endsWith('list') && Array.isArray(options),
    withProps(({ options, labels }: any) => ({
      options:
        options && (!options.includes(null) ? [...options, null] : options),
      labels:
        labels &&
        (!options.includes(null) ? [...labels, '-- None --'] : labels),
    })),
  ),
  branch(
    ({ type, showFile }: any) => type === 'file' && showFile,
    renderLayer(({ value, children }) => (
      <div style={{ width: '100%' }}>
        <Div style={{ spacing: 40, layout: 'bar', width: '100%' }}>
          {value ? (
            <a
              href={`${process.env.DATA_URL!}/storage/file/${
                value.split(':')[0]
              }`}
              target="_blank"
              style={{ width: 150 }}
            >
              <Hover
                style={{
                  ...styles.button('purple'),
                  fontSize: 15,
                  padding: 8,
                }}
              >
                <Txt>View file</Txt>
              </Hover>
            </a>
          ) : (
            <div style={{ width: 150 }} />
          )}
          {children}
        </Div>
      </div>
    )),
  ),
  branch(
    ({ getAddress }: any) => getAddress !== undefined,
    combineState(({ initialProps: { field }, onUnmount }) => {
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
      unsubscribes.push(
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
      );
      onUnmount(() => unsubscribes.forEach(u => u()));
      return props => props;
    }),
  ),
  branch(
    ({ mapAddress }: any) => mapAddress,
    compose(
      mapStyle([['filter', ...cssGroups.text]]),
      renderComponent(({ value, style }: any) => (
        <Txt style={style}>
          {value === null ? 'No' : value === true ? 'Checking...' : 'Yes'}
        </Txt>
      )),
    ),
  ),
  branch(
    ({ view }: any) => view,
    compose(
      mapStyle([['filter', ...cssGroups.text]]),
      renderComponent(({ type, value, style }: any) => (
        <Txt style={style}>{getValueString(value, type)}</Txt>
      )),
    ),
  ),
)(Input);
