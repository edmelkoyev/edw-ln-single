const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        indexInitial: './src/indexInitial.js',
        indexResp: './src/indexResp.js',
        indexReview: './src/indexReview.js',
        indexReviewAns: './src/indexReviewAns.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
}
