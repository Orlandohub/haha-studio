const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'HAHA Studio',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-v2-plugin-page-transitions',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
}
