module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false, // não exige que ESLint encontre babel.config.js
    babelOptions: {
      presets: ['@vue/cli-plugin-babel/preset']
    },
    ecm
  }}