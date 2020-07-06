export default function(admin?: boolean) {
  return [
    ...(!admin
      ? [
          [
            {
              title: '1. Refugee referral criteria',
            },
            {
              info: `**IMPORTANT PLEASE READ THIS FIRST:**

HostNation is a befriending service that connects people in Greater London.

It is for asylum seekers and refugees who are lonely, would like to practise their English and connect more with London and Londoners.
              
If you know a refugee or asylum seeker who is prepared to commit to a three month befriending programme and fits our criteria below, then please fill in this short form so the HostNation team can get in contact with your referral.

To fill out this form you need to be online with a secure connection. All information given is treated as highly confidential and securely encrypted.`,
            },
            {
              info: `**You will need to confirm all of the following statements to the best of your ability before we can consider your referral for a match. If they do not meet all the criteria below please DO NOT continue with the referral. Contact us at info@hostnation.org.uk if you prefer to discuss an individual’s circumstances before referral.**`,
            },
            {
              info: `**Referrer (to the best of my knowledge…):**`,
            },
            {
              label: 'The person I am referring is over 18',
              name: 'check1',
              scalar: 'boolean',
            },
            {
              label:
                'They are socially isolated and would like to meet a friendly Londoner and improve their English',
              name: 'check2',
              scalar: 'boolean',
            },
            {
              label:
                'They can speak and understand English well without the need for an interpreter',
              name: 'check3',
              scalar: 'boolean',
            },
            {
              label: 'They do not have high or complex mental health needs',
              name: 'check4',
              scalar: 'boolean',
            },
            {
              label: 'They are not at risk to themselves or to others',
              name: 'check5',
              scalar: 'boolean',
            },
            {
              label:
                'They are not homeless, destitute or facing detention or deportation',
              name: 'check6',
              scalar: 'boolean',
            },
            {
              label:
                'They live within the M25 and are likely to remain in the city for the next 6 months',
              name: 'check7',
              scalar: 'boolean',
            },
            {
              info:
                '**All of the above must be ticked and the starred questions answered before submitting the form**',
            },
          ],
        ]
      : []),
    [
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
        optional: true,
      },
      {
        text: admin ? 'Approx age' : 'Approx age if date of birth not known',
        field: 'refugee.approxage',
        optional: true,
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
      ...(admin
        ? [
            {
              text: 'Languages spoken',
              field: 'refugee.languages',
              optional: admin,
            },
          ]
        : []),
      {
        text: 'Address',
        field: 'refugee.address',
        optional: true,
        rows: 2,
      },
      {
        text: 'Postcode',
        field: 'refugee.postcode',
        optional: true,
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
        text: admin
          ? 'London borough'
          : 'If postal address not known please select London borough where referral currently resides',
        field: 'refugee.borough',
        style: { layout: 'modal', maxWidth: 400 },
        optional: true,
      },
      {
        text: 'Mobile no',
        field: 'refugee.mobile',
        optional: admin,
      },
      ...(admin
        ? [
            {
              text: admin ? 'On WhatsApp' : 'Are you on WhatsApp?',
              field: 'refugee.whatsapp',
              optional: admin,
            },
          ]
        : []),
      {
        text: 'Email',
        field: 'refugee.email',
        optional: true,
      },
      ...(admin
        ? [
            {
              text: 'Connectivity',
              field: 'refugee.connectivity',
              rows: 2,
              optional: true,
            },
          ]
        : []),
      {
        text: admin
          ? 'Immediate family living with them'
          : 'Do they have any immediate family living with them (i.e. husband/wife, children)?',
        field: 'refugee.family',
        rows: 3,
        optional: admin,
      },
      {
        text: 'Length of time in the UK (approx. years)',
        field: 'refugee.ukduration',
        optional: true,
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
          : 'What, if any, financial support do you get from the state?',
        prompt: 'Eg. NASS, Universal credit, JSA, none.',
        field: 'refugee.financial',
        optional: true,
      },
      {
        text: admin
          ? 'Additional information'
          : 'Please use this box to give us any further background information you may be aware of on the person you are referring',
        prompt:
          'Eg. any health issues, profession, current work, religion, sexual preference, personality, interests...',
        field: 'refugee.additional',
        optional: true,
        rows: 3,
      },
      ...(admin
        ? [
            {
              text: admin ? 'English ability' : 'How good is your English?',
              field: 'refugee.englishskill',
              options: [
                'My English is good',
                'My English is quite good',
                'My English is not very good',
              ],
              optional: admin,
              style: { layout: 'modal', maxWidth: 400 },
            },
            {
              text: admin
                ? 'Read / write English'
                : 'Can you read and write simple English, e.g. text messages / WhatsApp?',
              field: 'refugee.simpleenglish',
              optional: admin,
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
              prompt: 'Eg. studying, training, working, volunteering, none',
              field: 'refugee.occupation',
              optional: admin,
            },
            {
              text: admin
                ? 'Other organisation attended regularly'
                : 'Do you attend any other organisation or centre on a regular basis?',
              prompt: 'If yes, please give name and when you attend',
              field: 'refugee.otherorg',
              rows: 2,
              optional: true,
            },
            {
              text: admin
                ? 'Availability'
                : 'When are you most likely to be available to meet up with your befriender?',
              prompt: 'Please tick as many as you can',
              field: 'refugee.availability',
              optional: admin,
              style: { layout: 'stack' },
            },
          ]
        : []),
    ],
    ...(admin
      ? [
          [
            ...(!admin
              ? [
                  {
                    info:
                      'We would now like to ask you some personal questions in order to be better able to match you. This also allows us to tell your befriender a bit more about you as a person.',
                  },
                ]
              : []),
            {
              text: 'Interests',
              prompt:
                'Eg. reading, films, singing, football, history, baking etc',
              field: 'refugee.interests',
              optional: admin,
              rows: 2,
            },
            {
              text: admin
                ? 'Preferred activities (list)'
                : 'Why would you like a London befriender? Please tick as many as you like:',
              field: 'refugee.activitieslist2',
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
                : 'Please describe your personality in a few words',
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
          ],
        ]
      : []),
    ...(admin
      ? [
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
        ]
      : []),
    ...(false
      ? [
          [
            ...(!admin
              ? [
                  {
                    title: '3. Refugee Declaration',
                  },
                  {
                    info: `**By submitting this application:**`,
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
                      'I consent to the use and storage of my personal data by HostNation in order to match me with a befriender',
                    name: 'refugeesharing',
                    scalar: 'boolean',
                  },
                ]
              : []),
            ...(!admin
              ? [
                  {
                    info: `**Thank you for your referral!**
    HostNation will be in contact with you by post, phone or email in the next few weeks.

    *If you would like to withdraw your consent at any time, please email info@hostnation.org.uk. 12 months after your 3 month match through HostNation, your identifiable personal data will be removed from our database. For further details on how we use your personal data, please see our privacy policy.*`,
                  },
                ]
              : []),
          ],
        ]
      : []),
    [
      ...(false
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
        text: admin ? 'Referrer organisation' : 'The name of your organisation',
        prompt:
          'If you are not part of an organisation or group then please just enter your name',
        field: 'refugee.contactorg',
        optional: admin,
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
        optional: admin,
      },
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
              info: `Please ensure that the person being referred knows you have referred them to HostNation, understands what HostNation offers and knows that someone from the HostNation team will be in touch soon by email/telephone.`,
            },
            ...(admin
              ? [
                  {
                    title: '5. Referrer Declaration',
                  },
                ]
              : []),
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
                'I confirm that the person(s) I am referring understands the scope of services being provided by HostNation',
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
    ...(admin
      ? [
          [
            {
              label:
                'Confirm that info is correct and they consent to us holding and using their personal data to match with a befriender',
              field: 'refugee.confirmconsent',
              scalar: 'boolean',
              optional: true,
            },
          ],
        ]
      : []),
  ];
}
