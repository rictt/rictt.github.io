## 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)

## 1、插件开发经常用到的文件
上一节我们认识了`manifest.json, popup.html，`这一节我们再新认识两个小伙伴，顺便回顾下

- manifest.json

    我习惯性叫`清单配置文件`,是每个插件必备的一个文件，通常在项目的根目录下。在文件里面通常声明插件的名称，描述，icon图标，还有插件需要用到的权限等等，`总之很重要`
    
- service worker: `background.js`

运行在插件背后的脚本，所以也习惯性命名为`background.js`，脚本会在插件打开时运行在后台，监听浏览器的各种事件，比如tab切换事件，关闭tab等等；通常我们在这里监听特定的事件，然后去干某些特定的事情，比如`监听到了访问知乎，把知乎的logo去掉`

- `content.js`

注入到web页面的脚本，因为我们的插件可能涉及对dom的修改，就需要在页面上注入新的脚本，然后修改指定的dom等等，常见的去广告插件就是找到广告块dom的id，然后屏蔽掉；

- popup.html

插件弹窗的内容，还有options.html，听名字就知道是选项的页面，后面我们再讲

## 2、reading time开发

### 2.1、这一节会介绍的概念
- icon size的使用
- 注入我们的js到页面中
- 使用正则匹配
- 声明权限

### 2.2编写代码
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

### 2.3程序主逻辑content.js

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

## 3、安装运行

在浏览器中直接```chrome://extensions```回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；

安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/75482461a545475d8e7c805e904141bf~tplv-k3u1fbpfcp-watermark.image?)

尝试访问知乎：https://www.zhihu.com/question/516703724

## 4、运行效果


![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3934dd41b55f4092ad1d2f34d1394667~tplv-k3u1fbpfcp-watermark.image?)


## 5、总结

本节内容是浏览器插件的进一步了解，主要认识了content.js，和在指定域名下注入我们的脚本，实现插件的功能；再来回顾一下`manifest.json, content.js`

## 相关链接
- [源码地址](https://github.com/rictt/chrome-extension/tree/master/reading-time)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/)
- [插件文档](https://developer.chrome.com/docs/extensions/)
- [插件概念](https://developer.chrome.com/docs/extensions/mv3/overview/)