export const icons = {
  fb: {
    viewBox: '0 0 1024 1024',
    path:
      'M928 0h-832c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h416v-448h-128v-128h128v-64c0-105.8 86.2-192 192-192h128v128h-128c-35.2 0-64 28.8-64 64v64h192l-32 128h-160v448h288c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96z',
  },
  fbThin: {
    viewBox: '0 0 448 832',
    path:
      'm128,832l0,-448l-128,0l0,-128l128,0l0,-64c0,-105.8 86.2,-192 192,-192l128,0l0,128l-128,0c-35.2,0 -64,28.8 -64,64l0,64l192,0l-32,128l-160,0l0,448l-128,0z',
  },
  twitter: {
    viewBox: '0 0 1024 1024',
    path:
      'M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z',
  },
  up: {
    viewBox: '0 0 320 512',
    path:
      'M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z',
  },
  down: {
    viewBox: '0 0 320 512',
    path:
      'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
  },
};

export const colors = {
  purple: '#b34b6a',
  purpleDark: '#8f3c55',
  yellow: '#c3a217',
  yellowDark: '#957c12',
  grey: '#2f3644',
  greyDark: '#1a1e26',
  greyLight: '#444e62',
};

const textStyle = {
  fontFamily: 'Lato, sans-serif',
  fontSize: 20,
  color: '#333',
  fontWeight: 300 as 300,
  textAlign: 'center',
};

export default {
  text: textStyle,
  title: {
    ...textStyle,
    fontSize: 50,
    fontWeight: 'bold' as 'bold',
  },
  subtitle: {
    ...textStyle,
    fontSize: 24,
    fontWeight: 'bold' as 'bold',
  },
  body: {
    ...textStyle,
    maxWidth: 650,
    margin: '0 auto',
  },
  boxText: {
    ...textStyle,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'normal' as 'normal',
  },
  button: color => ({
    ...textStyle,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold' as 'bold',
    background: colors[color],
    padding: 15,
    textAlign: 'center',
    hover: { background: colors[`${color}Dark`] },
  }),
};
