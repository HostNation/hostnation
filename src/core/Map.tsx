import * as React from 'react';
import {
  branch,
  compose,
  enclose,
  map,
  render,
  withHover,
  Wrap,
} from 'mishmash';
import { Div, Txt } from 'elmnt';
import { encodeId } from 'common';
import { getData, Link, Spinner } from 'common-client';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';

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

const MapMarker = ({
  index,
  position,
  icon,
  title,
  info,
  link,
  isOpen,
  openInfo,
  closeInfo,
}) => (
  <Marker
    position={position}
    icon={{
      url: icon,
      scaledSize: new (window as any).google.maps.Size(30, 30),
      anchor: new (window as any).google.maps.Point(15, 15),
    }}
    onClick={() => openInfo(index)}
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
            <div style={{ paddingTop: 15 }}>
              <Link to={link} route>
                <Wrap hoc={withHover}>
                  {({ isHovered, hoverProps }) => (
                    <Txt
                      {...hoverProps}
                      style={{
                        ...styles.base,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: isHovered ? colors.purpleDark : colors.purple,
                      }}
                    >
                      View details
                    </Txt>
                  )}
                </Wrap>
              </Link>
            </div>
          </Div>
        }
      </InfoWindow>
    )}
  </Marker>
);

export default compose(
  getData(
    {
      name: 'befrienders',
      filter: ['AND', ['archived', null], ['mapaddress', '!=', null]],
      fields: [
        'id',
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
        'id',
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
    ({ data }) => !data,
    render(() => <Spinner style={{ color: colors.purple }} />),
  ),
  render(({ next }) => (
    <Div style={{ layout: 'stack', spacing: 30 }}>
      {next()}
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
  map(({ data: { befrienders, refugees }, ...props }) => ({
    ...props,
    markers: [
      ...befrienders.map(
        ({
          id,
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
              `${ready ? (match ? 'greenStar' : 'blueStar') : 'redQuestion'}${
                sex === 'Male' ? 'Dark' : 'Light'
              }`
            ],
          title: `${firstname} ${lastname}`,
          info: [
            ['Address', `${address}\n${postcode}`],
            ['Sex', sex],
            ['Ready', ready ? 'Yes' : 'No'],
            ['Match', match],
          ],
          link: `/${match ? 'matched' : 'unmatched'}/${encodeId(id)}`,
        }),
      ),
      ...refugees.map(
        ({ id, firstname, lastname, address, postcode, mapaddress, sex }) => ({
          position: mapaddress,
          icon: icons[`yellowStar${sex === 'Male' ? 'Dark' : 'Light'}`],
          title: `${firstname} ${lastname}`,
          info: [['Address', `${address}\n${postcode}`], ['Sex', sex]],
          link: `/referrals/${encodeId(id)}`,
        }),
      ),
    ],
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ8P7-0kTGz2_tkcHjOo0IUiMB_z9Bbp4',
    containerElement: <div style={{ height: 500 }} />,
    loadingElement: <Spinner style={{ color: colors.purple }} />,
    mapElement: <div style={{ height: '100%' }} />,
  })),
  withScriptjs as any,
  withGoogleMap,
  enclose(
    ({ setState }) => (props, state) => ({
      ...props,
      ...state,
      openInfo: index =>
        index !== props.openIndex && setState({ openIndex: index }),
      closeInfo: () => setState({ openIndex: -1 }),
    }),
    { openIndex: -1 },
  ),
)(({ markers, openIndex, openInfo, closeInfo }) => (
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
));
