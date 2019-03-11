export default function(admin?: boolean) {
  return [
    ...(!admin
      ? [
          [
            {
              title: '1. Registration criteria',
            },
            {
              info: `**You need to be:**
- A full time British resident
- Over the age of 18
- Not currently suffering from alcohol or drug dependency
- Without criminal convictions
- Able to offer the gift of time spent together – a minimum of 3hrs once a fortnight over 3 months`,
            },
            {
              label: 'I believe that I fit the above criteria',
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
              title: '2. Registration questions',
            },
            {
              info: `*Only the starred questions are essential but the more personal information you can provide, the better the match we can make. Registering as an individual befriender does not preclude your partner or family becoming involved in the befriending process over time.*

*You will need to upload your passport page, a recent photo of yourself and, if you have one, a copy of any DBS certificate that is less than 5 years old (please note that you do not need to have a DBS to register as a befriender). You will also be asked to provide the contact details for two referees (not immediate family) who have known you for a long time and can vouch for you. Please have this information and these documents ready.*

*All information provided is treated as highly confidential and is securely encrypted.*`,
            },
          ]
        : []),
      {
        text: 'Name',
        fields: [
          { field: 'befriender.firstname', placeholder: 'First' },
          { field: 'befriender.lastname', placeholder: 'Last' },
        ],
        optional: admin,
        style: { layout: 'bar' },
      },
      {
        text: 'Date of birth',
        field: 'befriender.dob',
        optional: admin,
        style: { maxWidth: 400 },
      },
      {
        text: 'Sex',
        field: 'befriender.sex',
        optional: admin,
      },
      {
        text: 'Nationality, if not british',
        field: 'befriender.nationality',
        style: { maxWidth: 400 },
        optional: true,
      },
      {
        text: 'Address',
        field: 'befriender.address',
        optional: admin,
        rows: 3,
      },
      {
        text: 'Postcode',
        field: 'befriender.postcode',
        optional: admin,
        getAddress: ['address', 'postcode', 'mapaddress'],
      },
      ...(admin
        ? [
            {
              text: 'Valid map address',
              field: 'befriender.mapaddress',
              optional: true,
              mapAddress: true,
              view: true,
            },
          ]
        : []),
      ...(!admin
        ? [
            {
              info:
                '**We match by geography, if there is a second (fairly permanent) address where you would be happy to be matched from (ie. place of work or parental home) please add it here with the full postcode:**',
            },
          ]
        : []),
      {
        text: 'Secondary address',
        field: 'befriender.address2',
        optional: true,
        rows: 3,
      },
      {
        text: 'Secondary postcode',
        field: 'befriender.postcode2',
        optional: true,
        getAddress: ['address2', 'postcode2', 'mapaddress2'],
      },
      {
        text: 'Secondary address type',
        field: 'befriender.address2type',
        optional: true,
      },
      ...(admin
        ? [
            {
              text: 'Valid secondary map address',
              field: 'befriender.mapaddress2',
              optional: true,
              mapAddress: true,
              view: true,
            },
          ]
        : []),
      {
        text: 'Mobile no.',
        field: 'befriender.mobile',
        optional: admin,
      },
      {
        text: 'Landline',
        field: 'befriender.landline',
        optional: true,
      },
      {
        text: 'Email',
        field: 'befriender.email',
        optional: admin,
      },
      {
        text: 'What area do you live in?',
        field: 'befriender.region',
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
        text: admin
          ? 'Length of time in this area'
          : 'How long have you lived in this area?',
        field: 'befriender.duration',
        style: { layout: 'modal', maxWidth: 400 },
        optional: true,
      },
      {
        text: admin
          ? 'Passport scan or photo'
          : 'Please upload an image (scan or photograph) of your passport page:',
        prompt: 'Max 5MB',
        field: 'befriender.passport',
        optional: admin,
      },
      {
        text: admin
          ? 'Age of children at home'
          : 'If you have children living at home what age are they?',
        field: 'befriender.children',
        optional: true,
      },
      {
        text: admin
          ? 'Current work status'
          : 'What is your current work status?',
        field: 'befriender.workstatus',
        optional: admin,
        style: { layout: 'modal', maxWidth: 400 },
      },
      {
        text: admin
          ? 'Main profession'
          : 'What is or was your main profession?',
        field: 'befriender.profession',
        optional: true,
      },
      {
        text: admin
          ? 'Experience with refugees or vulnerable people'
          : 'Do you have any experience of working with or volunteering with refugees or other vulnerable groups?',
        prompt: 'Please give details of organisation(s) and your involvement',
        field: 'befriender.experience',
        rows: 5,
        optional: true,
      },
      {
        text: admin
          ? 'DBS check date'
          : 'If you have ever needed a criminal record check for any work you have undertaken, please enter the date (approx. year) here.',
        field: 'befriender.dbsdate',
        placeholder: 'YYYY',
        style: { maxWidth: 400 },
        optional: true,
      },
      {
        text: admin
          ? 'DBS check scan or photo'
          : 'If less than 5 years old please upload a photo or scan of the certificate.',
        prompt: 'Max 5MB',
        field: 'befriender.dbsscan',
        optional: true,
      },
      {
        text: admin
          ? 'Languages spoken'
          : 'What languages, if any, do you speak other than English?',
        field: 'befriender.languages',
        optional: true,
      },
      {
        text: admin
          ? 'Attitude towards religion'
          : 'How would you describe your attitude towards religion?',
        field: 'befriender.religion',
        style: { layout: 'modal', maxWidth: 400 },
        optional: true,
      },
      {
        text: admin
          ? 'Interests'
          : 'What are your main interests outside of your work?',
        field: 'befriender.interests',
        optional: admin,
        rows: 3,
      },
      {
        text: admin
          ? 'Match preference'
          : 'Do you have a strong preference for who you are matched with?',
        prompt:
          'To broaden the chances of being matched please choose as many as you can. Many asylum seekers and refugees are single adult men.',
        field: 'befriender.preferences',
        optional: admin,
        style: { layout: 'stack' },
      },
      {
        text: admin
          ? 'Reason for wanting to befriend'
          : 'Why do you wish to befriend a refugee?',
        field: 'befriender.whyfriend',
        optional: admin,
        rows: 3,
      },
      {
        text: admin
          ? 'Preferred activities (list)'
          : 'Please describe the sort of activities you would be happy to do together: You may tick as many as you like:',
        style: { layout: 'stack' },
        field: 'befriender.activitieslist',
        optional: admin,
      },
      {
        text: admin
          ? 'Preferred activities (other)'
          : 'Is there anything else that you are particularly keen to introduce a refugee to or to share with them?',
        field: 'befriender.activities',
        vertical: true,
        optional: true,
        rows: 3,
      },
      {
        text: admin
          ? 'Additional information'
          : "Is there anything else you feel we should know about you or your family's experience that might be relevant?",
        vertical: true,
        field: 'befriender.additional',
        rows: 3,
        optional: true,
      },
      {
        text: admin
          ? 'Availability for introduction'
          : 'When, in principle, would you be available to be introduced to the refugee you are matched with?',
        vertical: true,
        prompt:
          'It helps if you are flexible and can meet during the working week at the refugee referral agency',
        field: 'befriender.availability',
        optional: admin,
        style: { layout: 'stack' },
      },
      {
        text: admin
          ? 'Recent photo'
          : 'Please upload a recent photograph of yourself.',
        prompt:
          'This photograph may be shown to a refugee during the matching process so we recommend uploading a friendly picture not a passport photo. If you plan to introduce your befriendee to your partner or family it can include them. Max 5MB.',
        vertical: true,
        field: 'befriender.photo',
        optional: admin,
      },
    ],
    [
      ...(!admin
        ? [
            {
              title: '3. Referees',
            },
            {
              info:
                'We will need two references. For each please supply a name and email address, as well as telephone number, occupation and how long they have known you. Your references should not be close family members.',
            },
          ]
        : []),
      {
        text: 'Referee 1',
        field: 'befriender.referee1',
        optional: admin,
        rows: 3,
      },
      {
        text: 'Referee 2',
        field: 'befriender.referee2',
        optional: admin,
        rows: 3,
      },
    ],
    [
      ...(!admin
        ? [
            {
              title: '4. Declaration',
            },
            {
              info: '**By submitting this application:**',
            },
            {
              label:
                'I agree that the information provided is true and accurate',
              name: 'accurate',
              scalar: 'boolean',
            },
            {
              label:
                'I commit to weekly phone contact with my befriendee and aim to spend at least 3hrs together every two weeks for a minimum of 3 months',
              name: 'commit',
              scalar: 'boolean',
            },
            {
              label: "I agree to read the befrienders' guide on this website",
              name: 'guide',
              scalar: 'boolean',
            },
            {
              label:
                'I confirm that I understand the scope of the support being provided by HostNation (see below)',
              name: 'scope',
              scalar: 'boolean',
            },
            {
              label:
                'I consent to the use and storage by HostNation of my personal data contained in this form and in the references that will be provided or otherwise provided to HostNation',
              name: 'policy',
              scalar: 'boolean',
            },
            {
              label:
                'I consent to HostNation sharing some of the personal data with third parties, including refugees and their referrers in order to match me with a refugee and put us in contact',
              name: 'sharing',
              scalar: 'boolean',
            },
            {
              label:
                'I consent to future communication with HostNation for the purpose of giving feedback on the match',
              name: 'feedback',
              scalar: 'boolean',
            },
            {
              info: '**Contact preferences:**',
            },
          ]
        : []),
      ...(admin
        ? [
            {
              text: admin && 'Contact preference (communications - old)',
              label:
                'I consent to future communications with HostNation for the purposes of giving feedback and receiving updates',
              field: 'befriender.communication',
              optional: true,
            },
            {
              text: admin && 'Contact preference (fundraising - old)',
              label:
                'I consent to receiving emails regarding fundraising efforts',
              field: 'befriender.fundraising',
              optional: true,
            },
          ]
        : []),
      {
        text: admin && 'Contact preference (general updates)',
        label: 'I consent to occasional general updates from HostNation',
        field: 'befriender.consentupdates',
        optional: true,
      },
      ...(!admin
        ? [
            {
              info:
                '*If you would like to withdraw your consent at any time, please email info@hostnation.org.uk. Unless you have agreed to be available to be matched again, we will delete all identifiable personal data from our database 12 months after the end of your 3 month match through HostNation. For further details on how we use your personal data, please see our privacy policy.*',
            },
          ]
        : []),
    ],
  ];
}
