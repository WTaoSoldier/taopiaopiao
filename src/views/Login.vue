<!-- 王丽君 登录注册-->
<template>
  <div>
    <mt-header title="登录">
      <router-link to="/me" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="ys" style="display: flex">
        <div>
          <img
            style="margin-top: 4rem; margin-left: 5.5rem"
            src="/wljlogo/me1.png"
          />
        </div>
        <div>
          <h4 style="font-weight: 600; margin-top: 4.5rem; margin-left: 1.5rem">
            涛票票
          </h4>
        </div>
      </div>
      <div class="sjh">
        <input
          style="margin-top: 1rem"
          type="text"
          placeholder="请输入手机号"
          maxlength="11"
          v-model="phone"
          :state="phoneState"
          @blur.capture="checkPhone"
        />
      </div>
      <br />
      <div class="mm">
        <input
          type="password"
          maxlength="6"
          v-model="pwd"
          :state="pwdState"
          @blur.capture="checkPwd"
          placeholder="请输入密码"
        />
      </div>
    </div>
    <button
      class="button"
      type="primary"
      size="large"
      style="
        width: 85%;
        height: 3rem;
        margin-left: 7%;
        margin-top: 10%;
        border-radius: 1rem;
        border: 0rem solid white;
      "
      @click="checkForm"
    >
      登录
    </button>
    <div class="reg">
      <a href="/register">没有账号？去注册</a>
    </div>
  </div>
</template>
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
    };
  },
  methods: {
    ...mapMutations({ changeislogin: "changeislogin" ,changeusername:"changeusername"}),
    /** 验证手机号*/
    checkPhone() {
      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.phone)) {
        // 验证成功
        console.log("格式正确");
        return true;
      } else {
        // 验证失败
        console.log("格式错误");
        return false;
      }
    },

    /** 验证密码 */
    checkPwd() {
      let reg = /^\d{6}$/;
      if (reg.test(this.pwd)) {
        console.log("密码正确");
        return true;
      } else {
        console.log("密码错误");
        return false;
      }
    },

    /** 验证表单 */
    checkForm() {
      // 验证手机号  // 验证密码
      if (this.checkPhone() && this.checkPwd()) {
        console.log("正在登录...");

        let params = `phone=${this.phone}&password=${this.pwd}`;
        axios
          .post("v1/buy/register", params)
          .then((res) => {
            console.log(res);
            if (res.data.code == 200) {
              this.changeislogin(true);
              this.changeusername("1")
              console.log(this.islogin,this.username)
              this.$messagebox("提示", "登录成功");

              this.$router.push("/");
            } else if (res.data.code == 201) {
              this.$messagebox("提示", "密码错误");
            } else if (res.data.code == 203) {
              this.$messagebox("提示", "注册成功");
              console.log(this.islogin);
              this.changeislogin(true);
              console.log(this.username);
              this.changeusername("1")
              this.$router.push("/");
            } else {
              if (res.data.code == 204) {
                this.$messagebox("提示", "系统错误");
              }
            }
          });
      } else {
        alert("账号/密码错误");
      }
    },
  },
};
</script>

<style>
input {
  width: 85%;
  margin-left: 1.5rem;
  margin-top: 0.2rem;
  padding: 1rem 0.5rem;
  border: 0.0625rem solid #666;
  border-radius: 0.5rem;
}

img {
  width: 2.8125rem;
  height: 2.8125rem;
}
.button {
  -webkit-transition-duration: 0.01s; /* Safari */
  transition-duration: 0.01s;
}

.button:hover {
  background-color: #ff5a75;
  color: white;
}
.reg {
  width: 100%;
  height: 1rem;
  margin-top: 0.625rem;
}
.reg a {
  display: block;
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 0.4rem;
  margin: -0.3rem auto 0;
}
</style>