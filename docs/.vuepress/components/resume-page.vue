<template>
  <div class="resume-page-wrap">
    <h2 class="page-title">{{ getText('吴泽伟') }}的前端简历</h2>
    <div class="resume-basic-info">
      <div class="info-item">
        <span class="info-item-label">微信：</span>
        <span class="info-item-value">
          lijiatu1998
          <!-- <a href="tel: 17304013249">173-040-13249</a> -->
        </span>
      </div>
      <div class="info-item">
        <span class="info-item-label">邮箱：</span>
        <span class="info-item-value">
          <a href="mailto:2390923149@qq.com">{{  getText('2390923149@qq.com') }}</a>
        </span>
      </div>
      <div class="info-item">
        <span class="info-item-label">学历：</span>
        <span class="info-item-value">大专（自考华工中）</span>
      </div>
      <div class="info-item">
        <span class="info-item-label">其他：</span>
        <span class="info-item-value">1998年出生，现居广州天河区</span>
      </div>
    </div>

    <ResumeContentWrap title="基本介绍">
      <p class="paragraph" style="margin: 0;">
        本人参与了多个前端项目的设计与研发，能够独立开发<strong>网页端WEB，小程序端，移动端H5。有Vue、React、小程序的项目开发经验；</strong>性格开朗，有责任感，乐于沟通并积极沟通解决开发中遇到的问题。
      </p>
      <p class="paragraph"><strong>基本技能</strong></p>
      <ul>
        <li>掌握HTML/JS/CSS等常用前端基础工具；</li>
        <li>熟练掌握Vue2，运用vue-cli + vuex + router进行项目开发；</li>
        <li>熟悉React，能够运用react-router-dom、hooks、redux进行项目开发；</li>
        <li>熟悉微信小程序原生开发；</li>
        <li>了解Typescript，配合所用的框架进行项目开发；</li>
        <li>了解NodeJS、浏览器插件、Electron开发</li>
      </ul>
    </ResumeContentWrap>


    <ResumeContentWrap title="公司经历">
      <ul>
        <li>
          <div class="box-header">
            <div>前端@{{ getText('广州领克科技有限公司') }}（互联网/外卖电商服务）</div>
            <div>2年</div>
          </div>
          <!-- <ul>
            <li>主要负责外卖配送系统、大象web app等项目的开发维护</li>
          </ul> -->
        </li>

        <li>
          <div class="box-header">
            <div>前端@{{ getText('爱云校') }}（互联网/在线教育服务）</div>
            <div>0.5年</div>
          </div>
          <!-- <ul>
            <li>主要参与生涯规划PC、小程序的开发维护</li>
          </ul> -->
        </li>

        <li>
          <div class="box-header">
            <div>前端@{{ getText('广州魔芋科技有限公司') }}（互联网/生活服务）</div>
            <div>0.5年</div>
          </div>
          <!-- <ul>
            <li>主要参与找工作、招聘、看公司模块的开发维护</li>
          </ul> -->
        </li>

      </ul>
    </ResumeContentWrap>

    <ResumeContentWrap title="项目：外卖配送系统" right-text="2020.12~至今" >
      <p class="pragraph">
        <strong>项目介绍：</strong>
        一个向在柬用户提供外卖、购物、旅游等生活服务的业务支撑系统；主要提供外卖、配送、订单、营销活动等管理；
      </p>
      <p class="pragraph">
        <strong>技术栈</strong>
        <ul>
          <li>框架：vue2、vue-router、vuex、echarts、stylus、moment、iviewUI</li>
          <li>构建：vue-cli、webpack</li>
          <li>CI/CD：BitBucket、Jenkins、阿里云</li>
          <li>项目管理：TAPD</li>
        </ul>
      </p>
      <p class="pragraph">
        <strong>工作与成就</strong>
        <ul>
          <li>负责项目依赖重复冗余问题；通过技术栈统一+代码改造+升级，将重复多余的第三方库（vue-material、less等）移除系统，<strong>减小了构建包的体积大小（约3-500kb）</strong></li>
          <li>负责抽象封装VTable组件；将重复的列表查询，表格操作抽象封装成公共组件，<strong>集成了表单查询、列表显示、数据导出等功能，</strong>提升了组内团队3人的开发效率；</li>
          <li>负责了项目国际化脚本的开发；不用再手动一个个进行文本翻译；</li>
          <li>负责了webpack plugin插件开发，结合inquirer实现本地模块过滤构建；<strong>通过配置构建，从3-5分钟等提升到30s左右；</strong></li>
          <li>负责了问卷调查、视频发现页、App配置中心等模块的开发，期间无延期，如期上线。</li>
          <li>参与了用户数据可视化的开发；通过echarts的饼图、折线图、沙漏图进行<strong>可视化展示；</strong></li>
          <li>参与项目的日常开发、维护</li>
        </ul>
      </p>
    </ResumeContentWrap>

    <ResumeContentWrap title="项目：大象web app" right-text="2020.12~至今" >
      <p class="pragraph">
        <strong>项目介绍：</strong>
        一个向在柬用户提供外卖、购物、旅游等生活服务的web应用；作为Native App的衍生，主要承担基础业务、常见落地页、营销页面、公共页面的开发，减少Native开发、部署成本；
      </p>
      <p class="pragraph">
        <strong>技术栈</strong>
        <ul>
          <li>框架：vue2、vue-router、stylus、egg、vantUI、lottie-web</li>
          <li>构建：vue-cli、webpack</li>
          <li>CI/CD：BitBucket、Jenkins、阿里云</li>
          <li>项目管理：TAPD</li>
        </ul>
      </p>
      <p class="pragraph">
        <strong>工作与成就</strong>
        <ul>
          <li>负责多平台app唤醒的兼容开发，减少了重复调试功能的开发成本；</li>
          <li>负责webview jssdk的设计开发，通过约定接口命名、回调等规范，保证了ios、android逻辑交互的统一；</li>
          <li>负责封装request操作；将native request与browser request统一结构，减少了大量重复分支代码；</li>
          <li>负责大象扭蛋机的营销页面开发，<strong>结合tween.js缓动函数实现动画，丰富用户体验；</strong></li>
          <li>负责图片组件开发，结合阿里云进行渐进式加载，<strong>减少图片闪屏问题，丰富用户体验；</strong></li>
          <li>参与egg服务端<strong>预渲染开发</strong>，减少了客户端的渲染时间；</li>
          <li>参与大象web app的分享组件开发，支持文案动态配置；</li>
        </ul>
      </p>
    </ResumeContentWrap>

    <ResumeContentWrap title="项目：生涯规划PC+小程序（爱云校生涯规划）" right-text="2020.07~2020.12" >
      <p class="pragraph">
        <strong>项目介绍：</strong>
        这是一个通过大数据智能分析，帮助学生进行高考志愿填报的系统；学生通过输入分数、年份等信息，系统通过往年数据分析院校录取概率。
      </p>
      <p class="pragraph">
        <strong>技术栈</strong>
        <ul>
          <li>框架：vue2、vue-router、elementUI</li>
          <li>项目管理：JIRA</li>
        </ul>
      </p>
      <p class="pragraph">
        <strong>工作与成就</strong>
        <ul>
          <li>负责优化项目重复/多余不必要请求，减少服务器资源浪费；</li>
          <li>参与数据埋点操作的封装，<strong>减少了大量重复埋点代码；</strong></li>
          <li>通过接入第三方hls.js，解决了ipad端视频资源的播放失败；</li>
          <li>参与项目的日常开发、维护</li>
        </ul>
      </p>
    </ResumeContentWrap>


    <ResumeContentWrap title="项目：诚聘通（H5）" right-text="2019.10~2020.06" >
      <p class="pragraph">
        <strong>项目介绍：</strong>
        一个面向海外华人求职/招聘的平台，主要有找工作、人才库、看公司这三大模块；
      </p>
      <p class="pragraph">
        <strong>技术栈</strong>
        <ul>
          <li>框架：react16、react-router-dom、react-redux、css-module</li>
          <li>构建：cra、webpack</li>
          <li>项目管理：Teambition</li>
        </ul>
      </p>
      <p class="pragraph">
        <strong>工作与成就</strong>
        <ul>
          <li>参与基础组件的开发，期间大概<strong>完成了10+基础组件；</strong></li>
          <li>负责简体转繁体的函数开发，完成了系统文本切换简繁体的功能；</li>
          <li>参与项目的日常开发、维护</li>
        </ul>
      </p>
    </ResumeContentWrap>

  </div>
</template>

<script>
import ResumeContentWrap from './resume-content-wrap.vue'

export default {
  components: {
    ResumeContentWrap
  },

  computed: {
    isShowSensitiveInfo() {
      return !!this.$route.query.show
    }
  },
  

  created() {
    document.title = this.getText('吴泽伟') + '的前端简历'
  },

  methods: {
    getText(text) {
      if (this.isShowSensitiveInfo) {
        return text
      }
      return 'xxx'
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