import path from 'path'
import webpack from 'webpack'

const appPath = path.resolve(__dirname, './app')

export default {
    entry: {
        app: path.resolve(appPath, './main')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './public/dist/js')
    }
}