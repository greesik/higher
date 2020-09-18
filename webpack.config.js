const path = require("path");
const entryPath = "";

module.exports = {
    entry: ['whatwg-fetch', `./${entryPath}/js/app.js`],
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `build`)
    },
    devServer: {
        contentBase: path.join(__dirname, `build`),
        publicPath: "/build/",
        compress: true,
        port: 3001,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};