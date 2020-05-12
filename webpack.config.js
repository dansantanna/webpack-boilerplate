const webpackMerge = require("webpack-merge");
const base = require("./webpack/base");

const envs = {
  local: "local",
  development: "dev",
  production: "prod",
};

const env = envs[process.env.NODE_ENV || "local"];
const envConfig = require(`./webpack/${env}`);
module.exports = webpackMerge(base, envConfig);
