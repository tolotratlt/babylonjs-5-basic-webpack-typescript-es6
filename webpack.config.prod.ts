import * as webpack from "webpack";
import commonConfig from "./webpack.config.common";

const config: webpack.Configuration = {
    ...commonConfig,
    mode: "production",
} as webpack.Configuration ;

export default config;
