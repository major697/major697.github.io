const webpack = require('webpack')

module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/basic/_variables.scss";`,
      },
    },
  },
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(
            require('./package.json').version,
          ),
        }),
      ],
    }
  },
}
