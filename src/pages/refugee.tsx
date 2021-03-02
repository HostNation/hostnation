import * as React from 'react';
import { Div, Txt } from 'elmnt';
import Helmet from 'react-helmet';

import * as logoWide from '../img/logo-wide.png';
import * as maryAmira from '../img/banners/mary-amira.png';
import * as johnAmin from '../img/banners/john-amin.png';
import * as yvette from '../img/quotes/quote-yvette.png';

import Box from '../core/Box';
import { Link } from '../core/router';
import styles, { colors } from '../core/styles';

export default () => (
  <>
    <Helmet title="Befriend | HostNation" />
    <Div style={{ paddingTop: 50, paddingBottom: 50 }}>
      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Div style={{ padding: '50px 0', spacing: 20 }}>
        <Txt style={{ ...styles.title, fontSize: 30 }}>
          Welcome to asylum seekers and refugees
        </Txt>
      </Div>
      <img src={maryAmira} />
      <Div style={{ padding: '50px 0', spacing: 30, background: 'white' }}>
        <Txt style={styles.boxText}>
          If you are an asylum seeker or refugee over 18 and you live in London,
          Middlesbrough or Stockton-on-Tees, then HostNation is here for you.
        </Txt>
        <Txt style={styles.boxText}>
          Do you want a local friend to chat to and find out more about life
          here in the UK? It’s a great way to practice your English and explore
          new places. It can be lots of fun.
        </Txt>
        <Txt style={styles.boxText}>
          84% of our refugee friends say they felt better, more positive and
          happier after knowing their friend for three months.
        </Txt>
        <Txt
          style={{
            ...styles.boxText,
            fontSize: 30,
            fontWeight: 'bold',
            paddingTop: 30,
          }}
        >
          How HostNation works
        </Txt>
        <Txt style={styles.boxText}>
          We help refugees and asylum seekers find a local friend to help settle
          into the UK. We will introduce you online, then you will chat on the
          phone once a week at first.
        </Txt>
        <Txt style={styles.boxText}>
          When you are both ready, and if Covid rules allow, you can meet face
          to face for outings to places like local cafes, parks, markets or
          museums.
        </Txt>
        <Txt style={styles.boxText}>
          You both start with a promise to be in touch for three months. But
          many friendships go so well that they continue for years!
        </Txt>
      </Div>
      <img src={johnAmin} />
      <Div style={{ padding: '50px 0', spacing: 30, background: 'white' }}>
        <Txt style={{ ...styles.boxText, fontSize: 30, fontWeight: 'bold' }}>
          How to apply for a friend
        </Txt>
        <Txt style={styles.boxText}>
          You need someone to refer you to us. This might be your social worker,
          caseworker, lawyer, therapist or teacher. We need a person who knows
          you and can tell us this is the right service for you.
        </Txt>
        <Txt style={{ ...styles.boxText, fontWeight: 'bold' }}>
          Send them to our website to fill in our referral form.
          <Link to="/refer">
            <Txt
              style={{
                ...styles.boxText,
                fontWeight: 'bold',
                color: colors.yellow,
                display: 'block',
                padding: '5px 0',
                textDecoration: 'underline',
                wordBreak: 'break-word',
              }}
            >
              https://www.hostnation.org.uk/refer
            </Txt>
          </Link>
        </Txt>
        <Txt style={styles.boxText}>
          Then we will contact you to find out more about you and who you would
          like to meet. We try to make a good match with one of the people on
          our database, who we have checked carefully. They are called your
          befriender.
        </Txt>
        <Txt style={styles.boxText}>
          We always match women with women. If you are a man, we may match you
          to a male or a female. This is because we have more female befrienders
          on our list.
        </Txt>
        <Txt style={styles.boxText}>
          Important: we are NOT a dating site. This is not a place to find a
          girlfriend or boyfriend.
        </Txt>
      </Div>
      <Div style={{ padding: '50px 0', spacing: 30 }}>
        <Box title="YOU CAN APPLY IF:" border>
          <ul
            style={{
              ...(styles.boxText as any),
              lineHeight: 1.5,
              listStyleType: 'disc',
              paddingLeft: 40,
            }}
          >
            <li style={{ margin: '5px 0' }}>
              You are an asylum seeker or refugee.
            </li>
            <li style={{ margin: '5px 0' }}>
              You live in Greater London or Teesside.
            </li>
            <li style={{ margin: '5px 0' }}>You are over 18.</li>
            <li style={{ margin: '5px 0' }}>
              You speak some English and have a mobile phone.
            </li>
            <li style={{ margin: '5px 0' }}>
              You have someone who can refer you to us.
            </li>
            <li style={{ margin: '5px 0' }}>
              You are not in crisis with your asylum case, mental health or
              housing.
            </li>
            <li style={{ margin: '5px 0' }}>
              You are going to be living in the same area for the next six
              months.
            </li>
            <li style={{ margin: '5px 0' }}>
              You like the idea of making a new friend and finding out more
              about your new home.
            </li>
          </ul>
        </Box>
        <Txt
          style={{
            ...styles.boxText,
            color: colors.purple,
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            paddingTop: 18,
          }}
        >
          We are looking forward to meeting you!
        </Txt>
        <Txt
          style={{
            ...styles.boxText,
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          It can be very hard moving to a new country. You will feel more at
          home with a local friend by your side.
        </Txt>
      </Div>
      <img src={yvette} />
    </Div>
  </>
);
