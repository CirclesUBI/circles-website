const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  de: 'de',
  es: 'es',
};

const langs = ['', '/de', '/es'];
const pages = [
  '/',
  '/faq',
  '/donate',
  '/contact',
  '/terms',
  '/privacy-policy',
  '/hubs',
  '/businesses',
];

const pathMap = {};
langs.forEach((lang) => {
  pages.forEach((page) => {
    pathMap[`${lang}${page}`] = { page };
  });
});

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return pathMap;
  },
  target: 'serverless',
};
