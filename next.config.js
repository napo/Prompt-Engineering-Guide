const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'it','zh', 'jp', 'pt', 'tr'],
    defaultLocale: 'en'
  }
})
