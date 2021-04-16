import * as React from 'react';
import r from 'refluent';
import { Div, Txt } from 'elmnt';
import Helmet from 'react-helmet';
import { restyle, watchHover, withWidth } from '../common-client';

import * as logoWide from '../img/logo-wide.png';
import * as crLogo from '../img/logos/cr.png';
import * as lcfLogo from '../img/logos/lcf.jpg';
import * as phfLogo from '../img/logos/phf.jpg';
import * as tflLogo from '../img/logos/tfl.png';
import * as cfLogo from '../img/logos/cf.png';
import * as molLogo from '../img/logos/mol.png';
import * as cbtLogo from '../img/logos/cbt.jpg';
import * as sseLogo from '../img/logos/sse.jpg';
import * as ggLogo from '../img/logos/gg.png';

import * as anneke from '../img/team/anneke.jpg';
import * as rossana from '../img/team/rossana.png';
import * as anthony from '../img/team/anthony.png';
import * as magda from '../img/team/magda.png';
import * as peteBini from '../img/team/pete-bini.jpg';
import * as danny from '../img/team/danny.png';
import * as dina from '../img/team/dina.png';
import * as emiljan from '../img/team/emiljan.jpg';
import * as joanna from '../img/team/joanna.png';
import * as olivia from '../img/team/olivia.jpg';
import * as jon from '../img/team/jon.png';
import * as claudia from '../img/team/claudia.png';
import * as harriet from '../img/team/harriet.jpg';
import * as abu from '../img/team/abu.png';

import * as anthonyStory from '../img/anthony-story.png';

import Box from '../core/Box';
import Button from '../core/Button';
import styles, { colors } from '../core/styles';

const OpenButton = r
  .do(watchHover)
  .do(
    restyle('color', 'isHovered', (color, isHovered, style) =>
      style
        .defaults(styles.button(color))
        .mergeKeys({ hover: isHovered })
        .merge({
          padding: 5,
          fontSize: 16,
          display: 'inline-block',
          width: 150,
        }),
    ),
  )
  .yield(({ onClick, style, hoverProps, children }) => (
    <Txt
      onClick={onClick}
      {...hoverProps}
      style={{ ...style, padding: 5, fontSize: 16 }}
    >
      {children}
    </Txt>
  ));

const Profile = r
  .do((props$, push) => ({
    isOpen: false,
    toggleIsOpen: () => push({ isOpen: !props$(true).isOpen }),
  }))
  .yield(withWidth(340))
  .yield(
    ({
      image,
      name,
      role,
      bio,
      credit,
      isOpen,
      toggleIsOpen,
      small = true,
      setWidthElem,
    }: any) => (
      <div ref={setWidthElem}>
        <Div style={{ spacing: 30, width: '100%' }}>
          <Div
            style={{
              width: small ? '100%' : 340,
              maxWidth: 340,
              verticalAlign: 'bottom',
              spacing: 20,
            }}
          >
            <Div style={{ layout: 'stack', spacing: 5 }}>
              <img src={image} style={{ width: '100%' }} />
              {credit && (
                <Txt style={{ ...styles.text, fontSize: 14 }}>{credit}</Txt>
              )}
            </Div>
            <Div style={{ spacing: 10 }}>
              <Txt
                style={{
                  ...styles.text,
                  fontSize: 30,
                  color: colors.yellow,
                  fontWeight: 'bold',
                }}
              >
                {name}
              </Txt>
              <Txt
                style={{
                  ...styles.text,
                  fontSize: 24,
                  fontWeight: 'bold',
                }}
              >
                {role}
              </Txt>
              <OpenButton color="purple" onClick={toggleIsOpen}>
                {isOpen ? 'CLOSE' : 'READ MORE »'}
              </OpenButton>
            </Div>
          </Div>
          {isOpen &&
            bio.map((text, i) => (
              <Txt style={{ ...styles.boxText, padding: 0 }} key={i}>
                {text}
              </Txt>
            ))}
        </Div>
      </div>
    ),
  );

const Profiles = r
  .yield(withWidth(750))
  .yield(({ small = true, setWidthElem }) => (
    <div ref={setWidthElem}>
      <Div
        style={{
          spacing: 40,
          maxWidth: 750,
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={anneke}
            name="Anneke Elwes"
            role="Founder and Director"
            bio={[
              'After 20 years running a market research consultancy and six years volunteering in the refugee sector, Anneke took an MA at SOAS specialising in ‘humanitarianism at home’ and the private practice of hosting refugees and asylum seekers. She first volunteered through ICRC in refugee camps for Vietnamese boat people in SE Asia. For nearly a decade Anneke volunteered at Freedom from Torture, where she befriended young asylum seekers, helped run a holiday scheme and started an English conversation group.',
              'Social outreach schemes like these have been the victim of cuts as the refugee sector has had to focus on crisis and casework. Anneke realised that few asylum seekers or refugees have British friends and most are very isolated. She saw that there are many ordinary people who want to help and offer friendship, and just need the right channel. HostNation was the answer. Anneke founded the charity to provide a simple way for citizens and refugees to make friends and share rewarding social experiences, making local communities stronger in the process.',
            ]}
          />
          <Profile
            image={rossana}
            name="Rossana Horsley"
            role="Director"
            bio={[
              'Rossana’s background is in documentary filmmaking, both for television and NGOs, covering a wide range of subjects from arts to the environment. A major strand of her work focused on development issues, which took her filming to several continents. Although she now calls herself a Londoner, she grew up in different countries. She knows that finding your feet in a new culture can be a daunting challenge, even when that choice is made freely.',
              'A long-term supporter of Freedom from Torture, in 2005 Rossana volunteered to be part of their befriending project for unaccompanied minors. Finding this an enriching experience and aware that many people would like to make a similar connection, she was keen to be a part of HostNation to help encourage more such relationships between locals and people looking for a safe refuge in this country.',
            ]}
          />
        </Div>
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={anthony}
            name="Anthony Berman"
            role="Operations Manager"
            bio={[
              'A retired root canal specialist, Anthony still teaches part time at QMUL. He came to London with his family from his native South Africa at the age of 13. Although his circumstances were considerably more comfortable than those of the average refugee or asylum seeker, he still remembers the challenges involved in being uprooted from his home to start a new life.',
              'Twelve years ago Anthony became a volunteer befriender with Freedom from Torture for children who had arrived unaccompanied in the UK. The aim was to introduce some normality into the lives of these frequently damaged young people. The young person with whom he was paired has become part of Anthony’s family and it has been a richly rewarding experience all round. Anthony is also one of the coordinators for the New London Synagogue Drop-In Centre for destitute asylum seekers. He believes strongly that HostNation provides a transformative experience for both sides of the friendships it fosters.',
            ]}
          />
          <Profile
            image={magda}
            name="Magda Wolfe"
            role="Evaluation Manager"
            bio={[
              'Magda holds a master’s degree in Social Policy and Social Research at University College London. She was raised in Poland where she studied Ethnology and Cultural Anthropology at the University of Wroclaw. She moved to the UK in 2002 and pursued a successful career in media and broadcasting.',
              'She is fascinated by observing the ever-changing social landscape and is passionate about driving positive change towards a fairer society. Her interest is in social inequality issues and the problems derived from economic disparity particularly those linked to migration and the forced displacement of people. She joined HostNation in its early days as she strongly believes in the positive impact of intercultural relationships on building cohesive communities.',
            ]}
          />
        </Div>
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={peteBini}
            name="Pete Widlinski &amp; Biniam Araia"
            role="North East Co&#8209;ordinators"
            bio={[
              <span style={{ ...styles.boxText, padding: 0 } as any}>
                Bini is a founding member of IPC (
                <a
                  href="https://i-p-c.org"
                  target="_blank"
                  style={
                    {
                      ...styles.boxText,
                      padding: 0,
                      color: colors.purple,
                      fontWeight: 'bold',
                    } as any
                  }
                >
                  https://i-p-c.org
                </a>
                ), our partner organisation in the North East, operating in both
                Middlesbrough and Newcastle. From a refugee background himself,
                Bini has dedicated over 15 years to supporting the economic and
                social inclusion of refugee and asylum seeker communities both
                through IPC (a registered charity) and The Other Perspective (a
                social enterprise employing vulnerable immigrants). He knows
                from experience how challenging integration can be and is a
                strong advocate of celebrating our differences and bringing
                greater cultural understanding by working together.
              </span>,
              'Pete managed the North of England Refugee Service office in Teesside for 18 years,  running a very successful mentoring programme. He then helped to establish and manage Justice First, assisting people who have been refused asylum to re-engage with the legal process. Pete also chairs The Mary Thompson hardship fund, which raises over £40k per year for asylum seekers and refugees and runs a support drop-in.  Pete has been an active campaigner and advocate for refugee rights for decades and has worked closely with Bini and IPC in the past. Through HostNation, Pete hopes to engage more closely with individuals rather than organisations.',
            ]}
          />
          <Profile
            image={danny}
            name="Daniel Silverstone"
            role="Trustee (Chair)"
            bio={[
              "Danny is a Londoner with a 40-year career in the public and charitable sector culminating in CEO roles at London Boroughs Grants, the Commission for Racial Equality, London Remade – a green social enterprise – and the international human rights charity Interights.  Improving opportunities and rights for our most disadvantaged communities has been a linking thread through his career. He contributed to pathfinding race equality programmes in local government and led the implementation of the amended Race Relations Act while at the CRE. Danny has held a number of non-executive roles including five years on the Big Lottery's England Committee, which invested £400m a year in England's non-profit sector. He chairs the Jewish human rights charity Rene Cassin.",
              "Danny's mother arrived in London in 1939 on the Kindertransport and he grew up in a family marked by his mother's experiences as a child refugee. Danny became a HostNation befriender in 2017. Impressed by the quality of HostNation's work, he was delighted to become HostNation's chair in October 2018.",
            ]}
          />
        </Div>
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={joanna}
            name="Joanna Winterbottom"
            role="Trustee"
            bio={[
              'Jo was a reporter and editor with Reuters news agency for over 20 years, gaining an in-depth knowledge of the news and communications business. She has worked around the world, including in Italy, India, South Africa and the United States. In 2018 she embarked on a freelance career, dedicating more time to voluntary work – a long-term goal. Her voluntary work has included giving practical advice to asylum seekers in London and mentoring immigrants in language skills. In her freelance role she trains journalists with the Reuters Foundation, travelling to destinations as far apart as Kazakhstan and Jamaica. She continues to write and edit.',
              "Jo values HostNation’s aim of giving refugees a warm and supportive welcome to their new home. Jo's own experiences in moving countries have been cushioned by her employer, but have nevertheless given her an insight into the challenges of uprooting your life, creating new social networks and getting to grips with an unfamiliar environment.",
            ]}
          />

          <Profile
            image={emiljan}
            name="Emiljan Gega"
            role="Trustee"
            bio={[
              "Emiljan has called London home for over ten years. Born in Albania, he has been a refugee in various countries, including the Republic of Ireland where he now proudly holds citizenship. He works in strategy consulting and executive search, having graduated from King's College London and the London School of Economics.",
              "Emiljan is deeply interested in politics, business best practice and history. He volunteers at such institutions as The Prince's Trust and Brightside mentoring, building on his previous work leading a schools outreach programme at university. He believes HostNation to be a rare charity that underscores the need for renewed social provision in this country, and that it is at the forefront of demonstrating a progressive approach to communities.",
            ]}
          />
        </Div>
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={olivia}
            name="Olivia Petie"
            role="Trustee"
            bio={[
              'Olivia is a social researcher and evaluator. In her role as Senior Evaluation Officer for the UK government’s Chevening Scholarship Programme, Olivia is involved with research, monitoring and evaluation for this initiative awarding foreign students the chance to study at UK universities. Previously as Research and Evaluation Project Manager at Renaisi (a refugee service provider), Olivia worked with a wide range of community projects including Hackney Borough Council’s Integrated Communities Project and North and South London Cares. Her voluntary experience includes having been a Refugee Guide through the Helen Bamber Foundation.',
              'Olivia was thrilled to join the HostNation board, after a wonderful experience befriending through them. She has been impressed by their human approach, which allows authentic friendships to form, and feels their work has never been more needed. She is looking forward to being part of their future development.',
            ]}
          />
          <Profile
            image={dina}
            name="Dina Nayeri"
            credit="Photo credit: Anna Leader"
            role="Trustee"
            bio={[
              'Prize-winning author Dina Nayeri was born during the Iranian revolution and fled when she was eight. She lived as a refugee for two years before being granted asylum in the United States. She writes fiction and nonfiction on displacement, the refugee crisis, and Iranian diaspora. Her work appears in the New York Times, Guardian, LA Times, New Yorker, Wall Street Journal and Granta amongst others. Her acclaimed Guardian Long Read “The Ungrateful Refugee” was one of the most widely-read essays of 2017. Anthologized by Viet Nguyen in The Displaced, it is now taught in schools across Germany. Her book of the same name is published by Canongate Books.',
              "Dina joined the HostNation Board in 2019. She says: “HostNation is one of the rare charities that understands that the struggle of being a refugee doesn't end the moment one is granted asylum, or even citizenship. To be a refugee is to be forever separated from home, always alert to one's differences. I hope together we can bring some of the joys of home to the displaced people who have become our neighbours.”",
            ]}
          />
        </Div>
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={claudia}
            name="Claudia Möller"
            role="Art Director"
            bio={[
              'Claudia is a freelance graphic designer and previously worked for United Business Media in London, specialising in corporate identity and brand design. Using the iVolunteer scheme at UBM, she created the HostNation logo, website, social media pages, and visual comms. Claudia is in charge of how HostNation looks and has previously volunteered for community centres in North London, offering design advice and services.',
            ]}
          />
          <Profile
            image={jon}
            name="Jon Whitehead"
            role="Digital Architect"
            bio={[
              'Since graduating from Cambridge, Jon has specialised in working in the non-profit sector to build efficient digital platforms to automate and scale up humanitarian and volunteering projects. For six years he worked with Student Hubs, which supports student volunteers to tackle social and environmental challenges. His jobs evolved from Digital Communications Manager, to Digital Analyst, and finally to Digital Architect with responsibility for helping the charity develop new digital systems.',
              'Alongside website and database development Jon developed an online case management system for Safe Passage, which helps unaccompanied child refugees and vulnerable adults in Europe find safe, legal routes to the UK. Jon has developed a secure digital infrastructure for HostNation to create an effective online referral system and manages their digital platform.',
            ]}
          />
        </Div>
        <Div
          style={{
            layout: small ? 'stack' : 'bar',
            spacing: 40,
            verticalAlign: 'top',
            margin: '0 auto',
            maxWidth: small ? 340 : '100%',
          }}
        >
          <Profile
            image={harriet}
            name="Harriet Paterson"
            role="Communications Manager"
            bio={[
              'Harriet is a communications specialist in the non-profit sector, with special focus on international development. She has created a wide range of materials for NGOs including CAFOD, Caritas Internationalis and Christian Aid. An experienced humanitarian reporter, she has written many features and educational resources telling the human story behind the global refugee crisis – from the violent expulsion of the Rohingya from Myanmar to the flight of 6.6 million Syrians during the country’s ongoing civil war.',
              'This made Harriet immediately interested in the simple yet powerful proposal of HostNation, to find friends for people torn from their homes and communities. She is proud to be part of the operational team, as well as a befriender.',
            ]}
          />
          <Profile
            image={abu}
            name="Abu Haron"
            role="Refugee Advisor"
            bio={[
              'Abu fled the Darfur genocide in Sudan as a child and after a harrowing journey arrived in the UK aged 16 with no family, no friends, no money and no English. At 17 he was matched with a befriender through Freedom from Torture’s befriending scheme. Abu gained refugee status in 2015, is a fluent Arabic speaker, speaks Level 2 English, has acted as a community interpreter, has volunteered for the Children’s Radio Foundation, has given talks at the British Red Cross and has done an internship at the BBC.',
              'Abu’s experience as an asylum seeker in the UK and the benefit he received from being befriended, is the inspiration behind HostNation. He helps to promote it as well as acting as an ambassador amongst refugee (and Arabic-speaking) communities.',
            ]}
          />
        </Div>
      </Div>
    </div>
  ));

export default () => (
  <>
    <Helmet title="About Us | HostNation" />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Div style={{ spacing: 25, background: 'white', padding: '50px 0' }}>
        <Txt style={styles.title}>Who Are We?</Txt>
        <Txt style={styles.boxText}>
          HostNation was founded in 2017 to offer friendship and social
          opportunities to asylum seekers and refugees. We wanted to give
          refugees – who are often very isolated – a way into our society
          through the kindness of local residents.
        </Txt>
        <Txt style={styles.boxText}>
          Our founder, Anneke Elwes, was experienced in befriending refugees and
          knew there were many altruistic people willing to step up. So
          HostNation was born: a digital platform for matching friendly locals
          to lonely refugees, which has fast become a wide family of flourishing
          social connections.
        </Txt>
        <Txt style={styles.boxText}>
          We gained charitable status in 2018 and a network of refugee referrers
          are now alerting us to refugees in need of friendship in London and
          across the north-east of England.
        </Txt>
        <Txt style={styles.boxText}>
          We are a CIO registered with the Charity Commission. Charity no.
          1180004
        </Txt>
      </Div>
      <Box title="MEET THE TEAM BEHIND HOSTNATION">
        <Profiles />
      </Box>
      <Div style={{ spacing: 25, background: 'white', padding: '50px 0' }}>
        <Div style={{ spacing: 25, maxWidth: 600, margin: '0 auto' }}>
          <Txt style={{ ...styles.title, fontSize: 30 }}>
            Loving the Stranger in the Time of Coronavirus: The HostNation Story
          </Txt>
          {withWidth(550)({
            next: ({ small = false, setWidthElem }) => (
              <div ref={setWidthElem}>
                <Div
                  style={{
                    layout: small ? 'stack' : 'bar',
                    spacing: small ? 25 : 40,
                  }}
                >
                  <div style={{ width: 200, margin: '0 auto' }}>
                    <img src={anthonyStory} />
                  </div>
                  <Txt style={styles.boxText}>
                    Anthony Berman gives a personal account of HostNation,
                    before and after COVID-19, and the benefits it has brought
                    to refugees and asylum seekers and their befrienders.
                  </Txt>
                </Div>
              </div>
            ),
          })}
          <div style={{ padding: '0 15px' }}>
            <Button
              to="/the-hostnation-story.pdf"
              newTab
              color="black"
              style={{ margin: '0 auto' }}
            >
              READ THE BLOG
            </Button>
          </div>
        </Div>
      </Div>
      <Div style={{ spacing: 25, background: 'white', padding: '50px 0' }}>
        <Txt style={{ ...styles.title, fontSize: 30 }}>
          Funders and Friends of HostNation
        </Txt>
        <Div style={{ spacing: 30 }}>
          <Txt style={styles.boxText}>
            We are very grateful to the Freshfields Bruckhaus Deringer Pro Bono
            Team for their legal support, to the Paul Hamlyn Ideas and Pioneers
            Fund for funding our start up, to The London Community Foundation
            for awarding us a Comic Relief Core Strength Local Communities Grant
            and to Trust for London for funding our core costs through a
            Connected Communities grant 2018-2020.
          </Txt>
          <Txt style={styles.boxText}>
            2019 started well with another successful grant bid from the
            National Lottery Community Fund and ended with a social prescribing
            grant from Team London and the Mayor of London's office.
          </Txt>
          <Txt style={styles.boxText}>
            2020 was challenging for all small charities and we are hugely
            grateful to our existing funders for helping us again when we needed
            it the most. Paul Hamlyn Foundation and the School for Social
            Entrepreneurs provided us with a package of financial and mentoring
            support and funded our regional expansion. Trust for London have
            continued their core funding for a further two years (2020-2022) and
            The National Lottery/DCMS provided emergency Covid-19 funding
            through the Coronavirus Community Support Fund (CCSF). By the end of
            2020 we also had confirmation of three years funding from City
            Bridge Trust. In 2021 GiffGaff partnered with us to help tackle
            digital exclusion amongst refugees with a generous package of
            hardware and data support.
          </Txt>
          <Txt style={styles.boxText}>
            Thank you to all our funders for believing in us and the work we do.
          </Txt>
          {withWidth(700)({
            next: ({ small = false, setWidthElem }) => (
              <div ref={setWidthElem}>
                <Div style={{ layout: 'stack', spacing: 25, paddingTop: 20 }}>
                  <Div
                    style={{
                      layout: small ? 'stack' : 'bar',
                      spacing: 25,
                      margin: '0 auto',
                    }}
                  >
                    <img
                      src={phfLogo}
                      style={{ height: 80, width: 'auto', margin: '0 auto' }}
                    />
                    <img
                      src={lcfLogo}
                      style={{ height: 100, width: 'auto', margin: '0 auto' }}
                    />
                    <img
                      src={crLogo}
                      style={{ height: 100, width: 'auto', margin: '0 auto' }}
                    />
                  </Div>
                  <Div
                    style={{
                      layout: small ? 'stack' : 'bar',
                      spacing: 25,
                      margin: '0 auto',
                    }}
                  >
                    <img
                      src={tflLogo}
                      style={{ height: 100, width: 'auto', margin: '0 auto' }}
                    />
                    <img
                      src={cfLogo}
                      style={{
                        height: small ? 80 : 100,
                        width: 'auto',
                        margin: '0 auto',
                      }}
                    />
                  </Div>
                  <Div
                    style={{
                      layout: small ? 'stack' : 'bar',
                      spacing: 25,
                      margin: '0 auto',
                    }}
                  >
                    <img
                      src={cbtLogo}
                      style={{ height: 100, width: 'auto', margin: '0 auto' }}
                    />
                    <img
                      src={sseLogo}
                      style={{ height: 100, width: 'auto', margin: '0 auto' }}
                    />
                  </Div>
                  <Div
                    style={{
                      layout: small ? 'stack' : 'bar',
                      spacing: 25,
                      margin: '0 auto',
                    }}
                  >
                    <img
                      src={molLogo}
                      style={{ height: 45, width: 'auto', margin: '0 auto' }}
                    />
                    <img
                      src={ggLogo}
                      style={{ height: 100, width: 'auto', margin: '0 auto' }}
                    />
                  </Div>
                </Div>
              </div>
            ),
          })}
          <Txt
            style={{ ...styles.boxText, paddingTop: 30, textAlign: 'center' }}
          >
            And thank you to the following people for giving us especially
            generous financial support or the benefit of your expertise (or
            both!):
          </Txt>
          <Div style={{ spacing: 15, padding: '15px 0' }}>
            {[
              'Martin and Bud Sandbrook',
              'Sue Odell',
              'Imogen Wall',
              'Mark Sutcliffe',
              'Alex Graham',
              'Makena Lohr',
              'Anthony Fawcett',
              'David Crook',
              'Norma O’Flynn',
              'Marion Gough and Martin Hill',
              'Rebecca and Henry Tinsley',
              'Whitehead Family',
              'Frances Mayo',
              'Debbie Forster, MBE',
              'Leah Selinger',
              'Liz Pepler',
            ].map((name, i) => (
              <Txt
                style={{
                  ...styles.boxText,
                  textAlign: 'center',
                  fontWeight: 'normal',
                }}
                key={i}
              >
                {name}
              </Txt>
            ))}
          </Div>
        </Div>
      </Div>
    </Div>
  </>
);
