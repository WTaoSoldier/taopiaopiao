<template>
  <!-- // 胥立栋 -->
  <div>
    <div class="btnTop" v-if="btnFlag" @click="backTop()">
      <img src="/xld/icon/返回顶部.png" alt="" />
    </div>
    <!-- 这是首页的页脚，底部导航栏 -->
    <!-- 底部选项卡 -->
    <div class="tab">
      <div
        class="tab_item"
        v-for="(item, index) in tabBarImg"
        :key="index"
        @click="switchToTab(item.path)"
      >
        <img :src="$route.path === item.path ? item.icon : item.normal" />
        <p :class="$route.path === item.path ? 'active' : ''">
          {{ item.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["choosemovie","islogin"]),
  },
  name: "Tabbar",
  data() {
    return {
      btnFlag: false,
      tabBarImg: [
        {
          path: "/home",
          normal: require("../../public/xld/icon/首页.png"),
          icon: require("../../public/xld/icon/首页1.png"),
          title: "首页",
        },
        {
          path: "/choosecinema",
          normal: require("../../public/xld/icon/影院.png"),
          icon: require("../../public/xld/icon/影院1.png"),
          title: "影院",
        },
        {
          path: "/dianyingpiao",
          normal: require("../../public/xld/icon/发现.png"),
          icon: require("../../public/xld/icon/发现1.png"),
          title: "电影票",
        },
        {
          path: "/me",
          normal: require("../../public/xld/icon/我的.png"),
          icon: require("../../public/xld/icon/我的1.png"),
          title: "我的",
        },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    ...mapMutations({ changemovie: "changemovie" ,changehui:"changehui"}),
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 200) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },

    switchToTab(path1) {
      console.log(this.$route.path);
      console.log(path1);
      if(this.$route.path==path1){
        return
      }
      if(this.islogin){  //如果登陆了
        if(path1=="/choosecinema"){  //登录按2
          this.changemovie(101);
          // this.changehui(0)
          this.$router.replace(path1);
        }else{  //登录按134
          
          this.$router.replace(path1);
        }
      }else{    //如果没登录
        if(path1=="/choosecinema"){
          this.$messagebox('提示', '登录后即可查看影院') 
          this.$router.push("/logins")
        }else{
          this.$router.replace(path1);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tab_item{
  padding-top:0.15rem
}
.tab {
  height: 3.125rem;
  background-color: #fff;
  position: fixed;
  bottom: 0%;
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-align: center;
}
.tab img {
  width: 1.5625rem;
  margin: 0 1.875rem;
}
.tab p {
  margin: 0rem;
}
.btnTop {
  position: fixed;
  bottom: 75px;
  right: 26px;
}
.btnTop img {
  width: 30px;
}
</style>