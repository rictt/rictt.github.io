<template>
  <div>
    <canvas id="canvas-sheet"></canvas>
  </div>
</template>

<script>
import { Sheet } from './Sheet'

export default {
  mounted() {
    const sheet = new Sheet('#canvas-sheet', {
      width: 800,
      height: 500,
      cellWidth: 100,
      cellHeight: 30,
      scrollBar: true
    })

    sheet.draw()
    window.sheet = sheet
  }
}
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}
#canvas {
  border: 1px solid #999;
  margin: 20px;
}
</style>