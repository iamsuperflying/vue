module.exports = {
  devServer: {
    https: false,
    open: {
      app: {
        name: "microsoft edge",
        arguments: ["--incognito", "--new-window"],
      },
    },
  },
};