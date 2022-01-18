<template>
  <div>
    <!-- 谢婷婷 -->
    <template v-if="data">
        <mt-header :title="data.cinema_name">
        <router-link to="/choosesite" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="wrapper">
        <div class="cinema-wrapper">
          <div class="seat-wrapper">
            <div class="illustration">
              <div class="ke1"></div>
              <div class="ke">可选</div>
              <div class="ke2"></div>
              <div class="ke">已选</div>
              <div class="ke3"></div>
              <div class="ke">不可选</div>
            </div>
            <div class="screen">{{data.yt}}</div>
            <div class="screen-center">
              <div class="mid-line"></div>
            </div>
            <!-- 开始写座位 -->
            <div v-if="dataseat">
              <div class="xt1" ref="innerSeatWrapper">
                <!-- 一个小座位 -->
                <div v-for="i in 100" :key="i" class="xt2" :id="`xt-${i-1}`"
                :name="`xt-${i-1}`"
                @click="clickseat"
                :class="{'cannot':zuowei[i-1]}">
                  <!-- <div style="" class="xt3">1</div> -->
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
      <!-- 最下边 -->
      <div class="c">
        <div class="c1">
          <div class="c2">
            <span>为了疫情防控，观影需全程佩戴口罩，影厅内禁止饮食。</span> 
          </div>
          <div class="c3">
            <div>
              <div class="c31">{{data.title}}</div>
              <div class="c32">
                <span class="c321">{{jintian}} </span>
                <span class="c322">{{data.show_time|moment1}} </span>
                <span class="c323">{{data.yt_type}}</span>
              </div>
            </div>
            <div class="c33">切换场次</div>
          </div>
          <!-- 每个座位票 -->
          <div class="c4" v-if="toname1">
            <div class="c5" v-for="(item1,index) in toname1" :key="index">
              <div class="c51">{{item1}}</div>
              <div class="c52">到手价<span class="c521">￥{{data.price}}</span></div>
            </div>
            
          </div>

          
          <div class="c6" @click="queren">
            <div class="c61" >
              {{priceall |num}} 确认选座
              </div>
            <!-- <div class="c62">券已抵￥3</div> -->
          </div>
        </div>
        
        
      </div>
    </template>
    
  </div>
</template>

<script>
  import axios from "axios";
  import moment from 'moment'
  import { mapState,mapMutations } from 'vuex'
  export default {
    computed: {
    ...mapState(['choosesite',"chooseseat"]),
  },
  name: "cinemaSeatChoose",
  filters: {
    moment1: function (dateStr,pattern = "YYYY-MM-DD HH:mm:ss") {
      return moment(dateStr).format(pattern);
    },
    num: function(value) {
      if(value){
        let a = value
        let b=a.toFixed(2)
        let c="￥"+b
        return c;
      }
      
    }
  },
  data() {
    return {
      dataseat:null,
      priceall:null,
      jintian:null,
      data:null,
      zuowei:[0,0,0,0,0,0,0],
      chooses:[],
      choosename:"",
      toname:["1排1号","1排2号","1排3号","1排4号","1排5号","1排6号","1排7号","1排8号","1排9号","1排10号","2排1号","2排2号","2排3号","2排4号","2排5号","2排6号","2排7号","2排8号","2排9号","2排10号","3排1号","3排2号","3排3号","3排4号","3排5号","3排6号","3排7号","3排8号","3排9号","3排10号","4排1号","4排2号","4排3号","4排4号","4排5号","4排6号","4排7号","4排8号","4排9号","4排10号","5排1号","5排2号","5排3号","5排4号","5排5号","5排6号","5排7号","5排8号","5排9号","5排10号","6排1号","6排2号","6排3号","6排4号","6排5号","6排6号","6排7号","6排8号","6排9号","6排10号","7排1号","7排2号","7排3号","7排4号","7排5号","7排6号","7排7号","7排8号","7排9号","7排10号","8排1号","8排2号","8排3号","8排4号","8排5号","8排6号","8排7号","8排8号","8排9号","8排10号","9排1号","9排2号","9排3号","9排4号","9排5号","9排6号","9排7号","9排8号","9排9号","9排10号","10排1号","10排2号","10排3号","10排4号","10排5号","10排6号","10排7号","10排8号","10排9号","10排10号"],
      toname1:null,
      toname2:[],
    };
  },
  methods: {
    ...mapMutations({changesite:"changesite",changeprice:"changeprice",changeseat:"changeseat",changenum:"changenum",changepiaopiao:"changepiaopiao"}),
    jiazai(){
      for(let i =0 ;i++;i<this.zuowei.length){

      }
    },
    queren(){
      // console.log(this.choosename);
      // console.log(this.chooses);
      if(!this.choosename){
        this.$toast("未选择任何座位哦")
        return
      }
      this.changepiaopiao(this.toname1)
      
      this.changeprice(this.priceall)
      console.log(this.priceall,"this.priceall")
      this.changeseat(this.choosename)
      this.changenum(this.toname1.length)
      this.$router.push("/firmorder")
    },
    clickseat(e){
      
      // 拿到
      let a = document.getElementById(e.target.id) 
      let b = e.target.id
      let c = new String(b)
      let d = c.slice(3)
      // console.log(d)
      if(this.zuowei[d]==1){
        return
      }
      this.chooses[d]= this.chooses[d]==1?0:1
      
      // console.log(d)
      if(this.chooses[d]){
        a.classList.add("choose")
      }else{
        a.classList.remove("choose")
      }
      // console.log("this.chooses",this.chooses)
      // 拿到this.toname1
      let q1 = []
      let q2 = this.chooses
      let q3=[]
      q2.forEach((item,index)=>{
        if(item){
          q1.push(index)
        }
        console.log("q1",q1)
      })
      q1.forEach(item=>{
        q3.push(this.toname[item])
      })
      console.log(q3)
      
      this.toname1=q3
      let q4 = q3.toString()
      // console.log(this.data.price*1*q3)
      this.choosename=q4
      this.data.price*q3.length==0?this.priceall=null:this.priceall=(this.data.price*1).toFixed(2)*q3.length
      
    },
    getdata(){
      let url=`v1/buy/choosesiteo/${this.choosesite}`
      axios.get(url).then(res=>{
        this.data=res.data.data[0]
        console.log(this.data)
        this.jin(res)
        
      })

    },
    jin(res){
      let a = res.data.data[0].show_time
      let a1=new Date(a)
      // console.log(a)
      // console.log(a1)
      let b=new Date()
      // console.log(b)
      let c=a1.getDate()-b.getDate()
      if(c<=1){
        this.jintian="今天"
      }
    },
    getseat(){
      let url=`v1/buy/seat`
      axios.get(url).then(res=>{
        console.log(res)
        this.dataseat=res.data.data
        // console.log(this.data)
        this.dataseat.forEach((item,index)=>{
          if(item.sstatus==1){
            this.zuowei[index]=1
          }
          // console.log(this.zuowei)
        })
      })

      
    }
    
  },

  mounted: function () {
    this.getdata()
    this.getseat()
  },
};
</script>


<style lang="scss" scoped>

.c4::-webkit-scrollbar {
  display: none;
}
.wrapper {
  height: 100%;
  padding: 0.5rem;
  // box-sizing: border-box;
  background: #eeeeee;
}
.cinema-wrapper {
  height: 100%;
}
.title {
  text-align: center;
}
.seat-wrapper {
  height: 32rem;
  width: 100%;
  // border:0.0625rem dotted #c5c5c5;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.screen {
  margin: 0 auto;
  font-size: 0.8rem;
  height: 1.875rem;
  width: 18.75rem;
  background-color: #e3e3e3;
  border-radius: 0 0 1.875rem 1.875rem;
  color: #585858;
  line-height: 1.875rem;
  text-align: center;
}

.seat {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-seat {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.screen-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 2rem;

}
.mid-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(1rem);
  top: 100%;
  width: 0.0625rem;
  height: 19rem;
  border-left: 0.0625rem dashed #919191;
}

.btn-buy {
  height: 100%;
  line-height: 1.875rem;
  font-size: 0.875rem;
  border-radius: 0.3125rem;
  padding: 0 0.3125rem;
  background-color: #ffa349;
  color: #ffffff;
  display: inline-block;
  cursor: pointer;
  margin-right: 0.625rem;
}
.smart {
  background-color: #39ac6a;
}
.illustration {
  position: absolute;
  left: 0;
  bottom: 7rem;
  height: 2rem;
  width: 18.75rem;
  display: flex;
  .div{
    display: inline-block;
    margin:0.2rem;
  }
  .ke1{
    width: 1.4rem;
    height: 1.4rem;
    background-color: #ffffff;
    margin:0.2rem;
    border-radius: .1875rem;
  }
  .ke2{
    width: 1.4rem;
    height: 1.4rem;
    background-color: #39ac6a;
    margin:0.2rem;
    border-radius: .1875rem;
  }
  .ke3{
    width: 1.4rem;
    height: 1.4rem;
    background-color: rgb(209, 93, 93);
    margin:0.2rem;
    border-radius: .1875rem;
  }
  .ke{
    font-size: 0.8rem;
    padding-top:0.3rem;
    margin-right:0.5rem;
  }
}

.illustration-text {
  display: inline-block;
  height: 100%;
  line-height: 2.1875rem;
  font-size: 0.875rem;
  position: relative;
  top: -0.125rem;
}
.xt1 {
  display: flex;
  flex-flow: row wrap;
  justify-content:space-between;
  align-items:flex-start; 
  margin: 2rem auto ;
  position: absolute;
  top:1rem;
  left:50%;
  transform: translateX(-50%);
  width: 19rem;
  height: 19rem;
  background-color: #fccea000;
  .xt2 {
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #ffffff;
    margin:0.2rem;
    border-radius: .1875rem;
    border:.0625rem solid rgb(214, 214, 214);
    .xt3 {
      display: inline-block;
    }
  }
  .choose{
    background-color: #39ac6a;
    border:0.0625rem solid #39ac6a;
  }
  .cannot{
    background-color: rgb(209, 93, 93);
    border:0 solid black;
  }
}
.mint-cell-wrapper{
  height:1.5rem
}
.c{
  position: fixed;
  bottom: 0;
  height: 31%;
  width: 100%;
  background-color: #eeeeee;
  .c1{
    height: 100%;
    border-radius: 1.5rem 1.5rem 0 0;
    background-color: #ffffff;
    overflow: hidden;
    .c2{
      font-size: 0.6rem;
      span{
        display: inline-block;
        padding:0.3rem 0;
        margin:0 1rem;
        width: 91%;
        border-bottom: 0.0625rem solid rgb(223, 223, 223);
      }
    }
    .c3{
      font-size: 0.8rem;
      margin:0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      .c31{
        font-size: 0.9rem;
        font-weight: 800;
        padding-bottom: 0.2rem;
      }
      .c32{
        .c321{
          color: rgb(255, 62, 62) ;
        }
      }
      .c33{
        padding:0.5rem;
        font-weight: 800;
        color:#00ccff;
      }
    }
    .c4{
      overflow-x: scroll;
      white-space: nowrap;
      font-size: 0.7rem;
      display: flex;
      // overflow: auto;
      margin:0.7rem 1rem;
      background-color: #ffffff;
      .c5{
        width:5.8rem;
        margin-right:0.3125rem;
        padding:0.3rem 0.5rem;
        background-color: #ebebeb;
        border-radius: 0.5rem;
        .c52{
          color: #ff4242;
          .c521{
            font-size: 0.8rem;
          }
        }
      }
    }
    .c6{
      height: 3.2rem;
      padding:0.3rem;
      position: fixed;
      bottom: 0.5rem;
      width: 92%;
      border-radius: 1.6rem;
      background-color: #ff4242;
      text-align: center;
      color: white;
      margin:0 1rem;
      .c61{
        font-size: 1.2rem;
        line-height: 2.6rem;
      }
      .c62{
        font-size: 0.6rem;
      }
    }
  }
}
</style>