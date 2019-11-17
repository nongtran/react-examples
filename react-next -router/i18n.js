/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require('next-i18next').default

const localeSubpathVariations = {
    none: {},
    foreign: {
        de: 'de',
    },
    all: {
        en: 'en',
        de: 'de',
    },
}

module.exports = new NextI18Next({
    defaultNS: 'common',
    defaultLanguage: 'en',
    otherLanguages: ['de'],
    localeSubpaths: localeSubpathVariations['none'],
    localePath: 'src/i18n/locales'
})
