export const siteConfig = {
  siteTitle: "AfterROOT - Everything's Connected",
  siteTitleShort: "AfterROOT",
  siteTitleAlt: "AfterROOT",
  siteLogo: "/logos/icon-512x512.png",
  siteUrl: "https://afterroot.web.app",
  pathPrefix: "/",
  siteDescription: "Everything's Connected.",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "DD/MM/YYYY",
  links: {
    githubUrl: "https://github.com/thesandipv",
    githubProjectUrl: "https://github.com/thesandipv/afterroot",
    twitterUrl: "https://twitter.com/afterroot",
    mailUrl: "mailto:sandipvaghela311@gmail.com",
    igUrl: "https://www.instagram.com/afterroot/",
    ytUrl: "https://www.youtube.com/@afterroot-yt",
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
    {
      title: "Contact Us",
      url: "/contact",
      isExternal: false,
    },
  ],
  copyright: `©${new Date().getFullYear()} AfterROOT`,
  commitSha: "main",
  commitShaLong: "main",
  buildDate: new Date().toISOString().split("T")[0],
  version: "1.0.0",
  themeColor: "#1E88E5",
  backgroundColor: "#e0e0e0",
}

export type SiteConfig = typeof siteConfig
