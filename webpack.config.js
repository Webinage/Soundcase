const path = require('path');

module.exports = {
  entry: './src/index.ts',
  // devtool: 'inline-source-map',
  // devtool: "source-map",
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  // input: {
  //     foo: 'src/lorem/foo.ts',
  //     bar: 'src/ipsum/bar.ts'
  // },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  }
};
