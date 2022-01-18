<template>
  <div class="camera_outer">
    <div class="button">
      <el-button i @click="getCompetence()">打开摄像头</el-button>
      <el-button @click="stopNavigator()">关闭摄像头</el-button>
      <el-button @click="setImage()">拍照</el-button>
    </div>
    <video
      id="videoCamera"
      :width="videoWidth"
      :height="videoHeight"
      autoplay
    ></video>
    <canvas
      style="display: none"
      id="canvasCamera"
      :width="videoWidth"
      :height="videoHeight"
    ></canvas>
    <div v-if="imgSrc" class="img_bg_camera">
      <p>效果预览</p>
      <img :src="imgSrc" alt class="tx_img" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoWidth: 250,
      videoHeight: 350,
      imgSrc: "",
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      openVideo: false,
    }
  },
  mounted() {
    //this.getCompetence()//进入页面就调用摄像头
  },
  methods: {
    // 调用权限（打开摄像头功能）
    getCompetence() {
      var _this = this
      _this.thisCancas = document.getElementById("canvasCamera")
      _this.thisContext = this.thisCancas.getContext("2d")
      _this.thisVideo = document.getElementById("videoCamera")
      _this.thisVideo.style.display = "block"
      // 获取媒体属性，旧版本浏览器可能不支持mediaDevices，我们首先设置一个空对象
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {}
      }
      // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
      // 使用getUserMedia，因为它会覆盖现有的属性。
      // 这里，如果缺少getUserMedia属性，就添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = function (constraints) {
          // 首先获取现存的getUserMedia(如果存在)
          var getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.getUserMedia
          // 有些浏览器不支持，会返回错误信息
          // 保持接口一致
          if (!getUserMedia) {
            //不存在则报错
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            )
          }
          // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraints, resolve, reject)
          })
        }
      }
      var constraints = {
        audio: false,
        video: {
          width: this.videoWidth,
          height: this.videoHeight,
          transform: "scaleX(-1)",
        },
      }
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          // 旧的浏览器可能没有srcObject
          if ("srcObject" in _this.thisVideo) {
            _this.thisVideo.srcObject = stream
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream)
          }
          _this.thisVideo.onloadedmetadata = function (e) {
            _this.thisVideo.play()
          }
        })
        .catch(err => {
        //console.log(err)
        })
    },
    //  绘制图片（拍照功能）
    setImage() {
      var _this = this
      // canvas画图
      _this.thisContext.drawImage(
        _this.thisVideo,
        0,
        0,
        _this.videoWidth,
        _this.videoHeight
      )
      // 获取图片base64链接
      var image = this.thisCancas.toDataURL("image/png")
      _this.imgSrc = image //赋值并预览图片
    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop()
    },
    // base64转文件，此处没用到
    // dataURLtoFile(dataurl, filename) {
    //   var arr = dataurl.split(",");
    //   var mime = arr[0].match(/:(.*?);/)[1];
    //   var bstr = atob(arr[1]);
    //   var n = bstr.length;
    //   var u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new File([u8arr], filename, { type: mime });
    // }
  },
}
</script>

<style lang="scss" scoped>
* {
  margin: 0 auto;
}
.img_bg_camera {
  img,
  p {
    width: 10rem;
    margin: 0 auto;
    display: block;
  }
}
// .camera_outer {
//   position: relative;
//   overflow: hidden;
//   background: url("/img/1.jpg   ") no-repeat center;
//   background-size: 100%;
//   video,
//   canvas,
//   .tx_img {
//     -moz-transform: scaleX(-1);
//     -webkit-transform: scaleX(-1);
//     -o-transform: scaleX(-1);
//     transform: scaleX(-1);
//   }
//   .btn_camera {
//     position: absolute;
//     bottom: 4px;
//     left: 0;
//     right: 0;
//     height: 50px;
//     background-color: rgba(0, 0, 0, 0.3);
//     line-height: 50px;
//     text-align: center;
//     color: #ffffff;
//   }
//   .bg_r_img {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     top: 0;
//   }
//   .img_bg_camera {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     top: 0;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//     .img_btn_camera {
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       height: 50px;
//       line-height: 50px;
//       text-align: center;
//       background-color: rgba(0, 0, 0, 0.3);
//       color: #ffffff;
//       .loding_img {
//         width: 50px;
//         height: 50px;
//       }
//     }
//   }
// }
</style>
