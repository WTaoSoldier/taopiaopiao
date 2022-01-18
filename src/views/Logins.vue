<template>
  <div>
    <div style="overflow: hidden;height:100vh">
      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.back(-1)">
            暂不登录</mt-button
          >
        </mt-header>
      </header>
      <div
        style="
          position: relative;
          width: 100vw;
          height: 95vh;
          overflow: hidden;
          margin-top: 2.3rem;
        "
      >
        <div class="">
          <img src="../assets/xtt/bei1.jpg" alt="" class="bei" />
        </div>
        <div class="bg">
          <div class="sr">
            <span
              style="font-size: 2rem; display: block; margin-bottom: 1.25rem"
              >登录</span
            >
            <span>手机</span>
            <input
              v-model="phone"
              maxlength="11"
              class="zh"
              type="text"
              style="margin-bottom: 1.25rem"
            />
            <span>密码</span>
            <input
              v-model="pwd"
              class="zh"
              type="password"
              style="margin-bottom: 0.625rem"
            />
            <!-- ********* -->
            <span>验证码 </span>
            <input
              id="codeinput"
              class="zh"
              type="text"
              style="margin-bottom: 0.625rem; width: 5rem"
            />
            <!-- <input type="text" id="codeinput" placeholder="请输入验证码" /> -->
            <span id="codeimg" @click="getcode" style="width: 3rem"> </span>

            <!-- <button id="submit" @click="getcode">提交</button> -->

            <div style="text-align: right">
              <!-- <span>忘记密码?</span> -->
            </div>
            <div @click="checkForm" style="width: 100%; text-align: center">
              <button class="btn"><span>登录</span></button>
            </div>
            <div
              @click="$router.push('/registers')"
              style="width: 100%; text-align: center"
            >
              <button class="btn"><span>去注册</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["username", "islogin"]),
  },
  data() {
    return {
      phone: "", // 用于保存手机号
      phoneState: "", // 用于指定手机号输入框的状态
      pwd: "",
      pwdState: "",
      yan: "",
    };
  },
  mounted() {
    this.two();
    this.three();
  },
  methods: {
    /** 获取验证码图片 携带token */
    getcode() {
      let config = {
        headers: { authorization: localStorage.getItem("token") },
      };
      axios.get("getcode", config).then((res) => {
        console.log(res);
        // 将svg图片放入codeimg中
        codeimg.innerHTML = res.data.svg;
      });
    },

    sub() {
      // 获取文本框中的值，发送请求，验证验证码是否一致 该请求依然携带token
      let config = {
        headers: { authorization: localStorage.getItem("token") },
      };
      let ucode = document.getElementById("codeinput").value;
      axios.get(`register?ucode=${ucode}`, config).then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.yan = "1";
          console.log(this.yan);
        }
        diao(res);
      });
    },

    ...mapMutations({
      changeislogin: "changeislogin",
      changeusername: "changeusername",
      changephone: "changephone",
      changeren: "changeren",
      changepiao: "changepiao",
    }),

    // ********************
    three() {},
    two() {
      // 页面加载中，发送请求，拉取token
      axios.get("gettoken").then((res) => {
        console.log(res); /**** */
        // 从res中解析token， 并且存在localStorage中  供后续请求使用
        let token = res.data.token;
        console.log(token); //***** */
        localStorage.setItem("token", token);
        // 发请求加载验证码图片
        this.getcode();
      });
      let btn = document.getElementById("btn");
    },

    btnyan() {
      let config = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      axios.get("verifytoken", config).then((res) => {
        console.log(res);
      });
    },

    one() {},

    /** 验证表单 */
    checkForm() {
      // 获取文本框中的值，发送请求，验证验证码是否一致 该请求依然携带token
      let config = {
        headers: { authorization: localStorage.getItem("token") },
      };
      let ucode = document.getElementById("codeinput").value;
      axios.get(`register?ucode=${ucode}`, config).then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.yan = "1";
          console.log(this.yan);
          let params = `phone=${this.phone}&password=${this.pwd}`;
          console.log(params);

          axios.post("v1/buy/login", params).then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.$toast("登录成功");
              //  修改vuex中的登录状态
              this.changeusername(res.data.data[0].u_id);
              this.changeren(1);
              this.changepiao(1);
              this.changeislogin(true);
              this.changephone(res.data.data[0].uphone);
              this.$toast("登录成功");
              this.$router.push("/home");
            } else if (res.data.code == 201) {
              this.$toast("密码错误");
            } else {
              if (res.data.code == 203) {
                this.$toast("用户不存在");
              }
            }
          });
        } else {
          this.$toast("验证码错误");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes move1 {
  0% {
    transform: translate(-1115px, -396px) scale(0.5);
  }
  1% {
    transform: translate(-560px, -740px) scale(0.95);
  }
  5% {
    transform: translate(-560px, -740px) scale(0.95);
  }

  6% {
    transform: translate(-2379px, -837px) scale(1.3);
  }
  10% {
    transform: translate(-2379px, -837px) scale(1.3);
  }

  11% {
    transform: translate(-172px, -520px) scale(1.2);
  }
  15% {
    transform: translate(-172px, -520px) scale(1.2);
  }

  16% {
    transform: translate(-1530px, -780px) scale(1.2);
  }
  20% {
    transform: translate(-1530px, -780px) scale(1.2);
  }
  21% {
    transform: translate(-530px, -246px) scale(1.4);
  }
  25% {
    transform: translate(-530px, -246px) scale(1.4);
  }
  26% {
    transform: translate(-1993px, -348px) scale(1.2);
  }
  30% {
    transform: translate(-1993px, -348px) scale(1.2);
  }

  31% {
    transform: translate(619px, 386px) scale(1.6);
  }
  32% {
    transform: translate(619px, 386px) scale(1.6);
  }
  48% {
    transform: translate(-1094px, 386px) scale(1.6);
  }
  49% {
    transform: translate(846px, 382px) scale(1.8);
  }
  50% {
    transform: translate(846px, 382px) scale(1.8);
  }
  66% {
    transform: translate(-126px, 382px) scale(1.8);
  }

  67% {
    transform: translate(-610px, -456px) scale(0.6);
  }
  68% {
    transform: translate(-610px, -456px) scale(0.6);
  }
  90% {
    transform: translate(-1638px, -456px) scale(0.6);
  }

  100% {
    transform: translate(-1115px, -396px) scale(0.5);
  }
}

.bei {
  position: absolute;
  z-index: 1;
  width: 700%;
  transform: translate(-1115px, -396px) scale(0.5);

  animation-name: move1;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-delay: 0s;
  // animation-iteration-count: infinite;
}

.bg {
  position: absolute;
  margin: 9rem 7vw 2rem 7vw;
  width: 86vw;
  height: 60vh;
  z-index: 2;
  background-color: #4c8b547e;
  padding: 1rem;
}
.zh {
  width: 100%;
  height: 1.5625rem;
  color: #ffffff;
  background-color: #1c7cd66e;
  border: none;
  outline: none;
  border-bottom: 0.0625rem solid #f5f5f5;
}
span {
  color: #f5f5f5;
  font-size: 0.875rem;
}
.sr {
  margin-top: 1rem;
}
.btn {
  width: 9rem;
  height: 2rem;
  line-height: 1rem;
  background-color: #1c7cd66e;
  border: 0.0625rem solid #b4b4b4;
  border-radius: 3%;
  margin: 0.4rem;
  box-shadow: 2px 2px 4px 0px rgba(85, 85, 85, 0.678);
}
</style>
