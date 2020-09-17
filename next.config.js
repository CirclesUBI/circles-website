const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  basePath: '/circles-website',
  assetPrefix: '/circles-website/',
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
