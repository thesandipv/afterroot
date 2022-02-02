const withPWA = require("next-pwa")
const { config } = require("webpack")
/** @type {import("next").NextConfig} */
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  future: { webpack5: true },
  // productionBrowserSourceMaps: true,
})
