module.exports = {
  title: '狗子的博客',
  description: '记录生活，记录bug!',
  head: [
    ['link', { rel: 'icon', href: '/logo.png'} ]
  ],
  themeConfig: {
    logo: '/logo.png',
    sidebar: 'auto',
    lastUpdated: 'Last Updated'
  },
  devServer: {
    proxy: {
      
    }
  }
}