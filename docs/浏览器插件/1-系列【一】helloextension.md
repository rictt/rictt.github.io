## 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；
   
目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)
   
## 1、浏览器插件

插件本质上是一个程序，有图形界面，有在运行的后台脚本；每当打开浏览器，插件都在后台默默进行中，然后在浏览的过程中，根据浏览内容去做增强用户体验的操作，讲个故事：比如`张三每天都喜欢逛知乎，因此被领导批评了很多次，张三看到那个超大的知乎logo就头疼，想着怎么看知乎的同时屏蔽掉这个logo以至于不太明显被发现在摸鱼。`——插件就可以用上了，针对域名zhihu.com，屏蔽掉logo的img元素，神不知鬼不觉～

`所以插件其实可以是`
- 生产工具
- 浏览体验增强工具
- 信息聚合
- 摸鱼游戏小能手

## 2、插件怎么功能

###  2.1插件界面
通过界面操作的方式，管理插件；`插件的界面由CSS + HTML组成`，是的，你没听错

### 2.2插件api
这部分是chrome浏览器提供的，允许我们插件访问浏览器的一些特性：比如获取激活中的tab、修改网络请求等等；

##  3、hello extension
我们的第一个浏览器插件，下面跟我手把手来

### 3.1、准备工作
找个200平大的地方新建个文件夹：`hello-extension`，然后在文件夹里面分别创建manifest.json，hello.html，然后下载[hello_icon.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d14ee8cd8ef4d58ab6e63e04261e954~tplv-k3u1fbpfcp-watermark.image?)这个图片，另存到本地，做好准备下面开始写代码

### 3.2、manifest.json
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

### 3.3、hello.html
这个就不废话了，内容自定义，就是我们弹窗的内容
```html
<html>
  <body>
    <h1>Hello Extensions</h1>
  </body>
</html>
```

### 3.4、小小总结下
- 记住manifest.json清单文件
- 弹窗的内容是default_popup

## 4、安装然后运行
在浏览器中直接```chrome://extensions```回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；

安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa617d42f1e9437f89f38b7e1c8082e7~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ee8432bb95846cb94ff8a25b3566910~tplv-k3u1fbpfcp-watermark.image?)

## 5、总结
本节内容是浏览器插件的一个基本了解，后续将通过其他场景来进一步了解认识掌握插件开发，欢迎关注我，我是程序员狗子

## 相关链接
- [源码地址](https://github.com/rictt/chrome-extension/tree/master/reading-time)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/)
- [插件文档](https://developer.chrome.com/docs/extensions/)
- [插件概念](https://developer.chrome.com/docs/extensions/mv3/overview/)
