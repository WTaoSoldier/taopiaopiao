<template>
  <div>
    <div style="overflow: hidden;height:100vh">
    <!-- 返回上一页 -->
    <header>
      <mt-header fixed>
        <mt-button icon="back" slot="left" @click="$router.back(-1)"
          >&nbsp;&nbsp;暂不注册</mt-button
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
        <img src="../assets/xtt/bei2.jpg" alt="" class="bei" />
      </div>
      <div class="bg">
        <div class="sr">
          <span style="font-size: 2rem; display: block; margin-bottom: 1.25rem"
            >注册</span
          >
          <div class="xiangdui">
            <span>用户名</span>
            <input
              v-model="uname"
              maxlength="12"
              placeholder="请输入用户名"
              class="zh"
              type="text"
              style="margin-bottom: 1.25rem"
            />
          </div>
          <div class="xiangdui">
            <span>手机号</span>
            <span class="tishi" id="phoneErrs" v-show="data1"
              >请输入11位手机号码</span
            >
            <input
              v-model="phone"
              :state="phoneState"
              @blur.capture="checkPhone"
              placeholder="请输入手机号"
              maxlength="11"
              class="zh"
              style="margin-bottom: 0.625rem"
            />
          </div>
          <div class="xiangdui">
            <span>密码</span>
            <span class="tishi" id="pwds" v-show="data2">请输入6-12位密码</span>
            <input
              v-model="pwd"
              maxlength="11"
              :state="pwdState"
              @blur.capture="checkPwd"
              placeholder="请输入密码"
              class="zh"
              type="password"
              style="margin-bottom: 0.625rem"
            />
          </div>
          <div class="xiangdui">
            <span>验证密码</span>
            <span class="tishi" id="repwds" v-show="data3">请再次输入密码</span>
            <input
              v-model="repwd"
              maxlength="12"
              :state="repwdState"
              @blur.capture="checkRepwd"
              placeholder="请再次输入密码"
              class="zh"
              type="password"
              style="margin-bottom: 0.625rem"
            />
          </div>
          <div @click="checkForm" style="width: 100%; text-align: center">
            <button class="btn"><span>快速注册</span></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { MessageBox } from 'mint-ui';
export default {
  data() {
    return {
      phone: "", // 用于保存手机号
      phoneState: "", // 用于指定手机号输入框的状态
      pwd: "",
      pwdState: "",
      repwd: "",
      repwdState: "",
      uname: "",
      data1: false,
      data2: false,
      data3: false,
    };
  },
  methods: {
    /** 验证手机号*/
    checkPhone() {
      this.data1 = true;
      let phoneErrs = document.getElementById("phoneErrs");
      let reg = /^1[3-9]\d{9}$/;
      if (!reg.test(this.phone)) {
        // 验证失败
        phoneErrs.innerHTML = "手机号码不合规范";
        // this.datas = true
        // console.log(this.datas)
        console.log("格式错误");
        return false;
      } else {
        // 验证成功
        console.log("格式正确");
        phoneErrs.innerHTML = "OK";
        return true;
      }
    },

    /** 验证密码 */
    checkPwd() {
      this.data2 = true;
      let pwdss = document.getElementById("pwds");
      let reg = /^\w{6,12}$/;
      if (!reg.test(this.pwd)) {
        pwdss.innerHTML = "密码应为6-12位";
        console.log("密码错误");
        return false;
      } else {
        pwdss.innerHTML = "OK";
        console.log("密码正确");
        return true;
      }
    },
    // 验证重复密码
    checkRepwd() {
      this.data3 = true;
      let repwdss = document.getElementById("repwds");
      if (this.repwd != this.pwd || this.repwd == 0) {
        //验证失败
        this.repwdState = "error";
        repwdss.innerHTML = "上下密码不一致";
        return false;
      } else {
        //验证成功
        this.repwdState = "success";
        repwdss.innerHTML = "OK";
        return true;
      }
    },
    /** 验证表单 */
    checkForm() {
      // 验证手机号  // 验证密码
      if (this.checkPhone() && this.checkPwd()) {
        console.log("正在登录...");

        let params = `phone=${this.phone}&password=${this.pwd}&uname=${this.uname}`;
        console.log(params);
        axios.post("v1/buy/register", params).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$toast("注册成功,请登录");
            this.$router.push("/logins");
          } else if (res.data.code == 201) {
            this.$toast("提示:手机号重复");
            // this.$router.push('/logins')
          } else {
            if (res.data.code == 204) {
              this.$toast("提示:系统错误");
              this.$router.push("/logins");
            }
          }
        });
      } else {
        this.$toast("账号/密码错误");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes move1 {
      0%{transform: translate(-774px, -401px) scale(0.44)}
      20%{transform: translate(-774px, -401px) scale(0.44)}
      80%{transform: translate(-1034px, -401px) scale(0.44)}
      
      100%{transform: translate(-1034px, -401px) scale(0.44)}
    }

.bei {
    transform: translate(-1034px, -401px) scale(0.44);

  animation-name: move1;
  animation-duration: 0;
    animation-timing-function: linear;
  position: absolute;
  z-index: 1;
  width: 700%;

  animation-name: move1;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-delay: 0s;
  // animation-iteration-count: infinite;
}
.bg {
  margin:12rem 5vw 1rem 5vw;
  width:90vw;
  height: 63vh;
  position: absolute;
  z-index: 2;
  background-color: #2a3b7170;
  padding: 1rem 1rem 0 1rem;
}
span {
  color: #fff;
  font-size: 0.75rem;
}
.sr {
  margin-top: 0.5rem;
}
.zh {
  width: 100%;
  height: 1.5625rem;
  background-color: #2a3b718f;
  border: none;
  outline: none;
  color: #f5f5f5;
  border-bottom: 0.0625rem solid #f5f5f5;
}
.btn>span{
  line-height: 1rem;
  font-size: 1rem;
}
.btn {
  width: 9.375rem;
  height: 2.5rem;
  background-color: #2a3b718f;
  border: 0.0625rem solid #f5f5f5;
  border-radius: 3%;
  margin: 1rem 1rem 0 1rem ;
}
::-webkit-input-placeholder {
  color: #999;
  font-size: 12px;
}
.xiangdui {
  position: relative;
}
.tishi {
  position: absolute;
  top: 28px;
  right: 0px;
  font-size: 12px;
}
</style>