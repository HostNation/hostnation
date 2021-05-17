module.exports = {
  siteMetadata: {
    title: 'HostNation',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stories',
        path: `${__dirname}/stories`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
