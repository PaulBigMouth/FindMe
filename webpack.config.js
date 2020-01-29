const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",  //Точка входа, если требуется изменить исполняемый js файл
    output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
    },  
    devServer: {
        contentBase: './dist', //Директория расположения контента
        overlay: true //Для вывода ошибок в консоль
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};