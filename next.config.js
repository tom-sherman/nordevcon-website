const withCSS = require("@zeit/next-css");

const nextConfig = {
  target: "serverless",
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
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
  }
};

module.exports = withCSS(nextConfig);
