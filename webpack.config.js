// webpack.config.js

const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  entry: './src/main.jsx', // or whatever your entry file is
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader', // or whatever loader you're using
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // if using CSS
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    // add other plugins here
  ],
  devServer: {
    static: './dist',
    port: 3000,
    hot: true,
  },
};
