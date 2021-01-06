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
      '/': { page: '/' },
      '/faq': { page: '/faq' },
      '/contact': { page: '/contact' },
      '/donate': { page: '/donate' },
      '/terms': { page: '/terms' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/de': { page: '/' },
      '/de/faq': { page: '/faq' },
      '/de/contact': { page: '/contact' },
      '/de/donate': { page: '/donate' },
      '/de/terms': { page: '/terms' },
      '/de/privacy-policy': { page: '/privacy-policy' },
      '/es': { page: '/' },
      '/es/faq': { page: '/faq' },
      '/es/contact': { page: '/contact' },
      '/es/donate': { page: '/donate' },
      '/es/terms': { page: '/terms' },
      '/es/privacy-policy': { page: '/privacy-policy' },
    };
  },
};
