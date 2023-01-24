<template>
  <div class="resume-page-wrap">
    <h2 class="page-title">吴泽伟的前端简历</h2>
    <div class="resume-basic-info">
      <div class="info-item">
        <span class="info-item-label">手机：</span>
        <span class="info-item-value">
          <a href="tel: 17304013249">173-040-13249</a>
        </span>
      </div>
      <div class="info-item">
        <span class="info-item-label">邮箱：</span>
        <span class="info-item-value">
          <a href="mailto:2390923149@qq.com">2390923149@qq.com</a>
        </span>
      </div>
      <div class="info-item">
        <span class="info-item-label">学历：</span>
        <span class="info-item-value">大专</span>
      </div>
      <div class="info-item">
        <span class="info-item-label">其他：</span>
        <span class="info-item-value">1998年出生，现居广州天河区</span>
      </div>
    </div>

    <ResumeContentWrap title="基本介绍">
      <p class="paragraph"><strong>三年多前端经验，</strong>主要是负责web多端的系统开发，<strong>ToC、ToB产品都做过；</strong>工作期间认真负责，保障功能需求如期上线；除此之外，也有接触Electron、Puppetter、浏览器插件需求的开发，但只是能够满足需求的地方；</p>
      <p class="paragraph"><strong>基本技能</strong></p>
      <ul>
        <li>HTML、CSS、Javascript都会</li>
        <li>React、Vue2都会（公司项目比较喜欢用vue，个人喜欢用React）</li>
        <li>写过一些Nodejs脚本，比如项目批量国际化，读取协议文本、设置代理等</li>
        <li>英语能力四级，简单读写</li>
      </ul>
    </ResumeContentWrap>


    <ResumeContentWrap title="公司经历">
      <ul>
        <li>
          <div class="box-header">
            <div>前端@广州领克科技有限公司（互联网/电商外卖服务）</div>
            <div>2年</div>
          </div>
          <ul>
            <li>主要负责业务支撑系统维护，基础功能建设，营销h5的开发；</li>
            <li>主要技术：vue2 + iview + egg + vant</li>
          </ul>
        </li>

        <li>
          <div class="box-header">
            <div>前端@爱云校（互联网/在线教育服务）</div>
            <div>1.5年</div>
          </div>
          <ul>
            <li>主要负责好分数组web组相关的开发，其中包括pc、web、小程序；</li>
            <li>主要技术：react + vue2 + elementUI  + vant</li>
          </ul>
        </li>

      </ul>
    </ResumeContentWrap>

    <ResumeContentWrap title="项目经历：外卖管理系统" right-text="2020年12月~至今" >
      <img class="image" src="./images/boss-cms.png" alt="">
      <p class="pragraph">这是一个业务外卖管理系统，主要是外卖管理配送、客户中心、营销工具的开发维护；上图是其中一个模块：App配置模块，<strong>可以通过对App某个页面进行配置，根据参数动态展示不同的卡片，根据不同的地区/节日投放不同的模板等等</strong></p>
      <p class="pragraph"><strong>主要技术：</strong>Vue2 + iview4 + vuex + xlsx等</p>
      <p>在职期间主要做了：</p>
      <ul>
        <li>依赖调整：删减了无用的库，UI组件统一，从三个（ele、iview、material），削减成iview主力 + 部分element组件，并且升级过渡iview3到iview4</li>
        <li>表格类页面代码高度重复，封装了一个VTable组件，集齐数据展示 + 条件查询 + 前端导出功能，大大减少了重复代码；</li>
        <li>写了个node脚本进行项目国际化批量匹配与替换，减少了开发时间重复填写占位符，再替换的时间，提升了开发效率</li>
        <li>模块太多，构建耗时太长，<a href="https://juejin.cn/post/7108255306609590286#heading-8" target="_blank">开发了webpack plugin进行模块过滤，通过配置化快速构建指定目录下的资源，提升了开发效率</a></li>
        <li>CMS拖拽表单系统，支持App动态配置页面，简单低代码的模型（卡片 + 预览 + 配置 = 页面）</li>
      </ul>
    </ResumeContentWrap>

    <ResumeContentWrap title="项目经历：H5营销工具" right-text="2020年12月~至今" >
      <div class="image-list horizontal">
        <img style="width: 47%;" class="image" src="./images/h5-elephant.jpg" alt="">
        <img style="width: 47%;" class="image" src="./images/h5-discovery.png" alt="">
      </div>
      <p class="pragraph">这是一个多页的H5营销项目，主要负责公司业务H5的开发与维护，包括话费充值、抽奖转盘、公共登陆页、下载落地页等</p>
      <p class="pragraph"><strong>主要技术：</strong>Vue2 + vant + egg等</p>
      <p>在职期间主要做了：</p>
      <ul>
        <li>封装了与原生交互的sdk，参照了微信的sdk设计，分success、fail等；统一了在容器内 + 浏览器端的请求表现</li>
        <li>封装了统一拉起App的逻辑，主要是针对主流平台的处理兼容，比如浏览器，微信内，facebook等</li>
        <li>H5播放器自定义播放样式，包括播放条，操作按钮等</li>
        <li>营销图片多，加载体验差，封装了image加载组件，营销场景下渐进加载图片，用户体验好</li>
        <li>业务埋点代码重复，封装了统一的工具库，支持api、指令方式调用，也支持异步非堵塞上传等</li>
        <li>egg渲染层注入一些全局或者业务数据，减少了渲染时间</li>
        <li>配置webpack打包多页面，入口分离，抽离公共包；将每个页面进行分离，有效缓存
公共包，减少白屏时间</li>
      </ul>
    </ResumeContentWrap>

    <ResumeContentWrap title="项目经历：升学预测系统" right-text="2019年5月~2020年12月" >
      <img src="./images/ai-shengxuebao.png" alt="">
      <p class="pragraph">这是一个多端的系统，包括pc，小程序；主要功能是提供学子进行志愿报考预测服务；</p>
      <ul>
        <li>项目由Vue2 + element-UI等技术开发</li>
        <li>提供了模板打印功能，通过传参实现定制打印功能；</li>
        <li>需要埋点的地方点，定制了全局的埋点上报处理，包括指令调用方式，定时上报等</li>
        <li>项目内重复请求多，浪费服务器资源；通过处理懒加载或者合并请求等方式，减少了重复/无效请求</li>
        <li>处理非 safari 浏览器播放的兼容性，使用 hls.js 插件，处理不支持 HLS 协议浏览器的播放；</li>
      </ul>
    </ResumeContentWrap>

  </div>
</template>

<script>
import ResumeContentWrap from './resume-content-wrap.vue'

export default {
  components: {
    ResumeContentWrap
  },
  
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.resume-page-wrap {
  padding: 20px 20px;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.page-title {
  border: none;
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
}

.resume-basic-info {
  display: flex;
  align-items: center;
  border: 1px dashed #666;
  padding: 10px 8px;
  flex-wrap: wrap;
  .info-item {
    width: 50%;
    padding: 4px 0;
  }
}
</style>