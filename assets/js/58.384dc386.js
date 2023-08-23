(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{413:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；")]),t._v(" "),s("p",[t._v("目录导航")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159443319938875428",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(一)：hello extension"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159443757878755364",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(二)：reading time计算阅读时间"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159443901193928711",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(三)：focus mode专注模式"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159444710384205832",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(四)：调试我们开发的插件"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159445226707222558",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(五)：tabs标签管理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_1、浏览器插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、浏览器插件"}},[t._v("#")]),t._v(" 1、浏览器插件")]),t._v(" "),s("p",[t._v("插件本质上是一个程序，有图形界面，有在运行的后台脚本；每当打开浏览器，插件都在后台默默进行中，然后在浏览的过程中，根据浏览内容去做增强用户体验的操作，讲个故事：比如"),s("code",[t._v("张三每天都喜欢逛知乎，因此被领导批评了很多次，张三看到那个超大的知乎logo就头疼，想着怎么看知乎的同时屏蔽掉这个logo以至于不太明显被发现在摸鱼。")]),t._v("——插件就可以用上了，针对域名zhihu.com，屏蔽掉logo的img元素，神不知鬼不觉～")]),t._v(" "),s("p",[s("code",[t._v("所以插件其实可以是")])]),t._v(" "),s("ul",[s("li",[t._v("生产工具")]),t._v(" "),s("li",[t._v("浏览体验增强工具")]),t._v(" "),s("li",[t._v("信息聚合")]),t._v(" "),s("li",[t._v("摸鱼游戏小能手")])]),t._v(" "),s("h2",{attrs:{id:"_2、插件怎么功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、插件怎么功能"}},[t._v("#")]),t._v(" 2、插件怎么功能")]),t._v(" "),s("h3",{attrs:{id:"_2-1插件界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1插件界面"}},[t._v("#")]),t._v(" 2.1插件界面")]),t._v(" "),s("p",[t._v("通过界面操作的方式，管理插件；"),s("code",[t._v("插件的界面由CSS + HTML组成")]),t._v("，是的，你没听错")]),t._v(" "),s("h3",{attrs:{id:"_2-2插件api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2插件api"}},[t._v("#")]),t._v(" 2.2插件api")]),t._v(" "),s("p",[t._v("这部分是chrome浏览器提供的，允许我们插件访问浏览器的一些特性：比如获取激活中的tab、修改网络请求等等；")]),t._v(" "),s("h2",{attrs:{id:"_3、hello-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、hello-extension"}},[t._v("#")]),t._v(" 3、hello extension")]),t._v(" "),s("p",[t._v("我们的第一个浏览器插件，下面跟我手把手来")]),t._v(" "),s("h3",{attrs:{id:"_3-1、准备工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、准备工作"}},[t._v("#")]),t._v(" 3.1、准备工作")]),t._v(" "),s("p",[t._v("找个200平大的地方新建个文件夹："),s("code",[t._v("hello-extension")]),t._v("，然后在文件夹里面分别创建manifest.json，hello.html，然后下载"),s("a",{attrs:{href:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7d14ee8cd8ef4d58ab6e63e04261e954~tplv-k3u1fbpfcp-watermark.image?",target:"_blank",rel:"noopener noreferrer"}},[t._v("hello_icon.png"),s("OutboundLink")],1),t._v("这个图片，另存到本地，做好准备下面开始写代码")]),t._v(" "),s("h3",{attrs:{id:"_3-2、manifest-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、manifest-json"}},[t._v("#")]),t._v(" 3.2、manifest.json")]),t._v(" "),s("p",[t._v("首先是manifest.json，中文翻译我喜欢叫"),s("code",[t._v("清单文件")]),t._v("，用来说明管理插件的信息，需要什么权限，什么icon显示等等；另外啰嗦一句，插件开发也是有版本概念的，我们这里统一用v3（最新版）")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello Extensions"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Base Level Extension"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里切记是版本3")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default_popup用来指定点击icon时弹窗的html内容")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_popup"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello.html"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// icon")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello_extensions.png"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commands"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 快捷键打开，Ctrl+Shift+F可以快速打开插件")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_execute_action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"suggested_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ctrl+Shift+F"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mac"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MacCtrl+Shift+F"')]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Opens hello.html"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-3、hello-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、hello-html"}},[t._v("#")]),t._v(" 3.3、hello.html")]),t._v(" "),s("p",[t._v("这个就不废话了，内容自定义，就是我们弹窗的内容")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello Extensions"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-4、小小总结下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4、小小总结下"}},[t._v("#")]),t._v(" 3.4、小小总结下")]),t._v(" "),s("ul",[s("li",[t._v("记住manifest.json清单文件")]),t._v(" "),s("li",[t._v("弹窗的内容是default_popup")])]),t._v(" "),s("h2",{attrs:{id:"_4、安装然后运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、安装然后运行"}},[t._v("#")]),t._v(" 4、安装然后运行")]),t._v(" "),s("p",[t._v("在浏览器中直接"),s("code",[t._v("chrome://extensions")]),t._v("回车进入扩展程序面板，然后加载我们的文件目录，选中文件夹即可，再点确认就可以了；")]),t._v(" "),s("p",[t._v("安装完成后，将插件置顶，然后点击查看效果，也可以使用我们自定义的快捷键快速打开。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa617d42f1e9437f89f38b7e1c8082e7~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ee8432bb95846cb94ff8a25b3566910~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("h2",{attrs:{id:"_5、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、总结"}},[t._v("#")]),t._v(" 5、总结")]),t._v(" "),s("p",[t._v("本节内容是浏览器插件的一个基本了解，后续将通过其他场景来进一步了解认识掌握插件开发，欢迎关注我，我是程序员狗子")]),t._v(" "),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/rictt/chrome-extension/tree/master/reading-time",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件概念"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);