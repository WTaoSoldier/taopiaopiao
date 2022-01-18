<template>
  <div>
    <!-- 胡琳龙-选择城市页 -->
      <div style="margin-left:-2rem;transform:translateX(0.5rem)" >
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.back(-1)"
            >&nbsp;&nbsp;涛票票</mt-button>
        </mt-header>
      </div>  
    <div class="box">
      <!-- 顶部栏 -->
      <div style="height:2.5rem"></div>
      <p style="margin-left:2vw;margin: 1rem">当前选择</p>
      <div class="dqxz" style="padding:0.0625rem">
        <ol style="position:fixed;right:4vw;top">
          <li @click="changeaa">
            <a href="#"> GPS</a><br>
            <a href="#" >热门</a>
          </li>
          <li class="zimu1"
              @click="curxt = index"
              :class="{ curhong: curxt == index }"
              v-for="(item,index) in zimu" :key="index">
            <a class="a" :href="`#${item}`">{{item}}</a> 
          </li> 
        </ol>
        <div id="gpsxz"  @click="change">{{xz}}</div>
      </div>

      <p style="margin-left:2vw;margin-top: 1.125rem">GPS</p>
      <div class="gps"  style="padding:0.0625rem">
        <div :class="{ poi: hong}" id="gpsa" @click="change">{{nowplace}}</div>
      </div>
      <p style="margin-left:2vw;margin-top: 1.125rem"> 热门城市</p>
      <div class="rmcs" v-if="data" style="backgroun">
        <div class="indicators">
          <!-- 鼠标进入哪一项，项目就是当前项 -->
          <div
            class="c01"
            @click="curIndex = index"
            :class="{ cur: curIndex == index }"
            v-for="(item, index) in rmsl"
            :key="index">
            <span @click="change">{{ item }}</span> 
          </div>
        </div>
        <!-- <p style="margin-top: 0.5rem;">B</p> -->
      </div>

      <!-- 遍历数组 -->
      <!-- 以下为原来龙哥写的-可修改routelink谢婷婷 -->
      <div v-if="data">
        <div @click="curindex"
        v-for="(itema,index) in zimu" :key="index" :id="itema">
          <div style="margin-left:0.9375rem; padding-top: 0.625rem;
          margin-bottom:1vw">{{itema}}</div>
          <div style="padding: 0 2vw;background-color:white"
            @click="gpss"
            v-for="(item, index) in data"
            :key="index" v-show="item.word==itema">
              <div @click="change" style="padding:3vw 0;
              font-size:1vw; height:1.25rem,width:60%;border-bottom: 0.0625rem solid #eee;">{{ item.cityname }}</div> 
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
// $('a').click(function(){
//     $('a.visited').removeClass('visited');
//     console.log($('a'))
//     $(this).addClass('visited');

// });

</script>
<script>
import axios from "axios";
import { mapState,mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['citychoose']),
    
  },
  
  data() {
    return {
      xz:"杭州",
      nowplace:"正在定位中...",
      curxt:0,
      data: null,
      dataa:null,
      datafor:null,
      curIndex: 0,
      hong:false,
      tiao: 0,
      rmsl: [],
      zimu:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    };
  },
  methods: {
    ...mapMutations({changecity:"changecity"}),
    curindex(){
      this.curIndex=0
    },
    gpss(){
      let bj1=document.getElementById("gpsxz") 
      let bj2=document.getElementById("gpsa") 
      // console.log(bj1.innerText);
      // console.log(bj2.innerText);
      // if(bj1.innerText==bj2.innerText){
      //   this.hong=true
      // }else{
      //   this.hong=false
      // }
    },
    changeaa(e){
      let zimu1=document.getElementsByClassName("zimu1")
      // console.log(zimu1)
      this.curxt=0
    },
    change1(){
      this.change()
    },
    change(e){
      let xt1 = e.target.innerHTML
      // console.dir(xt1)
      this.xz=xt1
      this.changecity(xt1)
      // console.log("打印this.xz",this.xz);
      this.gpss()
      // this.curindex()
      // window.scrollTop=chatlist.scrollHeight  跳到页面最顶部
      //  @click=""
      // this.$router.push("/") 
      this.$router.back(-1)
    },
    getdata() {
      let url = "v1/buy/city";
      axios.get(url).then((res) => {
        // console.log(res);
        this.data = res.data.data;
        this.tiao = this.data.length;
        // console.log(this.data);
        // console.log(this.tiao);
        let a = [];
        this.data.forEach((item) => {
          if (item.ishot == 1) {
            this.rmsl.push(item.cityname);
          }
        });

        // console.log(this.rmsl);
      });
    },
    // 谢婷婷未完成
    datapai(){
      let paixu=[]
      for(let i = 0;i<data.length;i++){
        paixu=[]
      }
    },
    dingwei(){
     setTimeout(() => {
      this.nowplace="杭州"
      this.gpss()
    }, 1000); 
    }
  },

  mounted() {
    this.getdata();
    this.dingwei();
    
    // this.datapai()
  },

};

</script>

<style lang="scss" scoped>
.indicators {
  // text-align: center;
  .c01 {
    margin-top: 0.625rem;
    margin-left: 0.625rem;
    width: 26vw;
    height: 2.5rem;
    font-size: 0.625rem;
    border: 0.0625rem solid #eee;
    display: inline-block;
    background-color: white;
    text-align: center;
    padding-top: 0.625rem;
    &.cur {
      border: 0.0625rem solid #ff7988;
      color: #ff7988;
    }
  }
}
</style>
<style lang="scss" scoped>
.box {
  background-color: #f4f4f4;
  // height: 100rem;
}
.dqxz {
  width: 100%;
  height: 3.75rem;
  background-color: rgb(251, 251, 251);
}
button {
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  width: 26vw;
  height: 2.5rem;
  font-size: 0.625rem;
  border: 0.0625rem solid #eee;
  background-color: white;
}
.gps {
  width: 100%;
  height: 3.75rem;
  background-color: rgb(251, 251, 251);
}
.dqxz div {
  width: 26vw;
  height: 2.5rem;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  font-size: 0.625rem;
  text-align: center;
  padding-top: 0.625rem;
  color: #ff798b;
  border: 0.0625rem solid #ff798b;
}
.gps>div{
  width: 26vw;
  height: 2.5rem;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  font-size: 0.625rem;
  text-align: center;
  padding-top: 0.625rem;
  color:black;
  border: 0.0625rem solid #eee;
}
.poi{
  width: 26vw;
  height: 2.5rem;
  margin-top: 0.625rem;
  margin-left: 0.625rem;
  font-size: 0.625rem;
  text-align: center;
  padding-top: 0.625rem;
  color: #ff798b;
  border: 0.0625rem solid #ff798b;
}
.rmcs {
  width: 100%;
  height: 10rem;
  margin-bottom: 0.3125rem;
  background-color: rgb(251, 251, 251);
}

.abc > div {
  width: 100%;
  height: 3.125rem;
  border-bottom: 0.125rem solid #eee;
  padding-left: 0.625rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

ol li {
  font-size: 0.3125rem;
  text-align: center;
}
ol li a{
  color:black;
  text-decoration:none;
  // background-color: #fff;

}
.curhong{
  color:red;
  background-color: rgba(190, 190, 190, 0.534);
}
</style>
