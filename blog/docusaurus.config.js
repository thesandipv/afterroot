// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

const afterrootGitHub = "https://github.com/afterroot"

/** @type {import('@docusaurus/types').Plugin} */
async function tailwindPlugin(context, options) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      // Appends TailwindCSS and AutoPrefixer.
      postcssOptions.plugins.push(require("tailwindcss"))
      postcssOptions.plugins.push(require("autoprefixer"))
      return postcssOptions
    },
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AfterROOT Blog",
  tagline: "Everything is Connected",
  url: "https://afterroot.web.app",
  baseUrl: "/ar/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "afterroot",
  projectName: "blog",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/thesandipv/afterroot/tree/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [tailwindPlugin],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "AfterROOT",
        hideOnScroll: false,
        logo: {
          alt: "AfterROOT",
          src: "img/logo.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: afterrootGitHub,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Apps",
            items: [
              {
                label: "Pointer Replacer",
                href: "https://pointer-replacer.web.app",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Instagram",
                href: "https://instagram.com/afterroot",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/afterroot",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: afterrootGitHub,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AfterROOT. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
