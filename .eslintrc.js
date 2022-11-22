/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
    extends: [
        // 'prettier/react',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['prettier', 'react', '@typescript-eslint'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'no-console':
            process.env.NODE_ENV === 'production'
                ? 2
                : ['warn', { allow: ['warn', 'error', 'debug', 'info'] }],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['src'],
            },
        },
    },
    overrides: [
        {
            files: ['**/**.js'],
            rules: { 'prettier/prettier': ['warn', prettierOptions] },
        },
    ],
    ignorePatterns: ['docs/*'],
}
