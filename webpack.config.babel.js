import path from 'path'
import webpack from 'webpack'

const appPath = path.resolve(__dirname, './app')

export default {
    entry: {
        app: path.resolve(appPath, './main')
    },
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ],
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()
    // ],
    devServer: {
        contentBase: './dev',
        inline: true
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './public/dist/js')
    }
}