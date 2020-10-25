const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    soundcase: './src/index.ts',
    'soundcase.min': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'lib-umd'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'Soundcase',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  // devtool: 'inline-source-map',
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   sourceMap: true,
    //   include: /\.min\.js$/
    // })
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        // use: 'ts-loader'
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          declaration: false
        }
      }
    ]
  }
};
