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
      '/de/': { page: '/' },
      '/de/faq': { page: '/faq' },
      '/de/contact': { page: '/contact' },
      '/de/donate': { page: '/donate' },
      '/de/terms': { page: '/terms' },
      '/de/privacy-policy': { page: '/privacy-policy' },
      '/es/about': { page: '/about' },
      '/es/faq': { page: '/faq' },
      '/es/contact': { page: '/contact' },
      '/es/donate': { page: '/donate' },
      '/es/terms': { page: '/terms' },
      '/es/privacy-policy': { page: '/privacy-policy' },
    };
  },
};
