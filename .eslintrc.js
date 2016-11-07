module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    "semi": 0,//2,
    "space-before-blocks": 0,
    "space-before-function-paren": 0,
    "no-trailing-spaces": 0,
    "padded-blocks": 0,
    "no-tabs": 0,
    "comma-spacing": 0,
    "indent": 0,
    "spaced-comment": 0,
    "eqeqeq": 0,
    "keyword-spacing": 0,
    
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
