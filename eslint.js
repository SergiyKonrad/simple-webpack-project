// ESLint configuration file (eslint.config.mjs) using the flat config format.

// import js from '@eslint/js'
// import typescriptEslint from '@typescript-eslint/eslint-plugin'
// import tsParser from '@typescript-eslint/parser'
// import globals from 'globals'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
// import { FlatCompat } from '@eslint/eslintrc'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all,
// })

// export default [
//   ...compat.extends(
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//   ),
//   {
//     files: ['**/*.js', '**/*.ts'],
//     plugins: {
//       '@typescript-eslint': typescriptEslint,
//     },
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//       },
//       parser: tsParser,
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//     },
//     rules: {
//       'no-console': 'off',
//       'no-unused-vars': 'warn',
//     },
//   },
//   {
//     ignores: ['dist/', 'node_modules/'],
//   },
// ]
