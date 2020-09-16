module.exports = {
    env: {
        es6: true,
        node: true,
        'nova/nova': true,
    },
    extends: ['eslint:recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['prettier', 'nova'],
    rules: {
        'prettier/prettier': 'error',
    },
}
