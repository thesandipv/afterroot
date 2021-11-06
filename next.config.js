const withPWA = require("next-pwa");
const { config } = require("webpack");

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  future: { webpack5: true },
  // productionBrowserSourceMaps: true,
});
