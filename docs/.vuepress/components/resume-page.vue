<template>
  <div class="resume-page-wrap">
    <h2 class="page-title">狗子的前端简历</h2>
    <div class="resume-basic-info">
      <div class="info-item">
        <span class="info-item-label">手机：</span>
        <span class="info-item-value">
          <a href="tel: 17304013249">173-0401-3249</a>
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
        <span class="info-item-value">全日制一本，药学@沈阳医科大学</span>
      </div>
      <div class="info-item">
        <span class="info-item-label">其他：</span>
        <span class="info-item-value">1998年出生，现居广州天河区</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
.resume-page-wrap {
  padding: 30px 20px;
  border: 1px solid #eee;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
}

.page-title {
  border: none;
  text-align: center;
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
    .info-item-label {

    }
    .info-item-value {
     
    }
  }
}
</style>