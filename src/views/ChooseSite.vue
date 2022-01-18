<template>
  <div v-if="data">
    <!-- 谢婷婷-选择电影场次页 -->
    <!-- http://127.0.0.1:8080/choosesite -->
    <div>
      <!-- 1.最上方淘票票 -->
      <mt-header title="" fixed style="z-index:3">
        <router-link to="/choosecinema" slot="left">
          <mt-button icon="back">涛票票</mt-button>
        </router-link>
        <mt-button  slot="right"></mt-button>
      </mt-header>
    </div>
    <router-link to="/cinemadetails">
      <!-- 2.电影院详情 -->
      <div style="height:2.5rem"></div>
      <div class="x2-bgimg clearfix" v-for="(itemc,indexc) in data" :key="indexc">
        <p class="x2-1">{{itemc.cinema_name}}</p>
        <p class="x2-2">{{itemc.cinema_tag}}</p>
        <p class="x2-2"><span>{{itemc.addr}}</span><span>0.2公里</span></p>
      </div>
    </router-link>

    <!--  -->
    <div style="width:100%;overflow:hidden;">
    <div id="divv1">
    <template v-if="datatu">
      <div>
        <!-- 3.图片轮播图 -->
        <div class="x3-gao clearfix" @click="ceshi">
          <!-- 高度小一点的 -->
          <div class="x3-ai" >
            <div @click="mvclick(index)" class="x3-kuai" v-for="(item,index) in datatu" :key="index" :id="`${index}aa`">
              <img :src="item.fmpic" alt=""  @click="imgclick(item,index)"  @load="imgLoad(index)" >
            </div>
          </div>
        </div>
      </div>
    </template>
    </div>
    </div>
    <template v-if="datain">
    <div>
      <router-link class="x4" to="/moviedetail">
        <!-- 4.影片文字 -->
        <div class="x4-p" @click="changemovie(datain[0].影片序号)">
          <span class="x4-movie">{{datain[0].影片名}} </span>
          <span class="x4-xiao">淘票票评分</span>
          <span class="x4-xiao">{{datain[0].电影平均分|num}}</span>
        </div>
        <div class="x4-xiao">
          {{datain[0].影片时长}}分钟 | {{datain[0].标签}} | 导演:{{datain[0].导演姓名}}
        </div>
      </router-link>
      <div class="x5">
        <!-- 5. -->
        <van-tabs v-if="datain">
          <van-tab v-for="(item1,index1) in arr" :key="index1" :title="item1">
            <div class="x6" v-for="(itemin,indexin) in datain" :key="indexin">
              <div class="x6-flax">
                <div class="x6-a">
                  <div class="x6-a1">{{itemin.放映时刻|timef}}</div>
                  <div class="x6-a2">21:43散场</div>
                </div>
                <div  class="x6-a">
                  <div class="x6-a3">{{itemin.标签}}</div>
                  <div class="x6-a4">{{itemin.影厅}}</div>
                </div>
                <div class="x6-b"><span>到手价￥</span>{{itemin.票价}}</div>
                <div class="x6-c" @click="$router.push('/seat')"><button @click="changesite(itemin.场次id)">购票</button></div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
        <div v-else>
          今日暂无场次
        </div>
      </div>
    </div>
    </template>
  </div>
</template>

<script>
  window.onload = function () {
          let a =document.getElementById('1aa')
          console.log(a);
        }
</script>

<script>
import axios from "axios";
import moment from 'moment'
import { mapState,mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState(['choosemovie','choosecinema']),
    },
    filters: {
      timef: function(value) {
        let a = value
        // let b=moment(a).format("YYYY-MM-DD HH:mm:ss")
        let b=moment(a).format("HH:mm")
        return b
      },
      num: function(v){
        let g = (v*1).toFixed(1)
        return g
      },
    },
    data() {
      return {
        mvchoose: 0,
        datain:null,
        data:null,
        datatu:null,
        arr:[],
        choosedate:1,
        movepx:0,
        uu:0,
      }
    },
    watch: {
        detailInfo: function () {
          this.$nextTick(function () {
          this.tabShow()
          })
        }
      },
    
 directives:{
    trigger:{
     inserted(el, binging){
        console.log(el.id)
        el.id == 'nav0' ? el.click() : null // 只点击第一个，id是在循环中手动添加的
       // $(el).trigger('click')  // 所有都触发一次,然后就是最后一个
      }
    }
  },

    methods: {
      ...mapMutations({changecity:"changecity",changemovie:"changemovie",changesite:"changesite"}),
      imgclick(item,index){
        this.changemovie(item.电影表id)
        let a = document.getElementsByClassName("fangda")[0]
        console.log(a);
        a.classList.remove("fangda")
        let b = document.getElementById(`${index}aa`)
          // console.dir(a);
          b.classList.add("fangda")
      },
      imgLoad(index){
        if(index==this.uu){
          let a = document.getElementById(`${index}aa`)
          // console.dir(a);
          a.classList.add("fangda")
          // a.trigger("click");
        }
      },
      ceshi(){
        // console.log("测试："+this.choosecinema,this.choosemovie)
      },
      mvclick(index) {
        let divv=document.getElementById("divv1")
        this.getdatain()
        let trans='-'+6*index+'rem'
        divv.style.transform=`translateX(${trans})`
      },
      getdata(){
        if(this.choosecinema==0){
          let url=`v1/buy/choosecinemas/1`
          console.log(url)
          axios.get(url).then((res)=>{
          // console.log(res)
          this.data=res.data.data
        })
        }else{
          let url=`v1/buy/choosecinemas/${this.choosecinema}`
          // console.log(url)
          axios.get(url).then((res)=>{
          // console.log(res)
          this.data=res.data.data
        })
        }
        
        
      },
      callback(res){
        for(let i=0;i<res.data.data.length;i++){
            if(res.data.data[i].电影表id == this.choosemovie){
              this.uu=i
              let u = 1
              let a = document.getElementById(`${u}aa`)
              // console.log(a);
  
              let movepx=-(i*6)+"rem"
              console.log()
              let divv1=document.getElementById("divv1")
              divv1.style.transform=`translateX(${movepx})`
            }
          }
      },
      getdatatu(){
        let url=`v1/buy/choosecinemaspic/${this.choosecinema}`
        axios.get(url).then((res)=>{
          console.log(res)
          this.datatu=res.data.data
          // console.log(this.datatu)
          this.callback(res) 
        })
      },
      
      getdatain(){
        let url=`v1/buy/choosesite?movieid=${this.choosemovie}&cinemaid=${this.choosecinema}`
        axios.get(url).then((res)=>{
          // console.log(res)
          this.datain=res.data.data
          // console.log(this.datain)
          this.mingtian(res)
        })
      },
      mingtian(res){
        let f = res.data.data
        
      },
      getday() {
        let today = new Date()
        console.log(today.getMonth()+1+"-"+today.getDate());
        for(let i =1;i<=7;i++){

          let a = today.getMonth()+1+"-"+today.getDate()

          if(i==1){
            let b='今天 '+a
            this.arr.push(b)
          }else if(i==2){
            let b='明天 '+a
            this.arr.push(b)
          }else if(i==3){
            let b='后天 '+a
            this.arr.push(b)
          }else{
            let c = today.getDay()
            let week=["日","一","二","三","四","五","六",]
            let d=week[c]
            let b='周'+d+" "+a
            this.arr.push(b)
          }
          today.setDate(today.getDate()+1)
        }
      },
    },
    mounted () {
      this.getdata()
      this.getdatain();
      this.getday();
      this.getdatatu()
    },
  }
</script>

<style lang="scss" scoped>
a:active{
  text-decoration: none;
}
.x2-bgimg{
  height:8rem;
  margin-bottom: 0.3rem;
  background-image: url("/img/xttpic/001.jpg");
  background-repeat: repeat-x;
  background-position:center center;
  background-size: auto 100%;
  color:#fff;
  text-align: center;
  p{
    display: block;
    margin-bottom: 0;
  }
  .x2-1{
    padding-top: 1.6rem;
    padding-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 800;
  }
  .x2-2{
    font-size: 0.6rem;
    padding-bottom: 0.3rem;
  }
}
.x3-gao{
  height: 8rem;
  // background-color: beige;
  padding-top: 0.5rem;
  position: relative;
  // overflow: hidden;
  .x3-ai{
    height: 7rem;
    padding:0 0.5rem;
    // background-color: aqua;
    text-align: center;
    position: absolute;
    display:flex;
    left:8.5rem;
    .x3-kuai{
      display: inline-block;
      width: 5rem;
      height: 100%;
      margin:0 0.5rem;
      overflow: hidden;
      border-radius: 0.6rem;
      
      border:0.13rem solid rgb(218, 218, 218);
      // background-color: rgb(255, 255, 255);
      &:hover{
        transform: scale(1.15);
      }
      img{
        width:100%;
      }
      // transform: translateX(-3rem);
    }
  }
}
.fangda{
  transform: scale(1.15);
}
.x4{
  color:black;
  text-align: center;
  padding:0.2rem 0 ;  
  .x4-p{
    margin:0.4rem 0 0 0;
    .x4-movie{
      font-size: 1rem;
    }
  }
  .x4-xiao{
    font-size: 0.6rem;
  }
  .x4-huang{
    color:rgb(255, 187, 0);
    font-weight: 900;
    font-size: 1rem;
  }
}
.x5{
  position:relative;
  display  :flex;
}
.x6{
  background-color: rgb(247, 247, 247);
  padding: 0.25rem 0.5rem;
  &:nth-child(1){
    padding-top: 0.5rem;
  }
  .x6-flax{
    background-color: white;
    display: flex;
    position: relative;
    .x6-a{
      margin:0.2rem 0.5rem 0.6rem 0.5rem;
      
      .x6-a1{
        margin-top:0.5rem;
        font-size: 0.8rem;
        font-weight: 900;
        width: 100%;
        text-align: center;
      }
      .x6-a2{
        text-align: center;
        font-size: 0.6rem;
        color:rgb(175, 175, 175);
        margin-top:0.3rem;
        // width: 20%;
      }
      .x6-a3{
        margin-top:0.5rem;
        font-size: 0.6rem;
        color:rgb(0, 0, 0);
        width: 100%;
      }
      .x6-a4{
        margin-top:0.2rem;
        font-size: 0.5rem;
        color:rgb(175, 175, 175);
        // width: 30%;
      }
      
    }
    .x6-b{
      margin:1.3rem 0.5rem 0.8rem 2.2rem;
      color: rgb(255, 32, 218);
      font-weight: 900;
      position: absolute;
      right:5rem;
      top:0rem;
      span{
        font-size: 0.5rem;
        font-weight: 500;
      }
    }
    .x6-c{
      button{
        position: absolute;
        right:0.5rem;
        margin:1.2rem 0.5rem;
        border:0.07rem solid rgb(243, 119, 222);
        border-radius: 0.7rem;
        width: 3.4rem;
        height: 1.6rem;
        background-color: white;
        color:rgb(243, 119, 222);
        font-size: 0.7rem;
      }
    }
  }
}
</style>