module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // aponte todas as regras que não batem como erro
    'prettier/prettier': 'error',
    // só retorna erro se o meu formato de arquivo for diferente do informado
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', 'js'] }],
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],

    'arrow-body-style': 0,
    'import/default': 2,
    camelcase: 'off',
    'no-unused-vars': 'off',
    'react/no-unused-state': 'off',
    'react/self-closing-comp': 'off',
  },
};
