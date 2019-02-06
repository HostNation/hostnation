import * as React from 'react';
import r from 'refluent';
import { Div, Hover, Txt } from 'elmnt';
import { encodeId } from 'common';
import { getData, Spinner } from 'common-client';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import * as moment from 'moment';

import { Link } from './router';
import styles, { colors } from './styles';

const mapMarkers = {
  question: '1594-help_4x.png',
  star: '1502-shape_star_4x.png',
};
const mapColors = {
  redlight: 'e84118',
  reddark: 'a32d10',
  yellowlight: 'ffea00',
  yellowdark: 'fbc02d',
  greenlight: '4cd137',
  greendark: '339823',
  bluelight: '00a8ff',
  bluedark: '0076b3',
  purplelight: '8c7ae6',
  purpledark: '543ada',
};
const icon = (marker, color, tint) =>
  `https://mt.google.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/${
    mapMarkers[marker]
  }&highlight=ff000000,${mapColors[`${color}${tint}`]},ff000000&scale=2.0`;

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
                <Hover
                  style={{
                    ...styles.base,
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: colors.purple,
                    hover: { color: colors.purpleDark },
                  }}
                >
                  {({ hoverProps, style }) => (
                    <Txt {...hoverProps} style={style}>
                      View details
                    </Txt>
                  )}
                </Hover>
              </Link>
            </div>
          </Div>
        }
      </InfoWindow>
    )}
  </Marker>
);

export default r
  .do(
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
          'address2',
          'postcode2',
          'mapaddress2',
          'sex',
          'ready',
          'match',
          'dob',
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
          'dob',
        ],
      },
    ),
  )
  .yield(
    ({ data, next }) =>
      data ? next() : <Spinner style={{ color: colors.purple }} />,
  )
  .yield(({ next }) => (
    <Div style={{ layout: 'stack', spacing: 30 }}>
      {next()}
      <Div style={{ layout: 'stack', spacing: 5 }}>
        <Div style={{ layout: 'bar', spacing: 5 }}>
          <img src={icon('question', 'red', 'light')} style={{ height: 20 }} />
          <img src={icon('question', 'red', 'dark')} style={{ height: 20 }} />
          <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
            Unready
          </Txt>
        </Div>
        <Div style={{ layout: 'bar', spacing: 5 }}>
          <img src={icon('star', 'blue', 'light')} style={{ height: 20 }} />
          <img src={icon('star', 'blue', 'dark')} style={{ height: 20 }} />
          <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
            Ready
          </Txt>
        </Div>
        <Div style={{ layout: 'bar', spacing: 5 }}>
          <img src={icon('star', 'purple', 'light')} style={{ height: 20 }} />
          <img src={icon('star', 'purple', 'dark')} style={{ height: 20 }} />
          <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
            Ready (secondary)
          </Txt>
        </Div>
        <Div style={{ layout: 'bar', spacing: 5 }}>
          <img src={icon('star', 'green', 'light')} style={{ height: 20 }} />
          <img src={icon('star', 'green', 'dark')} style={{ height: 20 }} />
          <Txt style={{ ...styles.base, fontSize: 14, paddingLeft: 10 }}>
            Matched
          </Txt>
        </Div>
        <Div style={{ layout: 'bar', spacing: 5 }}>
          <img src={icon('star', 'yellow', 'light')} style={{ height: 20 }} />
          <img src={icon('star', 'yellow', 'dark')} style={{ height: 20 }} />
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
  ))
  .do('data', 'id', ({ befrienders, refugees }, id) => {
    if (id) {
      const befriender = befrienders.find(b => b.id === id);
      if (befriender) return { centre: befriender.mapaddress };
      const refugee = refugees.find(r => r.id === id);
      if (refugee) return { centre: refugee.mapaddress };
    }
  })
  .do('data', ({ befrienders, refugees }) => ({
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
          dob,
        }) => ({
          position: mapaddress,
          icon: icon(
            ready ? 'star' : 'question',
            ready ? (match ? 'green' : 'blue') : 'red',
            sex === 'Male' ? 'dark' : 'light',
          ),
          title: `${firstname} ${lastname}`,
          info: [
            ['Address', `${address}\n${postcode}`],
            ['Sex', sex],
            ['Ready', ready ? 'Yes' : 'No'],
            ['Match', match],
            [
              'Age',
              dob
                ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) * 10}s`
                : '-',
            ],
          ],
          link: `/dashboard/${match ? 'matched' : 'unmatched'}/${encodeId(id)}`,
        }),
      ),
      ...befrienders.map(
        ({
          id,
          firstname,
          lastname,
          address2,
          postcode2,
          mapaddress2,
          sex,
          ready,
          match,
          dob,
        }) => ({
          position: mapaddress2,
          icon: icon(
            ready ? 'star' : 'question',
            ready ? (match ? 'green' : 'purple') : 'red',
            sex === 'Male' ? 'dark' : 'light',
          ),
          title: `${firstname} ${lastname}`,
          info: [
            ['Address', `${address2}\n${postcode2}`],
            ['Sex', sex],
            ['Ready', ready ? 'Yes' : 'No'],
            ['Match', match],
            [
              'Age',
              dob
                ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) * 10}s`
                : '-',
            ],
          ],
          link: `/dashboard/${match ? 'matched' : 'unmatched'}/${encodeId(id)}`,
        }),
      ),
      ...refugees.map(
        ({
          id,
          firstname,
          lastname,
          address,
          postcode,
          mapaddress,
          sex,
          dob,
        }) => ({
          position: mapaddress,
          icon: icon('star', 'yellow', sex === 'Male' ? 'dark' : 'light'),
          title: `${firstname} ${lastname}`,
          info: [
            ['Address', `${address}\n${postcode}`],
            ['Sex', sex],
            [
              'Age',
              dob
                ? `${Math.floor(moment().diff(moment(dob), 'y') / 10) * 10}s`
                : '-',
            ],
          ],
          link: `/dashboard/referrals/${encodeId(id)}`,
        }),
      ),
    ].filter(x => x.position),
  }))
  .do(() => ({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ8P7-0kTGz2_tkcHjOo0IUiMB_z9Bbp4',
    containerElement: <div style={{ height: 500 }} />,
    loadingElement: <Spinner style={{ color: colors.purple }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }))
  .transform(withScriptjs as any)
  .transform(withGoogleMap as any)
  .do((_, push) => ({
    openIndex: -1,
    openInfo: index => push({ openIndex: index }),
    closeInfo: () => push({ openIndex: -1 }),
  }))
  .yield(({ centre, markers, openIndex, openInfo, closeInfo }) => (
    <GoogleMap
      defaultZoom={centre ? 13 : 10}
      defaultCenter={centre || { lat: 51.507614, lng: -0.127771 }}
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
