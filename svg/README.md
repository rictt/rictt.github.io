# svg - Scablable Vector Grapics

## 一、基本属性

### viewBox：[x, y, w, h]

  viewBox声明svg的显示区域，x表示显示开始横坐标，y表示显示开始纵坐标，w和h对应宽高；举个例子我的svg是100 * 100，但是我的viewBox是200 * 200，里面有一个圆circle，坐标为50,50，半径为50，此时我的svg几何尺寸宽高是100*100，显示内容画布变成了200*200，即原本半径为50的圆，会变成25，从原本的占据整个svg，变成只占一半；可以试下下面的代码；

  可以简单理解：width和height定义svg在dom树上占据的尺寸信息，viewBox控制width和height所构成的区域显示多少内容，如果是大于，那svg里面的元素对应缩小，反过来viewBox比宽高还小，对应svg里面的元素放大；

  svg内元素相关计算，x举例： x = viewBox.width / svg.width * origin.x（原来的x）

  ```html
  <!-- viewBox中w，h大于属性width和height情况 -->
  <!-- 铺满整个svg -->
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="50" />
  </svg>

  <!-- 占据半个svg -->
  <svg width="100" height="100" viewBox="0 0 200 200">
    <circle cx="50" cy="50" r="50" />
  </svg>
  
  <!-- 缩小情况 -->
  <!-- 占满svg -->
  <svg width="300" height="300">
    <circle cx="150" cy="150" r="150" />
  </svg>
  <!-- 由于viewBox比width和height小，svg内元素需要进行手动缩小，150 * （150 / 300），实现占满 -->
  <svg width="300" height="300" viewBox="0 0 150 150">
    <circle cx="75" cy="75" r="75" />
  </svg>
  ```

### 强大的path和对应命令

  path如其名是一条路径，可以通过设置d，编写路径走向；path通过命令+参数实现绘制，常见的命令如下

  - M：Move To（M30 100）
  - L：Line To
  - H：Horizontal Line（H 30）
  - V：Vertical Line（V 100）
  - Z：Close Path
  - Q：Quadratic Bezier Curve To，二次贝塞尔曲线，需要一个控制点和终点，Q x1 y1 x y
  - C：Curve To，三次贝塞尔曲线

  一些例子

  ```html
  <!-- 画一个圆中圆 -->
  <svg width="300" height="300">
    <circle cx="50" cy="50" r="50" fill="purple"></circle>
    <circle cx="50" cy="50" r="30" fill="#fff" fill-opacity="1"></circle>
    <circle cx="150" cy="150" r="30" fill="#fff" style="stroke: purple; stroke-width: 10;"></circle>
    <circle cx="50" cy="150" r="30" fill="#fff" style="stroke: purple; stroke-width: 10;" stroke-dasharray="2" ></circle>
  </svg>

  <!-- 画一个五角星 -->
  <svg width="300" height="300">
    <path d="M10 100 L 100 100, 20 150, 55 70, 90 150 z" style="fill: purple;"></path>
  </svg>
  ```

### 线性/径向渐变


  ```html
  <svg>
    <defs>
      <linearGradient id="linearGradient" x1="0" y1="0" x2="100%" y2="0">
        <stop offset="0%" stop-color="orange" />
        <stop offset="50%" stop-color="red" />
        <stop offset="100%" stop-color="blue" />
      </linearGradient>
      <radialGradient id="radialGradient-light" fx="50%" fy="0%">
        <!-- <stop offset="0%" stop-color="white"></stop>
        <stop offset="100%" stop-color="gray"></stop> -->
        <stop offset="0%" stop-color="rgb(255, 255, 0)"></stop>
        <stop offset="100%" stop-color="rgb(255, 0, 0)"></stop>
      </radialGradient>
    </defs>
    <line x1="0" y1="0" x2="100" y2="100" style="stroke-width: 20;" stroke="url(#linearGradient)"></line>

    <circle cx="50" cy="50" r="50" fill="url(#radialGradient-light)"></circle>

    <text x="50" y="120" fill="url(#radialGradient-light)">聚光灯文本渐变</text>
    <text x="100" y="50" fill="none" font-size="30" stroke="url(#radialGradient-light)">聚光灯文本渐变</text>
  </svg>
  ```
### 裁剪/蒙层

  裁剪：通过定义clipPath的path路径，应用裁剪路径的元素，只会在路径内完成fill或者stroke，其他部分被裁剪掉

  蒙层：通过定义path路径，显示mask标签遮住的内容（感觉和裁剪类似，可能区别是一个显示，一个裁剪？），不同的是可以设置透明度和灰度值

  ```html
  <svg>
    <defs>
      <clipPath id="clipPath">
        <path d="M50 50, A 20 20 0 1 1 90 50, A 20 20 0 0 1 50 50" fill="none" stroke="none"></path>
      </clipPath>
      <clipPath id="loveClipPath">
        <path d="
          M150 75
          A20 30 0 0 1 190 75
          A20 30 0 0 1 230 75
          Q230 100 190 140
          Q150 100 150 75
        " fill="none" stroke="red"></path>
      </clipPath>

      <mask id="mask">
        <path d="
          M150 75
          A20 30 0 0 1 190 75
          A20 30 0 0 1 230 75
          Q230 100 190 140
          Q150 100 150 75
        " fill="#fff" fill-opacity="1"></path>
      </mask>
    </defs>

    <circle cx="150" cy="50" r="40" fill="purple"></circle>
    <circle cx="50" cy="50" r="40" fill="purple" clip-path="url(#clipPath)"></circle>

    <!-- <rect x="150" y="0" width="200" height="200" clip-path="url(#loveClipPath)" fill="red" /> -->
    <rect x="150" y="0" width="200" height="200" mask="url(#mask)" fill="red" />
    <rect x="10" y="75" width="70" height="70" fill="red"></rect>
  </svg>
  ```


## 二、动画


### 练习
  - 1、实现一个自适应盒子宽高的loading svg
  - 2、实现正弦曲线 + 球运动
  - 3、foreighObject

### 学习资料
  - [基础概念入门（掘金](https://juejin.cn/post/7124312346947764260#heading-66)
  - [antv/x6](https://x6.antv.antgroup.com/tutorial/getting-started)
  - [不依赖任何库打造属于自己的可视化数据地图](https://juejin.cn/post/6865591917279870990#heading-2)