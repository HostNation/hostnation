import * as React from 'react';
import { Div, Hover, Icon, Txt } from 'elmnt';
import r from 'refluent';
import Helmet from 'react-helmet';
import { withWidth } from '../common-client';

import * as logoWide from '../img/logo-wide.png';

import * as quoteImg from '../img/quotes/quote-jack.png';
import * as partyImg from '../img/party.png';
import * as statsImg from '../img/stats.png';

import * as photos1 from '../img/photos/party1.png';
import * as photos2 from '../img/photos/party2.png';
import * as photos3 from '../img/photos/party3.png';
import * as photos4 from '../img/photos/party4.png';

import * as contactIcon from '../img/icons/contact.png';
import * as guideIcon from '../img/icons/guide.png';
import * as linksIcon from '../img/icons/links.png';

import Button from '../core/Button';
import styles, { colors, icons } from '../core/styles';

const photos = [photos1, photos2, photos3, photos4];

export default r
  .do((_, push, commit) => {
    push({ photo: null });
    if (commit) {
      setTimeout(() =>
        push({ photo: photos[Math.floor(Math.random() * photos.length)] }),
      );
    }
  })
  .yield(() => (
    <>
      <Helmet title="HostNation | Helping refugees through friendship" />
      {/* <div
        style={{
          background: 'white',
          borderBottom: '3px solid #2f3644',
          position: 'fixed',
          zIndex: 100,
          width: '100%',
          top: 50,
          left: 0,
        }}
      >
        <div
          style={{
            margin: '0 auto',
            padding: '15px',
            maxWidth: 850,
          }}
        >
          <Txt style={{ ...styles.text, fontSize: 20, fontWeight: 'bold' }}>
            HostNation are excited to announce that we’re now working in
            partnership with{' '}
            <Link to="https://i-p-c.org/" newTab>
              <Txt
                style={{
                  ...styles.text,
                  fontWeight: 'bold',
                  color: colors.yellow,
                  display: 'inline-block',
                  textDecoration: 'underline',
                }}
              >
                IPC
              </Txt>
            </Link>{' '}
            to provide refugee befriending in the North East from 2021.
          </Txt>
        </div>
        <div style={{ borderBottom: '3px solid #2f3644' }}></div>
        <div
          style={{
            margin: '0 auto',
            padding: '15px',
            maxWidth: 850,
          }}
        >
          <Txt style={{ ...styles.text, fontSize: 20, fontWeight: 'bold' }}>
            <Link to="/hostnation-annual-report.pdf" newTab>
              <Txt
                style={{
                  ...styles.text,
                  fontWeight: 'bold',
                  color: colors.yellow,
                  display: 'inline-block',
                  textDecoration: 'underline',
                }}
              >
                Click here for our 2019-2020 annual report
              </Txt>
            </Link>
          </Txt>
        </div>
      </div> */}
      <Div style={{ spacing: 50, padding: '50px 0' }}>
        {withWidth(700)({
          next: ({ small = false, setWidthElem }) => (
            <div ref={setWidthElem}>
              <Div
                style={{
                  layout: small ? 'stack' : 'bar',
                  width: '100%',
                  spacing: small ? 30 : 50,
                }}
              >
                <div>
                  <img
                    src={logoWide}
                    style={{ maxWidth: 600, margin: '0 auto' }}
                  />
                </div>
                <Div style={{ width: 250, spacing: 10, margin: '0 auto' }}>
                  <Button
                    to="/befriend"
                    color="yellow"
                    style={{ fontSize: 20, padding: 10 }}
                  >
                    BEFRIEND A REFUGEE
                  </Button>
                  <Button
                    to="/refer"
                    color="purple"
                    style={{ fontSize: 20, padding: 10 }}
                  >
                    REFER A REFUGEE
                  </Button>
                </Div>
              </Div>
            </div>
          ),
        })}
        <Div style={{ spacing: 20 }}>
          <Txt style={{ ...styles.text, fontSize: 24, fontWeight: 'bold' }}>
            HostNation believes every refugee deserves a friend.
          </Txt>
          <Txt style={{ ...styles.text, fontSize: 24 }}>
            A digital means of connecting those offering friendship with those
            needing it.
          </Txt>
          <Txt style={{ ...styles.text, fontSize: 24 }}>
            Matching friends in Greater London &amp; Teesside.
          </Txt>
        </Div>
        <img src={quoteImg} style={{ maxWidth: 600, margin: '0 auto' }} />
        <img src={partyImg} />
        <Txt style={{ ...styles.text, fontSize: 24 }}>
          We are a city &amp; town-based introductory service connecting
          residents to refugees through small acts of kindness, inclusion and
          friendship. As a result of Covid we now offer ‘smart’ befriending,
          with first steps taking place online. Regular video-calls are followed
          by one-to-one meet-ups when covid restrictions allow. We ask for a
          minimum commitment of three months but many matches become firm
          friends.
        </Txt>
        <img src={statsImg} style={{ maxWidth: 600, margin: '0 auto' }} />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.body}>
            If you are an asylum seeker or refugee and would like a befriender
            please click here for more information.
          </Txt>
          <Button to="/refugee" color="yellow" style={{ margin: '0 auto' }}>
            REFUGEE PAGE
          </Button>
        </Div>
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.body}>
            If you like what we do but are not able to befriend, please consider
            a donation.
          </Txt>
          <Button
            to="https://www.totalgiving.co.uk/donate/hostnation"
            newTab
            color="yellow"
            style={{ margin: '0 auto' }}
          >
            DONATE HERE
          </Button>
        </Div>
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25, maxWidth: 600, margin: '0 auto' }}>
          <Txt style={styles.body}>
            To get a feel for befriending watch our short films starring Suzy,
            Hakim, Sue and Julie:
          </Txt>
          <Txt style={styles.body}>
            Film 1: “Befriending is an amazing thing to do.”
          </Txt>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/309771300?title=0&byline=0&portrait=0"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Txt style={styles.body}>Film 2: “It really makes me happy.”</Txt>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/309762034?title=0&byline=0&portrait=0"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Txt style={styles.body}>
            Watch Hanifah telling her befriender, Helen, what a difference
            befriending has made:
          </Txt>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/391708540?title=0&byline=0&portrait=0"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
          <Txt style={styles.body}>
            And here’s HostNation’s founder, Anneke, discussing the value of
            befriending with one of our Trustees, Dina, who fled Iran as a
            child.
          </Txt>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/360358161?title=0&byline=0&portrait=0"
              frameBorder="0"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </Div>
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25 }}>
          <Txt style={{ ...styles.title, fontSize: 40 }}>
            For more information on HostNation:
          </Txt>
          <Div style={{ spacing: 15, layout: 'bar', margin: '0 auto' }}>
            <Button
              to="/hostnation-annual-report.pdf"
              newTab
              color="black"
              style={{ width: 320, fontSize: 20, margin: '0 auto' }}
            >
              Read our latest
              <br />
              annual report
            </Button>
            <Button
              to="mailto:info@hostnation.org.uk"
              newTab
              color="black"
              style={{ width: 320, fontSize: 20, margin: '0 auto' }}
            >
              Email: info@hostnation.org.uk
              <br />
              for updates or enquiries
            </Button>
          </Div>
        </Div>
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.title}>The Befrienders’ Guide</Txt>
          <Txt style={styles.body}>
            To learn more about befriending the HostNation way and seeking
            asylum in the UK, read our guide.
          </Txt>
          <Div style={{ spacing: 15 }}>
            <img src={guideIcon} style={{ width: 100, margin: '0 auto' }} />
            <Button
              to="/guide.pdf"
              newTab
              color="black"
              style={{ margin: '0 auto' }}
            >
              READ THE GUIDE
            </Button>
          </Div>
        </Div>
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.title}>Refugee Support Organisations</Txt>
          <Txt style={styles.body}>
            For a list of London organisations that provide refugee support -
            advice, casework, housing, legal, social, drop-in centres - please
            use our links and help befriendees find the support in the capital
            that they need.
          </Txt>
          <Div style={{ spacing: 15 }}>
            <img src={linksIcon} style={{ width: 100, margin: '0 auto' }} />
            <Button
              to="/links.pdf"
              newTab
              color="black"
              style={{ margin: '0 auto' }}
            >
              SIGNPOSTING LINKS
            </Button>
          </Div>
        </Div>

        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 35 }}>
          <Div style={{ spacing: 15 }}>
            <img src={contactIcon} style={{ width: 100, margin: '0 auto' }} />
            <Hover
              style={{
                ...styles.subtitle,
                color: colors.purple,
                hover: { color: colors.purpleDark },
              }}
            >
              {({ hoverProps, style }) => (
                <a href="mailto:info@hostnation.org.uk">
                  <Txt {...hoverProps} style={style}>
                    info@hostnation.org.uk
                  </Txt>
                </a>
              )}
            </Hover>
          </Div>
          <Div style={{ layout: 'bar', spacing: 40, margin: '0 auto' }}>
            {[
              {
                link: 'https://www.facebook.com/HostNationUK',
                icon: icons.fbThin,
              },
              {
                link: 'https://twitter.com/hostnationuk',
                icon: icons.twitter,
              },
            ].map(({ link, icon }, i) => (
              <Hover
                style={{
                  display: 'block',
                  padding: 12,
                  margin: -5,
                  background: colors.purple,
                  borderRadius: 100,
                  hover: { background: colors.purpleDark },
                }}
                key={i}
              >
                {({ hoverProps, style }) => (
                  <a href={link} target="_blank" {...hoverProps} style={style}>
                    <Icon {...icon} style={{ color: 'white', fontSize: 24 }} />
                  </a>
                )}
              </Hover>
            ))}
          </Div>
        </Div>
      </Div>
    </>
  ));
