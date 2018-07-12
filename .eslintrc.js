// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true, //https://stackoverflow.com/questions/39510736/eslint-dollar-is-not-defined-no-undef/39511584
    jasmine: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', "eslint:recommended", "plugin:jasmine/recommended"],
  // required to lint *.vue files
  plugins: [
    'html',
    'jasmine'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // quotes: ['error', 'single'],
    semi: ['error', 'always'],
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }]
    // 'space-before-function-paren': ["error", {
    //   "anonymous": "never",
    //   "named": "never",
    //   "asyncArrow": "never"
    // }]
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}