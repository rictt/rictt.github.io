# Javascript

## 常用代码片段

### 图片转base64
  缺点是：`都存在跨域问题，需要服务器跨域设置`

  方法一：XMLHttpRequest + FileReader

  ```js
    const useXMLToBase64 = (imgUrl) => {
      window.URL = window.URL || window.webkitURL;
      var xhr = new XMLHttpRequest();
      xhr.open("get", imgUrl, true);
      // 至关重要
      xhr.responseType = "blob";
      xhr.onload = function () {
        if (this.status == 200) {
          var blob = this.response;
          let oFileReader = new FileReader();
          oFileReader.onloadend = function (e) {
            let base64 = e.target.result;
            console.log(base64)
          };
          oFileReader.readAsDataURL(blob);
        }
      }
      xhr.send();
    }
    useXMLToBase64("https://upload.jianshu.io/users/upload_avatars/16747296/cbb4adff-a6e5-4370-9e43-674eb903551d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp")
  ```

  方法二：canvas导出
  ```js
  const useCanvasToBase64 = (url, width, height) => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = '*';
      img.src = url;

      img.onerror = reject;
      img.onload = () => {
        let canvas = document.createElement('canvas');
        canvas.width = width || img.width;
        canvas.height = height || img.height;

        let ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        let dataURL = canvas.toDataURL();
        resolve(dataURL);
      };
    });
  };
  useCanvasToBase64("https://lupic.cdn.bcebos.com/20200412/3046534862_14_747_533.jpg")
    .then(res => {
      console.log(res)
    })
  ```

## 正则整理

### 替换除了数字和-
  ```js
  const reg = /[^0-9-]/g
  console.log('0-1-1111asdf-af123'.replace(reg, ''))
  ```