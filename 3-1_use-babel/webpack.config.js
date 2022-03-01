const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devtool: false,
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }, ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};