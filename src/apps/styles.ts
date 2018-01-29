export const colors = {
  yellow: '#c3a217',
  yellowDark: '#ac8f14',
  yellowFaint: '#f7ebb9', // 42%

  purple: '#b34b6a',
  purpleDark: '#a1435f',
  purpleFaint: '#f3e2e7', // 42%

  red: 'red',
  redDark: '#b30000',
  redFaint: '#ffe0e0',
  redExtraFaint: '#fff5f5',

  white: '#fff',
  black: '#2f3644',
  grey: '#f2f2f2',
  processing: 'rgba(255,255,255,.4)',
};

export const fonts = {
  body: 'Lato, sans-serif',
};

export const icons = {
  error: {
    path:
      'M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z',
    viewBox: '0 0 16 16',
  },
};

const text = {
  fontFamily: fonts.body,
  fontSize: 16,
  color: colors.black,
};

const header = {
  fontFamily: fonts.body,
  fontSize: 30,
  color: colors.black,
  fontWeight: 'bold' as 'bold',
};

const markdown = (color: 'yellow' | 'purple') => ({
  ...text,
  link: {
    color: colors[color],
    textDecoration: 'none',
  },
  hr: {
    background: colors[color],
  },
});

const button = (color: 'yellow' | 'purple') => ({
  ...header,
  fontSize: 30,
  textAlign: 'center',
  color: colors.white,
  letterSpacing: 0.5,
  userSelect: 'none',
  cursor: 'pointer',
  background: colors[color],
  padding: 15,
  hover: {
    background: colors[`${color}Dark`],
  },
});

export default {
  text,
  header,
  markdown,
  button,
  field: (color: 'yellow' | 'purple', admin?: boolean) => ({
    ...text,

    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.15)',
    spacing: '10px 25px',
    ...(!admin
      ? {
          borderColor: colors.white,
          background: colors.grey,
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
  }),
  fill: {
    position: 'absolute' as 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.innerHTML = `&shy;<style>

  @keyframes upload-bar {
    from {
      background-position: 40px 0;
    }
    to {
      background-position: 0 0;
    }
  }

  </style>`;
  document.body.appendChild(div.childNodes[1]);
}
