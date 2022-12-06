# 杂七杂八


## 微信小程序开发
  ### 1、组件样式覆盖
  微信小程序不支持像>>>, /deep/之类的语法去修改组件内部的样式，需要通过组件暴露一个类名，然后父级通过生命这个类名的值，达到覆盖的作用，如下

  ```js
  // 组件内部
  Component({
    // 暴露一个类名，然后写在组件模板上
    externalClasses: ['sub-class']
  })
  ```

  ```html
  // 组件样式
  <view class="wrapper sub-class"></view>
  ```

  ```js
  // 父级使用
  <view>
    <component sub-class="subClass" />
  </view>
  ```

  ```css
  .subClass {
    font-size: 100px !important;
  }
  ```

  ### 2、css背景图片
  微信小程序不支持css中背景图片引用本地资源，比如`background-image: url('./images/test.png')`，这样子是会失败的，需要手动把图片转成base64或者链接的形式引入
  - [在线转成base64](https://c.runoob.com/front-end/59/)

  ### 3、获取用户昵称和头像
  - [规则调整](https://developers.weixin.qq.com/community/develop/doc/00022c683e8a80b29bed2142b56c01)
  - [demo](https://blog.csdn.net/qq_46068864/article/details/122895337)