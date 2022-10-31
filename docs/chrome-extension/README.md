# 浏览器插件开发

## 系列(一)：hello extension

### 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；
   
目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)
   
### 1、浏览器插件

插件本质上是一个程序，有图形界面，有在运行的后台脚本；每当打开浏览器，插件都在后台默默进行中，然后在浏览的过程中，根据浏览内容去做增强用户体验的操作，讲个故事：比如`张三每天都喜欢逛知乎，因此被领导批评了很多次，张三看到那个超大的知乎logo就头疼，想着怎么看知乎的同时屏蔽掉这个logo以至于不太明显被发现在摸鱼。`——插件就可以用上了，针对域名zhihu.com，屏蔽掉logo的img元素，神不知鬼不觉～

`所以插件其实可以是`
- 生产工具
- 浏览体验增强工具
- 信息聚合
- 摸鱼游戏小能手

### 2、插件怎么功能

####  2.1插件界面
通过界面操作的方式，管理插件；`插件的界面由CSS + HTML组成`，是的，你没听错

#### 2.2插件api
这部分是chrome浏览器提供的，允许我们插件访问浏览器的一些特性：比如获取激活中的tab、修改网络请求等等；

###  3、hello extension
我们的第一个浏览器插件，下面跟我手把手来

#### 3.1、准备工作
找个200平大的地方新建个文件夹：`hello-extension`，然后在文件夹里面分别创建manifest.json，hello.html，然后下载[hello_icon.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d14ee8cd8ef4d58ab6e63e04261e954~tplv-k3u1fbpfcp-watermark.image?)这个图片，另存到本地，做好准备下面开始写代码

#### 3.2、manifest.json
首先是manifest.json，中文翻译我喜欢叫`清单文件`，用来说明管理插件的信息，需要什么权限，什么icon显示等等；另外啰嗦一句，插件开发也是有版本概念的，我们这里统一用v3（最新版）

```json
{
    "name": "Hello Extensions",
    "description": "Base Level Extension",
    "version": "1.0",
    // 这里切记是版本3
    "manifest_version": 3,
    "action": {
        // default_popup用来指定点击icon时弹窗的html内容
        "default_popup": "hello.html",
        // icon
        "default_icon": "hello_extensions.png"
    },
    "commands": {
        // 快捷键打开，Ctrl+Shift+F可以快速打开插件
        "_execute_action": {
          "suggested_key": {
            "default": "Ctrl+Shift+F",
            "mac": "MacCtrl+Shift+F"
          },
          "description": "Opens hello.html"
        }
      }
}
```

##### 3.3、hello.html
这个就不废话了，内容自定义，就是我们弹窗的内容
```html
<html>
  <body>
    <h1>Hello Extensions</h1>
  </body>
</html>
```

##### 3.4、小小总结下
- 记住manifest.json清单文件
- 弹窗的内容是default_popup

### 4、安装然后运行
在浏览器中直接```chrome://extensions```回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；

安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa617d42f1e9437f89f38b7e1c8082e7~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ee8432bb95846cb94ff8a25b3566910~tplv-k3u1fbpfcp-watermark.image?)

### 5、总结
本节内容是浏览器插件的一个基本了解，后续将通过其他场景来进一步了解认识掌握插件开发，欢迎关注我，我是程序员狗子

### 相关链接
- [源码地址](https://github.com/rictt/chrome-extension/tree/master/reading-time)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)
- [插件文档](https://developer.chrome.com/docs/extensions/)
- [插件概念](https://developer.chrome.com/docs/extensions/mv3/overview/)

## 系列(二)：reading time计算阅读时间

### 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)

### 1、插件开发经常用到的文件
上一节我们认识了`manifest.json, popup.html，`这一节我们再新认识两个小伙伴，顺便回顾下

- manifest.json

    我习惯性叫`清单配置文件`,是每个插件必备的一个文件，通常在项目的根目录下。在文件里面通常声明插件的名称，描述，icon图标，还有插件需要用到的权限等等，`总之很重要`
    
- service worker: `background.js`

运行在插件背后的脚本，所以也习惯性命名为`background.js`，脚本会在插件打开时运行在后台，监听浏览器的各种事件，比如tab切换事件，关闭tab等等；通常我们在这里监听特定的事件，然后去干某些特定的事情，比如`监听到了访问知乎，把知乎的logo去掉`

- `content.js`

注入到web页面的脚本，因为我们的插件可能涉及对dom的修改，就需要在页面上注入新的脚本，然后修改指定的dom等等，常见的去广告插件就是找到广告块dom的id，然后屏蔽掉；

- popup.html

插件弹窗的内容，还有options.html，听名字就知道是选项的页面，后面我们再讲

### 2、reading time开发

#### 2.1、这一节会介绍的概念
- icon size的使用
- 注入我们的js到页面中
- 使用正则匹配
- 声明权限

#### 2.2编写代码
创建文件夹```reading-time```,在文件夹里面创建`manifest.json`，其中必填的是`manifset_version, name, version`；下载图片然后`保存在images文件当中`

[点击下载icon-16.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/400c982c89bd432a90a7cb55543009ed~tplv-k3u1fbpfcp-watermark.image?)

[点击下载icon-32.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/374b92d90e3f44ec8729b8e1845ffde8~tplv-k3u1fbpfcp-watermark.image?)

[点击下载icon-48.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/478a817d29114a6dae4b4487898420a7~tplv-k3u1fbpfcp-watermark.image?)

[点击下载icon-128.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9faf54ad3328406f835417c794743c7c~tplv-k3u1fbpfcp-watermark.image?)
```json
{
  "manifest_version": 3,
  "name": "Reading time",
  "version": "1.0",
  "description": "Add the reading time to Chrome Extension documentation articles",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "content_scripts": [
    {
      "js": [
        "scripts/content.js"
      ],
      "matches": [
        "https://www.zhihu.com/question/*/answer/*",
        "https://zhihu.com/question/*/answer/*",
        "https://www.zhihu.com/question/*",
        "https://zhihu.com/question/*"
      ]
    }
  ]
}
```

icon的尺寸说明，插件的icon官方建议使用`.png`的图片，也可以用`.svg`也是支持的
| icon尺寸 | 说明 |
| --- | --- |
| 16*16 | 扩展页面和上下文菜单图标上的Favicon。 |
| 32*32 | Windows计算机通常需要此尺寸。 |
| 48*48 | 扩展页面上显示 |
| 128*128 | 在安装和Chrome网络商店中显示。 |

`content_scripts`中的`matches`是指浏览器页面当匹配到指定的地址时，`才注入我们的脚本scripts/content.js`，matches的格式是`<scheme>://<host><path>`，可以包含*来匹配指定地址下的所有地址，比如`https://zhihu.com/question/*/answer/*`，则可以匹配到`https://zhihu.com/question/1234/answer/456`

到此为止，我们的项目基本工作搭建完成，目录应该是下面这个样子
```md
├── images
│   ├── icon-128.png
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-48.png
├── manifest.json
└── scripts
    └── content.js
```

#### 2.3程序主逻辑content.js

这里我们使用知乎作为测试，计算出每篇文章大约需要花费多少时间，下面是代码和实际效果

```js
const answers = [...document.querySelectorAll('.RichContent-inner')]

if (answers && answers.length) {
  answers.forEach(answer => {
    // 获取回答的内容长度
    const textLength = answer.innerText.length
    // 200个字大约1分钟
    const readingTime = Math.round(textLength / 200) || 1
    const badge = document.createElement('p')
    // badge.classList.add("color-secondary-text", "type--caption");
    badge.style.color = '#3c4043'
    badge.textContent = `⏱️ 大约需${readingTime}分钟读完`;
    // 插入到回答前面显示
    answer.insertBefore(badge, answer.children[0])
  })
}
```

### 3、安装运行

在浏览器中直接```chrome://extensions```回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；

安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75482461a545475d8e7c805e904141bf~tplv-k3u1fbpfcp-watermark.image?)

尝试访问知乎：https://www.zhihu.com/question/516703724

### 4、运行效果


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3934dd41b55f4092ad1d2f34d1394667~tplv-k3u1fbpfcp-watermark.image?)


### 5、总结

本节内容是浏览器插件的进一步了解，主要认识了content.js，和在指定域名下注入我们的脚本，实现插件的功能；再来回顾一下`manifest.json, content.js`

### 相关链接
- [源码地址](https://github.com/rictt/chrome-extension/tree/master/reading-time)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/)
- [插件文档](https://developer.chrome.com/docs/extensions/)
- [插件概念](https://developer.chrome.com/docs/extensions/mv3/overview/)

## 系列(三)：focus mode专注模式

### 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)

### 1、介绍

这一节开发的插件内容，除了基本的目录结构，还会对部分chrome api进行介绍；主要是通过开发一个针对知乎阅读的`专注模式`来进行熟悉，`所谓专注模式：`去除掉页面上的广告，多余不必要的信息，让用户能够纯粹进行阅读文章、评论；需求出来了，我们从技术的角度思考怎么做呢

`答案是：`用css样式隐藏掉广告元素，通过监听当前点击的tab是不是知乎，如果是，加入我们自定义的css样式文件，否则不做处理。

### 2、新建我们的工作文件夹

- 新建`fouce-mode`文件夹

[icon-16.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ee26a1709954574a6b1d151913c326e~tplv-k3u1fbpfcp-watermark.image?)

[icon-32.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2837dbc93e544d67a68355ba3ddd7157~tplv-k3u1fbpfcp-watermark.image?)

[icon-48.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/828dcf7ef9004249aae1e7314817ae2f~tplv-k3u1fbpfcp-watermark.image?)

[icon-128.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6af66c941e5d45eab6652eb242504a10~tplv-k3u1fbpfcp-watermark.image?)

- 下载下面的icon图片，`保存到images文件夹当中`
- 创建`manifest.json`清单文件
- 创建`background.js`后台运行脚本文件
- 创建`focus-mode.css`样式文件表

先创建好对应的文件结构后，下面我们依次往里面填代码，并说明对应的作用，下面是我们的项目结构，可以对比一下

```
focus-mode
├── background.js
├── focus-mode.css
├── images
│   ├── icon-128.png
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-48.png
└── manifest.json
```

### 3、依次写入对应内容

#### 3.1 `manifest.json`
细心的同学发现除了常见name，version，这次我们发现了新的面孔`background`和`permissions`；

其中`background.service_worker`可以理解为插件程序运行时背后不断运行服务器/脚本，监听着chrome浏览器发生的变化，在脚本里面根据变化，做不同的东西，比如当鼠标切换tab栏，脚本对网页植入不同的脚本等等，下面我们会写。

`permissions`主要是向chrome声明，我这个插件需要什么权限，比如我要访问当前活跃（当前显示）的tab，那就需要在permission向chrome申请`activeTab`这个权限，当运行插件时，才能监听`activeTab`事件

细心的同学可能发现了，`action设置的default_icon和icons是一样的，是不是多此一举呢？`，这里主要是为了能够能够使用`chrome.action`API，才设置的；官方文档说明了只有设置了action行为的icon，才会响应icon的点击事件，做不同的事情。

```json
{
  "manifest_version": 3,
  "name": "Focus Mode",
  "description": "Enable reading mode on Chrome's official Extensions and Chrome Web Store documentation.",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_icon": {
      "16": "images/icon-16.png",
      "32": "images/icon-32.png",
      "48": "images/icon-48.png",
      "128": "images/icon-128.png"
    }
  },
  // 申请activeTab、scripting权限
  "permissions": [
    "activeTab",
    "scripting"
  ],
  "commands": {
    // 快捷键使用插件
    "_execute_action": {
      "suggested_key": {
        "default": "Ctrl+U",
        "mac": "Command+U"
      }
    }
  }
}
```
#### 3.2 `background.js`后台运行脚本

由于我们的background.js是有chrome注入到页面当中的，所以可以使用chrome中提供的api，如下面的`chrome.runtime.onInstalled`, `chrome.action.onClicked.addListener`等等；

`chrome.runtime.onInstalled`：当插件、浏览器发生安装时或者更新时执行的一个事件，我们在`background.js`中监听这个事件，当浏览器插件执行我们的事情：设置插件工具栏icon图标的副标题为"OFF"，如下


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66e12564a46643bd9be32374f53c61ee~tplv-k3u1fbpfcp-watermark.image?)

`chrome.action.onClicked.addListener`：只有当前面我们设置了action下的default_icon，才会生效；当我们点击右上角工具栏的插件icon时，判断当前页面是否为知乎，设置副标题ON或者OFF，是的话开启/关闭专注模式；


![QQ20221026-212723-HD.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdf6e8c10c8643d089e56881891c80c1~tplv-k3u1fbpfcp-watermark.image?)

```js
const STATE = {
  ON: "ON",
  OFF: "OFF"
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: STATE.OFF,
  });
});

chrome.action.onClicked.addListener(async (tab) => {
  // 回调会返回一个tab，tab包含常见的id，index，url等
  if (tab.url.indexOf('zhihu') > -1) {
    // 获取当前tab页的状态，是ON还是OFF
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    // 如果当前为ON，则点击应该为OFF，关闭专注模式
    const nextState = prevState === STATE.ON ? STATE.OFF : STATE.ON
    // 设置下标文本
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });

    if (nextState === STATE.ON) {
      // 插入我们自定义的css形成专注模式
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    } else if (nextState === STATE.OFF) {
      // 否则的话移除
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
```

#### 3.3 设置知乎的专注模式
所谓专注模式（粗糙版）：不影响阅读，去掉广告，专注于文字内容本身，所以我们首先分析页面上哪块区域是可以干掉屏蔽掉，针对性找到元素id或者class覆盖掉；如下


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d789379f83864d5090fbe00ced193813~tplv-k3u1fbpfcp-watermark.image?)



![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/272a8263290e4eec9dee6306a6b7ec69~tplv-k3u1fbpfcp-watermark.image?)

于是我们的css可以这样写，加important是为了让我们的样式最高级；平时开发不建议这样写

```css
.Question-sideColumn,
.AppHeader-inner {
  display: none !important;
}

.Question-mainColumn {
  width: auto !important;
}

```

效果就变成了如下


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0917fdaffc64ff3b9ed7b411ffc981b~tplv-k3u1fbpfcp-watermark.image?)

### 4、总结

这期我们主要针对知乎做了一个专注模式，让我们更专心的摸鱼学习，不会被发现的太明显；主要逻辑都是在`background.js`里面，通过监听icon的点击事件，实时获取当前tab的url，判断是否知乎，注入我们的css，实现专注模式。

### 相关链接
- [源码地址](https://github.com/rictt/chrome-extension/tree/master/focus-mode)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/)
- [v3 manifest清单配置](https://developer.chrome.com/docs/extensions/mv3/manifest/)
- [tab信息](https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab)
- [chrome.action](https://developer.chrome.com/docs/extensions/reference/action/#badge)
- [chrome.runtime](https://developer.chrome.com/docs/extensions/reference/runtime/)
- [插件文档](https://developer.chrome.com/docs/extensions/)
- [插件概念](https://developer.chrome.com/docs/extensions/mv3/overview/)

## 系列(四)：调试我们开发的插件
### 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)

### 1、了解插件的调试

所谓工欲善其事，必先利其器；开发写代码很重要，如何调试我们的代码更重要，不会调试的情况下，会使我们的编码效率事倍功半。这一节我们主要来`介绍我们自己的chrome插件如何调试，如何debugger打断点`；

### 2、准备工作

因为要调试代码，所以要先准备好我们的代码；找个地方新建目录`debugger-demo`，然后创建我们的文件

- manifest.json
- backgroung.js
- script/content.js
- popup/popup.html
- popup/popup.js
- images/...不赘述了

最后我们的目录结构如下
```
debugger-demo
├── background.js
├── images
│   ├── icon-128.png
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-48.png
├── manifest.json
├── popup
│   ├── popup.html
│   └── popup.js
└── scripts
    └── content.js
```

对应文件的内容如下

`manifest.json`内容如下：
```
{
  "manifest_version": 3,
  "name": "Debugger demo",
  "version": "1.0",
  "description": "Debugger chrome Extension demo!",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "action": {
    "default_popup": "./popup/popup.html",
    "default_icon": {
      "16": "/images/icon-16.png",
      "32": "/images/icon-32.png",
      "48": "/images/icon-48.png",
      "128": "/images/icon-128.png"
    },
    "default_title": "悬浮标题"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "js": [
        "scripts/content.js"
      ],
      "matches": [
        "https://*/*"
      ]
    }
  ]
}
```

`content.js`内容如下：
```js
console.log('Im running in content.js')
```

`background.js`内容如下：
```js
console.log('Im running in background.js')
```

`popup/popup.js`内容如下：
```js
console.log('Im running in popup.js')
```

`popup/popup.html`内容如下：
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
</head>

<body>
  <h3 style="width: 300px">专门用来debuuger的popup，这里注入了popup.js</h3>
  // 记得注入popup.js
  <script src="popup.js"></script>
</body>

</html>
```

### 3、安装我们的插件

在浏览器中直接```chrome://extensions```回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；

安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa617d42f1e9437f89f38b7e1c8082e7~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/793eb6eb81b24e6a80fceb24073c50e5~tplv-k3u1fbpfcp-watermark.image?)

### 4、打开调试面板

`首先是content.js`，因为这部分的代码是在manifest.json声明的，当访问的页面地址匹配我们写的正则时，才会进行注入，比如我们写的`matches`是`https://*/*`，即只要是https域名就会执行我们的脚本；

所以这部分的调试，需要我们在页面中打开控制面板(右键检查或者F12快捷键)，步骤是：

- 找一个https的地址
- 打开控制台，找到sources下的content scripts
- 找到我们插件的名称Debuuger Demo
- 其中的content.js就是了

可以看到显示了我们的源代码，我们也可以进行插入断点

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60fad29aa3a1456791eda42939bc6792~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79fa928aa19143d3a8b8523f6b16997c~tplv-k3u1fbpfcp-watermark.image?)

`其次是background.js`，我们回到安装插件的页面（在地址栏输入`chrome://extensions`）

- 找到我们的插件
- 点击查看视图`service worker`
- 会弹出一个控制台面板
- 可以看到面板输出了我们的log语句
- 同样切换到sources下，可以找到background.js进行断点


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c59457ceb2a0442885ada7f5d5f2fe4e~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d472136507f440ab2b007712d7e9d5a~tplv-k3u1fbpfcp-watermark.image?)

---

`最后是popup.js`，因为这部分是属于弹窗展示的js，所以我们需要在弹窗上面右键，点击审查弹出内容；点击后同样是一个调试面板，同样可以看到我们的popup.js中的log，同样可以调试debugger源码，这里就不赘述了。


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2575e238e4a428894b9c13a6aa25b69~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a7f9358132614520aa9e73d2635f58c8~tplv-k3u1fbpfcp-watermark.image?)

### 5、总结

chrome插件的调试的几种方面，其实都跟我们平常页面开发类似，有一个调试面板，关键是不同的js文件需要不同的打开方式，打开之后查看log，插入断点都是一致的；学会调试后，开发效率日益飞速增长啦～喜欢的话点个赞吧

## 系列(五)：tabs标签管理

### 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)


### 1、介绍
这次我们将要开发的插件是：将tabs标签页进行分组管理，展开/折叠，对标签栏的标签进行收纳；会学到的是使用

- host_permissions权限申请
- tabGroups API使用
- tabs API使用

废话不多说，我们下面进入前期准备

### 2、项目准备
老规矩，新建我们的项目文件夹`tabs-manager`，创建`manifest.json`, `popup.css`, `popup.html`, `popup.js`，还有`images`文件夹；下面是对应的icon图片下载

[icon-16.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa0ef3304ee04be78c2188afe63da956~tplv-k3u1fbpfcp-watermark.image?)

[icon-32.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96deb6c0c1bc448d80accc1c035f7ce1~tplv-k3u1fbpfcp-watermark.image?)

[icon-48.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9caa67a69e0144ef9b7e3e5e492609c0~tplv-k3u1fbpfcp-watermark.image?)

[icon-128.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba882a227ca941f6b9d7c938c33093a0~tplv-k3u1fbpfcp-watermark.image?)

`最后我们的目录结构如下：`，没问题后我们继续开车🚗
```
tabs-manager
├── images
│   ├── icon-128.png
│   ├── icon-16.png
│   ├── icon-32.png
│   └── icon-48.png
├── manifest.json
├── popup.css
├── popup.html
└── popup.js
```
### 3、编写我们的代码

依次往我们的文件中填充内容，首先是`manifest.json`，内容如下：

`host_permissions`属性允许我们在特定域名下，通过js访问该域名的标题，URL地址等属性，我们这里暂时对百度和知乎的网页进行分组管理，先填百度和知乎的域名；

`permissions`属性填写tabGroups，允许我们在js中使用chrome.tabGroups相关API能力

```json
{
  "manifest_version": 3,
  "name": "Tab Manager for Chrome Dev Docs",
  "version": "1.0",
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "128": "images/icon-128.png"
  },
  "action": {
    "default_popup": "popup.html"
  },
  "host_permissions": [
    "https://zhihu.com/*",
    "https://www.zhihu.com/*",
    "https://baidu.com/*",
    "https://www.baidu.com/*"
  ],
  "permissions": [
    "tabGroups"
  ]
}
```

`其次是popup.html`，内容如下：

body中的`template`，template不会被展示到页面中，我们定义一个template方便用js去渲染；另外引入我们的`popup.js`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./popup.css" />
</head>

<body>
  <template id="li_template">
    <li>
      <a>
        <h3 class="title">Tab Title</h3>
        <p class="pathname">Tab Pathname</p>
      </a>
    </li>
  </template>

  <h1>Tabs标签页管理</h1>
  <button>Group Tabs</button>
  <ul></ul>

  <script src="./popup.js" type="module"></script>
</body>

</html>
```

`接着是popup.css`，内容如下：定义我们弹窗的样式

```css
body {
  width: 20rem;
}

ul {
  list-style-type: none;
  padding-inline-start: 0;
  margin: 1rem 0;
}

li {
  padding: 0.25rem;
}
li:nth-child(odd) {
  background: #80808030;
}
li:nth-child(even) {
  background: #ffffff;
}

h3,
p {
  margin: 0;
}
```

`接着是popup.js`，内容如下：在这个文件，我们主要做了下面几件事

- 获取知乎相关tabs集合
- 获取百度相关tabs集合
- 讲知乎百度的tabs生成一个个标签，显示在我们的popup.html当中
- 通过`collapsed`将百度、知乎的标签页都放在一个group中，折叠展开
- 点击popup.html中每一个标签可以跳转到对应tab

```js
const zhihuTabs = await chrome.tabs.query({
  url: [
    "https://zhihu.com/*",
    "https://www.zhihu.com/*"
  ]
})

const baiduTabs = await chrome.tabs.query({
  url: [
    "https://baidu.com/*",
    "https://www.baidu.com/*"
  ]
})

const template = document.getElementById("li_template");
const elements = new Set();

for (const tab of zhihuTabs.concat(baiduTabs)) {
  const element = template.content.firstElementChild.cloneNode(true);

  const title = tab.title
  const pathname = tab.url

  element.querySelector(".title").textContent = title;
  element.querySelector(".pathname").textContent = pathname;
  element.querySelector("a").addEventListener("click", async () => {
    // 监听点击事件，然后切换成当前tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  });

  elements.add(element);
}

// 添加到我们的popup.html中
document.querySelector("ul").append(...elements);

let collapsed = false

const button = document.querySelector("button");
const toGroup = async (tabIds, title) => {
  if (tabIds && tabIds.length) {
    const group = await chrome.tabs.group({ tabIds })
    await await chrome.tabGroups.update(group, { title: title || "Groups", collapsed });
  }
}
button.addEventListener("click", async () => {
  // 点击groups tabs按钮的时候，进行折叠/展开，并设置群组名称
  const zhihuTabIds = zhihuTabs.map(({ id }) => id);
  await toGroup(zhihuTabIds, "Zhihu")

  const baiduTabIds = baiduTabs.map(({ id }) => id);
  await toGroup(baiduTabIds, "Baidu")

  collapsed = !collapsed
});
```

### 4、安装运行

在浏览器中直接```chrome://extensions```回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；

安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。

打开下面的测试地址，`然后使用我们的插件进行group分组`

- [知乎1](https://www.zhihu.com/question/282691712/answer/2731599501)
- [知乎2](https://www.zhihu.com/question/356434052/answer/938192426)
- [知乎3](https://www.zhihu.com/question/waiting)
- [百度1](https://www.baidu.com/s?ie=UTF-8&wd=baidu)
- [百度2](https://www.baidu.com/s?rsv_idx=1&wd=%E8%BF%99%E4%BA%9B%E8%AF%97%E6%96%87%E4%BD%A0%E5%8F%AF%E8%83%BD%E4%B9%9F%E4%B8%80%E7%9B%B4%E8%83%8C%E2%80%9C%E9%94%99%E2%80%9D%E4%BA%86&fenlei=256&usm=2&ie=utf-8&rsv_pq=8756d09f000520e5&oq=test&rsv_t=6814ElFXFkO3uYEGvTWBnbD3koeunz3B%2BLu%2FZ2IGcN8sD7z1opqCDNWLU98&rqid=8756d09f000520e5&rsf=b90200c42559df6b73a942b0c0387d64_1_15_13&rsv_dl=0_right_fyb_pchot_20811&sa=0_right_fyb_pchot_20811)
- [百度3](https://www.baidu.com/s?rsv_idx=1&wd=%E5%88%9A%E5%87%BA%E7%94%9F%E5%AE%9D%E5%AE%9D%E8%A2%AB%E5%A4%B8%E4%B8%80%E8%84%B8%E6%AD%A3%E6%B0%94%E5%90%8E%E6%8A%AC%E6%89%8B%E6%95%AC%E7%A4%BC&fenlei=256&ie=utf-8&rsv_pq=aa8de7cf00052eb4&oq=%E8%BF%99%E4%BA%9B%E8%AF%97%E6%96%87%E4%BD%A0%E5%8F%AF%E8%83%BD%E4%B9%9F%E4%B8%80%E7%9B%B4%E8%83%8C%E2%80%9C%E9%94%99%E2%80%9D%E4%BA%86&rsv_t=ca5fbFmP91WRWXtDOeK1T84j89wdu6fZTfPeE9FsHaZUGKHbgejN9K%2F1J1A&rqid=aa8de7cf00052eb4&rsf=b90200c42559df6b73a942b0c0387d64_1_15_6&rsv_dl=0_right_fyb_pchot_20811&sa=0_right_fyb_pchot_20811)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75482461a545475d8e7c805e904141bf~tplv-k3u1fbpfcp-watermark.image?)


![QQ20221028-140552-HD.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b34b1df4e73b483dacde9b6d7a8715fe~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ec079398e234a6a91052efbbec2f42d~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f748a2c3dc9443a080ee541a16822d81~tplv-k3u1fbpfcp-watermark.image?)

### 5、最后
以上就是我们这一节的内容了，首先通过声明host_permissions获得访问某些域名的url和title信息，在popup.js中通过过滤查找我们需要的tab标签页，然后根据规则进行分组，在这个基础上，加入了展开/折叠分组的功能；希望看到最后的你有所收获～，源码地址会放在下面

### 相关链接
- [tabs-manager源码地址](https://github.com/rictt/chrome-extension/tree/master/tabs-manager)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/)
- [tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/)
- [tabGroups API](https://developer.chrome.com/docs/extensions/reference/tabGroups/)