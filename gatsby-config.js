/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./data/SiteConfig")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.siteTitle,
    url: config.siteUrl,
    description: config.siteDescription,
    twitterUsername: config.userTwitter,
  },

  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./node_modules"],
        useResolveUrlLoader: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: "DD-MM-YYYY HH:MM:SS", // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
      },
    },
  ],
}
