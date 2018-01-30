import * as React from 'react';
import Link from 'gatsby-link';
import { Div, Icon, Txt } from 'elmnt';
import { Hover, withSize } from 'mishmash';
import { compose, lifecycle } from 'recompose';
import Helmet from 'react-helmet';

import * as logoWide from '../img/logo-wide.png';

import * as adelSophia from '../img/photos/adel-sophia.jpg';
import * as aiLingPattie from '../img/photos/ai-ling-pattie.jpg';
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

import styles, { colors, icons } from '../core/styles';

const photos = [
  adelSophia,
  aiLingPattie,
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
const linkStyle = {
  background: 'white',
  maxWidth: 500,
  padding: 10,
  margin: '0 auto',
  spacing: 15,
  hover: { background: '#eee' },
};

const Header = compose<any, any>(
  withSize(
    'scale',
    'setBoundsElem',
    ({ width } = { width: 0 }) => (width - 400) / 500,
  ),
  lifecycle({
    componentDidMount() {
      this.setState({
        photo: photos[Math.floor(Math.random() * photos.length)],
      });
    },
  }),
)(({ scale, setBoundsElem, photo }) => (
  <div
    style={{
      width: '100%',
      paddingBottom: `${(1 - scale) * 35 + 55}%`,
      backgroundImage: `url("${photo}")`,
      backgroundSize: 'cover',
      backgroundPosition: '50%',
      position: 'relative',
    }}
    ref={setBoundsElem}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0) 60%,rgba(0,0,0,0.5) 100%)',
      }}
    />
    <Div
      style={{
        spacing: 10,
        position: 'absolute',
        bottom: 30,
        left: 0,
        width: '100%',
        padding: '0 15px',
      }}
    >
      <Txt
        style={{
          ...styles.text,
          fontSize: scale * 7 + 17,
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        HostNation believes every refugee deserves a friend.
      </Txt>
      <Txt
        style={{
          ...styles.text,
          fontSize: scale * 7 + 17,
          color: 'white',
          fontWeight: 300,
          textAlign: 'center',
        }}
      >
        A digital means of connecting those offering friendship with those
        needing it.
      </Txt>
    </Div>
  </div>
));

const MainLinks = withSize(
  'small',
  'setBoundsElem',
  ({ width } = { width: 0 }) => width <= 800,
)(({ small, setBoundsElem }) => (
  <div ref={setBoundsElem}>
    <Div
      style={{
        layout: small ? 'stack' : 'bar',
        spacing: small && 20,
        width: '100%',
        padding: 40,
        background: 'white',
      }}
    >
      <div style={small ? {} : { width: '50%', paddingRight: 15 }}>
        <Link
          to="/befriend"
          style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
        >
          <Hover style={styles.button('yellow')}>
            <Txt>BEFRIEND A REFUGEE</Txt>
          </Hover>
        </Link>
      </div>
      <div style={small ? {} : { width: '50%', paddingLeft: 15 }}>
        <Link
          to="/refer"
          style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
        >
          <Hover style={styles.button('purple')}>
            <Txt>REFER A REFUGEE</Txt>
          </Hover>
        </Link>
      </div>
    </Div>
  </div>
));

const Testimonials = withSize(
  'small',
  'setBoundsElem',
  ({ width } = { width: 0 }) => width <= 500,
)(({ small, setBoundsElem }) => (
  <div ref={setBoundsElem}>
    <Div
      style={{
        layout: small ? 'stack' : 'bar',
        spacing: small && 40,
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
          “He’s not an asylum seeker anymore, he’s Sanjal and he’s got a place
          in our heart”
        </Txt>
        <Txt style={testimonialStyle('yellow')}>
          “We do lots together but more than anything we have long, long talks.
          We will always keep in touch”
        </Txt>
        <Txt style={testimonialStyle('yellow')}>
          “Each thing we do together feels like a small step to letting her know
          she’s welcomed and loved. It has been a privilege to help”
        </Txt>
        <Txt style={testimonialStyle('yellow')}>
          “She’s so appreciative of everything and just needs some TLC”
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
          “Through Mary I have had the best time of my life in England. She made
          me realise I wasn't all by myself”
        </Txt>
        <Txt style={testimonialStyle('purple')}>
          “He is the kindest person I have ever met”
        </Txt>
        <Txt style={testimonialStyle('purple')}>
          “When I am with her I feel a deep peace and happiness without negative
          thoughts or anxiety”
        </Txt>
        <Txt style={testimonialStyle('purple')}>
          “It is such a wonderful thing to meet people who will welcome us into
          their life”
        </Txt>
      </Div>
    </Div>
  </div>
));

export default () => (
  <>
    <Helmet>
      <title>HostNation</title>
    </Helmet>
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <img src={logoWide} />
      <div>
        <Header />
        <MainLinks />
      </div>
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.body}>
          We are a London-based introductory service dedicated to connecting
          people in their communities. Befrienders are matched with and then
          introduced to a refugee or asylum seeker in their area. They commit to
          meeting socially for a minimum of 3 hours once a fortnight over a
          period of 3 months.
        </Txt>
        <Txt style={styles.body}>
          If you like what we’re trying to do, but are not in London or don’t
          have the time to befriend, then please consider donating.
        </Txt>
        <a
          href="https://mydonate.bt.com/charities/hostnation"
          target="_blank"
          style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
        >
          <Hover style={{ ...styles.button('yellow'), margin: '0 auto' }}>
            <Txt>DONATE HERE</Txt>
          </Hover>
        </a>
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
          <Link
            to="/guide.pdf"
            target="_blank"
            style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
          >
            <Hover style={{ ...styles.button('black'), margin: '0 auto' }}>
              <Txt>READ THE GUIDE</Txt>
            </Hover>
          </Link>
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
        <Testimonials />
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
          <a
            href="https://hostnationblog.wordpress.com"
            target="_blank"
            style={{ display: 'block', maxWidth: 360, margin: '0 auto' }}
          >
            <Hover style={{ ...styles.button('purple'), margin: '0 auto' }}>
              <Txt>NEWS UPDATES</Txt>
            </Hover>
          </a>
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
          <a href="https://do-it.org" target="_blank">
            <Hover style={linkStyle}>
              <Div>
                <img src={doIt} style={{ width: 100, margin: '0 auto' }} />
                <Txt style={{ ...styles.text, fontWeight: 'bold' }}>
                  for volunteering opportunities in your area
                </Txt>
              </Div>
            </Hover>
          </a>
          <a href="http://www.refugeesathome.org" target="_blank">
            <Hover style={linkStyle}>
              <Div>
                <img
                  src={refugeesAtHome}
                  style={{ width: 100, margin: '0 auto' }}
                />
                <Txt style={{ ...styles.text, fontWeight: 'bold' }}>
                  connecting those with a spare room to refugees and asylum
                  seekers in need of accommodation
                </Txt>
              </Div>
            </Hover>
          </a>
          <a href="https://www.refugeecouncil.org.uk/services" target="_blank">
            <Hover style={linkStyle}>
              <Div>
                <img
                  src={refugeeCouncil}
                  style={{ width: 100, margin: '0 auto' }}
                />
                <Txt style={{ ...styles.text, fontWeight: 'bold' }}>
                  a searchable database linking refugees and asylum seekers to
                  support services in Greater London
                </Txt>
              </Div>
            </Hover>
          </a>
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
          <Hover
            style={{
              display: 'block',
              padding: 12,
              margin: -5,
              background: colors.purple,
              borderRadius: 100,
              hover: { background: colors.purpleDark },
            }}
          >
            <a href="https://www.facebook.com/HostNationUK" target="_blank">
              <Icon
                {...icons.fbThin}
                style={{ color: 'white', fontSize: 24 }}
              />
            </a>
          </Hover>
          <Hover
            style={{
              display: 'block',
              padding: 12,
              margin: -5,
              background: colors.purple,
              borderRadius: 100,
              hover: { background: colors.purpleDark },
            }}
          >
            <a href="https://twitter.com/hostnationuk" target="_blank">
              <Icon
                {...icons.twitter}
                style={{ color: 'white', fontSize: 24 }}
              />
            </a>
          </Hover>
        </Div>
      </Div>
    </Div>
  </>
);
