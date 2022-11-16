const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
)

module.exports = {
    extends: ['react-app', 'react-app/jest', 'prettier', 'prettier/react'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', prettierOptions],
        'no-console':
            process.env.NODE_ENV === 'production'
                ? 2
                : ['warn', { allow: ['warn', 'error', 'debug', 'info'] }],
    },
    overrides: [
        {
            files: ['**/**.js'],
            rules: { 'prettier/prettier': ['warn', prettierOptions] },
        },
    ],
    ignorePatterns: ['docs/*'],
}
