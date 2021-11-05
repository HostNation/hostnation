import React from 'react';
import Helmet from 'react-helmet';

import logoWide from '../img/logo-wide.png';

import quoteImg from '../img/quotes/quote-jack.png';
import partyImg from '../img/party.png';
import statsImg from '../img/stats.png';

import contactIcon from '../img/icons/contact.png';
import guideIcon from '../img/icons/guide.png';
import linksIcon from '../img/icons/links.png';

import { Div, Hover, Icon, Txt } from '../core/elements';
import Button from '../core/Button';
import Layout from '../core/Layout';
import Link from '../core/Link';
import styles, { colors, icons } from '../core/styles';
import { useWidth } from '../core/utils';

const TopButtons = () => {
  const [setWidthElem, small = false] = useWidth(700);
  return (
    <div ref={setWidthElem}>
      <Div
        style={{
          layout: small ? 'stack' : 'bar',
          width: '100%',
          spacing: small ? 30 : 50,
        }}
      >
        <div>
          <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
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
  );
};

const TopBanner = () => {
  const [setWidthElem, small = false] = useWidth(700);
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: 850,
        paddingTop: 0,
      }}
    >
      <div
        style={{
          background: colors.yellowFaint,
          position: 'fixed',
          zIndex: 100,
          width: '100%',
          top: 45,
          left: 0,
          paddingTop: 3,
          paddingBottom: 3,
        }}
      >
        <Txt style={{ ...styles.text, fontSize: 12, fontWeight: 'bold', lineHeight: '5px', textAlign: 'center', }}>
          We are recruiting Trustees.  Do you have financial skills?  Can you help us grow HostNation?{' '}
          <Link to="/treasurer-ad.pdf" newTab>
            <Txt
              style={{
                ...styles.text,
                fontWeight: 'bold',
                fontSize: 12,
                color: colors.purple,
                display: 'inline-block',
                textDecoration: 'underline',
              }}
            >
              More info here.
            </Txt>
          </Link>
        </Txt>
      </div>
    </div>
  );
};

const IntroText = () => {
  const [setWidthElem, small = false] = useWidth(700);
  return (
    <div ref={setWidthElem}>
      <Txt
        style={{
          ...styles.body,
          // fontSize: small ? 20 : 24,
          padding: '0 15px',
        }}
      >
        We are a city &amp; town-based introductory service connecting residents
        to refugees through small acts of kindness, inclusion and friendship. As
        a result of Covid we now offer ‘smart’ befriending, with introductions taking place online and video calls supplementing regular one-to-one meet ups. Regular video-calls are followed by one-to-one
        meet-ups when covid restrictions allow. We ask for a minimum commitment
        of three months but many matches become firm friends.
      </Txt>
    </div>
  );
};

const MoreInfo = () => {
  const [setWidthElem, small = false] = useWidth(700);
  return (
    <div ref={setWidthElem}>
      <Div
        style={{
          spacing: 15,
          layout: small ? 'stack' : 'bar',
          margin: '0 auto',
        }}
      >
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
          info@hostnation.org.uk
          <br />
          for updates or enquiries
        </Button>
      </Div>
    </div>
  );
};

const VimeoVids = () => {
  const [setWidthElem, small = false] = useWidth(800);
  return (
    <div ref={setWidthElem}>
      <Div
        style={{
          display: small ? 'block' : 'table',
          margin: 'auto',
        }}
      >
        <div style={{ maxWidth: small ? 450 : 'none', width: small ? 'unset' : 400, display: small ? 'block' : 'table-cell', margin: '0 auto', padding: small ? '25px 0 0 0' : '25px 10px 10px 10px' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/563320888?title=0&byline=0&portrait=0"
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
        </div>
        <div style={{ maxWidth: small ? 450 : 'none', width: small ? 'unset' : 400, display: small ? 'block' : 'table-cell', margin: '0 auto', padding: small ? '25px 0 0 0' : '25px 10px 10px 10px' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.vimeo.com/video/563324420?title=0&byline=0&portrait=0"
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
        </div>
      </Div>
      <div style={{ maxWidth: small ? 450 : 'none', width: small ? 'unset' : 400, display: 'block', margin: '0 auto', paddingTop: "25px" }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%' }}>
          <iframe
            src="https://player.vimeo.com/video/563322749?title=0&byline=0&portrait=0"
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
      </div>
    </div>
  );
};

export default () => (
  <Layout location="/">
    <Helmet title="HostNation | Helping refugees through friendship" />



    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <TopButtons />

      <TopBanner />

      <Div style={{ spacing: 20 }}>
        <Txt
          style={{
            ...styles.text,
            textAlign: 'center',
            // fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          HostNation believes every refugee deserves a friend.
        </Txt>
        <Txt style={{ ...styles.text, textAlign: 'center', fontSize: 20 }}>
          We connect those offering friendship with those needing it.
        </Txt>
        <Txt style={{ ...styles.text, textAlign: 'center', fontSize: 20 }}>
          Now matching friends across Greater London and in the North East.
        </Txt>
        <Div style={{ padding: '15px 0 0 0' }}>
          <Txt style={{ ...styles.text, textAlign: 'center', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', color: colors.purple }}>
            New HostNation hubs open in Teesside and Tyneside - sign up to befriend now. <br />
            And coming to Manchester and the NW in 2022
          </Txt>
        </Div>

      </Div>
      <img src={quoteImg} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Div style={{ spacing: 50, background: 'white' }}>
        <img src={partyImg} />
        <IntroText />
        <img src={statsImg} style={{ maxWidth: 600, margin: '0 auto 50px' }} />
      </Div>

      <Div style={{ spacing: 25 }}>
        <Txt style={styles.body}>
          If you are an asylum seeker or refugee and would like a befriender
          please
          <Hover
            style={{
              ...styles.text,
              color: colors.black,
              fontWeight: 'bold',
              hover: { color: colors.purpleDark },
            }}
          >
            {({ hoverProps, style }) => (
              <a href="/refugee" {...hoverProps} style={style}>
                {" "}click here for more information.
              </a>
            )}
          </Hover>
        </Txt>
      </Div>

      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <div style={{ background: 'white', padding: '50px 0' }}>
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.body}>
            To see the difference befriending can make, listen to our refugee friends Pinar, Saoud and Hanifah talk about their experiences.
          </Txt>
          <Txt style={{ ...styles.text, textAlign: 'center', fontSize: 16 }}>
            Films 1 min each and shot for HostNation by @DamnFineMedia.
          </Txt>
          <VimeoVids />
        </Div>
      </div>
      <Div style={{ spacing: 25 }}>

        <Txt style={styles.body}>
          For more films, blogs, case studies and podcasts on HostNation befriending
          <Hover
            style={{
              ...styles.text,
              color: colors.black,
              fontWeight: 'bold',
              hover: { color: colors.purpleDark },
            }}
          >
            {({ hoverProps, style }) => (
              <a href="/stories" {...hoverProps} style={style}>
                {" "}click here.
              </a>
            )}
          </Hover>
        </Txt>
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.body}>
          If you like what we do but are not able to befriend,
          <br />
          please consider a donation.
        </Txt>
        <Button
          to="https://www.totalgiving.co.uk/donate/hostnation"
          newTab
          color="purple"
          style={{ margin: '0 auto', fontSize: 22, padding: 10 }}
        >
          DONATE HERE
        </Button>
      </Div>



      <Div style={{ spacing: 25 }}>
        <Txt style={{ ...styles.title, fontSize: 30 }}>
          For more information on HostNation:
        </Txt>
        <MoreInfo />
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.title}>The Befrienders’ Guide</Txt>
        <Txt style={styles.body}>
          To learn more about befriending the HostNation way and seeking asylum
          in the UK, read our guide.
        </Txt>
        <Div style={{ spacing: 15 }}>
          <img src={guideIcon} style={{ width: 100, margin: '0 auto' }} />
          <Button
            to="/guide.pdf"
            newTab
            color="yellow"
            style={{ margin: '0 auto', fontSize: 22, padding: 10 }}
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
          advice, casework, housing, legal, social, drop-in centres - please use
          our links and help befriendees find the support in the capital that
          they need.
        </Txt>
        <Div style={{ spacing: 15 }}>
          <img src={linksIcon} style={{ width: 100, margin: '0 auto' }} />
          <Button
            to="/links.pdf"
            newTab
            color="purple"
            style={{ margin: '0 auto', fontSize: 22, padding: 10 }}
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
  </Layout >
);
