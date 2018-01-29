exports.onPreBootstrap = () => {
  const fetch = require('node-fetch');
  global.fetch = fetch.default;
  global.Headers = fetch.Headers;
};
