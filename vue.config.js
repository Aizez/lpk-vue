const Dotenv = require("dotenv-webpack");
module.exports = {
  configureWebpack: {
    plugins: [new Dotenv()]
  },
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
