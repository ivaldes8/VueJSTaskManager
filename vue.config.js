module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "https://my-json-server.typicode.com/ivaldes8/JsonServer",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
