import React from 'react';

export interface IconProps extends React.HTMLProps<any> {
  path?: string;
  viewBox?: string;
  style?: React.CSSProperties;
}
const Icon = ({ viewBox, path, style, ...props }: IconProps) => {
  const size = (style && (style.width || style.fontSize)) || 16;
  if (!path) {
    return (
      <span
        style={{ ...style, display: 'block', width: 'auto', height: 'auto' }}
        className="e5 e6 e7 e8 e9"
        {...props}
      >
        <span style={{ display: 'block', width: size, height: size }} />
      </span>
    );
  }
  return (
    <span
      style={{ ...style, display: 'block', width: 'auto', height: 'auto' }}
      className="e5 e6 e7 e8 e9"
      {...props}
    >
      <svg
        width={size}
        height={size}
        style={{ display: 'block', width: size, height: size }}
        viewBox={viewBox}
      >
        <path style={{ fill: (style && style.color) || 'black' }} d={path} />
      </svg>
    </span>
  );
};
export default Icon;
