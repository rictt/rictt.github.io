# css笔记

## 简述vertial-align效果

  尝试整理一下：vertical-align的对齐方式跟baseline有关系；

  - 1、当盒子无内容空节点，则baseline为盒子的底部边界（margin-bottom)
  - 2、当盒子非空有内容节点，并且overflow为visible（默认值），则baseline为最后一个内容节点的基线（x的基线）
  - 3、当盒子非空有内容节点，并且overflow为非visible，则baseline为该内容节点的margin-bottom

  **针对情况1，有如下demo**

  运行之后，可以看到什么都不设置，`vertical-align`默认值为baseline，所以这时候都是`margin-bottom底部对齐`;

  ```css
  .box {
      padding: 10px;
      border: 1px solid #666;
      margin-bottom: 10px;
    }
  .square {
    display: inline-block;
    width: 100px;
    height: 100px;
    border: 1px solid red;
  }
  .square-200 {
    width: 200px;
    height: 200px;
  }
  ```

  ```html
  <div class="box">
    <div class="square"></div>
    <div class="square square-200"></div>
  </div>
  ```

  单独给`square-200`加上`vertical-align: top`；这时候可以发现布局变了，顶部对齐；

  **针对情况2。demo如下**

  可以在浏览器跑下，得到的结果`box`的`baseline`为最后一个元素的内容的`baseline值`

  ```html
  <div class="box">
    <div class="square"></div>
    <div class="square"><span>span</span></div>
    <div class="square">超过两行的span</div>
    <div class="square">超过三行的span超过三行的span</div>
  </div>
  ```


  **针对情况3，demo如下**

  可以看到`square-hidden`的盒子由于hidden的关系，此时baseline变成了盒子的margin-bottom边界

  ```css
  .square-hidden {
    overflow: hidden;
  }
  ```

  ```html
  <div class="box">
    <div class="square"></div>
    <div class="square"><span>span</span></div>
    <div class="square">超过两行的span</div>
    <div class="square square-hidden">hidden的wrapper</div>
  </div>
  ```

  **最后，几种情况**
  - middle: 一半位置对齐
  - baseline: 基线对齐
  - top：`元素及其后代顶部与行的顶部对齐`
  - bottom：`元素及其后代底部与行的底部对齐`
  - text-top： 元素的顶部与`父元素的字体顶部对齐`
  - text-bottom： 元素的底部与`父元素的字体底部对齐`
  
  ```html
  <div class="box">
    <div class="square" style="vertical-align: middle;">middle</div>
    <div class="square">baseline</div>
    <div class="square" style="vertical-align: top;">top</div>
    <div class="square" style="vertical-align: bottom;">bottom</div>
    <div class="square" style="vertical-align: text-top;">text-top</div>
    <div class="square" style="vertical-align: text-bottom;">text-bottom</div>
    <div class="square"></div>
  </div>
  ```

