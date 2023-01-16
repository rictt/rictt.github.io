<template>
  <div>
    <div id="print">
      <ResumePage />
    </div>
    <div class="print-btn" @click="goPrint">A4打印</div>
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
  },

  methods: {
    goPrint() {
      window.print()
    }
  }
}
</script>
<style>

</style>
<style lang="stylus" scoped>
@media print {
  .print-btn {
    display: none;
  }
  #print {
    border: none !important;
  }
}
@page {
  size: auto;
  margin: 0mm;
}
>>> a {
  color: #1e80ff;
  cursor: pointer;
  text-decoration: underline;
}
#print {
  width: 210mm;
  margin: 40px auto;
  border: 1px solid #555;
  box-sizing: border-box;
}

.print-btn {
  position: fixed;
  top: 10px;
  right: -45px;
  padding: 10px 60px;
  font-size: 14px;
  text-align: center;
  color: blue;
  border: 1px solid blue;
  transform: rotate(45deg);
  cursor: pointer;
}
</style>