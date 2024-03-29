module.exports = {
  siteMetadata: {
    title: 'HostNation',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-ZYY0J6MLZG",
      ],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'stories',
        path: `${__dirname}/stories`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
  ],
};
