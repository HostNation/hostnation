import React from 'react';

import st, { CSSTree } from '../style-transform';

import css from './css';

const getMargin = (style) => {
  const gap = (parseFloat(style.lineHeight) - parseFloat(style.fontSize)) * 0.5;
  return `-${gap + 1}px 0px -${gap + 1}px`;
};

export interface TxtProps extends React.HTMLProps<{}> {
  children?: React.ReactNode;
  onTextChange?: (text: string) => void;
  placeholder?: string;
  prompt?: boolean;
  rows?: number;
  password?: boolean;
  setFocusElem?: (c: HTMLElement | null) => void;
  style?: CSSTree<'placeholder'>;
}

export default ({ children, style, ...props }) => {
  const baseStyle = st(style)
    .defaults({
      fontSize: 16,
      lineHeight: 1.5,
    })
    .map((s) => ({
      ...s,
      display: s.display === 'inline' ? 'inline-block' : s.display || 'block',
    }))
    .map((s) => {
      if (!s.fontSize || !s.lineHeight) return s;
      const lineHeightNum = !isNaN(s.lineHeight as number)
        ? parseFloat(s.fontSize as string) * (s.lineHeight as number)
        : parseFloat(s.lineHeight as string);
      return { ...s, lineHeight: `${lineHeightNum}px` };
    });
  const outerStyle = baseStyle.filter(...css.groups.box, ...css.groups.other);
  const innerStyle = {
    padding: '1px 0px',
    display: 'block',
    minHeight: baseStyle.fontSize,
  };
  const textStyle = baseStyle.filter(...css.groups.text);
  return (
    <span style={outerStyle} {...props} className="e5 e6 e7 e8 e9">
      <span style={innerStyle}>
        {
          <span
            style={{
              ...textStyle,
              display: 'block',
              margin: getMargin(textStyle),
            }}
          >
            {React.Children.toArray(children).reduce<React.ReactNode[]>(
              (result, child, i) =>
                result.concat(
                  typeof child === 'string'
                    ? child
                        .split('\n')
                        .reduce<React.ReactNode[]>(
                          (res, line, j) =>
                            res.concat(
                              j === 0 ? line : [<br key={`${i}_${j}`} />, line],
                            ),
                          [],
                        )
                    : child,
                ),
              [],
            )}
          </span>
        }
      </span>
    </span>
  );
};

// export default base().yield(
//   r
//     .do('children', 'placeholder', 'style', (children, placeholder, style) => ({
//       children: children || placeholder,
//       style: children ? style.text : style.placeholder,
//     }))
//     .yield(({ style, children }) => (

//     )),
// );
