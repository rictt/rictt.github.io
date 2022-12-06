## 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)

## 1、介绍

这一节开发的插件内容，除了基本的目录结构，还会对部分chrome api进行介绍；主要是通过开发一个针对知乎阅读的`专注模式`来进行熟悉，`所谓专注模式：`去除掉页面上的广告，多余不必要的信息，让用户能够纯粹进行阅读文章、评论；需求出来了，我们从技术的角度思考怎么做呢

`答案是：`用css样式隐藏掉广告元素，通过监听当前点击的tab是不是知乎，如果是，加入我们自定义的css样式文件，否则不做处理。

## 2、新建我们的工作文件夹

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

## 3、依次写入对应内容

### 3.1 `manifest.json`
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
### 3.2 `background.js`后台运行脚本

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

### 3.3 设置知乎的专注模式
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

## 4、总结

这期我们主要针对知乎做了一个专注模式，让我们更专心的摸鱼学习，不会被发现的太明显；主要逻辑都是在`background.js`里面，通过监听icon的点击事件，实时获取当前tab的url，判断是否知乎，注入我们的css，实现专注模式。

## 相关链接
- [源码地址](https://github.com/rictt/chrome-extension/tree/master/focus-mode)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/)
- [v3 manifest清单配置](https://developer.chrome.com/docs/extensions/mv3/manifest/)
- [tab信息](https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab)
- [chrome.action](https://developer.chrome.com/docs/extensions/reference/action/#badge)
- [chrome.runtime](https://developer.chrome.com/docs/extensions/reference/runtime/)
- [插件文档](https://developer.chrome.com/docs/extensions/)
- [插件概念](https://developer.chrome.com/docs/extensions/mv3/overview/)
