(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{408:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"微信小程序开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序开发"}},[t._v("#")]),t._v(" 微信小程序开发")]),t._v(" "),s("h3",{attrs:{id:"_1、组件样式覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、组件样式覆盖"}},[t._v("#")]),t._v(" 1、组件样式覆盖")]),t._v(" "),s("p",[t._v("微信小程序不支持像>>>, /deep/之类的语法去修改组件内部的样式，需要通过组件暴露一个类名，然后父级通过生命这个类名的值，达到覆盖的作用，如下")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件内部")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暴露一个类名，然后写在组件模板上")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("externalClasses")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sub-class'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("// 组件样式\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrapper sub-class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父级使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("component sub"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subClass"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".subClass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px "),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("!important")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2、css背景图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、css背景图片"}},[t._v("#")]),t._v(" 2、css背景图片")]),t._v(" "),s("p",[t._v("微信小程序不支持css中背景图片引用本地资源，比如"),s("code",[t._v("background-image: url('./images/test.png')")]),t._v("，这样子是会失败的，需要手动把图片转成base64或者链接的形式引入")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://c.runoob.com/front-end/59/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线转成base64"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_3、获取用户昵称和头像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、获取用户昵称和头像"}},[t._v("#")]),t._v(" 3、获取用户昵称和头像")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01",target:"_blank",rel:"noopener noreferrer"}},[t._v("规则调整"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.csdn.net/qq_46068864/article/details/122895337",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);