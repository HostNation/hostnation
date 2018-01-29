exports.onClientEntry = () => {
  require('babel-polyfill');
  require('whatwg-fetch');
};

exports.shouldUpdateScroll = () => false;
exports.onRouteUpdate = ({ location }) => window.scroll(0, 0);
