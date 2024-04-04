module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']]
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'standard',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', 'promise', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'eslint-disable-next-line': 'off',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0
  }
}
