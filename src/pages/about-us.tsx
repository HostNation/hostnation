import * as React from 'react';
import r from 'refluent';
import { Div, Txt } from 'elmnt';
import Helmet from 'react-helmet';
import { withWidth } from 'common-client';

import * as logoWide from '../img/logo-wide.png';
import * as crLogo from '../img/logos/cr.png';
import * as lcfLogo from '../img/logos/lcf.jpg';
import * as phfLogo from '../img/logos/phf.jpg';
import * as tflLogo from '../img/logos/tfl.png';
import * as cfLogo from '../img/logos/cf.png';

import * as anneke from '../img/team/anneke.png';
import * as rossana from '../img/team/rossana.png';
import * as anthony from '../img/team/anthony.png';
import * as magda from '../img/team/magda.png';
import * as danny from '../img/team/danny.png';
import * as dina from '../img/team/dina.png';
import * as emiljan from '../img/team/emiljan.jpg';
import * as joanna from '../img/team/joanna.png';
import * as jon from '../img/team/jon.png';
import * as claudia from '../img/team/claudia.png';
import * as abu from '../img/team/abu.png';

import Box from '../core/Box';
import styles, { colors } from '../core/styles';

const Profile = ({ small, image, name, role, bio, credit }: any) => (
  <Div style={{ spacing: 30 }}>
    <Div
      style={{
        layout: small ? 'stack' : 'bar',
        width: '100%',
        verticalAlign: 'bottom',
        spacing: small ? 30 : 40,
      }}
    >
      <Div style={{ layout: 'stack', spacing: 5 }}>
        <img src={image} style={{ maxWidth: 400 }} />
        {credit && (
          <Txt style={{ ...styles.boxText, fontSize: 14 }}>{credit}</Txt>
        )}
      </Div>
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

const Profiles = r
  .yield(withWidth(600))
  .yield(({ small = true, setWidthElem }) => (
    <div ref={setWidthElem}>
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
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={rossana}
          name="Rossana Horsley"
          role="HostNation Director"
          bio={[
            'Rossana worked for many years in documentary filmmaking, both in television and on non-broadcast pieces for NGOs, covering a wide range of subjects from the arts and culture to the environment. A major strand of her work focused on development issues, which took her filming to several continents.',
            'Although she now calls herself a Londoner, she grew up in different countries. She knows that, even when a move is not forced upon you, finding your feet in a new culture can be a daunting challenge. A long-term supporter of Freedom form Torture, she volunteered in 2005 to be part of their befriending project for unaccompanied minors; the relationship that grew out of that experience was enriching and positive on both sides. Knowing that many people, both from here and others who have sought refuge in this country, want to make a similar connection but are unsure how, she was keen to be a part of HN to help make that happen.',
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={anthony}
          name="Anthony Berman"
          role="Operations Manager"
          bio={[
            'Anthony worked as a root canal specialist until his retirement in 2016. He still does some part-time teaching at QMUL. He left his native South Africa at the age of 13 with his family to come to live in London. Although his circumstances were considerably more comfortable than those of the average refugee or asylum seeker, he still remembers the challenges involved in being uprooted from his home country to make a life in a new environment.',
            'Twelve years ago Anthony was part of a befriending project run by the organization, Freedom from Torture, matching UK citizens with children who had arrived in the country as unaccompanied minors. The aim of the project was to introduce some normality into the lives of these frequently damaged young people. The youngster that he was paired with has become part of Anthony’s family and it has been a richly rewarding experience all round. Anthony is also one of the coordinators for the New London Synagogue Drop-In Centre for destitute asylum seekers where he has been able to see first-hand the difficulties that these people face. It is also clear that there are many local citizens who are keen to make a connection with asylum seekers but are not sure how to go about it. He believes strongly that HostNation, in fostering these friendships, will provide a transformative experience for both sides.',
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={magda}
          name="Magda Wolfe"
          role="Evaluation Manager"
          bio={[
            'Magda is currently studying for a master’s degree in Social Policy and Social Research at University College London. She was raised in Poland where she studied Ethnology and Cultural Anthropology at the University of Wroclaw. She moved to the UK in 2002 and pursued a successful career in media and broadcasting.',
            'She is fascinated by observing the ever-changing social landscape and is passionate about driving positive change towards a fairer society. Her interest is in social inequality issues and the problems derived from economic disparity particularly those linked to migration and the forced displacement of people. She is very excited to be part of HostNation and working as part of the core team and as such being closely involved in all stages of the process.',
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={danny}
          name="Daniel Silverstone"
          role="HostNation Trustee (Chair)"
          bio={[
            "Danny is a Londoner with a 40 year executive career in the public and charitable sector culminating in CEO roles at London Boroughs Grants, the Commission for Racial Equality, London Remade, a green social enterprise and Interights, an international human rights charity.  A major linking thread in Danny's professional career has been a focus on improving opportunities and expanding rights for our most disadvantaged communities. He contributed to path finding race equality programmes in local government and led the  implementation of the amended Race Relations Act while at the CRE.  Danny has held a number of non-executive roles including 5 years as a member of the Big Lottery's England Committee which invested £400m. a year in England's not-for-profit sector.",
            'Danny is chair of governors at Parliament Hill Girls school and chairs Rene Cassin the Jewish human rights charity.',
            "Danny's mother arrived in London in 1939 on the Kindertransport and he grew up within a family marked by his mother's experiences as a child refugee.  Danny became a HostNation befriender in 2017. He was immediately impressed by the quality of HostNation's work. When the decision was taken to achieve charitable status he was delighted to become HostNation's chair in October 2018.",
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={dina}
          name="Dina Nayeri"
          credit="Photo credit: Anna Leader"
          role="HostNation Trustee"
          bio={[
            'Dina Nayeri was born during the Iranian revolution and fled at eight. She lived as a refugee for two years before being granted asylum in the United States. She writes fiction and nonfiction on displacement, the refugee crisis, and Iranian diaspora. Her acclaimed Guardian Long Read “The Ungrateful Refugee” was one of the most widely read essays of 2017 and anthologized by Viet Nguyen in The Displaced and is now taught in schools across Germany. Dina is a prize-winning author and her work also appears in The New York Times, The Guardian, LA Times, New Yorker, Wall Street Journal and Granta amongst others. Her first book of narrative nonfiction, The Ungrateful Refugee, is available now from Canongate Books.',
            "Dina joined the Board of HostNation in 2019. She says: “HostNation is one of the rare charities that understands that the struggle of being a refugee doesn't end the moment one is granted asylum, or even citizenship. To be a refugee is to be forever separated from home, always alert to one's differences. I'm honoured to join an organisation that prioritises the many social and psychological needs that others may consider secondary --- as a refugee and a writer, I have found these needs vital enough to devote my entire artistic life to them. I hope together we can bring some of the joys of home to the displaced people who have become our neighbours.”",
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={emiljan}
          name="Emiljan Gega"
          role="HostNation Trustee"
          bio={[
            "Emiljan has called London home for over 10 years now. He was born in Albania and has been a refugee in various countries, most prominently the Republic of Ireland where he was raised and where he proudly holds citizenship. He works in the strategy consulting and executive search space which came about after completing his undergraduate studies in History at King's College London and his postgraduate studies in Economic History at The London School of Economics.",
            "Emiljan has deep personal interests in politics, business best practice and history. When he's not working he likes to play tennis and squash, read everything he can get his hands on as well as go for long walks. He also volunteers widely at such institutions as The Prince's Trust and Brightside mentoring, which builds on his previous work leading a schools outreach programme at university. He is very excited about joining the HostNation team and helping to scale the organisation and better the lives of so many people. Emiljan believes that HostNation is a rare charity that underscores the need for renewed social provisions in this city and country, and is at the forefront of demonstrating that London and the UK really are progressive communities.",
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={joanna}
          name="Joanna Winterbottom"
          role="HostNation Trustee"
          bio={[
            'Jo was a reporter and editor with Reuters news agency for over 20 years, gaining an in-depth knowledge of the news and conirnunications business. She has worked around the world, including assignnients in Italy, India, South Africa and the United States. In Januaryr 2018, she embarked on a freelance career, giving her more time for voluntary work, which had been a long-term goal. She now trains journalists with the Reuters Foundation, and has travelled in this role to destinations as far apart as Kazakhstan and Jamaica. She also continues to write and edit as a freelancer.',
            'Her voluntary work has included giving practical advice to asylum seekers in London and men-taring immigrants in language skills.',
            "Jo is very happy to be working with HostNation and values its aims of giving refugees a warm and supportive welcome to their new home. Jo's own experiences in moving countries has been cushioned by her employee's infrastructure, but she is still aware of the challenges of uprooting your life, creating social networks and getting to grips with a new environment.",
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
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
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
        <Profile
          small={small}
          image={claudia}
          name="Claudia Möller"
          role="Art Director"
          bio={[
            'Claudia is an art director and works for United Business Media in London, specialising in corporate identity and brand design. Using the iVolunteer scheme at UBM, she created the HostNation logo, website, social media pages, and visual comms. Claudia is in charge of how HostNation looks and has previously volunteered for community centres in North London, offering design advice and services.',
          ]}
        />
        <div style={{ background: colors.black, height: 3, borderRadius: 3 }} />
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
  <>
    <Helmet title="About Us | HostNation" />
    <Div style={{ spacing: 50, padding: '50px 0' }}>
      <img src={logoWide} style={{ maxWidth: 600, margin: '0 auto' }} />
      <Div style={{ spacing: 20 }}>
        <Txt style={styles.title}>Who Are We?</Txt>
        <Txt style={{ ...styles.body, fontWeight: 'bold' }}>
          HostNation came into being at the start of 2017.
        </Txt>
        <Txt style={styles.body}>
          We are a Charitable Incorporated Organisation (CIO) registered with
          the Charity Commission. UK Charity number 1180004.
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
          We are also very grateful to the Freshfields Bruckhaus Deringer Pro
          Bono Team for their legal support, to the Paul Hamlyn Ideas and
          Pioneers Fund for funding our start up and to The London Community
          Foundation for awarding us a Comic Relief Core Strength Local
          Communities Grant. Trust for London have also confirmed a generous
          Connected Communities grant towards our core costs over the next two
          years. And 2019 started with another successful grant bid from the
          National Lottery Community Fund. Thank you to all our funders for
          making our work sustainable!
        </Txt>
        {withWidth(700)({
          next: ({ small = false, setWidthElem }) => (
            <div ref={setWidthElem}>
              <Div style={{ layout: 'stack', spacing: 20, paddingTop: 20 }}>
                <Div
                  style={{
                    layout: small ? 'stack' : 'bar',
                    spacing: 20,
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
                    spacing: 20,
                    margin: '0 auto',
                  }}
                >
                  <img
                    src={tflLogo}
                    style={{ height: 100, width: 'auto', margin: '0 auto' }}
                  />
                  <img
                    src={cfLogo}
                    style={{ height: 100, width: 'auto', margin: '0 auto' }}
                  />
                </Div>
              </Div>
            </div>
          ),
        })}
      </Div>
      <Box title="MEET THE TEAM BEHIND HOSTNATION">
        <Profiles />
      </Box>
    </Div>
  </>
);
