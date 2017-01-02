import path from 'path'
import webpack from 'webpack'

const appPath = path.resolve(__dirname, './app')
const buildPath = path.resolve(__dirname, './public')

export default {
  entry: {
    app: path.resolve(appPath, './main.js')
  },
  output: { 
    path: path.resolve(buildPath, './dist/js'), 
    filename:  '[name].js'
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
}