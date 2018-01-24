module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-next',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/dashboard/*'] },
    },
  ],
};
