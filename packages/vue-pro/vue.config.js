const packageName = require("./package.json").name;
module.exports = {
  devServer: {
    port: 11001,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack(config) {
    config.output = {
      ...config.output,
      libraryTarget: "umd",
      library: `${packageName}-[name]`,
      jsonpFunction: `webpackJsonp_${packageName}`
    };
  }
};
