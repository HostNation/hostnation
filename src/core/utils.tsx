import React, { useState } from 'react';
import useResizeObserver from 'use-resize-observer';

import { css } from './elements';

export const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  return [isToggled, () => setIsToggled(!isToggled), setIsToggled] as any;
};

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverProps = {
    onMouseMove: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };
  return [isHovered, hoverProps] as any;
};

export const useWidth = (toggleWidth) => {
  const { ref, width } = useResizeObserver();
  return [ref, width && width <= toggleWidth] as any;
};

export const StickyFooter = ({ content, footer }) => {
  const { ref, height = 0 } = useResizeObserver();
  return (
    <>
      <div style={{ minHeight: '100%', marginBottom: -height }}>
        {content}
        <div style={{ height: height }} />
      </div>
      <div ref={ref}>{footer}</div>
    </>
  );
};

export const cssBase = `
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
html,
body {
  height: 100%;
}
img {
  display: block;
  width: 100%;
}
a {
  text-decoration: none;
}
${css.base}
`;
