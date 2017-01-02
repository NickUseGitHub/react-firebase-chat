import webpack from 'webpack'
import path from 'path'
import webpackConf from './webpack.config.dev.babel'

const productionPath = path.resolve(__dirname, './public')

export default {
  ...webpackConf,
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
  ],
  output: {
    path: path.resolve(productionPath, './dist/js'),
    filename: '[name].js'
  }
}