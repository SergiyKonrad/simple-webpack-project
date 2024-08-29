/*
 * Note: ESLint 9.x introduced some changes, including a new flat config format.
 * Ensure that this configuration is compatible with the latest ESLint 9.x format.
 */

/*
 * This project uses the traditional `.eslintrc.js` format.
 * Alternatively, you can use the new flat config format introduced in ESLint 9.x.
 * If you prefer the flat config, you would typically create a file named `eslint.config.mjs`.
 * In this project, `eslint.config.mjs` was renamed to `eslint.js` to avoid conflicts, and it's provided as a commented-out example.
 */

module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
}
