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
        <span class="info-item-label">其他：</span>
        <span class="info-item-value">1998年出生，现居广州天河区</span>
      </div>
    </div>

    <ResumtContentWrap title="基本介绍">
      <p class="paragraph"><strong>三年多前端经验，</strong>主要是负责web多端的系统开发，<strong>ToC、ToB产品都做过；</strong>工作期间认真负责，保障功能需求如期上线；除此之外，也有接触Electron、Puppetter、浏览器插件需求的开发，但只是能够满足需求的地方；</p>
      <p class="paragraph"><strong>基本技能</strong></p>
      <ul>
        <li>HTML、CSS、Javascript都会</li>
        <li>React、Vue2都会（公司项目比较喜欢用vue，个人喜欢用React）</li>
        <li>写过一些Nodejs脚本，比如项目批量国际化，读取协议文本、设置代理等</li>
        <li>英语能力四级，简单读写可以</li>
      </ul>
    </ResumtContentWrap>


    <ResumtContentWrap title="公司经历">
      <ul>
        <li>
          <div class="box-header">
            <div>前端@广州领克科技有限公司（互联网/电商外卖外卖）</div>
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
    </ResumtContentWrap>

    <ResumtContentWrap title="项目经历：业务支撑系统" right-text="2020年12月~至今" >
      <img class="image" src="./images/boss-cms.png" alt="">
      <p class="pragraph">这是一个业务支撑管理系统，主要是外卖管理配送、客户中心、营销工具的开发维护；上图是其中一个模块：App配置模块，<strong>可以通过对App某个页面进行配置，根据参数动态展示不同的卡片，根据不同的地区/节日投放不同的模板等等</strong></p>
      <ul>
        <li>项目由Vue2 + iview4 + vuex + xlsx等技术开发</li>
        <li>定制webpack plugin实现本地模块过滤构建，减少构建开发时间</li>
        <li>表格重度封装，根据配置信息，动态显示表单查询项，结合xlsx支持表格前端导出</li>
        <li>node脚本进行i18文本替换，省去手动翻译再替换的繁琐过程</li>
        <li>推行mixin风格进行代码组织</li>
      </ul>
    </ResumtContentWrap>

    <ResumtContentWrap title="项目经历：H5营销" right-text="2020年12月~至今" >
      <div class="image-list horizontal">
        <img style="width: 47%;" class="image" src="./images/h5-elephant.jpg" alt="">
        <img style="width: 47%;" class="image" src="./images/h5-discovery.png" alt="">
      </div>
      <p class="pragraph">这是一个多页的H5营销项目，主要负责公司业务H5的开发与维护，包括话费充值、抽奖转盘、公共登陆页、下载落地页等</p>
      <ul>
        <li>项目由Vue2 + vant + egg等技术开发</li>
        <li>采用egg进行服务端渲染，根据场景需求提前获取数据注入到模板中</li>
        <li>根据不同平台进行条件模板渲染，注入搜索关键字等</li>
        <li>H5播放器自定义播放样式，包括播放条，操作按钮等</li>
        <li>封装image加载组件，营销场景下渐进加载图片，用户体验好</li>
      </ul>
    </ResumtContentWrap>

    <ResumtContentWrap title="项目经历：阅卷、志愿预测系统" right-text="2019年5月~2020年12月" >
      <img src="./images/ai-shengxuebao.png" alt="">
      <p class="pragraph">这是一个多端的系统，包括pc，小程序；主要功能是提供学子进行志愿报考预测服务；</p>
      <ul>
        <li>项目由Vue2 + element-UI等技术开发</li>
        <li>全局的埋点上报处理，包括指令调用方式，定时上报等</li>
        <li>模板打印功能</li>
      </ul>
    </ResumtContentWrap>

  </div>
</template>

<script>
import ResumtContentWrap from './resume-content-wrap.vue'

export default {
  components: {
    ResumtContentWrap
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