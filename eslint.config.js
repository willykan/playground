  const pluginTypescript = require('@typescript-eslint/eslint-plugin')
  const parserTypescript = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: ['**/node_modules', '**/.next',],
  },
  {
    files: ['frontend/src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
        '@typescript-eslint': pluginTypescript,
      },
    languageOptions: {
         parser: parserTypescript,
         parserOptions: {
           ecmaVersion: 'latest',
           sourceType: 'module',
           ecmaFeatures: {
             jsx: true,
           },
         },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
