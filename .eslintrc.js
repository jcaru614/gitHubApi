module.exports = {
  root: true,
  extends: [
    '@react-native-community/eslint-config', 
    'standard-with-typescript', 
    'eslint-config-prettier', 
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 
    'react', 
    'react-native', 
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json', 
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    quotes: ['error', 'single', {avoidEscape: true}],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
