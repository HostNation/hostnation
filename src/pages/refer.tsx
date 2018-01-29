import * as React from 'react';
import { Div, Txt } from 'elmnt';
import { Hover } from 'mishmash';
import Helmet from 'react-helmet';

import * as logoWide from '../img/logo-wide.png';
import * as florenceLucy from '../img/banners/florence-lucy.png';

import ReferApp from '../apps/apps/refer';
import Box from '../core/box';
import styles, { colors } from '../core/styles';

export default () => (
  <>
    <Helmet>
      <title>Refer | HostNation</title>
    </Helmet>
    <Div style={{ spacing: 50, paddingTop: 50 }}>
      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />

      <Box title="SCREENING & SAFEGUARDING" toggle>
        <Txt style={styles.boxText}>
          HostNation recognise that whilst asylum seekers and refugees over the
          age of 18 are not technically classified as ‘vulnerable adults’ many
          of them are nevertheless vulnerable. For this reason all befrienders
          on our database are screened and checked.
        </Txt>
        <Txt style={styles.boxText}>
          They provide two references that are followed up and they also upload
          their passport ID and a photo of themselves and their DBS/PVG
          certificate if they have one. They fill in a detailed screening and
          profiling questionnaire and HostNation calls each applicant to discuss
          the role and ensure suitability. They commit to online training and to
          read the befriending guide which has a lot of information on seeking
          asylum in the UK, the problems many asylum seekers and refugees
          encounter, how the system works, best practice befriending,
          boundaries, signposting to specialist support services etc.
        </Txt>
        <Txt style={styles.boxText}>
          Many of our befrienders are recruited from refugee support networks or
          come from caring professions or have a background of community
          volunteering and many of them have a DBS. We do not ask them to have a
          DBS-check specifically to join HostNation as this is primarily an
          introductory service. We assume that we are matching informed and
          consenting adults who will take responsibility for their friendship.
        </Txt>
        <Txt style={styles.boxText}>
          We do not take children (under 18) or people with substance abuse
          issues and advise against referring the highly vulnerable or those
          with mental health problems. If you feel it is necessary for the
          person you are referring to be matched with someone from our database
          who has a DBS, please state this in the any other information section
          at the end of the referral form.
        </Txt>
      </Box>

      <Box title="SCOPE OF SERVICES AND EXCLUSION OF LIABILITY" toggle>
        <Txt style={{ ...styles.boxText, fontSize: 22, fontWeight: 'bold' }}>
          Scope of Services
        </Txt>
        <Txt style={styles.boxText}>
          HostNation is primarily an introductory service – putting socially
          isolated asylum seekers, refugees or migrants in need of friendship,
          in contact with local, volunteer befrienders offering friendship. This
          is an altruistic, social arrangement and there is no payment or
          professional service provided.
        </Txt>
        <Txt style={styles.boxText}>
          Refugees referred to the service must understand that befrienders
          commit to meet their befriendee regularly (once every week or two
          weeks) over a period of 3 months. Befrienders offer time spent
          together to listen, to talk, to practice English, to explore the area
          and to make visits. They are there to make their friends feel welcome
          and valued as human beings.
        </Txt>
        <Txt style={styles.boxText}>
          After 3 months it is up to befriender and befriendee to decide whether
          or not they maintain contact. Befrienders are not social workers, case
          workers or legal experts and cannot help with the progress of asylum
          claims or housing applications but may be able to help their friends
          access expert support should it be needed.
        </Txt>
        <Txt style={styles.boxText}>
          HostNation is not responsible for verifying the accuracy of
          information given by befrienders or referrers. It will do what it can
          to ensure a successful match and arrange the first meeting but it
          cannot take responsibility for managing the continuing relationship
          between befriender and befriendee. Support after the initial meeting
          is limited; further meet ups are arranged directly between befriender
          and befriendee. HostNation will check on the status of the
          relationship at 1 month and 3 month intervals with both referrer and
          befriender.
        </Txt>
        <Txt style={{ ...styles.boxText, fontSize: 22, fontWeight: 'bold' }}>
          Exclusion of Liability
        </Txt>
        <Txt style={styles.boxText}>
          As HostNation is an introductory service, we do not accept
          responsibility for any relationships formed as a result of using our
          web site.  To that end, please note that we hereby exclude all and any
          losses, liabilities, claims, damages, expenses or costs (whether as a
          consequence of our negligence or otherwise) arising directly or
          indirectly in connection with any content on or provided through the
          web site (including any relationship which is initiated by or results
          from use of the web site).
        </Txt>
      </Box>

      <Box title="REFUGEE & REFERRER REGISTRATION FORM" color="purple">
        <Txt style={{ ...styles.boxText, fontWeight: 'bold' }}>
          IMPORTANT PLEASE READ THIS FIRST:
        </Txt>
        <Txt style={styles.boxText}>
          HostNation is a befriending service that connects people in Greater
          London.
        </Txt>
        <Txt style={styles.boxText}>
          It is for asylum seekers and refugees who are lonely, relatively new
          to London or still curious to discover and see more of the city. It is
          for people who would like to connect more with London and Londoners.
        </Txt>
        <Txt style={styles.boxText}>
          If this is you, and you are prepared to commit to a three month
          befriending programme, then please fill in this form together with
          your referrer.
        </Txt>
        <Txt style={styles.boxText}>
          To fill in this form you need to be online with a secure connection.
          All information given is treated as highly confidential and securely
          encrypted. Only the starred questions are essential but the more
          personal and background information you can provide, the better the
          match we can make.
        </Txt>
        <ReferApp />
      </Box>

      <Box title="HOSTNATION PRIVACY POLICY" toggle>
        <Txt style={styles.boxText}>
          At HostNation we will only collect, process and store information
          about you that you have willingly provided. We aim to be open about
          collecting this information and clear about what we will use it for.
          You do not need to give us any information to use our website,
          although as a result of your use of the website we may collect cookies
          and other related information (see below).
        </Txt>
        <Txt style={styles.boxText}>
          We will not share your information with third parties or outside of
          the European Economic Area (EEA) without your permission unless we are
          legally permitted or required to do so. There are times when we may be
          forced to share your information with police, regulatory bodies or
          legal advisors without your permission (sometimes referred to as
          ‘breaching confidentiality’).
        </Txt>
        <a href="/privacy-policy.pdf" target="_blank">
          <Hover
            style={{
              ...styles.boxText,
              color: colors.purple,
              display: 'inline-block',
              fontWeight: 'bold',
              hover: { color: colors.purpleDark },
            }}
          >
            <Txt>Read our full privacy policy here.</Txt>
          </Hover>
        </a>
      </Box>

      <img src={florenceLucy} />
    </Div>
  </>
);
