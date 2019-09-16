// const path = require('path')
// 
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   chainWebpack: config => {
//     // config.module
//     //   .rule('vue')
//     //   .use('vue-loader')
//     //     .loader('vue-loader')
//     //     .tap(options => {
//     //       // 修改它的选项...
//     //       return options
//     //     })
//     //     .end()

//     // 起别名
//     config.resolve.alias
//       .set('@', resolve('src/'))
//       .set('@assets', resolve('src/assets/'))
//       .set('@components', resolve('src/components/'))
//       .set('@common', resolve('src/common/'))
//       .set('@network', resolve('src/network/'))
//       .set('@store', resolve('src/store/'))
//       .set('@views', resolve('src/views/'))
//   }
// }

module.exports = {
  lintOnSave:false,
  configureWebpack: {
    resolve: {
      // 起别名
      alias: {
        '@assets': '@/assets/',
        '@components': '@/components/',
        '@common': '@/common/',
        '@views': '@/views/',
        '@network': '@/network/',
        '@store': '@/store/',
      }
    }
  }
}