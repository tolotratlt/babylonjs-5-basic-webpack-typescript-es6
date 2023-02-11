import * as path from "path";
import 'webpack-dev-server';
import * as webpack from "webpack";
import commonConfig from "./webpack.config.common";

const config: webpack.Configuration = {
    ...commonConfig,
    mode: "development",
    devServer: {
        host: "0.0.0.0",
        port: 8080, //port that we're using for local host (localhost:8080)
        static: path.resolve(__dirname, "public"), //tells webpack to serve from the public folder
        hot: true,
        devMiddleware: {
            publicPath: "/",
        }
    },
} as webpack.Configuration ;

export default config;
