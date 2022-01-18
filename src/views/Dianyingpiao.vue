<template>
  <div>
    <!--  -->
    <div class="a">
      <div class="a2">
        <span>我的电影票</span>
        <div class="a1">
          <div class="a1-1">
            <div class="a1-11" :class="{xia:this.show1==2}" @click="cshow2">待使用</div>
            <div class="a1-11" :class="{xia:this.show1==3}" @click="cshow3">已使用</div>
            <div class="a1-11" :class="{xia:this.show1==4}" @click="cshow4">退款</div>
            <div class="a1-11" :class="{xia:this.show1==1}" @click="cshow1">全部
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!this.islogin" class="bao1">
      <div class="baodeng">未登录，空空如也~</div>
    </div>
    <div class="bao" v-else>
      <div class="ji1"></div>
      
      <!-- 待使用 -->
      <div class="bei">
        <div v-show="this.show1==2">
        <div v-if="this.data2.length==0" class="d1">没有任何电影票哦~</div>  
        <div class="b1" v-for="(item, index) in data2" :key="index">
          <div class="b2">
            <div class="b21"><img :src="item.fmpic" alt="" /></div>
            <div class="b22">
              <div class="b221">{{ item.电影名 }}</div>
              <div class="b222">{{item.cinema_name}}</div>
              <div class="b222">{{ item.影厅 }}</div>
              <div class="b222">{{ item.放映时间 | moment }}</div>
            </div>
          </div>
          <div class="b3">
            <div class="b31">
              共 <span>{{ item.票数几张 }}</span> 张
            </div>
            <div @click='toticket(`${item.序号}`)' 
              v-if="item.票的状态 == '未使用'"
              class="b32">取票码</div>
            <div class="b33" v-else>{{ item.票的状态 }}</div>
          </div>
          <div class="yuan1"></div>
          <div class="yuan2"></div>
        </div>
      </div>
      </div>
      
      <!-- 已使用 -->
      <div v-show="this.show1==3">
        <div v-if="this.data3.length==0" class="d1">没有任何电影票哦~</div>
        <div class="b1" v-for="(item, index) in data3" :key="index">
          <div class="b2">
            <div class="b21"><img :src="item.fmpic" alt="" /></div>
            <div class="b22">
              <div class="b221">{{ item.电影名 }}</div>
              <div class="b222">{{item.cinema_name}}</div>
              <div class="b222">{{ item.影厅 }}</div>
              <div class="b222">{{ item.放映时间 | moment }}</div>
            </div>
          </div>
          <div class="b3">
            <div class="b31">
              共 <span>{{ item.票数几张 }}</span> 张
            </div>
            <div
              v-if="item.票的状态 == '未使用'"
              class="b32"
              >已使用</div
            >
            <div class="b33" v-else>{{ item.票的状态 }}</div>
          </div>
          <div class="yuan1"></div>
          <div class="yuan2"></div>
        </div>
      </div>
      <!-- 退款 -->
      <div v-show="this.show1==4">
        <div v-if="this.data4.length==0" class="d1">没有任何电影票哦~</div>
        <div v-else class="b1" v-for="(item, index) in data4" :key="index">
          <div class="b2">
            <div class="b21"><img :src="item.fmpic" alt="" /></div>
            <div class="b22">
              <div class="b221">{{ item.电影名 }}</div>
              <div class="b222">{{item.cinema_name}}</div>
              <div class="b222">{{ item.影厅 }}</div>
              <div class="b222">{{ item.放映时间 | moment }}</div>
            </div>
          </div>
          <div class="b3">
            <div class="b31">
              共 <span>{{ item.票数几张 }}</span> 张
            </div>
            <div
              v-if="item.票的状态 == '未使用'"
              class="b32"
              
              >取票码</div
            >
            <div class="b33" v-else>{{ item.票的状态 }}</div>
          </div>
          <div class="yuan1"></div>
          <div class="yuan2"></div>
        </div>
      </div>
      <!-- 全部 -->
      <div v-show="this.show1*1==1">
        <div v-if="!data" class="d1">没有任何电影票哦~</div>
        <div v-else class="b1" v-for="(item, index) in data" :key="index">
          <div class="b2">
            <div class="b21"><img :src="item.fmpic" alt="" /></div>
            <div class="b22">
              <div class="b221">{{ item.电影名 }}</div>
              <div class="b222">{{item.cinema_name}}</div>
              <div class="b222">{{ item.影厅 }}</div>
              <div class="b222">{{ item.放映时间 | moment }}</div>
            </div>
          </div>
          <div class="b3">
            <div class="b31">
              共 <span>{{ item.票数几张 }}</span> 张
            </div>
            <div  @click='toticket(`${item.序号}`)' 
              v-if="item.票的状态 == '未使用'"
              class="b32"
              >取票码</div
            >
            <div class="b33" v-else>{{ item.票的状态 }}</div>
          </div>
          <div class="yuan1"></div>
          <div class="yuan2"></div>
        </div>
        
      </div>  
      <div class="di"></div>
    </div>

    <my-footer />
  </div>
</template>

<script>
import MyFooter from "../components/MyFooter.vue";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import moment from "moment";
export default {
  components: { MyFooter },
  computed: {
    ...mapState(["islogin", "username","chooseticket","choosepiao"]),
  },
  data() {
    return {
      show1: 2,
      selected: "1",
      data: null,
      data2:[],
      data3:[],
      data4:[],
    };
  },
  methods: {
    ...mapMutations({ changeticket: "changeticket" ,changepiao:"changepiao"}),
    toticket(qq){
      console.log("111")
      this.changeticket(qq)
      console.log(this.chooseticket)
      
      this.$router.push("/ticket")

    },
    cshow1(){
      this.show1=1
    },
    cshow2(){
      this.show1=2
    },
    cshow3(){
      this.show1=3
    },
    cshow4(){
      this.show1=4
    },
    getdata2(res){
      res.data.data.forEach(item=>{
        if(item.票的状态=="未使用"){
          this.data2.push(item)
        }
      })
      // console.log(this.data2);
    },
    getdata3(res){
      res.data.data.forEach(item=>{
        if(item.票的状态=="已使用"){
          this.data3.push(item)
        }
      })
    },
    getdata4(res){
      res.data.data.forEach(item=>{
        if(item.票的状态=="已退款"){
          this.data4.push(item)
        }
      })
    },
    getdata() {
      let id = this.username;
      let url = `v1/buy/dianyingpiao?uid=${id}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
        console.log("data",this.data)
        if(res.data.code!=201){
          this.data2=[]
          this.data3=[]
          this.data4=[]
          this.getdata2(res)
          this.getdata3(res)
          this.getdata4(res)
        }
        
      });
    },
  },
  activated() {
    // console.log("actived");
    // console.log(this.choosepiao);
    if (this.choosepiao==1) {
      this.changepiao(0)
      this.show1=2
      this.getdata()
    }
  },
  mounted() {
    if(this.islogin){
      this.getdata();
    }
    // console.log(this.username);
  },
};
</script>

<style lang="scss" scoped>
.bei{
  padding:0.2rem 0;
  background-color: rgb(243, 243, 243);
}
.xia{
  border-bottom:0.2rem solid rgb(226, 93, 93);
}
.a {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: rgb(252, 252, 252);
  .a2 {
    background-color: rgb(247, 87, 113);
    width: 100%;
    height: 4rem;
    position: relative;
    span {
      line-height: 3rem;
      color: white;
      display: inline-block;
      padding-left: 0.8rem;
    }
  }
  .a1 {
    background-color: rgb(252, 252, 252);
    position: absolute;
    top: 2.5rem;
    width: 100%;
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;
    .a1-1 {
      // transform: translateY(-1.4rem);
      text-align: center;
      font-size: 1rem;
      display: flex;
      width: 100%;
      background-color: rgb(252, 252, 252);
      border-bottom: 0.0313rem solid rgb(214, 214, 214);
      .a1-11 {
        display: inline-block;
        width: 25%;
        padding: 0.5rem;
      }
    }
  }
}
.bao1 {
  padding: 7rem 2rem;
}
.bao {
  background-color: rgb(243, 243, 243);
  height:40rem;
  .ji1 {
    height: 5rem;
  }
  margin-top: 1rem;
  padding-bottom: 4rem;

  width: 100%;
}
.b1 {
  background-color: rgb(255, 255, 255);
  width: 95%;
  margin: auto;
  margin-bottom: 0.9rem;
  box-shadow: 0 0 0.4rem 0.1rem rgb(221, 221, 221);
  padding: 0.7rem 0.7rem 0.2rem 0.7rem;
  position: relative;
  overflow: hidden;
  .b2 {
    display: flex;
    margin-bottom: 0.6rem;
    .b22 {
      margin: -0.2rem 0.7rem;
      .b221 {
        font-weight: 800;
        padding-bottom: 0.3rem;
      }
      .b222 {
        font-size: 0.9rem;
      }
    }
    img {
      margin-left: 0;
    }
  }
  .b3 {
    display: flex;
    justify-content: space-between;
    border-top: 0.125rem dashed rgb(230, 230, 230);
    margin: 0.5rem 0;
    padding: 0.5rem 0 0 0;
    .b31 {
      padding-top: 0.2rem;
      font-size: 0.9rem;
      span {
        font-size: 1rem;
        font-weight: 800;
        color: rgb(247, 169, 0);
      }
    }
    .b32 {
      width: 4.6rem;
      height: 2rem;
      border-radius: 2.3rem;
      line-height: 2rem;
      text-align: center;
      color: white;
      font-size: 0.9rem;
      // font-weight: 800;
      background-color: #f75771;
    }
    .b33 {
      width: 4.6rem;
      height: 2rem;
      border-radius: 2.3rem;
      line-height: 2rem;
      text-align: center;
      color: rgb(110, 110, 110);
      font-size: 0.9rem;
      // font-weight: 800;
      // background-color: #f75771;
    }
  }
  .yuan1 {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgb(228, 228, 228);
    top: 8rem;
    left: -0.5rem;
  }
  .yuan2 {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgb(230, 228, 228);
    top: 8rem;
    right: -0.5rem;
  }
}
.d1 {
  text-align: center;
  font-size: 0.9rem;
  color: rgb(167, 167, 167);
}
.di{
  height: 3rem;
  background-color: rgb(243, 243, 243);
}
.box1 {
  margin-top: 2rem;
  width: 100%;
  div {
    font-size: 1.0625rem;
    font-weight: 600;
  }
}
.box2 {
  width: 100%;
  height: 80rem;
  background-color: #eee;
}
img {
  width: 5rem;
  margin-left: 1rem;
}
.baodeng {
  height: 34rem;
  font-weight: 800;
  line-height: 10rem;
  text-align: center;
  font-size: 1.4rem;
  color: #7a7a7a;
  padding-top:22rem;
}
</style>