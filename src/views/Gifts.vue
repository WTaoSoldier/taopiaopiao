<template>
  <div>
    <mt-header title="影片详情" fixed >
      <mt-button slot="left" icon="back" @click="$router.back(-1)"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 徐高广-每周必抢礼包页 -->
    <div class="head-image" style="margin-top:1rem;font-size:0">
      <img src="/wljlogo/y1.jpg" />
      <img class="img1" id="show" @click="btn6" src="/wljlogo/y2.jpg" />
      <!--  -->
      <img id="hide" src="/img/xggpic/y2.png" alt="" >
      <img
        src="/wljlogo/y3.png"
        style="background-color: rgb(242, 66, 66)"
      />
    </div>
    <div class="ebody">
      <div class="white_ebody">
        <div class="white_xd" v-for="(item,index) in data" :key="index">
          <div class="zuo" @click="btn7">
            <img :src="item.fmpic" alt="">
          </div>
          <div class="you">
            <div class="p1" @click="btn7">
              <a>{{item.电影名}}</a>
              <p>{{item.上映时间}}</p>
            </div>
            <div class="p2" @click="btn7">
              <a>{{item.导演}}</a>
              <p>主演:雷佳音/李现/辛芷蕾/葛优/郭涛/咏...</p>
            </div>
            <div class="btn2" @click="btn2">
              <button>特惠购票</button>
            </div>
          </div>
        </div>
      </div> 
      <div class="btn_ebody">
        <div class="btn3" @click="btn3">
          <p>更多精彩影片＞</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["username"]),
  },
  data() {
    return {
      data:null,
    };
  },
  methods: {
    getdata() {
      let url ="v1/buy/home?page=1"
      axios.get(url).then(res=>{
        console.log(res)
        this.data=res.data.data
        console.log(this.data)
      })
    },
    btn3(){
      this.$router.push('/city')
    },
    btn2(){
      this.$router.push('/city')
    },
    btn6(){
      let id=this.username
      let url=`v1/buy/gift?id=${id}`
      axios.get(url).then(res=>{
        console.log(res)

      })
      this.$router.push('/dlibao')
      
    },
    btn7(){
      this.$router.push('/moviedetail')
    }
  },
  mounted () {
    this.getdata();
  },
};

</script>

<style lang="scss" scoped>
// 1.上部分图片
.head-image, .v_btn{
  border: 0rem solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  // position: fixed;
  top: 3.125rem;
}
//2. 下部分区域
.ebody {
  position: absolute;
  background-color: #f24244;
  top: 21.6rem;
  width: 100%;
  height:60rem;
  padding: 0 0.75rem 0;
}
// 下部分内的白色区域
.ebody > .white_ebody {
  display: block;
  width:100%;
  height:90%;
  background-color: #f24244;
  position: relative;
  margin-top: 1rem;
  margin: bottom 1rem;
}
// 白色区域
.white_ebody > .white_xd {
  width:100%;
  height: 9.3rem;
  background-color: white;
  position: relative;
  // margin: 1rem 2.5rem 0.5rem 2.5rem;
  border-radius: 0.5rem;
  margin:1rem 0 0 0;
}
// 白色区域左部分
.zuo {
  float: left;
  position: relative;
}
.zuo > img {
  background: url(/img/fengmian/001.png);
  width: 6.5rem;
  height: 9.3rem;
  background-repeat: no-repeat;
  margin-left: 0;
  border-radius:0.5rem 0 0 0.5rem;
  position: relative;
}


.you {
  float:left;
  // margin-right: 0.5rem;
  height:9.3rem ;
  width: 13.9rem;
  padding: 0.5rem 0  0.5rem 0.5rem ;
  position:relative ;
}
.p1>a{
  font-size:1.125rem ;
  position: relative;
}
// 字体大小
a,p{
  font-size:0.875rem ;
}

#hide{
  display: none;
}

.p1 {
  word-wrap: break-word;
}
.p2 {
  width: 8rem;
  color: rgb(136, 133, 133);
  position:relative ;
}
.btn2{
  float: right; margin:-4rem 5rem  0 ;
  width: 0.5rem;
  position: relative;
  
}
.btn2>button{
  border-radius: 0.5rem;
  border:none;
  background-color:red ;
  color: white;
  position: relative;
  width: 5rem;
  height: 2rem;
  padding: 0 0.5rem 0 0.5rem;
  margin-left: 1rem;
}
// 3.按钮区域
.ebody > .btn_ebody {
  width: 100%;
  position: relative;
  padding: auto; // 上 右 下 左
}
// 按钮
.btn3 {
  width: 8rem;
  height: 2rem;
  border-radius: 1rem;
  border: 0.125rem solid white;
  color: white;
  padding: 0.2rem 0.25rem 0.2rem 1rem;
  position: relative;
  margin: auto;
}
</style>