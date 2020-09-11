// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "dev"}`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      options: {
        matomoUrl: process.env.MATOMO_URL,
        siteId: process.env.MATOMO_APPLICATION_ID,
        siteUrl: process.env.SITE_URL,
      },
      resolve: "gatsby-plugin-matomo",
    },
    {
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layout/index.tsx"),
        },
        gatsbyRemarkPlugins: [
          {
            options: {
              elements: [`h2`],
              enableCustomId: true,
              icon: false,
            },
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
      resolve: `gatsby-plugin-mdx`,
    },
    {
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
      resolve: `gatsby-source-filesystem`,
    },
    {
      options: {
        custom: {
          families: ["OpenSans"],
          urls: ["/fonts/fonts.css"],
        },
      },
      resolve: "gatsby-plugin-web-font-loader",
    },
    {
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },

      resolve: "gatsby-plugin-material-ui",
    },
    {
      options: {
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`,
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        theme_color: `#663399`, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-manifest`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: {
      content: "Fabrique des ministères sociaux",
      name: "Archifiltre",
    },
    description: `Visualisez et améliorez vos arborescences de fichiers !`,
    social: {
      github: "https://github.com/SocialGouv/archifiltre",
    },
    title: `Archifiltre`,
  },
};
