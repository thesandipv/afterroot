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
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})

module.exports = withPWA({
  env: {
    COMMIT_SHA: commitHash,
    COMMIT_SHA_LONG: longCommitHash,
    BUILD_DATE: buildDate,
  },
  // productionBrowserSourceMaps: true,
})
