import CopyPlugin from "copy-webpack-plugin";

export default (config) => {
  config.output.publicPath = "/twitter/cjtf_nj/";

  config.plugins.push(
    new CopyPlugin({
      patterns: ["../manifest.json"],
    })
  );
};
