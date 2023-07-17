import React from 'react';
import Helmet from 'react-helmet';

import logoWide from '../img/logo-wide.png';
import logoPreview from '../img/logo-strapline.jpg';

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
          <img src={logoWide} style={{ maxWidth: 400 }} />
        </div>
        <Div style={{ width: 250, spacing: 10, margin: '0 auto' }}>
          <Button
            to="/befriend"
            color="yellow"
            style={{ fontSize: 16, padding: 10 }}
          >
            Befriend a refugee
          </Button>
          <Button
            to="/refer"
            color="purple"
            style={{ fontSize: 16, padding: 10 }}
          >
            Refer a refugee
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
      ref={setWidthElem}
      style={{
        margin: '0 auto',
        maxWidth: 850,
        paddingTop: 0,
      }}
    >
      <div
        style={{
          background: colors.yellowFaint,
          position: 'absolute',
          // position: 'fixed' - for sticky           
          zIndex: 100,
          width: '100%',
          top: 45,
          left: 0,
          paddingTop: small ? 10 : 3,
          paddingBottom: 3,
        }}
      >
        <Txt style={{ ...styles.text, fontSize: 12, fontWeight: 'bold', lineHeight: '5px', textAlign: 'center', }}>
          Read our latest annual report: &nbsp;{' '}
          <Link to="/hostnation-annual-report-2022.pdf" newTab>
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
              HostNation 2020-21
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
          textAlign: 'left',
          padding: '0 15px',
        }}
      >
        We are a city-based, refugee support platform connecting refugees to residents through small acts of kindness, inclusion and friendship. Once introduced by HostNation, it’s up to our volunteer befrienders and their refugee friends to make plans and to meet up to participate in city life. We ask for a weekly commitment of meeting face-to-face over three months, but many matches become firm friends.

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
          to="/hostnation-annual-report-2022.pdf"
          newTab
          color="black"
          style={{ width: 320, fontSize: 16, margin: '0 auto' }}
        >
          Read our latest
          <br />
          annual report
        </Button>
        <Button
          to="mailto:info@hostnation.org.uk"
          newTab
          color="black"
          style={{ width: 320, fontSize: 16, margin: '0 auto' }}
        >
          info@hostnation.org.uk
          <br />
          for updates or enquiries
        </Button>
      </Div>
    </div>
  );
};

export default () => (
  <Layout location="/">
    <Helmet>
      <meta charSet="utf-8" />
      <title>HostNation | Helping refugees through friendship</title>
      <meta name="description" content="HostNation believes every refugee deserves a friend. We are a volunteer-led organisation supporting refugees. We connect those offering friendship with those needing it." />
      <meta name="twitter:site" content="@hostnation" />
      <meta name="twitter:image" content={logoPreview} />
    </Helmet>

    {/* <TopBanner /> */}


    <Div style={{ spacing: 25, padding: '50px 0' }}>
      <TopButtons />


      <Txt style={{...styles.title, textAlign: 'left', padding: 0}}>HostNation believes every refugee deserves a friend.</Txt>
        <Txt style={{ ...styles.text, textAlign: 'left'}}>
        We are a volunteer-led organisation supporting refugees. We connect those offering friendship with those needing it.
        </Txt>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />

      <Div style={{ spacing: 20 }}>
        <Txt style={{ ...styles.text, textAlign: 'left', fontWeight: 'bold', color: colors.purple }}>
          <Hover style={{ ...styles.text, color: colors.purple, textDecoration: 'underline', fontWeight: 'bold', hover: { color: colors.purpleDark }, }} >
            {({ hoverProps, style }) => (
              <a href="/befriend" {...hoverProps} style={style}>
                Volunteer with us to befriend a refugee in London, Greater Manchester or Tyne & Wear.
              </a>
            )}
          </Hover>
        </Txt>
      </Div>

      <Div style={{ spacing: 25, background: 'white' }}>
        {/* <img src={partyImg} /> */}
        <Txt style={{ ...styles.body, textAlign: 'center', fontWeight: 'bold', paddingTop: '25px' }}>
        Watch this film made by our Northern team:
        </Txt>

        <Div style={{ spacing: 20 }}>
          <div style={{ position: 'relative', paddingBottom: '30%', marginLeft: "20%", marginRight: "20%"}}>
            <iframe
              src="https://player.vimeo.com/video/798823473?title=0&byline=0&portrait=0"
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

          <img src={quoteImg} style={{ maxWidth: 600, margin: '0 auto' }} alt="I can honestly say that joining Host Nation is one of the best and most rewarding things I have ever done."/>

        {/* <Txt style={{ ...styles.body, textAlign: 'center', fontSize: 15, marginTop: '-20px' }}>
          Films 1 min each and shot for HostNation by @DamnFineMedia.
        </Txt> */}

        <IntroText />
        <img src={statsImg} style={{ maxWidth: 600, margin: '0 auto 50px' }} alt="700 matches and counting... 86% of our refugee friends say they feel better as a result, 93% of our befrienders find the experience rewarding" />
      </Div>
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.body}>
          If you are an asylum seeker or refugee and would like a befriender please
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
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.body}>
          If you like what we do but are not able to befriend,
          please consider a donation.
        </Txt>
        <Button
          to="https://checkout.justgiving.com/w8d0xdwlda"
          newTab
          color="purple"
          style={{ margin: '0 auto', fontSize: 18, padding: 10 }}
        >
          Donate here
        </Button>
        <img style={{ width: 300, display: 'block', margin: 'auto' }} src={"https://www.jg-cdn.com/buttons/payment-type-logos-gb.svg"} alt={"Pay with Mastercard, Visa, American Express, PayPal, Bank Transfer, Apple Pay or Direct Debit."}></img>
      </Div>




      <Div style={{ spacing: 25 }}>
        <Txt style={{ ...styles.body }}>
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
            style={{ margin: '0 auto', fontSize: 18, padding: 10 }}
          >
            Read the guide
          </Button>
        </Div>
      </Div>
      <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
      <Div style={{ spacing: 25 }}>
        <Txt style={styles.title}>Refugee Support Organisations</Txt>
        <Txt style={styles.body}>
          For a list of organisations in London, Manchester, Newcastle and Gateshead that provide refugee support -
          advice, casework, housing, legal, social, drop-in centres - please use
          our links and help befriendees find the support that
          they need.
        </Txt>
        <Div style={{ spacing: 15 }}>
          <img src={linksIcon} style={{ width: 100, margin: '0 auto' }} />
          <Txt style={{ ...styles.title }}>Signposting Links:</Txt>
        </Div>
        <Div style={{ spacing: 15 }}>
          <Button
            to="/signposting-London.pdf"
            newTab
            color="purple"
            style={{ margin: '0 auto', fontSize: 18, padding: 10 }}
          >
            London
          </Button>
        </Div>
        <Div style={{ spacing: 15 }}>
          <Button
            to="/signposting-Manchester.pdf"
            newTab
            color="yellow"
            style={{ margin: '0 auto', fontSize: 18, padding: 10 }}
          >
            Manchester
          </Button>
        </Div>
        <Div style={{ spacing: 15 }}>
          <Button
            to="/signposting-Tyne-Wear.pdf"
            newTab
            color="black"
            style={{ margin: '0 auto', fontSize: 18, padding: 10 }}
          >
            Newcastle &amp; Gateshead
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
            {
              link: 'https://www.instagram.com/hostnationuk/',
              icon: icons.instagram,
            },
            {
              link: 'https://www.youtube.com/@HostNation',
              icon: icons.youtube,
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
