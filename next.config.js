const withPurgeCSS = require("next-purgecss");
const withOffline = require("next-offline");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {};

module.exports = withOffline(nextConfig);
