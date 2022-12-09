<template>
  <div class="canvas-wrapper">
    <canvas id="canvas"></canvas>
    <img class="canvas-prize" src="./images/canvas-brush-ticket-prize.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "brush-ticket",

  data() {
    return {
      touched: false,
      // 画笔半径
      brushRadius: 20,
      data1: null,
      data2: null,
      canvas: null,
      ctx: null
    };
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const canvas = document.querySelector("#canvas");
      const ctx = canvas.getContext("2d");
      const width = 450;
      const height = 350;
      this.ctx = ctx;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width;
      canvas.style.height = height;
      canvas.addEventListener("mousedown", this.mousedown);
      canvas.addEventListener("mousemove", this.mousemove);
      canvas.addEventListener("mouseup", this.mouseup);

      this.draw()
    },

    loadImage(src) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
          resolve(image);
        };
        image.onerror = (error) => {
          console.log(error)
          reject(error);
        };
        image.src = src;
        // image.src = require(src)
      });
    },
    async draw() {
      const image = await this.loadImage(require("./images/canvas-brush-ticket-mask.png"));
      const canvas = this.canvas
      try {
        this.ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      } catch (error) {
        console.log(error)
      }
    },
    mousedown() {
      this.touched = true;
    },
    windowPositionToCanvasPosition(canvasX, canvasY, el) {
      const rect = el.getBoundingClientRect();
      const { left, top } = rect;
      return {
        x: canvasX - left,
        y: canvasY - top,
      };
    },
    mousemove(event) {
      if (!this.touched) return;
      const { clientX, clientY } = event;
      // 要把window的位置坐标转换成canvas的坐标，不然在canvas不是0.0的情况下会出现计算偏移
      const { x, y } = this.windowPositionToCanvasPosition(clientX, clientY, canvas);
      const ctx = this.ctx
      ctx.save();
      ctx.fillStyle = "rgba(238, 238, 238, .5)";
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath(x, y);
      ctx.arc(x, y, this.brushRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
    mouseup(event) {
      this.touched = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
}
.canvas-wrapper {
  position: relative;
  display: inline-block;
}
.canvas-prize {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
#canvas {
  position: relative;
  z-index: 10;
  /* 可以试下不用windowPositionToCanvasPosition的情况 */
  /* margin: 300px 200px; */
  border: 1px solid #666;
}
</style>
