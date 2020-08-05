/* eslint-disable @typescript-eslint/camelcase */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'dev'}`,
})

module.exports = {
  siteMetadata: {
    title: `Archifiltre`,
    description: `Vos arborescences, comme vous ne les avez jamais vues`,
    author: {
      name: 'Archifiltre',
      content: 'Fabrique des ministères sociaux',
    },
    social: {
      github: 'https://github.com/SocialGouv/archifiltre',
    },
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: process.env.MATOMO_APPLICATION_ID,
        matomoUrl: process.env.MATOMO_URL,
        siteUrl: process.env.SITE_URL,
        dev: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/layout/index.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
