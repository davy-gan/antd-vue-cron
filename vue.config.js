const { defineConfig } = require('@vue/cli-service')
const isProduction = process.env.NODE_ENV
console.log('isProduction', isProduction)
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: isProduction === 'test' ? './' : '/',
  // 根据环境变量选择不同的打包输出
  outputDir: isProduction === 'test' ? 'dist' : 'lib',
  pages: {
    index: {
      entry: isProduction === 'test' ? 'src/main.js' : 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Vue Admin Template',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  // 关闭生产环境的 source map
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        // lessOptions: {
        //   javascriptEnabled: true
        // }
        javascriptEnabled: true
      }
    }
  }
})