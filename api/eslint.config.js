import eslintPluginImport from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        project: './tsconfig.json',
      },
      globals: {
        console: true,
        process: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      import: eslintPluginImport,
    },
    rules: {
      'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
