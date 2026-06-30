import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { react, 'react-hooks': reactHooks },
    rules: {
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
      'react/no-unknown-property': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'prefer-const': 'warn',
    },
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/scripts/**/*.js'],
    languageOptions: { sourceType: 'commonjs', globals: { require: 'readonly', module: 'readonly', __dirname: 'readonly', console: 'readonly' } },
  },
  { ignores: ['**/dist/**', '**/node_modules/**', '**/.next/**', '**/.backup/**', '**/scripts/**'] }
);