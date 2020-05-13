const webpackMerge = require("webpack-merge");
const base = require("./webpack/base");

const envs = {
  local: "local",
  dev: "dev",
  prod: "prod",
};

const env = envs[process.env.ENV_CONFIG || "local"];
const envConfig = require(`./webpack/${env}`);
module.exports = webpackMerge(base, envConfig);
