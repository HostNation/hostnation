import * as React from 'react';
import { Div, Txt } from 'elmnt';
import { withSize } from 'mishmash';

import * as logoWide from '../img/logo-wide.png';
import * as phfLogo from '../img/phf-logo.jpg';

import * as anneke from '../img/team/anneke.png';
import * as rossana from '../img/team/rossana.png';
import * as anthony from '../img/team/anthony.png';
import * as magda from '../img/team/magda.png';
import * as jon from '../img/team/jon.png';
import * as claudia from '../img/team/claudia.png';
import * as olivia from '../img/team/olivia.png';
import * as abu from '../img/team/abu.png';

import Box from '../core/box';
import styles, { colors } from '../core/styles';

const Profile = ({ small, image, name, role, bio }) => (
  <Div style={{ spacing: 30 }}>
    <Div
      style={{
        layout: small ? 'stack' : 'bar',
        width: '100%',
        verticalAlign: 'bottom',
        spacing: small ? 30 : 40,
      }}
    >
      <div>
        <img src={image} style={{ maxWidth: 400 }} />
      </div>
      <Div style={{ spacing: 15, width: '50%' }}>
        <Txt
          style={{
            ...styles.boxText,
            fontSize: small ? 24 : 30,
            color: colors.yellow,
            fontWeight: 'bold',
          }}
        >
          {name}
        </Txt>
        <Txt
          style={{
            ...styles.boxText,
            fontSize: small ? 24 : 30,
          }}
        >
          {role}
        </Txt>
      </Div>
    </Div>
    {bio.map((text, i) => (
      <Txt style={styles.boxText} key={i}>
        {text}
      </Txt>
    ))}
  </Div>
);

const Profiles = withSize(
  'small',
  'setBoundsElem',
  ({ width } = { width: 0 }) => width <= 600,
)(({ small, setBoundsElem }) => (
  <div ref={setBoundsElem}>
    <Div style={{ spacing: 40 }}>
      <Profile
        small={small}
        image={anneke}
        name="Anneke Elwes"
        role="Founder and Director of HostNation"
        bio={[
          'After 20 years of running a market research consultancy and 6 years of voluntary work in the refugee sector, Anneke took an MA at SOAS specialising in ‘humanitarianism at home’ and the private practice of hosting refugees and asylum seekers. She first worked with refugees as a volunteer through ICRC in refugee camps for Vietnamese boat people in SE Asia back in the 1980s. More recently Anneke has been a volunteer member of staff at Freedom from Torture (formerly The Medical Foundation) where she trained as a befriender and has befriended young, unaccompanied asylum seekers. She also co-runs their holiday scheme and has started a conversation group to help service users practice their English.',
          "The idea of a national online befriending scheme was born out of the Freedom from Torture holiday scheme where approx. 100 clients from 5 regional offices across the UK are referred annually for a holiday and benefit from transformative experiences, new supportive social networks and genuine on-going friendship from British families. Anneke soon realised that few asylum seekers or refugees have any British friends or offers of friendship and most are very alone. Through her research dissertation and as a result of co-founding Camden City of Sanctuary, a grassroots refugee support network, Anneke also realised that there were many ordinary people, like her, who want to help and offer friendship, but don't know how.",
          'Through HostNation Anneke hopes to make it easier for others to have the same rewarding experience that she has had through befriending asylum seekers, and to provide a simple mechanism for bringing citizens and refugees together in local communities through small acts of kindness, hospitality and companionship.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={rossana}
        name="Rossana Horsley"
        role="HostNation Consultant"
        bio={[
          'Rossana worked for many years in documentary filmmaking, both in television and on non-broadcast pieces for NGOs, covering a wide range of subjects from the arts and culture to the environment. A major strand of her work focused on development issues, which took her filming to several continents.',
          'Although she now calls herself a Londoner, she grew up in different countries. She knows that, even when a move is not forced upon you, finding your feet in a new culture can be a daunting challenge. A long-term supporter of Freedom form Torture, she volunteered in 2005 to be part of their befriending project for unaccompanied minors; the relationship that grew out of that experience was enriching and positive on both sides. Knowing that many people, both from here and others who have sought refuge in this country, want to make a similar connection but are unsure how, she was keen to be a part of HN to help make that happen.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={anthony}
        name="Anthony Berman"
        role="HostNation Consultant"
        bio={[
          'Anthony worked as a root canal specialist until his retirement in 2016. He still does some part-time teaching at QMUL. He left his native South Africa at the age of 13 with his family to come to live in London. Although his circumstances were considerably more comfortable than those of the average refugee or asylum seeker, he still remembers the challenges involved in being uprooted from his home country to make a life in a new environment.',
          'Twelve years ago Anthony was part of a befriending project run by the organization, Freedom from Torture, matching UK citizens with children who had arrived in the country as unaccompanied minors. The aim of the project was to introduce some normality into the lives of these frequently damaged young people. The youngster that he was paired with has become part of Anthony’s family and it has been a richly rewarding experience all round. Anthony is also one of the coordinators for the New London Synagogue Drop-In Centre for destitute asylum seekers where he has been able to see first-hand the difficulties that these people face. It is also clear that there are many local citizens who are keen to make a connection with asylum seekers but are not sure how to go about it. He believes strongly that HostNation, in fostering these friendships, will provide a transformative experience for both sides.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={magda}
        name="Magda Wolfe"
        role="HostNation Consultant"
        bio={[
          'Magda is currently studying for a master’s degree in Social Policy and Social Research at University College London. She was raised in Poland where she studied Ethnology and Cultural Anthropology at the University of Wroclaw. She moved to the UK in 2002 and pursued a successful career in media and broadcasting.',
          'She is fascinated by observing the ever-changing social landscape and is passionate about driving positive change towards a fairer society. Her interest is in social inequality issues and the problems derived from economic disparity particularly those linked to migration and the forced displacement of people. She is very excited to be part of HostNation and working as part of the core team and as such being closely involved in all stages of the process.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={jon}
        name="Jon Whitehead"
        role="Digital Architect"
        bio={[
          'Since graduating from Cambridge with a First in Maths, Jon has specialised in working in the not for profit sector to build efficient digital platforms to automate and scale up humanitarian and volunteering projects.',
          'For 6 years he worked with Student Hubs, which supports student volunteers to tackle social and environmental challenges, first in Cambridge and then for the national network based in Oxford. His jobs evolved from Digital Communications Manager, to Digital Analyst, and finally to Digital Architect with core responsibility for helping the charity develop and implement new robust digital systems to improve the effectiveness and efficiency of its programmes. Alongside website and database development he developed an online case management system for Safe Passage, which helps unaccompanied child refugees and vulnerable adults in Europe find safe, legal routes to the UK. This consisted of a secure online dashboard for searching and managing existing refugee cases, along with a public form for the submission of new cases.',
          'Jon has developed a secure digital infrastructure for HostNation to create an effective online referral system and is managing HostNation’s database.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={claudia}
        name="Claudia Möller"
        role="Art Director"
        bio={[
          'Claudia is an art director and works for United Business Media in London, specialising in corporate identity and brand design. Using the iVolunteer scheme at UBM, she created the HostNation logo, website, social media pages, and visual comms. Claudia is in charge of how HostNation looks and has previously volunteered for community centres in North London, offering design advice and services.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={olivia}
        name="Olivia Field"
        role="Refugee Sector Advisor"
        bio={[
          'Olivia is currently advocacy and policy manager at British Red Cross: as part of this role she has been exploring how to tackle loneliness and social isolation across the UK. During her five years at the Red Cross she has worked on several advocacy campaigns focussing on changing government policy and practice negatively affecting asylum seekers and refugees in the UK. She has worked with refugees in various capacities over the last decade – from mentoring asylum seeking teenagers in the UK to volunteering in Northern France’s refugee camps. Before the Red Cross, she was a member of STAR (student activism for refugees) and Bristol City of Sanctuary. She is currently doing a Masters in Global Migration at UCL.',
          'Olivia is HostNation’s ambassador within the refugee sector, advising on how to build trust within the sector and acting as a bridgehead to refugee referrals from major refugee service providers.',
        ]}
      />
      <div style={{ background: colors.grey, height: 3, borderRadius: 3 }} />
      <Profile
        small={small}
        image={abu}
        name="Abu Haron"
        role="Refugee Advisor"
        bio={[
          'Abu fled the Darfur genocide in Sudan as a child and after a harrowing journey arrived in the UK aged 16 with no family, no friends, no money and no English. Aged 17 he was matched with a befriender through Freedom from Torture’s unaccompanied minors’ befriending scheme. Abu gained refugee status in 2015, is a fluent Arabic speaker, speaks Level 2 English, has acted as a community interpreter, has volunteered for the Children’s Radio Foundation, has given talks at the British Red Cross and has done a 4 week intensive internship at the BBC where he worked on news programmes and BBC Arabic in the World Service.',
          'Abu’s experience as an asylum seeker in the UK and the benefit he received from being befriended, is the inspiration behind HostNation. He is a strong advocate of the scheme and is helping to promote it as well as acting as an ambassador amongst refugee (and Arabic-speaking) communities.',
        ]}
      />
    </Div>
  </div>
));

export default () => (
  <Div style={{ spacing: 50, padding: '50px 0' }}>
    <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
    <Div style={{ spacing: 20 }}>
      <Txt style={styles.title}>Who Are We?</Txt>
      <Txt style={{ ...styles.body, fontWeight: 'bold' }}>
        HostNation came into being at the start of 2017.
      </Txt>
      <Txt style={styles.body}>
        We are a not-for-profit social enterprise and we are registered as a
        restricted fund under the auspices of Prism the Gift Fund, UK charity
        no. 1099682.
      </Txt>
    </Div>
    <Div style={{ spacing: 20 }}>
      <Txt style={styles.title}>Friends of HostNation</Txt>
      <Txt style={styles.body}>
        Thank you to the following people for giving us especially generous
        financial support or the benefit of your expertise (or both!):
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
        ].map((name, i) => (
          <Txt style={{ ...styles.body, fontWeight: 'normal' }} key={i}>
            {name}
          </Txt>
        ))}
      </Div>
      <Txt style={styles.body}>
        We are also very grateful to the Freshfields Bruckhaus Deringer Pro Bono
        Team for their legal support and to the Paul Hamlyn Ideas and Pioneers
        Fund for the faith they have placed in our work and for funding our
        start up.
      </Txt>
      <img src={phfLogo} style={{ maxWidth: 400, margin: '0 auto' }} />
    </Div>
    <Box title="MEET THE TEAM BEHIND HOSTNATION">
      <Profiles />
    </Box>
  </Div>
);
