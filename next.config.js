const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

const nextConfig = {
  target: "serverless",
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY
  },
  pageExtensions: ["jsx", "js"],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.plugins.push(new webpack.IgnorePlugin(/\/iconv-loader$/));

    if (dev) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        loader: "eslint-loader",
        exclude: ["/node_modules/", "/.next/"],
        enforce: "pre",
        options: {
          // eslint options (if necessary)
        }
      });
    }

    return config;
  },
  generateInDevMode: false,
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withOffline(withCSS(nextConfig));
