export default function(admin?: boolean) {
  return [
    ...(!admin
      ? [
          [
            {
              title: '1. Refugee referral criteria',
            },
            {
              info: `**You must be:**
- An asylum seeker, refugee or migrant living in the UK
- Over the age of 18
- Not a vulnerable adult with high mental health needs, at risk of abuse or in need of care
- Not currently suffering from alcohol or drug dependency
- Able to speak reasonably good English`,
            },
            {
              label: 'I confirm that I satisfy the above criteria',
              name: 'criteria',
              scalar: 'boolean',
            },
          ],
        ]
      : []),
    [
      ...(!admin
        ? [
            {
              title: '2. Questions to the refugee',
            },
          ]
        : []),
      {
        text: 'Name',
        fields: [
          { field: 'refugee.firstname', placeholder: 'First' },
          { field: 'refugee.lastname', placeholder: 'Last' },
        ],
        optional: admin,
        style: { layout: 'bar' },
      },
      {
        text: 'Date of birth',
        field: 'refugee.dob',
        style: { maxWidth: 400 },
        optional: admin,
      },
      {
        text: 'Sex',
        field: 'refugee.sex',
        optional: admin,
      },
      {
        text: 'Country of origin',
        field: 'refugee.country',
        optional: admin,
      },
      {
        text: 'Languages spoken',
        field: 'refugee.languages',
        optional: admin,
      },
      {
        text: 'Address',
        prompt:
          'If this is a temporary address please include how long you are likely to be here',
        field: 'refugee.address',
        optional: admin,
        rows: 2,
      },
      {
        text: 'Postcode',
        field: 'refugee.postcode',
        optional: admin,
        getAddress: ['address', 'postcode', 'mapaddress'],
      },
      ...(admin
        ? [
            {
              text: 'Valid map address',
              field: 'refugee.mapaddress',
              optional: true,
              mapAddress: true,
              view: true,
            },
          ]
        : []),
      {
        text: 'How long are you likely to be at this address',
        field: 'refugee.addresstime',
        style: { layout: 'stack' },
        optional: admin,
      },
      {
        text: 'Mobile no',
        field: 'refugee.mobile',
        optional: admin,
      },
      {
        text: admin ? 'On WhatsApp' : 'Are you on WhatsApp?',
        field: 'refugee.whatsapp',
        optional: admin,
      },
      {
        text: 'Email',
        field: 'refugee.email',
        optional: true,
      },
      {
        text: 'What area do you live in?',
        field: 'refugee.region',
        options: [
          'Central London',
          'North London',
          'East London',
          'South London',
          'West London',
          'Other',
        ],
        optional: admin,
        style: { layout: 'modal', maxWidth: 400 },
      },
      {
        text: 'Immigration status',
        field: 'refugee.status',
        optional: admin,
        style: { layout: 'modal', maxWidth: 400 },
      },
      {
        text: admin
          ? 'Financial support'
          : 'What financial support do you get?',
        field: 'refugee.financial',
        optional: true,
      },
      {
        text: admin
          ? 'Immediate family living with them'
          : 'Do you have any immediate family living with you (i.e. husband/wife, children)?',
        prompt:
          'If you do, please give names and the age of any children including if you are expecting a child',
        field: 'refugee.family',
        rows: 3,
        optional: admin,
      },
      {
        text: 'Length of time in the UK (years)',
        field: 'refugee.ukduration',
        optional: admin,
        style: { layout: 'modal', maxWidth: 400 },
      },
      {
        text: admin ? 'English ability' : 'How good is your English?',
        field: 'refugee.englishskill',
        optional: admin,
        style: { layout: 'modal', maxWidth: 400 },
      },
      {
        text: admin
          ? 'Professional training'
          : 'Professional training if relevant',
        prompt: 'Eg. trained engineer, doctor, plumber, nurse etc',
        field: 'refugee.professionaltraining',
        optional: true,
      },
      {
        text: 'Current occupation in UK',
        prompt:
          'Eg. studying, training, working, volunteering (please give details), none',
        field: 'refugee.occupation',
        optional: admin,
      },
      {
        text: admin
          ? 'Other organisation attended regularly'
          : 'Do you attend any other organisation or centre on a regular basis?',
        prompt:
          'If yes, please give name of place, location, day(s) of the week and time when you attend',
        field: 'refugee.otherorg',
        rows: 2,
        optional: true,
      },
      {
        text: admin
          ? 'Availability'
          : 'When are you most likely to be available to meet up with your befriender?',
        field: 'refugee.availability',
        optional: admin,
        style: { layout: 'stack' },
      },
    ],
    [
      ...(!admin
        ? [
            {
              info:
                'We would now like to ask you some personal questions in order to be better able to match you.  This also allows us to tell your befriender a bit more about you as a person.',
            },
          ]
        : []),
      {
        text: 'Interests',
        prompt: 'Eg. reading, films, singing, football, history, baking etc',
        field: 'refugee.interests',
        optional: admin,
        rows: 2,
      },
      {
        text: admin
          ? 'Preferred activities (list)'
          : 'Why would you like a London befriender? Please tick as many as you like:',
        field: 'refugee.activitieslist',
        style: { layout: 'stack' },
        optional: admin,
        rows: 3,
      },
      {
        text: admin ? 'Religion' : 'What religion if any do you have?',
        field: 'refugee.religion',
        style: { layout: 'modal', maxWidth: 400 },
        optional: true,
      },
      {
        text: admin
          ? 'Personality'
          : 'Please describe your personality as fully as possible',
        prompt: 'Eg. shy, social, curious, happy...',
        field: 'refugee.personality',
        optional: admin,
        rows: 3,
      },
      {
        text: admin
          ? 'Health issues'
          : 'Do you have any health issues (physical or mental) that we should be aware of?',
        field: 'refugee.healthissues',
        style: { layout: 'modal', maxWidth: 400 },
        optional: true,
      },
      {
        text: admin
          ? 'Receiving regular treatment'
          : 'Are you receiving regular treatment?',
        field: 'refugee.regulartreatment',
        style: { layout: 'modal', maxWidth: 400 },
        optional: true,
      },
      {
        text: admin
          ? 'Current life and attitudes'
          : 'Which of the following statements describes your current life and attitudes to living in the UK (you can choose more than one):',
        field: 'refugee.attitudes',
        optional: admin,
        style: { layout: 'stack' },
      },
      ...(admin
        ? [
            {
              text: 'Reason for wanting a befriender (old)',
              field: 'refugee.whyfriend',
              optional: admin,
              rows: 3,
            },
          ]
        : []),
      {
        text: admin
          ? 'Preferred activities (other)'
          : 'Is there anything else that you are particularly keen to do or see with a befriender?',
        field: 'refugee.activities',
        vertical: true,
        optional: true,
        rows: 3,
      },
      ...(!admin
        ? [
            {
              info: '**Please confirm:**',
            },
            {
              label:
                'I understand that a befriender is not someone who can help me get asylum in the UK or find me a job or sort out my housing.  I also understand that a befriender is not someone who might become a boyfriend or girlfriend.',
              name: 'refugeenot',
              scalar: 'boolean',
            },
          ]
        : []),
    ],
    [
      ...(!admin
        ? [
            {
              info: `#### All our befrienders are checked, screened and happy to be matched to anyone that needs a friend. Many are female, young and not religious. We hope that most of you would be happy to be introduced to one of these good people living in the same part of London.
  #### If, however, you feel strongly that you do not wish to be introduced to someone from one of the following groups, then please let us know by ticking the box:`,
            },
          ]
        : []),
      {
        text: admin ? 'Match preference (new)' : '',
        field: 'refugee.unhappywith',
        style: { layout: 'stack' },
        optional: true,
      },
    ],
    [
      {
        text: admin
          ? 'Additional information'
          : 'Please provide any further information or background that you think will help us to match you with a suitable befriender',
        field: 'refugee.additional',
        optional: true,
        rows: 3,
      },
    ],
    [
      ...(!admin
        ? [
            {
              title: '3. Refugee Declaration',
            },
            {
              info: `**Referrers: please ensure that the person you are referring understands the nature of
              this declaration and of befriending.**

**Please tell the person you are referring that HostNation will be in contact with them by phone or by email in the next few weeks.**

**By submitting this application:**`,
            },
            {
              label:
                'I confirm that the information provided is true and accurate',
              name: 'refugeeaccurate',
              scalar: 'boolean',
            },
            {
              label:
                'I confirm that I understand that the commitment is to meet once or twice every 2 weeks for at least 3 months',
              name: 'refugeecommitment',
              scalar: 'boolean',
            },
            {
              label:
                'I consent to the use and storage of my personal data by HostNation',
              name: 'refugeedata',
              scalar: 'boolean',
            },
            {
              label:
                'I consent to HostNation sharing some of the personal data with registered befrienders in order to match me with a befriender and put us in contact and to get feedback after the three months',
              name: 'refugeesharing',
              scalar: 'boolean',
            },
          ]
        : []),
      ...(!admin
        ? [
            {
              info:
                '*If you would like to withdraw your consent at any time, please email info@hostnation.org.uk. 12 months after your 3 month match through HostNation, your identifiable personal data will be removed from our database. For further details on how we use your personal data, please see our privacy policy.*',
            },
          ]
        : []),
    ],
    [
      ...(!admin
        ? [
            {
              title: '4. Questions to the referrer',
            },
            {
              info:
                '*We will need to contact you to arrange for your referral to be introduced to their befriender. Ideally we ask you to broker the introduction so that the the first meeting is in a safe space with someone they are familiar with.*',
            },
          ]
        : []),
      {
        text: admin
          ? 'Agree to introduce'
          : 'Will you personally be able to introduce your referral to their befriender?',
        field: 'refugee.contactintroduce',
        options: ['Yes', 'No'],
        optional: admin,
      },
      {
        text: admin ? 'Agree to introduce reason: ' : 'Please give a reason:',
        field: 'refugee.contactintroduceinfo',
        optional: admin,
        rows: 2,
        showIf: ['refugee.contactintroduce', 'No'],
      },
      {
        text: admin ? 'Referrer organisation' : 'The name of your organisation',
        prompt:
          'If you are not part of an organisation or group then please just enter your name',
        field: 'refugee.contactorg',
        optional: admin,
      },
      {
        text: admin
          ? 'Referrer meeting place'
          : 'The address & postcode of where you meet',
        prompt:
          'If you are not part of an organisation or group then please just enter your name',
        field: 'refugee.contactaddress',
        optional: admin,
        rows: 2,
      },
      {
        text: admin
          ? 'Referrer meeting time'
          : 'The day and time when you meet (if regular)',
        field: 'refugee.contacttime',
        optional: true,
        rows: 2,
      },
      {
        text: admin ? 'Referrer name' : 'Your name',
        field: 'refugee.contactname',
        optional: admin,
      },
      {
        text: admin ? 'Referrer email' : 'Your email',
        field: 'refugee.contactemail',
        optional: admin,
      },
      {
        text: admin ? 'Referrer tel no.' : 'Your tel no.',
        field: 'refugee.contactmobile',
        optional: true,
      },
      ...(admin
        ? [
            {
              text: 'Referrer work tel no. (old)',
              field: 'refugee.contactphone',
              optional: true,
            },
          ]
        : []),
      {
        text: admin
          ? "Referrer's relation to refugee"
          : 'In what capacity do you know the person you are referring?',
        fields: [
          {
            field: 'refugee.contactrelation',
            optional: admin,
            style: { layout: 'modal', maxWidth: 400 },
          },
          {
            field: 'refugee.contactrelationother',
            optional: admin,
            placeholder: 'Please specify',
            showIf: ['refugee.contactrelation', 'Other'],
          },
        ],
      },
    ],
    [
      ...(!admin
        ? [
            {
              title: '5. Referrer Declaration',
            },
            {
              info: '**By submitting this application:**',
            },
            {
              label:
                'I confirm that the information provided is true and accurate',
              name: 'referreraccurate',
              scalar: 'boolean',
            },
            {
              label:
                'I confirm that the person(s) I am referring understands the scope of services being provided by HostNation (see below)',
              name: 'referrerscope',
              scalar: 'boolean',
            },
            {
              label:
                'I consent to the use and storage of the personal data contained in this form by HostNation',
              name: 'referrerdata',
              scalar: 'boolean',
            },
            {
              info: '**Contact preferences:**',
            },
          ]
        : []),
      {
        text: admin && 'Referrer contact preference',
        label:
          'I consent to future communications with HostNation for the purposes of giving feedback and receiving updates',
        field: 'refugee.referrercontact',
        optional: true,
      },
      ...(!admin
        ? [
            {
              info:
                '*If you would like to withdraw your consent at any time, please email info@hostnation.org.uk. 12 months after your 3 month match through HostNation, your identifiable personal data will be removed from our database. For further details on how we use your personal data, please see our privacy policy.*',
            },
          ]
        : []),
    ],
  ];
}
