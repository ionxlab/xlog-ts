const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const NpmDtsPlugin = require('npm-dts-webpack-plugin')

const distPath = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    'xlog': './src/index.ts',
    'xlog.min': './src/index.ts'
  },
  devtool: "source-map",
  output: {
    path: distPath,
    globalObject: 'this',
    clean: true,
    filename: '[name].js',
    library: {
      name: 'XLog',
      type: 'umd',
      umdNamedDefine: true
    }
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new NpmDtsPlugin({
      logLevel: 'warn',
      output: path.join(distPath, 'xlog.d.ts'),
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min.js?$/,
        extractComments: false
      }),
    ],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  }
}