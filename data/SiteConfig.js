const _version = "0.1.3"
const config = {
  siteTitle: "AfterROOT - Everything's Connected", // Site title.
  siteTitleShort: "AfterROOT", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "AfterROOT", // Alternative site title for SEO.
  siteLogo: "/logos/logo_512.png", // Logo used for SEO and manifest.
  siteUrl: "https://afterroot.co", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "Everything's Connected.", // Website description used for RSS feeds/meta description tag.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  links: {
    githubUrl: "https://github.com/sandipv22",
    twitterUrl: "https://twitter.com/thesandipv",
    mailUrl: "mailto:sandipvaghela311@gmail.com",
    igUrl: "https://www.instagram.com/afterroot/",
    ytUrl: "https://www.youtube.com/channel/UCBoD9tMU--hsqlX9--Mrypw",
    fbUrl: "https://www.facebook.com/afterroot",
  },
  copyright: "Copyright © 2020 AfterROOT", // Copyright string for the footer of the website and RSS feed.
  version: _version,
  themeColor: "#1E88E5",
  backgroundColor: "#e0e0e0",
}

// Validate
// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)
module.exports = config
