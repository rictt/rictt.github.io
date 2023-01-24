<template>
  <div class="content-wrap">
    <header class="content-title-wrap">
      <h3 class="title">{{ title }}</h3>
      <h3 v-if="rightText" class="title title-right">{{ rightText }}</h3>
    </header>
    <main class="content-main">
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    rightText: String
  },

}
</script>

<style lang="stylus" scoped>
.content-wrap {
  padding-top: 10px;
}

.content-title-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed #666;
  font-family: Tahoma, serif;
  font-size: 18pt;
  line-height: 1.8;

  .title {
    margin: 0;
    font-size: 18pt;
  }
  .title-right {
    font-size: 16pt;  
  }
}

.content-main {
  font-family: Tahoma, serif;
  line-height: 2;
  padding-top: 10px;

  ul {
    margin: 0;
    line-height: 2;
    font-size: 14pt;
  }
  
  li {
    margin: 0;
    line-height: 2;
    font-size: 12pt;
    color: #000;
  }


  img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .box-header {
    display: flex;
    justify-content: space-between;  
    font-family: Tahoma, serif;
    font-size: 14pt;
    color: #000;
  }

  .paragraph {
    line-height: 2;

    strong {
      font-size: 16pt;
    }
  }
  strong {
    font-size: 15pt;
  }
  .image-list {
    display: flex;

    &.horizontal {
      align-items: center;
      justify-content: space-between;
    }
  }
  

  .image-tips {
    text-align: center;  
    font-size: 11pt;
  }

  .list-item {
    font-weight: 400;
    font-size: 12pt;
  }
}

</style>