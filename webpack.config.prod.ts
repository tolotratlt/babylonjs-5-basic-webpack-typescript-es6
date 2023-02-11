import * as path from "path";
//import * as fs from "fs";
//import 'webpack-dev-server';
import * as webpack from "webpack";
import commonConfig from "./webpack.config.common";

//const appDirectory = fs.realpathSync(process.cwd());

const config: webpack.Configuration = {
    ...commonConfig,
    mode: "production",
} as webpack.Configuration ;

export default config;
