const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  watch: false,
  output: {
    path: path.resolve(__dirname, 'scripts'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      path: false,
      fs: false,
      process: false,
    },
    alias: {
      compiler: path.resolve(__dirname, 'src/compiler/'),
      parser: path.resolve(__dirname, 'src/grammar/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
