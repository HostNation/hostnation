import * as React from 'react';

import Spinner from './spinner';
import { colors } from './styles';

const loadScript = url => {
  if (typeof document !== 'undefined') {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    const head = document.head || document.getElementsByTagName('head')[0];
    script.onload = () => head.removeChild(script);
    head.appendChild(script);
  }
};

export default function App({ app, color = 'grey', full = false, ...config }) {
  setTimeout(() => loadScript(`/js/${app}.js`));
  return (
    <div
      style={{
        position: 'relative',
        minHeight: 60,
        ...(full ? { height: '100%' } : {}),
      }}
    >
      <Spinner
        style={{
          color: colors[color],
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      />
      <div
        style={{
          position: 'relative',
          background: 'white',
          ...(full ? { height: '100%' } : {}),
        }}
      >
        <div
          {...{ [`data-app-${app}`]: JSON.stringify(config) }}
          style={{ ...(full ? { height: '100%' } : {}) }}
        />
      </div>
    </div>
  );
}
