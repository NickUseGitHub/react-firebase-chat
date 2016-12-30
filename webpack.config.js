const path = require('path')
const webpack = require('webpack')
const appPath = path.resolve(__dirname, './app')

module.exports = {
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