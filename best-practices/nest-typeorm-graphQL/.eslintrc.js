module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['eslint-plugin-import', '@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint-config-airbnb-base/rules/best-practices',
    'eslint-config-airbnb-base/rules/errors',
    'eslint-config-airbnb-base/rules/node',
    'eslint-config-airbnb-base/rules/style',
    'eslint-config-airbnb-base/rules/variables',
    'eslint-config-airbnb-base/rules/es6',
    'eslint-config-airbnb-base/rules/imports',
    'eslint-config-airbnb-base/rules/strict',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src', 'src/**'],
        extensions: ['.js', '.ts'],
      },
    },
    node: {
      paths: ['src', 'src/**'],
      extensions: ['.js', '.json', '.ts'],
    },
    'import/extensions': ['.js', '.json', '.ts'],
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // #region General JS
    'class-methods-use-this': 'off',
    'consistent-return': 'warn', // Open to discussion
    curly: ['error', 'all'],
    'no-await-in-loop': 'warn',
    'no-confusing-arrow': 'warn', // conflicts with prettier, automate using eslint,
    'no-continue': 'off',
    'no-dupe-args': 'off', // Not compatible with decorators yet
    'no-empty-function': 'off',
    'no-fallthrough': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off', // Open to discussion
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off', // Not compatible with decorators yet
    'no-restricted-globals': 'off', // Not compatible with decorators yet
    'no-restricted-syntax': 'off',
    'no-return-await': 'warn',
    'no-shadow': 'off', // Not compatible with decorators yet
    'no-undef': 'off', // doesn't work with TS types
    'no-underscore-dangle': 'off', // conflicts with mongodb ids
    'object-curly-spacing': [2, 'always'],
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 200 }],
    'lines-between-class-members': 'off', // Prettier doesn't follow this.
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-useless-constructor': 'off',
    camelcase: [0, { properties: 'never' }],
    '@typescript-eslint/camelcase': [0, { properties: 'never' }],
    curly: [0, 'multi-line'],
    'no-multi-spaces': 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    indent: 'off', // conflicts with prettier ['error', 2]
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-unresolved': 'off',
    'operator-linebreak': [2, 'after', { overrides: { '?': 'after' } }],
    'operator-linebreak': 'off', // conflicts with prettier
  },
};
