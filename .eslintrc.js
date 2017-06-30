// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    //����ע��
    'require-jsdoc': 0,
    'spaced-comment': 0,
    'lines-around-comment': 0,
    'no-inline-comments': 0,
    //����ʹ�� === �� !==
    'eqeqeq': 0,
    //ʹ����Ԫ������
    'no-unneeded-ternary': 0,
    'no-ternary': 0,
    'no-nested-ternary': 0,
      // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
