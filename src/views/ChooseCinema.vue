<template>
  <div>
    <div id="head">
      <!-- 胥立栋-选择影院页 -->
      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.push('/home')"
            >&nbsp;&nbsp;涛票票</mt-button
          >
        </mt-header>
      </header>
      <!-- 导航栏 -->
      <div id="daohang">
        <div>
          <router-link to="/city">
            <img
              style="width: 2.1875rem"
              slot=""
              src="/xld/icon/淘票票.png"
              alt=""
            />
            <span style="display: inline-block;color:black">{{ citychoose }}</span>
          </router-link>
        </div>
        <div style="position: fixed; top: 1.8125rem; right: 3.125rem">
          <van-search
            v-show="isshow"
            v-model="value"
            placeholder="请输入搜索关键词"
          />
        </div>
        <div style="">
          <img
            @click="showSearch()"
            src="/xld/icon/搜索.png"
            style="width: 1.25rem"
          />
        </div>
      </div>
    </div>
    <hr />

    <!-- 面板组 -->
    <div
      v-infinite-scroll="loadmore1"
      infinite-scroll-distance="30"
      infinite-scroll-disabled="infDisabled"
      :infinite-scroll-immediate-check="true"
      style="margin-top: 4.0625rem"
    >
      <div v-if="data">
        <router-link
          to="/choosesite"
          v-for="(item, index) in data"
          :key="index"
        >
          <div
            @click="changecinema(item.cinema_id)"
            style="
              display: flex;
              justify-content: space-between;
              margin: 0rem 1.25rem;
            "
          >
            <div>
              <div>
                <h6
                  style="
                    font-weight: 600;
                    color: black;
                    display: inline-block;
                    margin-top: 0.125rem;
                  "
                >
                  {{ item.cinema_name }}
                </h6>
                <span id="ka">影城卡</span>
              </div>
              <span class="wz" style="color: #666">{{ item.addr }}</span> <br />
              <span style="font-size: 0.625rem; color: #999" v-if="choosemovie"
                >近期场次:{{ item.最近场次 | moment }}</span
              >
            </div>
            <div style="text-align: right">
              <h6 style="display: inline-block; color: #ff4d64">
                {{ item.最低价格 }}
              </h6>
              <span style="color: #ff4d64" class="wz">元</span>
              <span class="wz">起</span>
              <p class="wz">{{ item.away | awayx }}</p>
            </div>
          </div>
          <hr style="margin: 0.5rem 1rem" />
        </router-link>
      </div>
    </div>
    <div style="height:5rem;color:#999;text-align:center">已加载全部影院</div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import MyFooter from "../components/MyFooter.vue";

export default {
  components: { MyFooter },
  computed: {
    ...mapState(["citychoose", "choosemovie","choosehui"]),
  },
  data() {
    return {
      infDisabled: false,
      number: null,
      isshow: false,
      page: 1,
      data: null,
      value: "",
      popupVisible: "",
      value1: 0,
      value2: "a",
    };
  },
  filters: {
    xiaoshu2: function (value) {
      return value.toFixed(1);
    },
    awayx: function (value) {
      if (value < 1000) {
        let a = value + "m";
        return a;
      } else {
        let b = value / 1000;
        let c = b.toFixed(1) + "km";
        return c;
      }
    },
  },
  methods: {
    showSearch() {
      this.isshow = !this.isshow;
    },

    ...mapMutations({
      changecinema: "changecinema",
      changemovie: "changemovie",
      changehui:"changehui"
    }),

    loadMovie(page, callback) {
      let url = `v1/buy/choosecinema?page=${page}`;
      axios.get(url).then((res) => {
        callback(res.data.data);
        this.$indicator.close();
      });
    },

    loadmore1() {
      this.page++;
      let page = this.page;
      this.infDisabled = true; //禁用无限滚动
      console.log(`loadmore1()  page:${page}`);

      // 发送http请求,获取最新的一页数据 追加到当前列表
      if (this.choosemovie) {
        console.log("有");
        let url1 = `v1/buy/choosecinema?movid=${this.choosemovie}&page=${this.page}`;
        axios.get(url1).then((res) => {
          console.log(res);
          if (res.data.code == 201) {
            return;
          }
          this.data.push(...res.data.data);
          this.infDisabled = false; //重新启用无限滚动
        });
      } else {
        this.choosemovie = 1;
        let url1 = `v1/buy/choosecinemanull?page=${this.page}`;
        axios.get(url1).then((res) => {
          console.log(res);
          if (res.data.code == 201) {
            return;
          }
          this.data.push(...res.data.data);
          this.infDisabled = false; //重新启用无限滚动
        });
      }
    },

    getRandom() {
      let suiji = Math.floor(Math.random() * 10);
    },

    // 获取数据
    getdata() {
      if (this.choosemovie == 101) {
      this.changemovie(1);
    } 
      let url = `v1/buy/choosecinema?movid=${this.choosemovie}&page=${this.page}`;
      // console.log(url);
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
        // console.log(this.data)
      });
    },
    // getdatanull(){
    //   let url = `v1/buy/choosecinemanull?page=${this.page}`
    //   axios.get(url).then((res)=>{
    //     console.log(res)
    //     this.data=res.data.data
    //     console.log(this.data)
    //   })
    // }
  },
  activated() {
    // console.log("actived");
    // console.log("this.choosehui",this.choosehui);
    
    this.infDisabled = false;
    // console.log(this.choosemovie)
    if (this.choosemovie == 101) {
      this.changemovie(1);
      if(this.choosehui==1){
        this.page=1
        this.getdata();
        this.changehui(0)
        return
      }
    }
    
    if(this.choosemovie==1){
      return
    }else  {
      this.page=1
      this.getdata();
    }
  },
  deactivated() {
    this.infDisabled = true;
    // this.data=null
  },
  mounted() {
    // console.log("mounted");
    // console.log("this.choosemovie最开始", this.choosemovie);
    if (this.choosemovie == 101) {
      this.changemovie(1);
      this.getdata();
    } else {
      this.getdata();
    }
  },
};
</script>

<style lang="scss" scoped>
a:active{
        text-decoration: none;
      }
a:visited{
  text-decoration: none;
}
a:hover{
  text-decoration: none;
}
.wz {
  color: #999;
  font-size: 0.75rem;
}
#daohang {
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 3rem;
  padding: 1rem 1.5rem 0 1.125rem;
  position: fixed;
  background-color: #fff;
  font-size: 0.6rem;
}
#ka {
  display: inline-block;
  text-align: center;
  background-color: #44c85a;
  color: white;
  width: 2.8125rem;
  height: 1.2rem;
  font-size: 0.8125rem;
  border-radius: 0.3125rem;
  line-height: 1.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.125rem;
  position: relative;
  left: 0rem;
  bottom: 0.125rem;
  z-index: -1;
}
#head {
  width: 100%;
  background-color: #fff;
}
.mint-navbar .mint-tab-item.is-selected{
      border-bottom: 3px solid rgb(255, 0, 0)  !important;
      color: aqua ;
}
</style>