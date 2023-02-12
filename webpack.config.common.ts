import * as path from "path";
import * as webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const commonConfig: webpack.Configuration = {
    entry: {
        app: path.resolve(__dirname, "./src/app.ts")
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].[contenthash].js",
        clean: true //remove dist folder before build
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                    }
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: /(node_modules)/,
            }
        ],
    },

    // plugins: [
    //     new CopyWebpackPlugin({
    //         patterns: [
    //             {
    //                 from: "public",
    //                 globOptions: {
    //                     dot: true,
    //                     //gitignore: true,
    //                     ignore: ["**/index.html"], //avoid conflict with HtmlWebpackPlugin
    //                 }
    //             }
    //         ],
    //     }),
    //
    //     new HtmlWebpackPlugin({
    //         template: "public/index.html",
    //     }),
    // ],

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, "public/index.html"),
        })
    ],

};

export default commonConfig;