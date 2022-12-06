## 前言
   
   文章内容来源于Chrome开发者文档，大部分为翻译，加上自己的一点补充或者理解，不足之处请担待，系列将通过每个实战例子，来加深对插件开发的理解上手；

目录导航
- [chrome浏览器开发系列(一)：hello extension](https://juejin.cn/post/7159443319938875428)
- [chrome浏览器开发系列(二)：reading time计算阅读时间](https://juejin.cn/post/7159443757878755364)
- [chrome浏览器开发系列(三)：focus mode专注模式](https://juejin.cn/post/7159443901193928711)
- [chrome浏览器开发系列(四)：调试我们开发的插件](https://juejin.cn/post/7159444710384205832)
- [chrome浏览器开发系列(五)：tabs标签管理](https://juejin.cn/post/7159445226707222558)


## 1、介绍
这次我们将要开发的插件是：将tabs标签页进行分组管理，展开/折叠，对标签栏的标签进行收纳；会学到的是使用

- host_permissions权限申请
- tabGroups API使用
- tabs API使用

废话不多说，我们下面进入前期准备

## 2、项目准备
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
## 3、编写我们的代码

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

## 4、安装运行

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

## 5、最后
以上就是我们这一节的内容了，首先通过声明host_permissions获得访问某些域名的url和title信息，在popup.js中通过过滤查找我们需要的tab标签页，然后根据规则进行分组，在这个基础上，加入了展开/折叠分组的功能；希望看到最后的你有所收获～，源码地址会放在下面

## 相关链接
- [tabs-manager源码地址](https://github.com/rictt/chrome-extension/tree/master/tabs-manager)
- [原文地址](https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/)
- [tabs API](https://developer.chrome.com/docs/extensions/reference/tabs/)
- [tabGroups API](https://developer.chrome.com/docs/extensions/reference/tabGroups/)