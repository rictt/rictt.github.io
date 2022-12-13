class Point {
  constructor(x, y) {
    this.x = x
    this.y = y 
  }
}

export class Sheet {
  constructor(id, options) {
    this.options = options
    this.canvas = document.querySelector(id)
    this.ctx = this.canvas.getContext('2d')
    this.init(options)
  }

  init(options) {
    const { width, height, cellWidth, cellHeight, scrollBar } = options
    const canvas = this.canvas
    canvas.width = width
    canvas.height = height
    this.width = width
    this.height = height
    this.lastTranslateX = 0
    this.lastTranslateY = 0
    this.cellWidth = cellWidth || 100
    this.cellHeight = cellHeight || 30
    this.scrollBar = scrollBar
    canvas.addEventListener('mousedown', this.mousedown.bind(this))
    canvas.addEventListener('mousemove', this.mousemove.bind(this))
    canvas.addEventListener('mouseup', this.mouseup.bind(this))
    window.addEventListener('mouseup', () => {
      this.touched = false
    })
    if (this.scrollBar) {
      this.scrollBarSize = 10
      this.drawScrollBar()
    }
  }

  drawRoundRect(rect, radius, isFill = false, style = '#000') {
    const { ctx } = this
    const { x, y, width, height } = rect
    const ptA = new Point(x + radius, y)
    const ptB = new Point(x + width, y)
    const ptC = new Point(x + width, y + height)
    const ptD = new Point(x, y + height)
    const ptE = new Point(x, y)

    ctx.beginPath()
    ctx.save()
    ctx.moveTo(ptA.x, ptA.y)
    // 右上角，刚好圆是形成两条直线的切线
    ctx.arcTo(ptB.x, ptB.y, ptC.x, ptC.y, radius)
    ctx.arcTo(ptC.x, ptC.y, ptD.x, ptD.y, radius)
    ctx.arcTo(ptD.x, ptD.y, ptE.x, ptE.y, radius)
    ctx.arcTo(ptE.x, ptE.y, ptA.x, ptA.y, radius)
    ctx.closePath()
    if (isFill) {
      ctx.fillStyle = style
      ctx.fill()
    } else {
      ctx.strokeStyle = style
      ctx.stroke()
    }
    ctx.restore()
  }

  drawScrollBar() {
    const { scrollBarSize, ctx } = this
    const { maxWidth, maxHeight, width, height } = this

    const scrollBarY = height - scrollBarSize
    ctx.save()

    
    const horizontalBarWidth = width / (maxWidth / width)
    this.horizontalBarWidth = horizontalBarWidth
    this.xBarRect = {
      x: 0 + (this.touchBarMoveX || 0), y: scrollBarY, width: horizontalBarWidth, height: scrollBarSize
    }
    this.drawRoundRect(this.xBarRect, 8, true, '#ddd')

    const horizontalBarHeight = height / (maxHeight / height)
    this.horizontalBarHeight = horizontalBarHeight 
    this.yBarRect = {
      x: width - scrollBarSize, y: 0 + (this.touchBarMoveY || 0), width: scrollBarSize, height: horizontalBarHeight === 1 ? 0 : horizontalBarHeight
    }
    this.drawRoundRect(this.yBarRect, 8, true, '#ddd')

    ctx.restore()
  }

  windowPositionToCanvasPosition(canvasX, canvasY, el) {
    const rect = el.getBoundingClientRect()
    const { left, top } = rect
    return {
      x: canvasX - left,
      y: canvasY - top
    }
  }

  handleScrollDistance(transformX, transformY, rect) {
    const { maxWidth, maxHeight, width, height } = rect
    if (transformX <= -(maxWidth - width)) {
      transformX = -(maxWidth - width)
    } else if (transformX >= 0) {
      transformX = 0
    }
    if (transformY <= -(maxHeight - height)) {
      transformY = -(maxHeight - height)
    } else if (transformY >= 0) {
      transformY = 0
    }
    return [transformX, transformY]
  }

  inPath(x, y, posRect) {
    return x > posRect.x && x < posRect.x + posRect.width
      && y > posRect.y && y < posRect.y + posRect.height
  }

  mousedown(event) {
    this.touched = true
    const { clientX, clientY } = event
    this.touchStartX = clientX
    this.touchStartY = clientY

    const canvasPos = this.windowPositionToCanvasPosition(clientX, clientY, this.canvas)
    const { xBarRect, yBarRect } = this
    this.isTouchXBar = this.inPath(canvasPos.x, canvasPos.y, xBarRect)
    this.isTouchYBar = this.inPath(canvasPos.x, canvasPos.y, yBarRect)
  }
  
  mousemove(event) {
    if (!this.touched) return
    const { touchStartX, touchStartY, ctx } = this
    const { clientX, clientY } = event
    let moveX = clientX - touchStartX
    let moveY = clientY - touchStartY
    if (this.isTouchXBar) {
      this.touchBarMoveX = moveX + (this.lastTouchBarMoveX || 0)
      let x = (this.lastMoveDistanceX || 0) - moveX / this.width * this.maxWidth
      this.moveDistanceX = x
    } else if (this.isTouchYBar) {
      this.touchBarMoveY = moveY + (this.lastTouchBarMoveY || 0)
      let y = (this.lastMoveDistanceY || 0) - moveY / this.height * this.maxHeight
      this.moveDistanceY = y
    } else {
      // 表格移动
      const distanceX = moveX + (this.lastMoveDistanceX || 0)
      const distanceY = moveY + (this.lastMoveDistanceY || 0)
      const [x, y] = this.handleScrollDistance(distanceX, distanceY, this)
      this.moveDistanceX = x
      this.moveDistanceY = y
      let barX = (this.lastTouchBarMoveX || 0) - (moveX / this.maxWidth * this.width)
      let barY = (this.lastTouchBarMoveY || 0) - (moveY / this.maxHeight * this.height)
      this.touchBarMoveX = barX
      this.touchBarMoveY = barY
    }

    const [x, y] = this.handleScrollDistance(this.moveDistanceX, this.moveDistanceY, this)
    this.moveDistanceX = x
    this.moveDistanceY = y
    // 下面这坨可以考虑抽象封装一下
    if (this.touchBarMoveX + this.horizontalBarWidth >= this.width) {
      this.touchBarMoveX = this.width - this.horizontalBarWidth
    } else if (this.touchBarMoveX <= 0) {
      this.touchBarMoveX = 0
    }
    if (this.touchBarMoveY + this.horizontalBarHeight >= this.height) {
      this.touchBarMoveY = this.height - this.horizontalBarHeight
    } else if (this.touchBarMoveY <= 0) {
      this.touchBarMoveY = 0
    }

    ctx.save()
    this.draw()
    ctx.restore()
  }
  mouseup(event) {
    this.touched = false
    this.lastTouchBarMoveX = this.touchBarMoveX
    this.lastTouchBarMoveY = this.touchBarMoveY
    this.lastMoveDistanceX = this.moveDistanceX
    this.lastMoveDistanceY = this.moveDistanceY
  }

  drawCell({ x, y, text, width = this.cellWidth, height = this.cellHeight, backgroundColor }) {
    const ctx = this.ctx
    ctx.save()
    ctx.translate(this.moveDistanceX, this.moveDistanceY)
    ctx.beginPath(x, y)
    ctx.fillStyle = backgroundColor
    ctx.fillRect(x, y, width, height)
    ctx.lineWidth = 0.5
    ctx.strokeRect(x, y, width, height)
    const { width: textWidth} = ctx.measureText(text)
    const textX = x + (width - textWidth) / 2
    const textY = y + 20
    ctx.fillStyle = '#000'
    ctx.font = 'bold 16px serif'
    ctx.fillText(text, textX, textY)
    ctx.restore()
  }

  initCells() {
    const lines = 20
    const columns = 20
    this.cells = []
    this.maxWidth = Math.max(columns * this.cellWidth, this.width)
    this.maxHeight = Math.max(lines * this.cellHeight, this.height)
    for(let i = 0; i < lines; i++) {
      const lineCells = []
      for (let j = 0; j < columns; j++) {
        const obj = {
          x: j * 100,
          y: i * 30,
          width: this.cellWidth,
          height: this.cellHeight,
          backgroundColor: i % 2 === 0 ? '#87ceeb' : "#ffffff",
          text: i + ',' + j
        }
        lineCells.push(obj)
      }
      this.cells.push(lineCells)
    }
  }



  draw() {
    const ctx = this.ctx
    ctx.clearRect(0, 0, this.width, this.height)
    
    if (!this.cells || !this.cells.length) {
      this.initCells()
    }
    this.cells.forEach(lines => {
      lines.forEach(cell => {
        this.drawCell(cell)
      })
    })

    this.drawScrollBar()
  }
}