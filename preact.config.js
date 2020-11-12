import PreconnectHtmlWebpackPlugin from "preconnect-html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default (config, env, helpers) => {
  config.output.publicPath = "/twitter/cjtf_nj/";

  config.plugins.push(
    new PreconnectHtmlWebpackPlugin(["https://pbs.twimg.com"])
  );

  config.plugins.push(
    new CopyPlugin({
      patterns: ["../manifest.json"],
    })
  );
};
