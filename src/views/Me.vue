<template>
  <div>
    <div style="height:100vh;width:100%;background-color:#f5f5f5;">
      <!-- 王丽君-我的页 -->
      <mt-header title="我的"></mt-header>
      <!-- 没登录的 -->
      <div v-if="!islogin">
        <div class="user" >
          <div class="tx">
            <img src="/wljlogo/tx1.png" alt="" />
          </div>
          <div class="xx">
            <span
              style="margin-left:-4rem;display:inline-block;padding-top:1rem;margin-top:2.5rem;"
              @click="loginto"

              >点此登录</span>
          </div>
          <div class="tm"></div>
            <div class="dy"></div>
          </div>
          <!-- <img style="width: 100%" src="/wljlogo/wdl.jpg" alt="" /> -->
          <div style="background-color: #fdfdfd ;height:5rem">
            <img style="width: 100%" src="/wljlogo/wdl.jpg" alt="" />
          <div style="background-color: #fdfdfd">
            <p style="padding-bottom:3rem;
                text-align: center;
                font-size: 1.2rem;
                color: #7d7d85;">
              登录即可开启观影时光哦~
            </p>
          </div>
        </div>
      </div>
        <!-- ******* -->
        <!-- 已登录的 -->
        <div v-else >
          <div class="user" v-for="(item, index) in data.data" :key="index">
            <div class="tx">
              <img :src="`${item.upic}`" alt="" />
            </div>
            <div class="xx">
              <span style="position:absolute;left:7rem;display:inline-block;padding-top:0.9rem;margin-top:2.5rem;">{{ item.uname }}</span>
            </div>
            <div class="tm"></div>
            <div class="dy"></div>
          </div>
          <section class="my">
            <!-- <van-cell title="我的电影票" is-link> </van-cell> -->
            <van-cell title="优惠券" to="/conpon" is-link> </van-cell>
            <van-cell title="权益卡" to="/quanyika" is-link> </van-cell>
            <van-cell title="我的小食" to="/wodexiaoshi" is-link> </van-cell>
            <van-cell title="想看的电影" to="/want" is-link> </van-cell>
            <van-cell title="看过的电影" to="/look" is-link> </van-cell>
            <van-cell title="我的小剧场" to="/xiaojuchang" is-link> </van-cell>
            <van-cell title="修改用户信息" to="/uploader" is-link> </van-cell>
            <div>
              <!-- 完成Dialog 弹框 -->
              <van-cell
                @click="Dialog"
                title="账号解绑"
                is-link
                value="点击解绑当前账号"
              />
            </div>
          </section>
          <p
            style="
              text-align: center;
              color: #a3a3a3;
              font-size: 0.6rem;
              background: #f5f5f5;
              padding: 0.9rem;
              line-height: 1rem;
              padding-top:3rem;
              padding-bottom:1.5rem;
            ">
            version:1.7.6
          </p>
          <!-- <div style="height:1rem;background: #f5f5f5;"></div> -->
        </div>
        <my-footer></my-footer>
    </div>
    
    </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import MyFooter from "../components/MyFooter.vue";
export default {
  components: { MyFooter },
  computed: {
    ...mapState(["username", "islogin", "chooseren"]),
  },
  data() {
    return {
      data: [],
      msg: "",
      // islogin:false,
    };
  },
  methods: {
    ...mapMutations({
      changeusername: "changeusername",
      changeislogin: "changeislogin",
      changemovie: "changemovie",
      changeren: "changeren",
      changepiao:"changepiao"
    }),
    loginto() {
      this.$router.push("/logins");
    },
    getdata() {
      let b1 = this.username;
      let url = `v1/buy/me/${b1}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
    //（确认、取消）的弹出框
    Dialog() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "解除当前账号绑定之后,账户历史及权益将移除,请谨慎操作!",
          confirmButtonColor: "red",
        })
        .then(() => {
          this.changemovie("");
          this.changeislogin(false);
          this.changeusername("");
          this.changepiao(1);
          this.changeren(1);
          // this.$router.push("/me");
        })
        .catch(() => {
          // this.$router.push("/me");
        });
    },
  },
  activated() {
    if (this.chooseren == 1&&this.islogin) {
      this.changeren(0);
      this.getdata();
    }
  },
  mounted() {
    if (this.username) {
      this.getdata();
    }
    console.log("username:", this.username);
    console.log("islogin:", this.islogin);
  },
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 38vw;
  background-color: #fd687b;
  position: relative;
  margin-top: 3.5rem;
}
.tx {
  height: 20vw;
  width: 20vw;
  border-radius: 50%;
  // border: 0.0521vw solid black;
  background: #cdcdcd;
  position: absolute;
  margin-top: 10vw;
  margin-left: 6vw;
  overflow: hidden;
}
.tx img {
  height: 20vw;
  width: 20vw;
  margin-top: -0.1vw;
  margin-left: 0.2vw;
}
.xx {
  text-align: center;
  margin-top: -16vw;
  line-height: 10vw;
  color: white;
  font-weight: 600;
  font-size: 4.5vw;
  // margin-right: 35vw;
}

.tm {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background-color: rgba(253, 247, 247, 0.13);
  margin-left: 85vw;
  margin-top: 5vw;
  position: absolute;
}
.dy {
  width: 8.125rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: rgba(253, 247, 247, 0.13);
  margin-left: 60vw;
  margin-top: -35vw;
  position: absolute;
}
</style>