const withPWA = require("next-pwa")
const commitHash = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim()
const longCommitHash = require("child_process")
  .execSync("git rev-parse HEAD")
  .toString()
  .trim()
const buildDate = new Date().toUTCString()

console.log(`Commit id ${commitHash} | Build Date ${buildDate}`)

/** @type {import("next").NextConfig} */
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  future: { webpack5: true },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.plugins.push(
      new webpack.DefinePlugin({
        __COMMIT_SHA: JSON.stringify(commitHash),
        __COMMIT_SHA_LONG: JSON.stringify(longCommitHash),
        __BUILD_DATE: JSON.stringify(buildDate),
      })
    )
    return config
  },
  // productionBrowserSourceMaps: true,
})
