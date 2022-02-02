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
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },

      resolve: "gatsby-plugin-material-ui",
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  siteMetadata: {
    author: {
      content: "Fabrique Numérique des Ministères Sociaux",
      name: "Docs par Archifiltre",
    },
    description: `Visualisez et améliorez vos arborescences de fichiers !`,
    social: {
      github: "https://github.com/SocialGouv/archifiltre-docs",
    },
    title: `Docs par Archifiltre`,
  },
};
