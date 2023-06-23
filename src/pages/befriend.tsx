import React from 'react';
import Helmet from 'react-helmet';

import logoWide from '../img/logo-wide.png';
import laylaSue from '../img/banners/layla-sue.png';
import nickAli from '../img/banners/nick-ali.png';

import { Div, Hover, Txt } from '../core/elements';
import Box from '../core/Box';
import Layout from '../core/Layout';
import BoroughSelect from '../core/BoroughSelect';
import styles, { colors } from '../core/styles';



export default () => (
  <Layout location="/befriend">
    <Helmet title="Befriend | HostNation" />
    <Div style={{ spacing: 50, paddingTop: 50, paddingBottom: 50 }}>
      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <img src={nickAli} style={{ maxWidth: 600, margin: '0 auto' }} />

      <Box title="WHAT WE ASK OF YOU" toggle>
        <Txt style={styles.boxText}>
          HostNation recognise that whilst asylum seekers and refugees over the
          age of 18 are not technically classified in legal terms as vulnerable
          adults many of them are nevertheless vulnerable. The form is both a
          screening and a profiling questionnaire and for this reason requests a
          lot of personal information.
        </Txt>
        <Txt style={styles.boxText}>
          You will need to upload some documents as ID as well as provide us
          with two references. We need these for safeguarding purposes but all
          personal information and documents will be data protected and will not
          be shared with others. Once the information has been submitted and
          references checked, someone from the team will contact you to discuss
          befriending.
        </Txt>
        <Txt style={styles.boxText}>
          We also ask you to commit to reading the befriending guide which has a
          lot of information on seeking asylum in the UK, the problems many
          asylum seekers and refugees encounter, how the system works, best
          practice befriending, boundaries, signposting to specialist support
          services etc.
        </Txt>
      </Box>

      <Box title="BEFRIENDER REGISTRATION FORM" color="yellow">
        <Txt style={styles.boxText}>
          If you'd like to befriend an asylum seeker or refugee trying to find
          their feet here in the UK, we would love to hear from you.
        </Txt>
        <Txt style={styles.boxText}>
          We ask for an initial commitment of three months, during which we suggest a weekly face to face meet up and regular phone contact. This is your opportunity to show your befriendee around,
          introduce them to free activities and help them participate more in UK
          life. They’ll have the chance to get to know a friendly local and
          practise their English. And you may find a real friend in the process!
        </Txt>

        <Div style={{ spacing: 15, paddingTop: 30 }}>
          <Txt style={{ ...styles.boxText, fontSize: 30, fontWeight: 'bold' }}>
            London
          </Txt>
          {/* <Txt style={{ ...styles.boxText }}>
            We are sorry that London registrations are closed for the time being whilst we work to match those already on board.

          </Txt> */}

          <Txt style={{ ...styles.boxText }}>
            For those wishing to befriend in London:
          </Txt>
          <a
            href="https://airtable.com/shrEs9XBHYuJxLEaP?prefill_Type=Befriender"
            target="_blank"
          >
            <Hover
              style={{
                ...styles.boxText,
                color: colors.yellow,
                fontWeight: 'bold',
                hover: { color: colors.yellowDark },
              }}
            >
              {({ hoverProps, style }) => (
                <Txt {...hoverProps} style={style}>
                 London Registration Form &raquo;
                </Txt>
              )}
            </Hover>
          </a>


          {/* <Txt style={styles.boxText}>
            Please select the borough you live in to see if you can register:
          </Txt>
          <BoroughSelect></BoroughSelect> */}


        </Div>

        <Div style={{ spacing: 15, paddingTop: 30 }}>
          <Txt style={{ ...styles.boxText, fontSize: 30, fontWeight: 'bold' }}>
            North West
          </Txt>
          <Txt style={{ ...styles.boxText }}>
            For those wishing to befriend in Greater Manchester:
          </Txt>
          <a
            href="https://airtable.com/shrikBVOxwnEwgAUV?prefill_Type=Befriender"
            target="_blank"
          >
            <Hover
              style={{
                ...styles.boxText,
                color: colors.yellow,
                fontWeight: 'bold',
                hover: { color: colors.yellowDark },
              }}
            >
              {({ hoverProps, style }) => (
                <Txt {...hoverProps} style={style}>
                  North West: Manchester Registration Form &raquo;
                </Txt>
              )}
            </Hover>
          </a>
        </Div>


        <Div style={{ spacing: 15, paddingTop: 30 }}>
          <Txt style={{ ...styles.boxText, fontSize: 30, fontWeight: 'bold' }}>
            North East
          </Txt>
          <Txt style={{ ...styles.boxText }}>
            For those wishing to befriend in Newcastle and Gateshead:
          </Txt>
          <a
            href="https://airtable.com/shrCcEAP6czVNnjiI?prefill_Type=Befriender"
            target="_blank"
          >
            <Hover
              style={{
                ...styles.boxText,
                color: colors.yellow,
                fontWeight: 'bold',
                hover: { color: colors.yellowDark },
              }}
            >
              {({ hoverProps, style }) => (
                <Txt {...hoverProps} style={style}>
                  North East:  Tyne & Wear Registration Form &raquo;
                </Txt>
              )}
            </Hover>
          </a>
        </Div>
      </Box>

      <Box title="SCOPE OF SERVICES AND EXCLUSION OF LIABILITY" toggle>
        <Txt style={{ ...styles.boxText, fontSize: 30, fontWeight: 'bold' }}>
          Scope of Services
        </Txt>
        <Txt style={styles.boxText}>
          HostNation is an introductory service putting socially isolated asylum
          seekers, refugees and migrants in need of friendship, in contact with
          local, volunteer befrienders offering friendship. We aim to create
          interactions between two different populations (UK residents and those
          seeking refuge) who have problems intersecting, but we cannot
          recommend anyone on the site to you. This is an altruistic, social
          arrangement, not a contractual obligation and there is no payment nor
          are volunteer befrienders expected to provide any professional
          services.
        </Txt>
        <Txt style={styles.boxText}>
          We try to manage the expectations of refugees referred to HostNation
          and help them to understand that befrienders commit to meeting their
          befriendee socially once every week or two weeks over a period of 3
          months. We will also explain that befrienders are not social workers,
          case workers or legal experts and cannot help with the progress of
          asylum claims or housing applications but may be able to help their
          befriendee access expert support should it be needed. For information
          on the role of the befriender please read the Befrienders Guide.
        </Txt>
        <Txt style={styles.boxText}>
          HostNation is not responsible for verifying the accuracy of
          information given by befrienders or referrers. We will do what we can
          to ensure a successful match but cannot guarantee that friendship will
          emerge. We are not making recommendations or any representations about
          the suitability or appropriateness of any relationship that arises
          either directly or indirectly through the use of the website.
        </Txt>
        <Txt style={styles.boxText}>
          Whilst we will help to arrange the first meeting, HostNation cannot
          take responsibility for managing the continuing relationship between
          befriender and befriendee. Support after the initial meeting is
          limited; further meet ups are arranged directly between befriender and
          befriendee. HostNation will check on the status of the relationship at
          1 month and 3 month intervals. During the three months, befrienders
          can contact HostNation with any queries or concerns and we will do our
          best to respond as quickly as we can, but we are unable to provide a
          full support service.
        </Txt>
        <Txt style={{ ...styles.boxText, fontSize: 30, fontWeight: 'bold' }}>
          Exclusion of Liability
        </Txt>
        <Txt style={styles.boxText}>
          As HostNation is an introductory service, we do not accept
          responsibility for any relationships formed as a result of using our
          website. To that end, please note that we hereby exclude all and any
          losses, liabilities, claims, damages, expenses or costs (whether as a
          consequence of our negligence or otherwise) arising directly or
          indirectly in connection with any content on or provided through the
          website (including any relationship which is initiated by or results
          from use of the website). New volunteers should contact us for
          information regarding our liability insurance for active befrienders.
        </Txt>
      </Box>

      <Box title="HOSTNATION PRIVACY POLICY" toggle>
        <Txt style={styles.boxText}>
          At HostNation we will only collect, process and store information about you that you have willingly
          provided. We aim to be open about collecting this information and clear about what we will use it
          for.
        </Txt>
        <a href="/privacy-policy.pdf" target="_blank">
          <Hover
            style={{
              ...styles.boxText,
              color: colors.purple,
              fontWeight: 'bold',
              hover: { color: colors.purpleDark },
            }}
          >
            {({ hoverProps, style }) => (
              <Txt {...hoverProps} style={style}>
                Read our full privacy policy here.
              </Txt>
            )}
          </Hover>
        </a>
      </Box>

      <img src={laylaSue} style={{ maxWidth: 600, margin: '0 auto' }} />
    </Div>
  </Layout>
);
