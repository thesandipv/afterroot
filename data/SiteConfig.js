/*
 * Copyright (C) 2020 Sandip Vaghela
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const _version = "0.1.6"
const config = {
  siteTitle: "AfterROOT - Everything's Connected", // Site title.
  siteTitleShort: "AfterROOT", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "AfterROOT", // Alternative site title for SEO.
  siteLogo: "/logos/logo_512.png", // Logo used for SEO and manifest.
  siteUrl: "https://afterroot.web.app", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "Everything's Connected.", // Website description used for RSS feeds/meta description tag.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  links: {
    githubUrl: "https://github.com/thesandipv",
    twitterUrl: "https://twitter.com/afterroot",
    mailUrl: "mailto:sandipvaghela311@gmail.com",
    igUrl: "https://www.instagram.com/afterroot/",
    ytUrl: "https://www.youtube.com/channel/UCBoD9tMU--hsqlX9--Mrypw",
    fbUrl: "https://www.facebook.com/afterroot",
    jetbrains: "https://www.jetbrains.com/?from=AfterROOT",
    vsCode: "https://code.visualstudio.com",
  },
  footerLinks: [
    {
      title: "About",
      url: "/about",
      isExternal: false,
    },
    {
      title: "Privacy Policy",
      url: "/privacy-policy",
      isExternal: false,
    },
  ],
  copyright: `©${Date.prototype.getFullYear()} AfterROOT`, // Copyright string for the footer of the website and RSS feed.
  version: _version,
  themeColor: "#1E88E5",
  backgroundColor: "#e0e0e0",
}

// Validate
// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)
module.exports = config
