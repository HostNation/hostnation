import * as React from 'react';
// import r from 'refluent';
import { Div, Hover, Txt } from 'elmnt';
import Helmet from 'react-helmet';

// import * as mapImage from '../img/map.jpg';
import * as logoWide from '../img/logo-wide.png';
import * as aiLingPattie from '../img/banners/ai-ling-pattie.png';

// import befriendBlocks from '../blocks/befriend';
import Box from '../core/Box';
// import Forms from '../core/Forms';
// import { Link } from '../core/router';
import styles, { colors } from '../core/styles';

// const BefriendForm = r
//   .do((_, push) => ({
//     complete: false,
//     onSubmit: () => push({ complete: true }),
//   }))
//   .yield(
//     ({ onSubmit, complete }) =>
//       complete ? (
//         <Div style={{ spacing: 40, padding: '50px 0' }}>
//           <Txt
//             style={{
//               ...styles.base,
//               fontSize: 30,
//               lineHeight: '40px',
//               fontWeight: 'bold',
//               textAlign: 'center',
//               color: colors.yellow,
//             }}
//           >
//             Thanks for registering!
//           </Txt>
//           <Txt
//             style={{
//               ...styles.text,
//               fontWeight: 'bold',
//               color: colors.yellow,
//             }}
//           >
//             One of the HostNation team will be in touch shortly to arrange a
//             call to talk to you about being a befriender. Please check your
//             inbox (and junk mail) for an email from HostNation. Depending on
//             where you live and the referrals we receive, it may be a few weeks
//             or several months before we match you. In the meantime, please
//             follow us on
//             <Link to="https://www.facebook.com/HostNationUK/" newTab>
//               <Txt
//                 style={{
//                   ...styles.text,
//                   fontWeight: 'bold',
//                   color: colors.yellow,
//                   display: 'inline-block',
//                   padding: '0 5px',
//                   textDecoration: 'underline',
//                 }}
//               >
//                 Facebook
//               </Txt>
//             </Link>
//             and we’ll keep you posted on our progress.
//           </Txt>
//         </Div>
//       ) : (
//         <Forms.Yellow
//           objects={{
//             befriender: {
//               type: 'befrienders',
//               initial: { mapaddress: null },
//             },
//           }}
//           blocks={befriendBlocks()}
//           onSubmit={onSubmit}
//         />
//       ),
//   );

export default () => (
  <>
    <Helmet title="Befriend | HostNation" />
    <Div style={{ spacing: 50, paddingTop: 50 }}>
      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />

      <Box title="WHY WE NEED TO ASK A LOT OF YOU" toggle>
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
          Thank you for your interest in HostNation refugee befriending.
        </Txt>
        <Txt style={styles.boxText}>
          We have temporarily closed our registration. Currently, we are only
          looking for befrienders in certain postcodes, in order to complement
          our existing database. If you are interested in becoming a HostNation
          befriender please email us at{' '}
          <Hover
            style={{
              ...styles.boxText,
              fontWeight: 'bold',
              color: colors.yellow,
              hover: { color: colors.yellowDark },
              display: 'inline',
            }}
          >
            {({ hoverProps, style }) => (
              <a href="mailto:info@hostnation.org.uk">
                <Txt {...hoverProps} style={style}>
                  info@hostnation.org.uk
                </Txt>
              </a>
            )}
          </Hover>{' '}
          with a few details about who you are and where you live.
        </Txt>
        <Txt style={styles.boxText}>Many thanks, HostNation.</Txt>
      </Box>

      {/* <Box title="BEFRIENDER REGISTRATION FORM" color="yellow">
        <Txt style={styles.boxText}>
          Thank you for your interest in HostNation refugee befriending.
        </Txt>
        <Txt style={styles.boxText}>
          We are currently only seeking befrienders who live in Greater London
          zones 3-6 which is where most refugees and asylum seekers are housed.
          If you live in the outer zones but within the M25, we would love to
          have you on board. We are also keen to recruit more men to join
          HostNation.
        </Txt>
        <Txt style={styles.boxText}>
          By registering you commit to being a London host to a socially
          isolated refugee or asylum seeker, who may be recently arrived or have
          lived here 10+ years, but has experienced little of what London has to
          offer. We hope you will show them more of our great city and how they
          can enjoy London and have new, positive experiences cheaply and often
          for free. London is a much friendlier city with a Londoner by your
          side. You must be able to offer at least 3-4 hours of time to spend
          together once or twice a fortnight. Befriending is a service and a
          commitment of time but it can grow into a mutual and personal
          friendship.
        </Txt>
        <Txt style={styles.boxText}>
          Depending on where you live and the referrals we receive, it may be a
          few weeks or several months before we match you. This is driven, to a
          large extent by geography — where befrienders live and where our
          refugee friends are housed — as the map below illustrates:
        </Txt>
        <img src={mapImage} />
        <Txt style={styles.boxText}>
          Meanwhile please follow us on
          <Link to="https://www.facebook.com/HostNationUK/" newTab>
            <Txt
              style={{
                ...styles.boxText,
                fontWeight: 'bold',
                color: colors.yellow,
                display: 'inline-block',
                padding: '0 5px',
                textDecoration: 'underline',
              }}
            >
              Facebook
            </Txt>
          </Link>
          where we’ll keep you posted on our progress.
        </Txt>
        <Txt
          style={{ ...styles.boxText, fontWeight: 'bold', fontStyle: 'italic' }}
        >
          Please do not register if you live outside of Greater London as we are
          not yet in a position to take referrals from outside of the capital.
        </Txt>
        <Txt style={styles.boxText}>Many thanks, HostNation team</Txt>

        <BefriendForm />
      </Box> */}

      <Box title="SCOPE OF SERVICES AND EXCLUSION OF LIABILITY" toggle>
        <Txt style={{ ...styles.boxText, fontSize: 22, fontWeight: 'bold' }}>
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
        <Txt style={{ ...styles.boxText, fontSize: 22, fontWeight: 'bold' }}>
          Exclusion of Liability
        </Txt>
        <Txt style={styles.boxText}>
          As HostNation is an introductory service, we do not accept
          responsibility for any relationships formed as a result of using our
          web site. To that end, please note that we hereby exclude all and any
          losses, liabilities, claims, damages, expenses or costs (whether as a
          consequence of our negligence or otherwise) arising directly or
          indirectly in connection with any content on or provided through the
          web site (including any relationship which is initiated by or results
          from use of the web site). New volunteers should contact us for
          information regarding our liability insurance for active befrienders.
        </Txt>
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
            {({ hoverProps, style }) => (
              <Txt {...hoverProps} style={style}>
                Read our full privacy policy here.
              </Txt>
            )}
          </Hover>
        </a>
      </Box>

      <img src={aiLingPattie} />
    </Div>
  </>
);
