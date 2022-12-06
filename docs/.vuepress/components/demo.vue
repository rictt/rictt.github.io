<template>
  <div class="demo">
    <div class="component-wrapper">
      <div class="code-content" style="height: 100px;">
        <div class="code-content-height">
          <pre><code class="vue">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import mixin from '../mixin'
  import "../public/demo.css"

  export default {
    name: 'demo',
    mixins: [mixin],
    
    props: {
      codeStr: String
    },
    data() {
      return {
        // codeStr: `
        //   <g-button>默认按钮</g-button>
        // `.replace(/^\s*/gm, '').trim(),
      }
    },

    watch: {
      codeStr: {
        immediate: true,
        handler(val) {
          console.log(val)
          import('../../../src/' + val).then(res => {
            console.log(res)
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>