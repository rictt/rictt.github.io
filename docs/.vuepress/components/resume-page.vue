<template>
  <div class="resume-page-wrap">
    <h2 class="page-title">xxxxx</h2>
    <div class="resume-basic-info">
      <div class="info-item">
        <span class="info-item-label">手机：</span>
        <span class="info-item-value">
          <a href="tel: 17304013249">173-xx0401-3249</a>
        </span>
      </div>
      <div class="info-item">
        <span class="info-item-label">邮箱：</span>
        <span class="info-item-value">
          <a href="mailto:2390923149@qq.com">2390923149@qq.com</a>
        </span>
      </div>
      <div class="info-item">
        <span class="info-item-label">教育：</span>
        <span class="info-item-value">xxx@xxx</span>
      </div>
      <div class="info-item">
        <span class="info-item-label">其他：</span>
        <span class="info-item-value">1998年出生，现居广州天河区</span>
      </div>
    </div>

    <ResumtContentWrap title="公司经历">
      <ul>
        <li>
          <div class="box-header">
            <div>前端TL@上海XX科技有限公司（高新企业）</div>
            <div>2年</div>
          </div>
          <ul>
            <li>将研发bug中前端bug占比从30%优化至10%。</li>
            <li>将项目由Vue2 option API + js重构为Vue3 composition API + ts，数据类型更清晰。</li>
          </ul>
        </li>

        <li>
          <div class="box-header">
            <div>前端TL@上海XX科技有限公司（高新企业）</div>
            <div>2年</div>
          </div>
          <ul>
            <li>将研发bug中前端bug占比从30%优化至10%。</li>
            <li>将项目由Vue2 option API + js重构为Vue3 composition API + ts，数据类型更清晰。</li>
          </ul>
        </li>

        <li>
          <div class="box-header">
            <div>前端TL@上海XX科技有限公司（高新企业）</div>
            <div>2年</div>
          </div>
          <ul>
            <li>将研发bug中前端bug占比从30%优化至10%。</li>
            <li>将项目由Vue2 option API + js重构为Vue3 composition API + ts，数据类型更清晰。</li>
          </ul>
        </li>
      </ul>
    </ResumtContentWrap>

    <ResumtContentWrap title="项目经历：筑绘通（在线建筑模型编辑）" right-text="2021年12月~至今" >
      <img class="image" src="./images/canvas-brush-ticket-prize.png" alt="">
      <div class="image-tips">（官网截取）</div>
      <p class="paragraph">这是一个集dwg建筑模型识别、编辑、出图功能为一体的在线工具。项目难点在于<strong>数据模型种类繁多、异步事件处理频繁、充斥着三级以上的联动交互</strong>，很容易出bug，不过经过1年时间，在组员的支持下，我们成功将前端团队的bug占比下调了20个百分点。</p>
      <ul>
        <li>将项目由Vue2 option API + js重构为Vue3 composition API + ts，数据类型更清晰。</li>
        <li>制定代码规范，渐进式引入Prettier + ESLint强制检测代码风格，减少一些低级错误的发生。</li>
        <li>坚持code review，增强团队成员对代码的敬畏之心。</li>
      </ul>
    </ResumtContentWrap>

    <ResumtContentWrap title="项目经历：叮咚买菜供应链后台系统" right-text="2021年7月~2021年12月" >
      <img class="image" src="./images/canvas-brush-ticket-mask.png" alt="">
      <div class="image-tips">（官网截取）</div>
      <p class="paragraph">这是一个使用Vue2 + Element-UI + Webpack4的典型供应链后台管理系统。我主要负责调拨部分的业务迭代。彼时团队正用乾坤将老应用拆分微前端，但老项目短时间内仍将存在。老项目开发和编译用时长，严重影响了开发/部署效率。故对老项目进行了编译优化。</p>
      <ul>
        <li>dev热更新时间：从16秒降至不到1秒，降幅超93%，显著提升了开发效率。</li>
        <li>build时间：从近6分钟降至1分12秒，降幅超79%，提高了测试/产线环境的发布效率。</li>
        <li>build产物大小：从90.2MB降至22.3MB，降幅超75%，提升了用户体验（开启gzip后仅4MB）。</li>
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