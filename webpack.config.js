const webpack = require('webpack');

const config = {
  mode: 'production',
  entry: './src/ShareTextEmbedded.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'ShareTextEmbedded.min.js',
    libraryTarget: 'umd'
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