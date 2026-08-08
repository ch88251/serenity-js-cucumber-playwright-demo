import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';

const tsFiles = [ '**/*.ts' ];

export default [
    { ignores: [ '**/lib/**' ] },

    { ...js.configs.recommended, files: tsFiles },
    { ...tsPlugin.configs['flat/eslint-recommended'], files: tsFiles },
    ...tsPlugin.configs['flat/recommended'].map(config => ({ ...config, files: tsFiles })),
    { ...unicorn.configs.recommended, files: tsFiles },

    {
        files: tsFiles,
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 6,
                sourceType: 'module',
                project: [ 'tsconfig.eslint.json' ],
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            import: importPlugin,
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'sort-imports': 'off',
            'import/order': 'off',
            'unused-imports/no-unused-imports': 'error',

            'no-multiple-empty-lines': [ 'warn', {
                'max': 1,
            } ],

            '@typescript-eslint/explicit-module-boundary-types': 'off',

            'indent': [ 'error', 4, {
                'MemberExpression': 'off',
                'SwitchCase': 1,
            } ],

            'quotes': [ 'error', 'single', {
                'allowTemplateLiterals': true,
                'avoidEscape': true,
            } ],

            '@typescript-eslint/no-explicit-any': 'off', // todo: review

            '@typescript-eslint/no-unused-vars': [ 'warn', {
                'args': 'none',
                'vars': 'all',
                'varsIgnorePattern': '^.*_$',
            } ],

            'unicorn/empty-brace-spaces': 'off',

            'unicorn/filename-case': [ 'error', {
                'cases': {
                    'kebabCase': true,      // packages
                    'pascalCase': true,     // classes
                    'camelCase': true,      // functions
                }
            } ],

            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-static-only-class': 'off',

            'unicorn/numeric-separators-style': 'off',

            'unicorn/prefer-module': 'off',         // fixme disable when we can provide support for ESM
            'unicorn/prefer-node-protocol': 'off',  // fixme requires Node 14.13 or newer, disable until we no longer have to support Node 12
            'unicorn/prefer-spread': 'off',

            'unicorn/prevent-abbreviations': [ 'error', {
                'allowList': {
                    'conf': true,
                    'wdio': true,
                }
            } ]
        },
    },
];
