import * as React from 'react';
import { Div, Hover, Icon, Txt } from 'elmnt';
import r from 'refluent';
import Helmet from 'react-helmet';
import { withWidth } from '../common-client';

import * as logoWide from '../img/logo-wide.png';

import * as photos1 from '../img/photos/party1.png';
import * as photos2 from '../img/photos/party2.png';
import * as photos3 from '../img/photos/party3.png';
import * as photos4 from '../img/photos/party4.png';

import * as contactIcon from '../img/icons/contact.png';
import * as guideIcon from '../img/icons/guide.png';
import * as linksIcon from '../img/icons/links.png';
import * as testimonialsIcon from '../img/icons/testimonials.png';

import * as anthonyStory from '../img/anthony-story.png';

import Button from '../core/Button';
import { Link } from '../core/router';
import styles, { colors, icons } from '../core/styles';

const photos = [photos1, photos2, photos3, photos4];

const testimonialStyle = color => ({
  ...styles.text,
  fontSize: 18,
  fontStyle: 'italic' as 'italic',
  fontWeight: 'normal' as 'normal',
  color: colors[color],
});

export default r
  .do((_, push, commit) => {
    push({ photo: null });
    if (commit) {
      setTimeout(() =>
        push({ photo: photos[Math.floor(Math.random() * photos.length)] }),
      );
    }
  })
  .yield(({ photo }) => (
    <>
      <Helmet title="HostNation | Helping refugees through friendship" />
      <div
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
      </div>
      <Div style={{ spacing: 50, padding: '200px 0' }}>
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
            Currently working in Greater London &amp; Teesside.
          </Txt>
        </Div>
        {/* <Div
          style={{
            spacing: 20,
            background: 'white',
            padding: '40px',
            border: `2px solid ${colors.black}`,
          }}
        >
          <Txt style={{ ...styles.text, fontSize: 16, fontWeight: 'bold' }}>
            Sadly, HostNation has had to suspend its befriending service during
            lockdown.
            <br />
            But we’re not standing still.
          </Txt>
          <Txt style={{ ...styles.text, fontSize: 16, fontWeight: 'bold' }}>
            Our wonderful volunteer befrienders are stepping into the breach to
            help battle isolation and poor mental health during the crisis. They
            have been a lifeline for their befriendees. They are rising to the
            challenge of treating their refugee befriendees as a part of their
            extended family as well as a part of the HostNation community. We
            are immensely grateful for their small acts of kindness, inclusion
            and friendship.
          </Txt>
          <Txt
            style={{
              ...styles.text,
              fontSize: 16,
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            “I’m not feeling good at the moment, but Jo is helping a lot. She
            picked up my medication and my shopping. She texts me constantly.
            Even though she is white and I am black, she makes me feel like
            we're the same. She is amazing. It is a match from heaven.” (Lily,
            refugee from DRC).
          </Txt>
          <Txt style={{ ...styles.text, fontSize: 16, fontWeight: 'bold' }}>
            We hope to open again soon.
          </Txt>
        </Div> */}
        <img src={photo} />
        <Div style={{ spacing: 20 }}>
          <Txt style={{ ...styles.text, fontSize: 24 }}>
            We are a city &amp; town-based introductory service connecting
            residents to refugees through small acts of kindness, inclusion and
            friendship. As a result of Covid we now offer ‘smart’ befriending
            where matching, introductions and initial befriending can also take
            place online. Regular video-calls are followed by face-to-face meet
            ups when both parties feel ready. We ask for a minimum commitment of
            three months but many matches tell us they have become friends for
            life.
          </Txt>
          <Txt style={{ ...styles.text, fontSize: 24, fontWeight: 'bold' }}>
            Our towns and cities are much friendlier places with a local by your
            side.
          </Txt>
          <Div
            style={{
              spacing: 10,
              maxWidth: 600,
              margin: '20px auto 0',
              padding: 25,
              background:
                'linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)',
            }}
          >
            <Txt
              style={{
                ...styles.text,
                fontSize: 24,
                fontWeight: 'bold',
                color: colors.purple,
              }}
            >
              Total number of HostNation befriender hours
            </Txt>
            <Txt style={{ ...styles.text }}>
              in the first 3 months of befriending
            </Txt>
            <Div style={{ layout: 'bar', spacing: 10, margin: '10px auto 0' }}>
              {'6832'.split('').map((d, i) => (
                <Txt
                  style={{
                    ...styles.text,
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: colors.yellow,
                    padding: 10,
                    width: 70,
                    borderRadius: 100,
                    background: colors.black,
                  }}
                  key={i}
                >
                  {d}
                </Txt>
              ))}
            </Div>
          </Div>
        </Div>
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.body}>
            If you like what we’re trying to do, but are not in London or
            Teesside or don’t have the time to befriend, then please consider a
            one-off or recurring donation.
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
            To get a feel for befriending watch our two new shorts starring
            Suzy, Hakim, Sue and Julie:
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
        <Div style={{ spacing: 25 }}>
          <Txt style={styles.title}>Refugee Support Organisations</Txt>
          <Txt style={styles.body}>
            For a fairly comprehensive list of organisations that provide
            refugee support - advice, casework, housing, legal, social, drop-in
            centres - use our links and help befriendees find the support in the
            capital that they need.
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
          {withWidth(500)({
            next: ({ small = true, setWidthElem }) => (
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
                      “We are fast becoming good friends”
                    </Txt>
                    <Txt style={testimonialStyle('yellow')}>
                      “She is such a lovely person to spend time with and I
                      genuinely look forward to seeing her”
                    </Txt>
                    <Txt style={testimonialStyle('yellow')}>
                      “I feel I’ve learnt so much by doing this. Its been really
                      interesting and humbling”
                    </Txt>
                    <Txt style={testimonialStyle('yellow')}>
                      “This has opened a window of new interests and fulfilment
                      for me that I find difficult to put into words. It’s been
                      very enriching and positive”
                    </Txt>
                    <Txt style={testimonialStyle('yellow')}>
                      “She’s impressive and inspiring and knowing her has
                      enriched my and my family’s life”
                    </Txt>
                    <Txt style={testimonialStyle('yellow')}>
                      “He and I are getting on great!”
                    </Txt>
                    <Txt style={testimonialStyle('yellow')}>
                      “It’s a very good match. I’m really pleased by how well we
                      get on given we come from such different cultures and
                      speak different languages”
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
                      “I’m not feeling lonely any more”
                    </Txt>
                    <Txt style={testimonialStyle('purple')}>
                      “To have someone I can go out with, someone who cares, who
                      thinks of me, who calls me: …things like this make you
                      feel human again”
                    </Txt>
                    <Txt style={testimonialStyle('purple')}>
                      “I don’t feel as scared to talk to English people now as I
                      did before”
                    </Txt>
                    <Txt style={testimonialStyle('purple')}>
                      “I’ve been learning English slang like 'hanging out'”
                    </Txt>
                    <Txt style={testimonialStyle('purple')}>
                      “It’s like having someone to do my life with”
                    </Txt>
                    <Txt style={testimonialStyle('purple')}>
                      “The most important thing is that you feel more welcome
                      and you are not isolated. There is someone there who cares
                      about you”
                    </Txt>
                    <Txt style={testimonialStyle('purple')}>
                      “I’ve been to many new places and feel much more confident
                      about living in London”
                    </Txt>
                  </Div>
                </Div>
              </div>
            ),
          })}
        </Div>
        <div
          id="videos"
          style={{ background: colors.black, height: 3, borderRadius: 3 }}
        />
        <Div style={{ spacing: 25, maxWidth: 600, margin: '0 auto' }}>
          <Txt style={{ ...styles.title, fontSize: 30 }}>
            Loving the Stranger in the Time of Coronavirus: The HostNation Story
          </Txt>
          <Div style={{ layout: 'bar', spacing: 40 }}>
            <div style={{ width: 200 }}>
              <img src={anthonyStory} />
            </div>
            <Txt style={{ ...styles.body, textAlign: 'left' }}>
              Anthony Berman gives a personal account of HostNation, before and
              after COVID-19, and the benefits it has brought to refugees and
              asylum seekers and their befrienders.
            </Txt>
          </Div>
          <Button
            to="/the-hostnation-story.pdf"
            newTab
            color="black"
            style={{ margin: '0 auto' }}
          >
            READ THE BLOG
          </Button>
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
