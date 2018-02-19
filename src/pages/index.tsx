import * as React from 'react';
import { Div, Icon, Txt } from 'elmnt';
import { enclose, Use, withHover } from 'mishmash';
import Helmet from 'react-helmet';
import { withWidth } from 'common-client';

import * as logoWide from '../img/logo-wide.png';

import * as adelSophia from '../img/photos/adel-sophia.jpg';
import * as darwinSasha from '../img/photos/darwin-sasha.jpg';
import * as florenceLucy from '../img/photos/florence-lucy.jpg';
import * as mohamedJulia from '../img/photos/mohamed-julia.jpg';
import * as oliviaAnna from '../img/photos/olivia-anna.jpg';
import * as tobyLaurence from '../img/photos/toby-laurence.jpg';

import * as darwinSashaBanner from '../img/banners/darwin-sasha-transparent.png';
import * as nithiAndySueBanner from '../img/banners/nithi-andy-sue-transparent.png';
import * as oliviaAnnaBanner from '../img/banners/olivia-anna-transparent.png';

import * as contactIcon from '../img/icons/contact.png';
import * as guideIcon from '../img/icons/guide.png';
import * as linksIcon from '../img/icons/links.png';
import * as newsIcon from '../img/icons/news.png';
import * as testimonialsIcon from '../img/icons/testimonials.png';

import * as doIt from '../img/links/do-it.jpg';
import * as refugeeCouncil from '../img/links/refugee-council.png';
import * as refugeesAtHome from '../img/links/refugees-at-home.png';

import Button from '../core/Button';
import styles, { colors, icons } from '../core/styles';

const photos = [
  adelSophia,
  darwinSasha,
  florenceLucy,
  mohamedJulia,
  oliviaAnna,
  tobyLaurence,
];

const testimonialStyle = color => ({
  ...styles.text,
  fontSize: 18,
  fontStyle: 'italic' as 'italic',
  fontWeight: 'normal' as 'normal',
  color: colors[color],
});
const linkStyle = hover => ({
  background: hover ? '#eee' : 'white',
  maxWidth: 500,
  padding: 10,
  margin: '0 auto',
  spacing: 15,
});

export default enclose(({ setState }) => {
  setState({ photo: null });
  setTimeout(() =>
    setState({ photo: photos[Math.floor(Math.random() * photos.length)] }),
  );
  return (props, state) => ({ ...props, ...state });
})(({ photo }: any) => (
  <>
    <Helmet title="HostNation" />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <Use hoc={withWidth(700)}>
        {({ small = false, setWidthElem }) => (
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
        )}
      </Use>
      <Div style={{ spacing: 10 }}>
        <Txt style={{ ...styles.text, fontSize: 24, fontWeight: 'bold' }}>
          HostNation believes every refugee deserves a friend.
        </Txt>
        <Txt style={{ ...styles.text, fontSize: 24 }}>
          A digital means of connecting those offering friendship with those
          needing it.
        </Txt>
      </Div>
      <img src={photo} />
      <Txt style={{ ...styles.text, fontSize: 24 }}>
        We are a London-based introductory service dedicated to connecting
        people in their communities. Befrienders are matched with and then
        introduced to a refugee or asylum seeker in their area. They commit to
        meeting socially for a minimum of 3 hours once a fortnight over a period
        of 3 months.
      </Txt>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.body}>
          If you like what we’re trying to do, but are not in London or don’t
          have the time to befriend, then please consider donating.
        </Txt>
        <Button
          to="https://mydonate.bt.com/charities/hostnation"
          color="yellow"
          style={{ margin: '0 auto' }}
        >
          DONATE HERE
        </Button>
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.title}>The Befrienders’ Guide</Txt>
        <Txt style={styles.body}>
          For detailed information on befriending and background to seeking
          asylum in the UK read our guide. It also includes answers to
          frequently asked questions (FAQS).
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
      <img
        src={darwinSashaBanner}
        style={{ maxWidth: 650, margin: '0 auto' }}
      />
      <Div style={{ spacing: 40, padding: 40, background: 'white' }}>
        <Div style={{ spacing: 10 }}>
          <img
            src={testimonialsIcon}
            style={{ width: 100, margin: '0 auto' }}
          />
          <Txt style={styles.body}>
            Read what recent friends have said about their experiences.
          </Txt>
        </Div>
        <Use hoc={withWidth(500)}>
          {({ small = true, setWidthElem }) => (
            <div ref={setWidthElem}>
              <Div
                style={{
                  layout: small ? 'stack' : 'bar',
                  spacing: small ? 40 : 0,
                  width: '100%',
                  verticalAlign: 'top',
                }}
              >
                <Div
                  style={{
                    spacing: 25,
                    maxWidth: 350,
                    margin: '0 auto',
                    ...(small ? {} : { width: '50%', paddingRight: 40 }),
                  }}
                >
                  <Txt style={styles.subtitle}>Befrienders</Txt>
                  <Txt style={testimonialStyle('yellow')}>
                    “He’s not an asylum seeker anymore, he’s Sanjal and he’s got
                    a place in our heart”
                  </Txt>
                  <Txt style={testimonialStyle('yellow')}>
                    “We do lots together but more than anything we have long,
                    long talks. We will always keep in touch”
                  </Txt>
                  <Txt style={testimonialStyle('yellow')}>
                    “Each thing we do together feels like a small step to
                    letting her know she’s welcomed and loved. It has been a
                    privilege to help”
                  </Txt>
                  <Txt style={testimonialStyle('yellow')}>
                    “She’s so appreciative of everything and just needs some
                    TLC”
                  </Txt>
                </Div>
                <Div
                  style={{
                    spacing: 25,
                    maxWidth: 350,
                    margin: '0 auto',
                    ...(small ? {} : { width: '50%', paddingLeft: 40 }),
                  }}
                >
                  <Txt style={styles.subtitle}>Refugees</Txt>
                  <Txt style={testimonialStyle('purple')}>
                    “Through Mary I have had the best time of my life in
                    England. She made me realise I wasn't all by myself”
                  </Txt>
                  <Txt style={testimonialStyle('purple')}>
                    “He is the kindest person I have ever met”
                  </Txt>
                  <Txt style={testimonialStyle('purple')}>
                    “When I am with her I feel a deep peace and happiness
                    without negative thoughts or anxiety”
                  </Txt>
                  <Txt style={testimonialStyle('purple')}>
                    “It is such a wonderful thing to meet people who will
                    welcome us into their life”
                  </Txt>
                </Div>
              </Div>
            </div>
          )}
        </Use>
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <div style={{ position: 'relative', paddingBottom: '55%' }}>
        <iframe
          src="https://www.youtube.com/embed/A7xW4w3CTcM?rel=0"
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
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 25 }}>
        <Div style={{ spacing: 15 }}>
          <img src={newsIcon} style={{ width: 100, margin: '0 auto' }} />
          <Button
            to="https://hostnationblog.wordpress.com"
            newTab
            color="purple"
            style={{ margin: '0 auto' }}
          >
            NEWS UPDATES
          </Button>
        </Div>
        <Txt style={styles.body}>For the latest news from HostNation.</Txt>
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <img src={oliviaAnnaBanner} style={{ maxWidth: 650, margin: '0 auto' }} />
      <Div style={{ spacing: 40, padding: 40, background: 'white' }}>
        <Div style={{ spacing: 15 }}>
          <img src={linksIcon} style={{ width: 100, margin: '0 auto' }} />
          <Txt style={styles.title}>Links</Txt>
          <Txt style={styles.body}>
            Here are links to other online sites connecting refugees to host
            communities.
          </Txt>
        </Div>
        <Div style={{ spacing: 20 }}>
          {[
            {
              link: 'https://do-it.org',
              img: doIt,
              text: 'for volunteering opportunities in your area',
            },
            {
              link: 'http://www.refugeesathome.org',
              img: refugeesAtHome,
              text:
                'connecting those with a spare room to refugees and asylum seekers in need of accommodation',
            },
            {
              link: 'https://www.refugeecouncil.org.uk/services',
              img: refugeeCouncil,
              text:
                'a searchable database linking refugees and asylum seekers to support services in Greater London',
            },
          ].map(({ link, img, text }, i) => (
            <Use hoc={withHover} key={i}>
              {({ isHovered, hoverProps }) => (
                <a href={link} target="_blank">
                  <Div {...hoverProps} style={linkStyle(isHovered)}>
                    <img src={img} style={{ width: 100, margin: '0 auto' }} />
                    <Txt style={{ ...styles.text, fontWeight: 'bold' }}>
                      {text}
                    </Txt>
                  </Div>
                </a>
              )}
            </Use>
          ))}
        </Div>
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <img
        src={nithiAndySueBanner}
        style={{ maxWidth: 650, margin: '0 auto' }}
      />
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 35 }}>
        <Div style={{ spacing: 15 }}>
          <img src={contactIcon} style={{ width: 100, margin: '0 auto' }} />
          <Txt style={styles.subtitle}>info@hostnation.org.uk</Txt>
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
            <Use hoc={withHover} key={i}>
              {({ isHovered, hoverProps }) => (
                <a
                  href={link}
                  target="_blank"
                  {...hoverProps}
                  style={{
                    display: 'block',
                    padding: 12,
                    margin: -5,
                    background: isHovered ? colors.purpleDark : colors.purple,
                    borderRadius: 100,
                  }}
                >
                  <Icon {...icon} style={{ color: 'white', fontSize: 24 }} />
                </a>
              )}
            </Use>
          ))}
        </Div>
      </Div>
    </Div>
  </>
));
