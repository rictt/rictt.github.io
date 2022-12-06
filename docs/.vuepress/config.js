const { generateSidebars } = require('./utils/sidebar')

console.log("generateSidebars")
console.log(generateSidebars())

module.exports = {
  title: '狗子的博客',
  description: '记录生活，记录bug!',
  head: [
    ['link', { rel: 'icon', href: '/logo.png'} ]
  ],
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated',
    sidebarDepth: 4,
    sidebar: generateSidebars()
    // sidebar: [
    //   {
    //     title: '首页',
    //     path: '/javascript/',
    //     children: [
    //       "/javascript/1-第一个",
    //       {
    //         title: '首页2',
    //         path: '/javascript/2-测试问题',
    //       }
    //     ]
    //   },
    //   {
    //     title: '框架',
    //     path: '/vue/'
    //   }
    // ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/'
      }
    }
  },
  devServer: {
    proxy: {
      
    }
  }
}