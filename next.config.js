const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  de: 'de',
  es: 'es',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/de/about': { page: '/about' },
      '/de/faq': { page: '/faq' },
      '/de/contact': { page: '/contact' },
      '/de/donate': { page: '/donate' },
    };
  },
};
