<template>
  <div>
    <!-- 胡琳龙-剧照 -->
    <div><mt-header fixed title="剧照">
      <mt-button to="/" slot="left"  @click="$router.back(-1)">
        <mt-button icon="back"></mt-button>
      </mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header></div>
    <div class="box" style="margin-top:1.875rem"  v-if="data">
      <p></p>
      <div class="box1">
        <div class="bq">
          <mt-navbar v-model="selected">
              <mt-tab-item id="1">
                <div id="qb" class="tydj" @click="djzp" >
                  全部
                </div>
              </mt-tab-item>
              <mt-tab-item id="2" >
                <div id="jz" class="ty" @click="djzp1">
                  剧照
                </div>
              </mt-tab-item>
              <mt-tab-item id="3">
                <div id="hb" class="ty" @click="djzp2">
                  海报
                </div>
              </mt-tab-item>
              <mt-tab-item id="4">
                <div id="xw" class="ty" @click="djzp3">
                  新闻
                </div>
              </mt-tab-item>
          </mt-navbar>
        </div>
      </div>
      
      
      <mt-tab-container
          style="margin-bottom:3.4375rem" v-model="selected">
        <mt-tab-container-item id="1">
          <template>
            <div v-for="(item,index) in data"
            :key="index" class="tp">
              <img :src="`${item.movie_pic}`" alt="" class="tu">
            </div>
          </template>

        </mt-tab-container-item>

        <mt-tab-container-item id="2">
          <div v-for="(item,index) in data1" :key="index" class="tp">
              <img :src="`${item.movie_pic}`" alt="" class="tu">
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="3">
          <div v-for="(item,index) in data2" :key="index" class="tp">
            <img :src="`${item.movie_pic}`" alt="" class="tu">
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="4">
          <div v-for="(item,index) in data3" :key="index" class="tp">
            <img :src="`${item.movie_pic}`" alt="" class="tu">
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <template v-if="data">
    </template>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapState,mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['choosemovie']),   
    },
    data() {
      return {
        selected:'1',
        active:0,
        data:null,
        data1:null,
        data2:null,
        data3:null,
        num:null,
        movieidd:1,
        quanbu:null,
        // fenlei:["全部","剧照","海报","工作照","新闻","花絮","彩蛋","其他"]
      }
      // couponSelected: '',
    },
    // created(){
    //   //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    //   this.couponSelected = this.couponList[1].id;
    // },
    methods: {
      
      djzp(){
        let qb=document.getElementById("qb")
        let jz=document.getElementById("jz")
        let hb=document.getElementById("hb")
        let xw=document.getElementById("xw")
        qb.className="tydj"
        jz.className="ty"
        hb.className="ty"
        xw.className="ty"
      },
      djzp1(){
        jz.className="tydj"
        hb.className="ty"
        xw.className="ty"
        qb.className="ty"
      },
      djzp2(){
        hb.className="tydj"
        xw.className="ty"
        qb.className="ty"
        jz.className="ty"
      },
      djzp3(){
        xw.className="tydj"
        qb.className="ty"
        jz.className="ty"
        hb.className="ty"
      },
      getdata(){
        let ach = this.choosemovie
        console.log(this.choosemovie)
        let url = `v1/details/images?detailid=${ach}`;
        axios.get(url).then((res)=>{
          console.log(res)
          this.data=res.data.result
          // this.num=this.data.length
          console.log(this.data)
        })
      },
      getdata1(){
        let ach = this.choosemovie
        let url = `v1/details/image?detailid=${ach}&picfl=剧照`;
        axios.get(url).then((res)=>{
          console.log(res)
          this.data1=res.data.result
          console.log(this.data1)
        })
      },
      getdata2(){
        let ach = this.choosemovie
        let url = `v1/details/image?detailid=${ach}&picfl=海报`;
        axios.get(url).then((res)=>{
          console.log(res)
          this.data2=res.data.result
          console.log(this.data2)
        })
      },
      getdata3(){
        let ach = this.choosemovie
        let url = `v1/details/image?detailid=${ach}&picfl=新闻`;
        axios.get(url).then((res)=>{
          console.log(res)
          this.data3=res.data.result
          console.log(this.data3)
        })
      },
    },
    mounted() {
    this.getdata();
    this.getdata1();
    this.getdata2();
    this.getdata3();
  },
  }
</script>

<style lang="scss" scoped>
// .van-tab{
// width: 33%;
// }
.box1{
  width: 100%;
  overflow:hidden;
}
.bq div{
  width: 25vw;
  height:2.375rem;
  text-align:center;
  font-size: 0.9375rem;
  margin-bottom: 1.0625rem;
}
.tydj{
  color:red;
  border-bottom: .1875rem solid red;
}
.ty{
  color:black;
  border:0;
}
.tp{
  width: 33vw;
  height: 33vw;
  display: inline-block;
  margin:0.0313rem;
  margin-bottom: -0.375rem;
  overflow: hidden;
  line-height:auto;
  position: relative;
  img{
    height: 110%;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
  }
}
// .tu{
  // height: 100%;
// }
.mt-navbar{
width: 100%;
overflow:hidden
}
</style>