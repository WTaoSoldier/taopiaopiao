<template>
  <!-- 胥立栋 首页 -->
  <div class="home">
    <div style="position:fixed;z-index:3;background-color:white;">
      <p style="margin:0.3rem 0 0.3rem 0.7rem;color:black">涛票票</p>
      <!-- 标题栏 -->
      <div style="display:flex; justify-content: space-between">
        <div style="width:6rem;">
          <router-link to="/city">
            <img
              style="width: 2.1875rem;margin-left:0.5rem"
              slot=""
              src="/xld/icon/淘票票.png"
              alt=""
            />
            <span style="font-size: 0.875rem;color:black">{{ citychoose }}</span>
          </router-link>
        </div>
        <div style="width: 12.5rem;right:1rem;margin-left:6rem;transform:translateY(-0.4rem)">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1" style="color:black" :class="{'red':this.selected=='1'}">正在热映</mt-tab-item>
            <mt-tab-item id="2" style="margin: 0 20% 0 20%" :class="{'red':this.selected=='2'}">即将上映</mt-tab-item>
          </mt-navbar>
        </div>
      </div>
    </div>
    <div style="height:5rem"></div>
    <!-- 面板组 -->
    <!-- 加无限滚动 -->
    <mt-tab-container
      v-infinite-scroll="loadmore"
      infinite-scroll-distance="50"
      infinite-scroll-disabled="infDisabled"
      :infinite-scroll-immediate-check="true"
      style="margin-bottom: 5.4375rem"
      v-model="selected"
    >
      <!--  -->
      <mt-tab-container-item id="1">
        <!-- 轮播图 -->
        <mt-swipe :style="{ height: h }">
          <mt-swipe-item id="1"
            ><img src="/xld/swipe/1.jpg" alt=""
          /></mt-swipe-item>
          <mt-swipe-item><img src="/xld/swipe/2.jpg" alt="" /></mt-swipe-item>
          <mt-swipe-item><img src="/xld/swipe/3.jpg" alt="" /></mt-swipe-item>
          <mt-swipe-item><img src="/xld/swipe/4.jpg" alt="" /></mt-swipe-item>
        </mt-swipe>

        <!-- 活动推荐 -->
        <div id="hd" style="display: flex;height:5.3rem">
          <div
            @click="togifts"
            style="text-align: center; width:25vw;margin: 0.5rem 0.5rem 0.5rem"
          >
            <img style="width:2.5rem;height:2.5rem" src="/xld/hd/1.png" />
            <p>电影礼包</p>
          </div>
          <router-link
            to="/invitefriends"
            style="text-align: center;width:25vw; margin: 0.5rem"
          >
            <img style="width:2.5rem;height:2.5rem"  src="/xld/hd/2.png" />
            <p>拼团领券</p>
          </router-link>
          <router-link
            to="/hotlist"
            style="text-align: center;width:25vw; margin: 0.5rem "
          >
            <img style="width:2.5rem;height:2.5rem"  src="/xld/hd/3.png" />
            <p>影城特惠</p>
          </router-link>
          <router-link to="/praise" style="text-align: center;width:25vw; margin: 0.5rem">
            <img style="width:2.5rem;height:2.5rem"  src="/xld/hd/4.png" />
            <p>口碑趋势</p>
          </router-link>
        </div>

        <!-- 单一电影信息开始 -->
        <hr />
        <template>
        <div class="articleItem" v-for="(item, index) in data" :key="index">
          <div>
            <!-- 电影图文信息开始 -->
            <div class="articleItem-wrapper">
              <!-- 电影图像开始  -->
              <div class="articleImg" style="positon: relative">
                <img :src="item.fmpic" />
              </div>

              <!-- 电影图像结束 -->
              <!-- 电影标题开始 -->
              <div class="articleItem-header" @click="tomoviedetail(item.电影id)" style="height:7.2rem; display:flex;flex-flow:column nowrap;justify-content: space-between;">
                <p style="color:black;font-size:1.2rem;font-weight:800;">{{ item.电影名 }}</p>
                <p>
                  淘票票评分: <span>{{ item.电影平均分 | timef }}</span>
                </p>
                <p>导演:{{ item.导演 }}</p>

                <p>主演:雷佳音 李现</p>
              </div>
              <div @click="chooci(item.电影id)">
                <van-button
                  size="small"
                  type="danger"
                  style="
                    background-image: linear-grandient(
                      90deg red 0 50%,
                      yellow 60%
                    );
                    border-radius: 1rem;
                    width: 3.5rem;
                    height: 2rem;
                    position: absolute;
                    right: 5%;
                  "
                  
                  >{{ item.上映时间 | goupiao }}</van-button
                >
              </div>
            </div>
            <hr />
            <!-- 电影图文信息结束 -->
          </div>
        </div>
        <!-- <div style="height:5rem;color:#999;text-align:center;line-height:5rem">已加载所有电影</div> -->
        </template>
      </mt-tab-container-item>

      <!-- 第二页 即将上映 -->
      <mt-tab-container-item id="2">
        <template v-if="data11">
        <div
          v-for="(item1, index) in data11"
          :key="index"
          class="articleItem"
          style="positon: relative"
        >
          <div to="/">
            <!-- 电影图文信息开始 -->
            <div class="articleItem-wrapper" style="padding: 0">
              <!-- 电影图像开始  -->
              <div class="articleImg" style="position: relative">
                <img :src="item1.fmpic" alt="" />
                <div
                  style="
                    display: inline-block;
                    position: absolute;
                    left: 1.875rem;
                    top: 2.5rem;
                  "
                >
                  <img
                    src="/xld/icon/暂停播放.png"
                    style="width: 1.25rem; height: 1.25rem"
                  />
                </div>
              </div>
              <!-- 电影图像结束 -->
              <!-- 电影标题开始 -->
              <div class="articleItem-header" @click="tomoviedetail(item1.电影id)">
                <h6>{{ item1.电影名 }}</h6>
                <p>30.2万人想看</p>
                <p>导演:{{ item1.导演 }}</p>
                <p>主演:雷佳音 李现</p>
                <p>上映时间:{{ item1.上映时间 | moment1 }}</p>
              </div>
              <van-button  @click="chooci(item1.电影id)"
                size="small"
                type="info"
                style="border-radius: 0.625rem; position: absolute; right: 5%"
                >预售</van-button
              >
            </div>
            <hr />
            <!-- 电影图文信息结束 -->
          </div>
        </div>
        </template>
      </mt-tab-container-item>
    </mt-tab-container>

    <!-- 底部选项卡 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import MyFooter from "@/components/MyFooter.vue";
import moment from "moment";

export default {
  components: {
    MyFooter,
  },
  data() {
    return {
      city: this.$store.state.name,
      infDisabled: false, //是否禁用无限滚动
      data: [], //保存电影数据
      data11: [],
      data1: [],
      h: "6.25rem",
      selected: "1",
      name: "Home",
      page: 1, //当前页码
      todayr: 0,
      arr: [],
      // time: '',
    };
  },
  computed: {
    ...mapState(["citychoose","islogin"]),
  },

  filters: {
    timef: function (value) {
      let a = String(value);
      let b = a.substring(0,3);
      return b;
    },
    moment1: function (dateStr, pattern = "YYYY-MM-DD") {
      return moment(dateStr).format(pattern);
    },
    goupiao(a) {
      let a1 = moment(a).format("YYYY-MM-DD HH:mm:ss");
      let b2 = new Date();
      let b3 = moment(b2).format("YYYY-MM-DD HH:mm:ss");
      if (a1 < b3) {
        return "购票";
      } else {
        return "预售";
      }
    },
  },
  methods: {
    ...mapMutations({ changemovie: "changemovie" ,changehui:"changehui"}),

    // backTop() {
    //   let that = this;
    //   let timer = setInterval(() => {
    //     let ispeed = Math.floor(-that.scrollTop / 5);
    //     document.documentElement.scrollTop = document.body.scrollTop =
    //       that.scrollTop + ispeed;
    //     if (that.scrollTop === 0) {
    //       clearInterval(timer);
    //     }
    //   }, 16);
    // },
    tomoviedetail(id){
      if(this.islogin){
        this.changemovie(id)
        this.changehui(1)
        this.$router.push("/moviedetail")
      }else{
        this.$toast('登录后即可查看电影详情') 
        this.$router.push("/logins")
      }
      
    },
    chooci(id){
      if(this.islogin){
        this.changemovie(id)
        this.changehui(1)
        this.$router.push("/choosecinema")
      }else{
        this.$toast('登录后即可购票') 
        this.$router.push("/logins")
      }
    },
    togifts(){
      if(this.islogin){
        // this.backTop()
        this.$router.push("gifts")
      }else{
        this.$messagebox('提示', '请先登录') 
        this.$router.push("/logins")
      }
    },
    gettimefun(res) {
      let a11 = new Date();
      // console.log(a11);
      let a12 = moment(a11).format("YYYY-MM-DD HH:mm:ss");
      // console.log(moment(a11).format("YYYY-MM-DD HH:mm:ss"))
      // console.log(moment(a13).format("YYYY-MM-DD HH:mm:ss"))

      // console.log(moment(a11).format("YYYY-MM-DD HH:mm:ss")>moment(a13).format("YYYY-MM-DD HH:mm:ss"))
      // console.log(moment(a11).format("YYYY-MM-DD HH:mm:ss")<moment(a13).format("YYYY-MM-DD HH:mm:ss"))
      let f = res.data.data;
      // console.log(f);
      f.forEach((item) => {
        let f1 = item.上映时间;
        let f2 = moment(f1).format("YYYY-MM-DD HH:mm:ss");
        if (a12 < f2) {
          this.data11.push(item);
        }
      });
    },

    gettodayr() {
      let a = new Date();
      let b = a.getMonth() + 1;
      let c = a.getDate() + 1;
      let d = `${b}月${c}日`;
      this.todayr = d;
    },
    loadMovie(cid, page, callback) {
      let url = `v1/buy/home?cid=${cid}&page=${page}`;
      axios.get(url).then((res) => {
        callback(res.data.data);
        this.$indicator.close();
      });
    },

    // 加载更多
    loadmore() {
      let cid = this.selected;
      this.infDisabled = true  // 禁用无限滚动
        
        console.log(`触底了 cid:${cid}`);
      if(cid==1){
        this.page=this.page+1;
        let page = this.page;
        
        

        // 发送http请求,获取最新的一页数据 追加到当前列表
        let url = `v1/buy/home?cid=${cid}&page=${page}`;
        console.log(`loadmore() cid:${cid} page:${page}`)
        axios.get(url).then((res) => {
          console.log(res);
          if (res.data.code == 201) {
            return;
          }
          this.data.push(...res.data.data);
          this.infDisabled = false; //重新启用无限滚动
        });
      }
      
    },

    // 获取数据
    getdata() {
      let url = "v1/buy/home?page=1";
      axios.get(url).then((res) => {
        this.data = res.data.data;
        // console.log(this.data);
      });
    },
    getjiang() {
      let url = "v1/buy/choosecinemajiang";
      axios.get(url).then((res) => {
        // console.log(res)
        this.data1 = res.data.data;
        // console.log(this.data);
        this.gettimefun(res)
      });
    },
    initSwipe() {
      // 计算轮播图容器的高度,设置变量h
      let picw = 1242; //图片宽度
      let pich = 450; //图片高度
      let screenw = window.screen.width; //屏幕的宽度
      let swipeh = (pich * screenw) / picw + "px";
      this.h = swipeh;
    },
    // shuaxin(){
    //   var timer=setInterval(() => {
    //     this.$router.go(0)
    //   }, 1000)
    //   var timer1=setInterval(() => {
    //     clearTimeout( timer )
    //   }, 1500)
    // }
    
  },
  activated(){ 
    this.infDisabled=false 
    // this.shuaxin()
  },
  deactivated(){ 
    this.infDisabled=true
    // this.selected=1
   },
  mounted() {
    this.initSwipe(); //初始化轮播图
    this.getdata(); //获取数据保存到本地
    this.gettodayr();
    this.getjiang();
  },

  watch: {
    // 监听导航
    selected(newValue, oldValue) {
      window.scrollTo(0, 0); //回到页面顶部
      this.infDisabled = false; //重新启动无限滚动
      // this.page = 1; //页码初始化为1
    },
  },
};
</script>

<style scoped>
.mint-swipe-item img {
  width: 100%;
}
.articleItem img {
  height: 7rem;
  margin: 0.85rem;
  border-radius: 8%;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}
hr {
  margin: 0rem;
}
.articleItem-header {
  padding-top: 0;
  color: black;
}
h6 {
  margin-bottom: 0.2rem;
}
.articleItem-header p {
  font-size: 0.875rem;
  margin-bottom: 0.1rem;
}
#hd p {
  font-size: 0.75rem;
  margin:0,
}
p {
  color: #676767;
}
#hd img {
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.625rem;
}
h6 {
  font-weight: bolder;
}
.articleItem-header span {
  font-size: 1rem;
  font-weight: bold;
  color: #fea54c;
}
.a{
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.red{
  color: rgb(255, 9, 42);
}

</style>

