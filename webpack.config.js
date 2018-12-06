const webpack = require('webpack');

const config = {
  mode: 'production',
  entry: './src/sharetext-embedded.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'sharetext-embedded.min.js',
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