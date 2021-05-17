const base = `

.e0.e1.e2.e3.e4,
.e0.e1.e2.e3.e4:before,
.e0.e1.e2.e3.e4:after,
.e5.e6.e7.e8.e9,
.e5.e6.e7.e8.e9:before,
.e5.e6.e7.e8.e9:after {
  box-sizing: border-box !important;
}
.e5.e6.e7.e8.e9 *,
.e5.e6.e7.e8.e9 *:before,
.e5.e6.e7.e8.e9 *:after {
  box-sizing: inherit;
}

.e0.e1.e2.e3.e4,
.e0.e1.e2.e3.e4:before,
.e0.e1.e2.e3.e4:after,
.e5.e6.e7.e8.e9,
.e5.e6.e7.e8.e9:before,
.e5.e6.e7.e8.e9:after,
.e5.e6.e7.e8.e9 *,
.e5.e6.e7.e8.e9 *:before,
.e5.e6.e7.e8.e9 *:after {
  margin: 0;
  padding: 0;
  border: 0;
  width: auto;
  height: auto;
  vertical-align: baseline;
  outline: none;
  border-collapse: separate;
  border-spacing: 0;
}

.e5.e6.e7.e8.e9,
.e5.e6.e7.e8.e9:before,
.e5.e6.e7.e8.e9:after,
.e5.e6.e7.e8.e9 *,
.e5.e6.e7.e8.e9 *:before,
.e5.e6.e7.e8.e9 *:after {
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.5;
  color: black;
  text-decoration: none;
  text-align: left;
  letter-spacing: 0;
}

.e0.e1.e2.e3.e4.e10 {
  box-sizing: content-box !important;
}
.e0.e1.e2.e3.e4.e10 > div > * {
  width: auto !important;
}

`;

const groups = {
  text: [
    'font',
    'color',
    'textAlign',
    'letterSpacing',
    'wordSpacing',
    'textShadow',
    'wordBreak',
    'textDecoration',
    'textTransform',
    'overflowWrap',
    'wordWrap',
    'whiteSpace',
    'userSelect',
    'MozUserSelect',
    'msUserSelect',
    'WebkitUserSelect',
    'textIndent',
    'textOverflow',
  ],
  box: [
    'background',
    'padding',
    'border',
    'borderRadius',
    'boxShadow',
    'boxSizing',
    'animation',
    'spacing',
    'layout',
  ],
  other: [
    'cursor',
    'overflow',
    'outline',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'width',
    'height',
    'minWidth',
    'maxWidth',
    'minHeight',
    'maxHeight',
    'float',
    'clear',
    'zIndex',
    'animation',
    'display',
    'visibility',
    'opacity',
    'margin',
    'verticalAlign',
    'userSelect',
    'MozUserSelect',
    'msUserSelect',
    'WebkitUserSelect',
  ],
};

export default {
  base,
  groups,
};
