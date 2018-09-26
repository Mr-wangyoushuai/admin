// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    'commonjs': true,
    'es6': true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 引号类型
    "quotes": [0, "single"],
    // 禁止出现未使用过的变量
    // 'no-unused-vars': 0,
    // 要求或禁止末尾逗号
    'comma-dangle': 0,
    // // allow async-await
    'generator-star-spacing': 'off',
    // // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 关键字后面使用一致的空格
    'keyword-spacing': 0,
    // js语句结尾必须使用分号
    'semi': ['off', 'always'],


  }
}
