import * as React from 'react';
import { branch, compose, renderComponent } from 'recompose';
import { Txt } from 'elmnt';
import { combineState, cssGroups, mapStyle } from 'mishmash';
import { root } from 'common';
import { Field } from 'common-client';
import * as debounce from 'lodash.debounce';

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
)(Field);
