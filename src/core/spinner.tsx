import * as React from 'react';

export default function Spinner({ style }) {
  const spinnerStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    width: '24px',
    height: '24px',
    margin: '-6px 0 0 -12px',
  };

  const circleBaseStyle = {
    position: 'absolute' as 'absolute',
    display: 'block',
    width: '24px',
    height: '24px',
    background: (style && style.color) || 'black',
    borderRadius: '24px',
  };

  const delay = -Date.now() % 1500;

  const circle1Style = {
    top: -24,
    left: 0,
    animation: `1.5s ease-in-out ${delay}ms infinite spin1`,
    ...circleBaseStyle,
  };

  const circle2Style = {
    top: 12,
    left: 20.8,
    animation: `1.5s ease-in-out ${delay}ms infinite spin2`,
    ...circleBaseStyle,
  };

  const circle3Style = {
    top: 12,
    left: -20.8,
    animation: `1.5s ease-in-out ${delay}ms infinite spin3`,
    ...circleBaseStyle,
  };

  return (
    <div style={{ position: 'relative', height: 60, ...style }}>
      <div style={spinnerStyle}>
        <i style={circle1Style} />
        <i style={circle2Style} />
        <i style={circle3Style} />
      </div>
    </div>
  );
}
