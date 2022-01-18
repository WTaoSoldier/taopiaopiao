<template>
  <div id="material">
    <!-- 头像 -->
    <div @click="iconUp()">
      <div>
        <img :src="icon" alt="" />
      </div>
    </div>
    <div>
      <van-form validate-first @submit="onSubmit">
        <!-- 头像 -->
        <van-field v-model="icon" name="icon" v-show="false" />
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="uname"
          label="用户名"
          placeholder="请输入新的用户名"
          :rules="[
            {
              required: true,
              validator,
              message: '请输入4-16位_-数字和字母',
            },
          ]"
        />
        <!-- 手机号 -->
        <van-field
          v-model="userphone"
          name="phone"
          label="手机号"
          placeholder="请输入新的手机号"
          :rules="[
            { pattern, required: true, message: '请输入正确的手机号格式' },
          ]"
        />
        <!-- 性别 -->
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="0">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- 提交表单 -->
        <div style="margin: 40px 16px 20px 16px">
          <van-button round block type="info" native-type="submit"
            >确认修改</van-button
          >
        </div>
      </van-form>
    </div>
    <van-popup v-model="iconup" position="bottom" :style="{ height: '40%' }">
      <van-grid :column-num="3">
        <van-grid-item
          v-for="(value, i) in iconall"
          :key="i"
          :icon="value"
          @click="iconReplace(value)"
        />
      </van-grid>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 用户名
      username: "",
      // 手机号
      userphone: "",
      // 性别
      radio: "",
      // 头像
      icon: "",
      iconup: false,
      // 手机号校验
      pattern: /^1[3-9]\d{9}$/,
      // 默认头像地址
      iconall: [
        "img/touxiang/001.jpg",
        "img/touxiang/002.jpg",
        "img/touxiang/013.jpg",
        "img/touxiang/012.jpg",
        "img/touxiang/014.jpg",
      ],
    }
  },
  // 获取用户数据
  mounted() {
    let token = localStorage.getItem("token")
    // 获取用户数据
    this.$get(`/v1/material/all`, token).then(res => {
      // this.list=res.data.data
      // console.log(res.data.data[0].user_icon)
      this.username = res.data.data[0].uname
      this.userphone = res.data.data[0].phone
      this.icon = res.data.data[0].user_icon
      // 不能赋
      if (res.data.data[0].gender) {
        this.radio = "1"
      } else {
        this.radio = "0"
      }
    })
  },

  methods: {
    // 用户名校验
    validator(val) {
      return /^[a-zA-Z0-9_-]{4,16}$/.test(val)
    },
    // 触发修改用户头像
    iconUp() {
      this.iconup = true
    },
    // 修改用户头像
    iconReplace(value) {
      // console.log(value)
      this.icon = value
      this.iconup = false
    },

    // 提交表单 修改数据
    onSubmit(values) {
      // console.log(values)
      let token = localStorage.getItem("token")
      values.token = token
      this.$get(`/v1/material/update`, values).then(res => {
        // console.log(res, values)
      })

      this.$router.push("/usercenter")
    },
  },
}
</script>

<style lang="scss">
#material {
  background: #ffffff;
  height: 100vh;
  // 顶部
  > div:first-child {
    padding-top: 2rem;
    margin-bottom: 2rem;
    // 头像
    > div:first-child {
      width: 5.5rem;
      height: 5.5rem;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      > img {
        height: 100%;
      }
    }
    // >
  }
  // 修改
  > div:nth-child(2) {
    width: 80%;
    margin: 0 auto;
  }
  // 修改按钮颜色
  .van-button--info {
    color: #fff;
    background-color: #ee0a24;
    border: 1px solid #ee0a24;
  }
  // 弹出头像
  > .van-popup {
    > .van-grid {
      width: 95%;
      margin: 0 auto;
      [class*="van-hairline"]::after {
        border: none;
      }
      // 信息单独项
      > .van-grid-item {
        > .van-grid-item__content {
          margin: 0 auto;
          // 图片
          .van-icon {
            width: 100%;
            height: 100%;
            .van-icon__image {
              width: 80%;
              height: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
