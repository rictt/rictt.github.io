<template>
  <div class="resume-wrap">
    <ResumePage>
      
    </ResumePage>

  </div>
</template>

<script>
import ResumePage from './resume-page.vue'
export default {
  components: {
    ResumePage
  },

  data() {
    return {

    }
  }
}
</script>
<style>
body, html {
  background-color: #f5f5d5;
}
a {
  color: #1e80ff;
  cursor: pointer;
  text-decoration: underline;
}
</style>
<style lang="stylus" scoped>
.resume-wrap {
  max-width: 800px;
  margin: 40px auto;
  border: 1px solid #666;
}
</style>