// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from '@next/eslint-plugin-next';

const compat = new FlatCompat();

export default [
  ...compat.extends('next/core-web-vitals'),
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      '@next/next/no-img-element': 'error',
      'react/no-unescaped-entities': 'off',
      // Add your custom rules here
    },
  },
  {
    ignores: ['.next/', 'node_modules/', 'out/'],
  },
];