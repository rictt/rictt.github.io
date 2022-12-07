## 核心概念

### package.json

### 依赖项
  - dependencies
  - devDependencies

### 版本管理
  npm采用的是`SemVer规范`进行版本说明。标准版本号由：`X`.`Y`.`Z`的格式，其中XYZ为非0的整数；其中X是主版本号，Y是次版本号，Z是修订号；
  
  **主版本号**：特大功能改变，不兼容的API修改等

  **次版本号**：新功能增加，向下兼容的特性

  **修订号**：一些兼容的问题修正。

  #### 一些常见的版本编译信息
  - 内部版本（alpha)：如1.0.0-alpha.1
  - 公测版本（beta）：如1.0.0-beta.2
  - 正式版本的候选版本（rc：release candiate）：如1.2.0-rc2

  #### 依赖项版本标识符
  - 固定版本号，不填写任何标识符
  - `*`：任意版本(>=0.0.0)
  - `16.x`：匹配主要版本（>=16.0.0 <17.0.0)
  - `16.3.x`：匹配主次要版本（>=16.3.0 <16.4.0)
  - `~5.31.2`：保持主+次版本号不变的前提下，更新最新的修订版本号，比如有5.31.6，下次安装时，则会更新到5.31.6；
  - `^6.1.1`：保持主版本不变的前提下，更新最新的次 + 修订版本；
  ```json
	"dependencies": {
		"signale": "1.4.0",
		"figlet": "*",
		"react": "16.x",
		"table": "~5.4.6",
		"yargs": "^14.0.0"
	}
  ```


### npm命令
  - npm init `快速初始化`
  - npm install `<package>` --save  `将包添加到生产依赖上`
  - npm install `<package>` --save-dev  `将包添加到本地依赖上`

    如果install的时候不指定--save或者--save-dev，那么package会安装到哪呢？22年12月07亲测，会修改package.json，当成dependencies其中一项，并且是^类型;

  - npm install `<package>` --save-exact `下载指定版本，并指定版本（不加任何标识符）`
  - npm install `<package>` -E `--save-exact的简写`
  - npm install --global
  - npm uninstall `<package>` `卸载包`
  - npm root -g `查看全局的包的安装路径`
  - npm --help `查看npm帮忙命令`
  - npm view `<package>` version `查看package的最新版本`
  - npm view `<package>` versions `查看package的所有版本`

### 配置
  - npm config get `<config name>`
  - npm config set `<config name>` `<value>`

    比如：设置npm源为淘宝源：`npm config set registry https://registry.npm.taobao.org`

  - npm config delete `<config name>` `删除配置项`


### lock机制

  前面我们提到可以通过`npm install jquery -E`来锁定这个依赖的版本，达到统一版本管理；但有新的问题产生：`jquery这个依赖自己内部也有依赖`，可能a、b、c.js等等，而且不是`-E的方式`，就有可能导致某个小版本升级导致A机器能用，B机器不能用；

  按照SemVer规范来讲，每一个npm包的更新都应该遵守版本号对应的含义做到向下兼容，所以按理说我们不应该出现安装了两个不同的补丁版本会影响bug出现。

  `npm5推出了lock机制；`npm install后会自动生成package-lock.json文件，该文件记录了当前这次install所安装的依赖版本号。

  也可以理解成为快照：每次install，记录下当前基于package.json的描述及语言下载依赖，并同步到lock.json中；保证下次其他地方其他时间安装的是同一份依赖；

  - 如果package.json存在版本
    - package-lock.json不存在匹配版本，则更新下载匹配规则内最新的版本
    - 存在匹配版本，则按lock.json中的版本下载
  

## 实践

  当在package.json指定axios为^1.0.0的版本下，并且package-lock.json不存在。此时npm install本地会生成一份lock.json，由于我们填写了匹配规则`^`，于是找到了最新次 + 修订版本axios:1.2.1，写入lock.json并安装

  下次其他同事安装，会依照package.json，package-lock.json逐个检查，并更新，减少了因版本问题导致的bug

  ```json
  "devDependencies": {
    "axios": "^1.0.0",
  }
  ```

  ```json
  // package-lock.json
  "axios": {
    "version": "1.2.1",
    ...
  }
  ```

## 参考链接
  - [锁定](https://jiuaidu.com/jianzhan/523526/)