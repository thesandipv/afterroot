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
  ],
}
