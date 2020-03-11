exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": isDevelopment
          ? '"development"'
          : '"production"',
        "process.env.BROWSER": JSON.stringify(true),
        __DEV__: isDevelopment,
      }),
    ],
  })
}
