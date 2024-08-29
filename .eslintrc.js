/* Since ESLint 9.x introduced some changes, check that your configuration file is up to date with the latest format supported by ESLint 9.x.
 */

/* You can use the new flat config format like 
ESLint.config.mjs 
(recommended for new projects).
The format eslint.config.mgs is commented and provided in this project.
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
