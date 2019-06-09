const webpack = require('webpack');

const config = {
  mode: 'production',
  entry: './src/sns_share.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'sns_share.min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', {'modules': false}]
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};

module.exports = config;