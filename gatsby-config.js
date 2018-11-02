module.exports = {
  siteMetadata: {
    title: 'HAHA Studio',
  },
  plugins: [
        'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'haha-studio',
        short_name: 'haha',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
      },
    },
    'gatsby-plugin-offline',
  ],
}
