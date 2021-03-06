let path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    // 修改端口号
    port: 8888,
    // 跨域解决
    proxy: {
      '/api': {
        target: 'https://m.maizuo.com', // 转发的服务器
        changeOrigin: true, // 是否允许虚拟站点
        // ws:true,
        pathRewrite: {
          '^/api': '' // 路径重写，多个api
        }
      }
    }
  },
  // 路径配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('style', resolve('./src/common/style'))
      .set('utils', resolve('./src/common/utils'))
      .set('components', resolve('./src/components'))
      .set('common', resolve('./src/components/common'))
      .set('pages', resolve('./src/components/pages'))
      .set('node_modules', resolve('./node_modules'))
  }
}
