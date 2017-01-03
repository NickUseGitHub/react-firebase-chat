import path from 'path'
import webpack from 'webpack'

const appPath = path.resolve(__dirname, './app')
const buildPath = path.resolve(__dirname, './public')

export default {
  entry: {
    app: path.resolve(appPath, './main.js')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
      contentBase: './dev',
      inline: true
  },
  output: { 
    path: path.resolve(buildPath, './dist/js'), 
    filename:  '[name].js'
  }
}