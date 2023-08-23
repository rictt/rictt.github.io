(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{415:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；")]),t._v(" "),s("p",[t._v("目录导航")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159443319938875428",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(一)：hello extension"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159443757878755364",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(二)：reading time计算阅读时间"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159443901193928711",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(三)：focus mode专注模式"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159444710384205832",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(四)：调试我们开发的插件"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7159445226707222558",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome浏览器开发系列(五)：tabs标签管理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_1、介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、介绍"}},[t._v("#")]),t._v(" 1、介绍")]),t._v(" "),s("p",[t._v("这一节开发的插件内容，除了基本的目录结构，还会对部分chrome api进行介绍；主要是通过开发一个针对知乎阅读的"),s("code",[t._v("专注模式")]),t._v("来进行熟悉，"),s("code",[t._v("所谓专注模式：")]),t._v("去除掉页面上的广告，多余不必要的信息，让用户能够纯粹进行阅读文章、评论；需求出来了，我们从技术的角度思考怎么做呢")]),t._v(" "),s("p",[s("code",[t._v("答案是：")]),t._v("用css样式隐藏掉广告元素，通过监听当前点击的tab是不是知乎，如果是，加入我们自定义的css样式文件，否则不做处理。")]),t._v(" "),s("h2",{attrs:{id:"_2、新建我们的工作文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、新建我们的工作文件夹"}},[t._v("#")]),t._v(" 2、新建我们的工作文件夹")]),t._v(" "),s("ul",[s("li",[t._v("新建"),s("code",[t._v("fouce-mode")]),t._v("文件夹")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ee26a1709954574a6b1d151913c326e~tplv-k3u1fbpfcp-watermark.image?",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon-16.png"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2837dbc93e544d67a68355ba3ddd7157~tplv-k3u1fbpfcp-watermark.image?",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon-32.png"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/828dcf7ef9004249aae1e7314817ae2f~tplv-k3u1fbpfcp-watermark.image?",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon-48.png"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6af66c941e5d45eab6652eb242504a10~tplv-k3u1fbpfcp-watermark.image?",target:"_blank",rel:"noopener noreferrer"}},[t._v("icon-128.png"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[t._v("下载下面的icon图片，"),s("code",[t._v("保存到images文件夹当中")])]),t._v(" "),s("li",[t._v("创建"),s("code",[t._v("manifest.json")]),t._v("清单文件")]),t._v(" "),s("li",[t._v("创建"),s("code",[t._v("background.js")]),t._v("后台运行脚本文件")]),t._v(" "),s("li",[t._v("创建"),s("code",[t._v("focus-mode.css")]),t._v("样式文件表")])]),t._v(" "),s("p",[t._v("先创建好对应的文件结构后，下面我们依次往里面填代码，并说明对应的作用，下面是我们的项目结构，可以对比一下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("focus-mode\n├── background.js\n├── focus-mode.css\n├── images\n│   ├── icon-128.png\n│   ├── icon-16.png\n│   ├── icon-32.png\n│   └── icon-48.png\n└── manifest.json\n")])])]),s("h2",{attrs:{id:"_3、依次写入对应内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、依次写入对应内容"}},[t._v("#")]),t._v(" 3、依次写入对应内容")]),t._v(" "),s("h3",{attrs:{id:"_3-1-manifest-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-manifest-json"}},[t._v("#")]),t._v(" 3.1 "),s("code",[t._v("manifest.json")])]),t._v(" "),s("p",[t._v("细心的同学发现除了常见name，version，这次我们发现了新的面孔"),s("code",[t._v("background")]),t._v("和"),s("code",[t._v("permissions")]),t._v("；")]),t._v(" "),s("p",[t._v("其中"),s("code",[t._v("background.service_worker")]),t._v("可以理解为插件程序运行时背后不断运行服务器/脚本，监听着chrome浏览器发生的变化，在脚本里面根据变化，做不同的东西，比如当鼠标切换tab栏，脚本对网页植入不同的脚本等等，下面我们会写。")]),t._v(" "),s("p",[s("code",[t._v("permissions")]),t._v("主要是向chrome声明，我这个插件需要什么权限，比如我要访问当前活跃（当前显示）的tab，那就需要在permission向chrome申请"),s("code",[t._v("activeTab")]),t._v("这个权限，当运行插件时，才能监听"),s("code",[t._v("activeTab")]),t._v("事件")]),t._v(" "),s("p",[t._v("细心的同学可能发现了，"),s("code",[t._v("action设置的default_icon和icons是一样的，是不是多此一举呢？")]),t._v("，这里主要是为了能够能够使用"),s("code",[t._v("chrome.action")]),t._v("API，才设置的；官方文档说明了只有设置了action行为的icon，才会响应icon的点击事件，做不同的事情。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"manifest_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Focus Mode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enable reading mode on Chrome\'s official Extensions and Chrome Web Store documentation."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icons"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"16"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-16.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"32"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-32.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"48"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-48.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"128"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-128.png"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"background"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"service_worker"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"background.js"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_icon"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"16"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-16.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"32"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-32.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"48"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-48.png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"128"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/icon-128.png"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 申请activeTab、scripting权限")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"permissions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"activeTab"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripting"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"commands"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 快捷键使用插件")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"_execute_action"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"suggested_key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ctrl+U"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mac"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Command+U"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-background-js后台运行脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-background-js后台运行脚本"}},[t._v("#")]),t._v(" 3.2 "),s("code",[t._v("background.js")]),t._v("后台运行脚本")]),t._v(" "),s("p",[t._v("由于我们的background.js是有chrome注入到页面当中的，所以可以使用chrome中提供的api，如下面的"),s("code",[t._v("chrome.runtime.onInstalled")]),t._v(", "),s("code",[t._v("chrome.action.onClicked.addListener")]),t._v("等等；")]),t._v(" "),s("p",[s("code",[t._v("chrome.runtime.onInstalled")]),t._v("：当插件、浏览器发生安装时或者更新时执行的一个事件，我们在"),s("code",[t._v("background.js")]),t._v('中监听这个事件，当浏览器插件执行我们的事情：设置插件工具栏icon图标的副标题为"OFF"，如下')]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/66e12564a46643bd9be32374f53c61ee~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("p",[s("code",[t._v("chrome.action.onClicked.addListener")]),t._v("：只有当前面我们设置了action下的default_icon，才会生效；当我们点击右上角工具栏的插件icon时，判断当前页面是否为知乎，设置副标题ON或者OFF，是的话开启/关闭专注模式；")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bdf6e8c10c8643d089e56881891c80c1~tplv-k3u1fbpfcp-watermark.image?",alt:"QQ20221026-212723-HD.gif"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ON"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OFF"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onInstalled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBadgeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nchrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onClicked"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("tab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调会返回一个tab，tab包含常见的id，index，url等")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhihu'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取当前tab页的状态，是ON还是OFF")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" prevState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBadgeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tabId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前为ON，则点击应该为OFF，关闭专注模式")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nextState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prevState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置下标文本")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBadgeText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tabId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 插入我们自定义的css形成专注模式")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scripting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertCSS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focus-mode.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tabId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("STATE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则的话移除")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" chrome"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scripting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeCSS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"focus-mode.css"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tabId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tab"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-3-设置知乎的专注模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-设置知乎的专注模式"}},[t._v("#")]),t._v(" 3.3 设置知乎的专注模式")]),t._v(" "),s("p",[t._v("所谓专注模式（粗糙版）：不影响阅读，去掉广告，专注于文字内容本身，所以我们首先分析页面上哪块区域是可以干掉屏蔽掉，针对性找到元素id或者class覆盖掉；如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d789379f83864d5090fbe00ced193813~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/272a8263290e4eec9dee6306a6b7ec69~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("p",[t._v("于是我们的css可以这样写，加important是为了让我们的样式最高级；平时开发不建议这样写")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Question-sideColumn,\n.AppHeader-inner")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".Question-mainColumn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("效果就变成了如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0917fdaffc64ff3b9ed7b411ffc981b~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}})]),t._v(" "),s("h2",{attrs:{id:"_4、总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、总结"}},[t._v("#")]),t._v(" 4、总结")]),t._v(" "),s("p",[t._v("这期我们主要针对知乎做了一个专注模式，让我们更专心的摸鱼学习，不会被发现的太明显；主要逻辑都是在"),s("code",[t._v("background.js")]),t._v("里面，通过监听icon的点击事件，实时获取当前tab的url，判断是否知乎，注入我们的css，实现专注模式。")]),t._v(" "),s("h2",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/rictt/chrome-extension/tree/master/focus-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-focus-mode/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文地址"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/manifest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("v3 manifest清单配置"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab",target:"_blank",rel:"noopener noreferrer"}},[t._v("tab信息"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/reference/action/#badge",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome.action"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/reference/runtime/",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome.runtime"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件文档"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.chrome.com/docs/extensions/mv3/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("插件概念"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);