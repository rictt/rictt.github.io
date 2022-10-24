# webpack整理

## 基础概念

## 过滤指定模块的插件

  掘金地址：<https://juejin.cn/post/7108255306609590286>

```js
  const path = require('path')
  const fs = require('fs')
  const os = require('os')

  // 1、只需要在routes/pages添加需要构建的文件名称
  // 2、过滤阶段，除了必须的模块，比如common，home

  class ineedCompileDirectoryPlugin {
      constructor() {
          this.name = 'webpack-lingke-ignore-plugin'
          this.checkIgnore = this.checkIgnore.bind(this)
          this.configPath = path.join(__dirname, './ignore-plugin-config.json')
          this.config = null
          // 过滤的模块
          this.ignoreRoutes = []
          this.ignorePages = []
          // 过滤正则
          this.ignores = []
          // 必须，不能被过滤的模块
          this.requiredRoutes = ['common', 'dev', 'systemManegement']
          this.requiredPages = ['dev', 'error', 'layout', 'system', 'config', 'home']
          this.buildAll = false
          this.init()
      }
      isExistConfig() {
          return fs.existsSync(this.configPath)
      }
      init() {
          this.config = this.getConfig()
          let {
              buildRoutes,
              buildPages,
              buildAll
          } = this.config
          // config中不管有没有配置，都要加上不能被过滤的模块，否则会影响整个系统项目构建
          buildRoutes = [...new Set(buildRoutes.concat(this.requiredRoutes))]
          buildPages = [...new Set(buildPages.concat(this.requiredPages))]
          console.log("build Routes: ", buildRoutes)
          console.log("build Pages: ", buildRoutes)
          const routerPath = path.join(__dirname, '../src/router')
          const pagePath = path.join(__dirname, '../src/page')
          const allRoutes = fs.readdirSync(routerPath, 'utf-8')
          const allPages = fs.readdirSync(pagePath, 'utf-8')
          const routes = allRoutes.filter(r => !buildRoutes.includes(r) && r.indexOf('.') === -1)
          const pages = allPages.filter(p => !buildPages.includes(p) && p.indexOf('.') === -1)
          this.ignoreRoutes = routes
          this.ignorePages = pages
          this.buildAll = buildAll
          this.initIgnores()
      }
      getConfig() {
          if (!this.isExistConfig()) {
              console.log('=== ignore-plugin初始化配置 ===')
              this.initConfig()
              console.log('=== ignore-plugin初始化成功，请配置后重新运行命令 ===')
              console.log('=== 查看配置文件如下 ===')
              console.log('=== ' + this.configPath + ' ===')
              process.exit(0)
          }
          return JSON.parse(fs.readFileSync(this.configPath, 'utf-8'))
      }
      setConfig(routes, pages) {
          const configJson = {
              desc: [
                  "1. buildAll: 构建全部",
                  "2. routes: 需要构建的路由",
                  "3. pages: 需要构建的页面",
                  "4. remarks: 因为项目结构原因，不能清晰找出页面绑定的路由关系，所以只能通过page + route的方式控制构建"
              ],
              buildAll: false,
              buildRoutes: routes,
              buildPages: pages
          }
          fs.writeFileSync(this.configPath, JSON.stringify(configJson, null, 2), 'utf-8')
      }
      initConfig() {
          const buildRoutes = [...this.requiredRoutes]
          const buildPages = [...this.requiredPages]
          // 没有配置时
          buildRoutes.push('customerCenter')
          buildPages.push('customerCenter')
          this.setConfig(buildRoutes, buildPages)
      }
      initIgnores() {
          const platform = os.platform()
          const isMac = platform === 'darwin'
          console.log("current platform: ", platform)
          this.ignoreRoutes.forEach(e => {
              let regPath = isMac ? 'src/router/' : 'src\\router\\'
              this.ignores.push(new RegExp(regPath + e))
          })
          this.ignorePages.forEach(e => {
              let regPath = isMac ? 'src/page/' : 'src\\page\\'
              this.ignores.push(new RegExp(regPath + e))
          })

      }
      checkIgnore(resolveData) {
          if (!resolveData) {
              return resolveData
          }
          let {
              context,
              request
          } = resolveData
          if (request.indexOf('node_modules') !== -1 || context.indexOf('node_modules') !== -1) {
              return resolveData
          }
          let absReq = ''
          // 相对路径，则直接拼接
          if (request.indexOf('.') === 0) {
              absReq = path.join(context, request)
          } else if (request.indexOf('@') === 0) {
              // 路径别名，则替换
              absReq = request.replace('@', path.join(__dirname, '../src'))
          } else {
              // 说明它是第三方模块或者内置模块，比如require('fs'), require('core')
              // 不需要理会
              absReq = ''
          }
          try {
              if (absReq) {
                  if (absReq.indexOf('src/router') !== -1 || absReq.indexOf('src/page') !== -1) {
                      // 如果在正则中匹配不到
                      if (this.ignores.some(r => r.test(absReq))) {
                          return false
                      }
                  }
              }
          } catch (e) {
              console.log('error: ')
              console.log(context)
              console.log(request)
              console.log(absReq)
              console.log(e)
          }
          return resolveData
      }
      apply(compiler) {
          if (this.buildAll) {
              return
          }

          compiler.hooks.normalModuleFactory.tap(this.name, (nmf) => {
              nmf.hooks.beforeResolve.tap(this.name, this.checkIgnore)
          })
          compiler.hooks.contextModuleFactory.tap(this.name, cmf => {
              cmf.hooks.beforeResolve.tap(this.name, this.checkIgnore)
          })
          compiler.hooks.done.tap(this.name, () => {
              // 构建结束做些什么
          })
      }
  }

  module.exports = {
      ineedCompileDirectoryPlugin
  }
```
