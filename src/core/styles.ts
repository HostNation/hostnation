export const colors = {
  purple: '#b34b6a',
  purpleDark: '#8f3c55',
  purpleFaint: '#f3e2e7',

  yellow: '#c3a217',
  yellowDark: '#957c12',
  yellowFaint: '#f7ebb9',

  red: 'red',
  redDark: '#b30000',
  redFaint: '#ffe0e0',
  redExtraFaint: '#fff5f5',

  black: '#2f3644',
  blackDark: '#1a1e26',
  blackLight: '#444e62',

  grey: '#aaa',
  greyDark: '#aaa',

  white: '#fff',
  processing: 'rgba(255,255,255,.4)',
};

export const icons = {
  fb: {
    viewBox: '0 0 1024 1024',
    path: 'M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z',
  },
  fbThin: {
    viewBox: '0 0 448 832',
    path: 'm128,832l0,-448l-128,0l0,-128l128,0l0,-64c0,-105.8 86.2,-192 192,-192l128,0l0,128l-128,0c-35.2,0 -64,28.8 -64,64l0,64l192,0l-32,128l-160,0l0,448l-128,0z',
  },
  twitter: {
    viewBox: '0 0 1024 1024',
    path: 'M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z',
  },
  up: {
    viewBox: '0 0 320 512',
    path: 'M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z',
  },
  down: {
    viewBox: '0 0 320 512',
    path: 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
  },
  error: {
    viewBox: '0 0 16 16',
    path: 'M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z',
  },
};

const baseStyle = {
  fontFamily: 'Lato, sans-serif',
  fontSize: 16,
  color: colors.black,
  lineHeight: 1.4,
};

const textStyle = {
  ...baseStyle,
  fontSize: 20,
  fontWeight: 300 as 300,
  textAlign: 'left',
};

const fieldStyle = (color: 'yellow' | 'purple', admin?: boolean) => ({
  ...baseStyle,

  borderWidth: 1,
  borderStyle: 'solid',
  padding: 10,
  boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.15)',
  spacing: '10px 25px',
  ...(!admin
    ? {
        borderColor: colors.white,
        background: '#f2f2f2',
      }
    : {
        borderColor: '#888',
        background: colors.white,
      }),

  placeholder: {
    color: 'rgba(0,0,0,0.35)',
  },
  selected: {
    fontWeight: 'bold' as 'bold',
  },
  group: {
    fontWeight: 'bold' as 'bold',
    fontStyle: 'italic' as 'italic',
  },
  key: {
    fontWeight: 'bold' as 'bold',
    fontStyle: 'italic' as 'italic',
    fontSize: 14,
    width: 200,
  },
  none: {
    fontStyle: 'italic' as 'italic',
  },

  focus: {
    borderColor: colors[color],
    active: {
      borderColor: colors[`${color}Dark`],
      background: colors[`${color}Faint`],
    },
  },

  invalid: {
    background: colors.redExtraFaint,
    borderColor: colors.red,
    focus: {
      borderColor: colors.redDark,
      active: {
        background: colors.redFaint,
        borderColor: colors.redDark,
      },
    },
  },

  icon: {
    background: 'rgba(0,0,0,0.1)',
  },

  processing: {
    backgroundColor: '#f2f2f2',
    backgroundImage: `linear-gradient(45deg, ${[
      `${colors.processing} 25%`,
      'transparent 25%',
      'transparent 50%',
      `${colors.processing} 50%`,
      `${colors.processing} 75%`,
      'transparent 75%',
      'transparent',
    ].join(',')})`,
    backgroundSize: '40px 40px',
    animation: 'upload-bar 1s linear infinite',
    focus: {
      background: colors[`${color}Faint`],
    },
  },

  button: {
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold' as 'bold',
    letterSpacing: 0.5,
    width: 120,
    boxShadow: 'none',
    background: colors[color],
    hover: {
      background: colors[`${color}Dark`],
    },
    focus: {
      active: {
        background: colors[color],
        hover: {
          background: colors[`${color}Dark`],
        },
      },
    },
  },
});

export default {
  base: baseStyle,
  text: textStyle,
  title: {
    ...textStyle,
    fontSize: 30,
    fontWeight: 'bold' as 'bold',
    textAlign: 'center',
    padding: '0 15px',
  },
  subtitle: {
    ...textStyle,
    fontSize: 24,
    fontWeight: 'bold' as 'bold',
    textAlign: 'center',
    padding: '0 15px',
  },
  body: {
    ...textStyle,
    textAlign: 'center',
    maxWidth: 630,
    margin: '0 auto',
    padding: '0 15px',
  },
  boxText: {
    ...textStyle,
    maxWidth: 750,
    margin: '0 auto',
    padding: '0 15px',
  },
  header: {
    ...baseStyle,
    fontSize: 30,
    fontWeight: 'bold' as 'bold',
    textAlign: 'center',
  },
  markdown: (color: 'yellow' | 'purple') => ({
    ...baseStyle,
    link: {
      color: colors[color],
    },
    h2: {
      ...textStyle,
      padding: '0 15px',
      fontWeight: 'bold' as 'bold',
    },
    hr: {
      background: colors[color],
    },
  }),
  button: (color) => ({
    ...baseStyle,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold' as 'bold',
    letterSpacing: 0.5,
    userSelect: 'none',
    cursor: 'pointer',
    background: colors[color],
    padding: 15,
    textAlign: 'center',
    hover: { background: colors[`${color}Dark`] },
  }),
  field: fieldStyle,
  tableLinks: {
    ...baseStyle,
    fontSize: 13,
    verticalAlign: 'middle',
    borderRadius: 3,
    spinner: { color: colors.purple },
    header: {
      heading: { fontSize: 30 },
      link: {
        color: colors.purple,
        hover: { color: colors.purpleDark },
      },
      hr: { background: colors.purple },
    },
    column: {
      fontWeight: 'bold',
      background: '#e0e0e0',
      padding: '10px 20px 9px 10px',
    },
    link: {
      color: colors.purple,
      padding: `8px 20px 8px 10px`,
      alt: { background: '#f9f9f9' },
      index: {
        fontWeight: 'bold',
        color: colors.black,
        width: 50,
      },
      hover: {
        color: 'white',
        background: colors.purple,
        alt: { background: colors.purple },
        index: { color: 'white' },
      },
    },
    filter: {
      fontSize: 14,
      label: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        width: 50,
      },
      helpLabel: {
        fontWeight: 'bold',
        width: 75,
        color: colors.purple,
        hover: { color: colors.purpleDark },
      },
      field: {
        ...fieldStyle('purple', true),
        fontSize: 14,
        padding: 8,
      },
      help: {
        fontSize: 16,
        title: { fontWeight: 'bold', fontSize: 30 },
        subtitle: { fontWeight: 'bold', fontSize: 20 },
        text: { fontWeight: 'bold' },
        indent: { fontStyle: 'italic', color: colors.purple },
        note: { opacity: 0.7, fontStyle: 'italic' },
        op: { fontWeight: 'bold', fontStyle: 'italic' },
        fields: { fontSize: 13 },
      },
    },
  },
};
