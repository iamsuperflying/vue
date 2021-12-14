module.exports = {
  configureWebpack: {
    devServer: {
      https: false,
      open: {
        app: {
          name: "Google Chrome",
          arguments: ["--incognito", "--new-window"],
        },
      },
    },
  },
};