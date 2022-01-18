<template>
  <div style="width:100%;height:174vw;background-color:#f1f1f1">
    <!-- 优惠券 -->
    <mt-header
      title="优惠券"
      style="position: fixed; z-index: 4; width: 100%; top: 0"
    >
      <mt-button slot="left" icon="back" @click="btn0"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="ebody">
      <div class="eb_head" style="position: fixed; z-index: 4" v-if="data">
        <p class="zuo">您有{{data1.length}}张未使用优惠券</p>
      </div>
      <div class="kk" style="margin-top: 17vw; margin-bottom: 12vw" v-if="data">
  <div class="box">
         <div class="kuang1" v-for="(item, index) in data1" :key="index">
          <div class="zuo1" style="margin-top: 0.8rem">
            <span style="color: red">￥</span>
            <span style="font-size: 2rem; color: red">{{
              item.yhq_price
            }}</span>
            <p style="color: rgb(161, 159, 159)">
              {{ item.yhq_mj == 0 ? "无门槛" : "满" + item.yhq_mj + "元可用" }}
            </p>
            <div class="dq1"></div>
            <div class="dq2"></div>
            <div class="dq3"></div>
          </div>
          <div class="you1" style="display: flex; position: relative">
            <div class="you2">
              <span style="font-size: 1rem; font-weight: 600">{{
                item.yhq_bt
              }}</span>
              <div class="ys">
                <a
                  style="
                    border: 0.0625rem solid rgba(200, 200, 200, 0.7);
                    padding: 0.1rem;
                  "
                  >不与限时特价叠加</a
                >
              </div>
              <span style="color: rgb(161, 159, 159); padding-top: 0.4rem"
                >有效期至{{ item.yhq_time | gettime }}</span
              >
              <p style="color: rgb(161, 159, 159); padding-top: -0.6rem">
                全国通用不限影片
              </p>
            </div>
            <div class="you3">
              <button class="btn">使用</button>
            </div>
          </div>
          <div class="yuan1"></div>
          <div class="yuan2"></div>
        </div>
        </div>

      </div>
      <router-link class="eb_boot" to="/conpons">查看无效券 ＞</router-link>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["username"]),
    result(){
    if(this.data.length==0){
     show
    }
    }
    
  },
  data() {
    return {
      data: null,
      data1:[],
    };
  },

  filters: {
    gettime(a) {
      let a1 = moment(a).format("YYYY-MM-DD");
      // console.log(a1);
      let b2 = new Date();
      let b3 = moment(b2).format("YYYY-MM-DD HH:mm:ss");
      return a1
    },
  },
  methods: {
    ...mapMutations({ changeusername: "changeusername" }),
    btn0() {
      this.$router.push("/me");
    },
    getData() {
      let url = `v1/yhq/you?yhq_id=${this.username}`;
      // let url=`v1/yhq/you?yhq_id=1`;
      //  console.log(this.username);
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
        console.log(this.data);
        if(res.data.code===200){
          this.hou(res)
        }
        
      });
    },
    hou(res){
      let c1 = new Date();
      // console.log(c1)
       let c2 = moment(c1).format("YYYY-MM-DD HH:mm:ss");
      console.log(c2);
      let f=res.data.data
      console.log(f)
      f.forEach((item)=>{
        let f1=item.yhq_time
        let f2=moment(f1).format("YYYY-MM-DD HH:mm:ss");
         if(c2<f2){
           this.data1.push(item)
         }
         
      })
      console.log(this.data1)
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.you3{
  position: absolute;
  right:0.1rem
}
.ebody {
  width: 100%;
  font-size: 0.75rem;
  // padding: 5rem 0;
  .kk {
    background-color: #f1f1f1;
    padding-top: 0.1rem;
    padding-bottom: 0.6rem;
    width: 100%;
    height: 150vw;
  }
}
// 头部
.eb_head {
  background-color: white;
  width: 100%;
  position: absolute;
  // position: fixed;
  margin-top: 2rem;
  top: 0.4rem;
  padding: 0.25rem 1rem 0 1rem;

  border-bottom: 0.0625rem solid rgb(245, 242, 242);
  height: 2rem;
}
.box{
   background-color:#f1f1f1;
   padding-top: 0.1rem;
   padding-bottom: 4rem;
  
}
.zuo {
  margin-right: 11rem;
  float: left;
  position: absolute;
}
.kuang1 {
  width: 95%;
  height: 30vw;
  background-color: rgb(255, 255, 255);
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 1.2vw;
  box-shadow: 0.125rem 0.125rem 0.2rem 0.1rem rgb(230, 230, 230);
  margin-top: 1rem;
  margin-left: 0.5rem;
}
.zuo1 {
  width: 34%;
  height: 28vw;
  padding-top: 0.8rem;
  /* background-color: rgba(255, 255, 255, 0); */
  display: inline-block;
  border-right: 0.15rem dashed rgb(214, 212, 212);
  text-align: center;
  margin-top: 0.5rem;
}
.you1 {
  width: 66%;
  height: 28vw;
  /* background-color: rgba(255, 255, 255, 0); */
  display: inline-block;
  margin-left: 1rem;
  margin-top: 1rem;
}
.ys {
  width: 100%;

  // border: 0.0625rem solid rgba(200, 200, 200, 0.7);
  padding: 0.1rem 0 0.3rem 0;
  color: orange;
  margin-top: 0.25rem;
  font-size: 0.8rem;
}
.btn {
  width: 3rem;
  height: 1.7rem;
  line-height: 1.6rem;
  font-weight: 800;
  border-radius: 1rem;
  background-color: rgba(253, 186, 239, 0.397);
  padding: 0 0 0.15rem;
  margin-left: 1.8rem;
  margin-right: 0rem;
  margin-top: 2rem;
  transform: translateX(-1rem);
  color: red;
  font-size: 0.8rem;
}
.yuan1 {
  position: absolute;
  background-color: #f0f0f0;
  top: -3vw;
  left: 27.7vw;
  border-radius: 50%;
  /* z-index: 3; */
  width: 6vw;
  height: 6vw;
}
.yuan2 {
  position: absolute;
  background-color: rgb(233, 233, 233);
  top: 27vw;
  left: 27.7vw;
  border-radius: 50%;
  /* z-index: 3; */
  width: 6vw;
  height: 6vw;
}
.dq1 {
  width: 50vw;
  height: 60vw;
  border-radius: 50%;
  margin-top: -4rem;
  margin-left: -8rem;
  background-color: rgba(255, 179, 170, 0.2);
  position: absolute;
}
.dq2 {
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  margin-top: -1.7rem;
  margin-left: -3rem;
  background-color: rgba(255, 179, 170, 0.2);
  position: absolute;
}
.dq3 {
  width: 25vw;
  height: 25vw;
  border-radius: 50%;
  margin-top: -2.5rem;
  margin-left: -1.8rem;
  background-color: rgba(255, 179, 170, 0.2);
  position: absolute;
}
// 底部
.eb_boot {
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: white;
  padding: 1rem 8.5rem 1rem;
  bottom: 0;
  position: fixed;
}
</style>