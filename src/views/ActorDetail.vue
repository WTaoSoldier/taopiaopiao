<template >
  <div>
    <!-- zr-演员详情页 -->
    <div class="actor-detail" style="margin-bottom: 2.5rem">
      <!-- 顶部栏 -->
      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.back(-1)"
            >&nbsp;&nbsp;影人详情</mt-button
          >
        </mt-header>
      </header>
    </div>
    <!-- 照片 -->
    <div v-for="(item, i) in mdata.result" :key="i">
      <div class="actor">
        <div class="aimg">
          <img :src="`${item.act_pic}`" alt="" />
        </div>
        <div class="intro">
          <div>{{ item.aname }}</div>
          <div>{{item.eng_name}}</div>
           <div>{{item.birth}}</div>
           <div>{{item.act_add}}</div>
          <div>{{ item.ac_type }}</div>
         
        </div>
      </div>

      <!-- 简介 -->
      <div>
          <div style="margin-top:1rem;font-weight:600;margin-left:1rem;">影人简介</div>
      <div class="jj">
        <input id="exp1" class="exp" type="checkbox" />
        <div class="text" >
          <label class="btn" for="exp1"></label>
          {{ item.jianjie }}
        </div>
      </div>
    </div>
      </div>
     

    <!-- 分割线 -->
    <div
      style="
        width: 100%;
        height: 0.5rem;
        background-color: #e5e5e5;
        margin-top: 1rem;
      "
    ></div>
    <!-- 代表作 -->
    <div class="db" >
      <div
        style="
          margin-top: 1rem;
          font-size: 1.125rem;
          font-weight: 600;
          margin-left: 1rem;
        "
      >
        电影作品
      </div>
      <div v-for="(item, i) in adata.result" :key="'movie -' + i">
        
           <div class="db-img" >
        <img :src="`${item.fmpic}`" alt="" />
      </div>
      <div class="movie">
        <div>{{item.title}}</div>
        <div>{{idata}}人想看</div>
        <div>{{ item.ac_type }}</div>
        <div>{{item.play_time | moment }}上映</div>
      </div>
      </div>
   
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
    computed: {
    ...mapState(["choosemovie"]),
  },
  data() {
    return {
      adata: [],
      mdata:[],
      idata:""
    };
  },
    created() {
    this.getRandomInt(1, 10)
  },
  methods: {
    ...mapMutations({ changemovie: "changemovie" }),
     getRandomInt() {
      this.idata = Math.floor(Math.random() * 100 + 1);
    },
  },
  mounted() {
    let mid = this.choosemovie;
    console.log("当前加载的电影ID:" + mid);
    let id = this.$route.query.aname;
    
    console.log(`v1/details/actor_movie?aname=${id}`)
    console.log("当前演员名字:" + id);
    axios
      .get(`v1/details/actor_movie?aname=${id}`)
      .then((res) => {
        console.log(res);
        this.adata = res.data;
      });
       axios
      .get(`v1/details/actor?aname=${id}`)
      .then((res) => {
        console.log(res);
        this.mdata = res.data;
      });
  },
  
};
</script>

<style lang="scss" scoped>
.jj {
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem ;
  min-width: 18.75rem;
  overflow: hidden;
  padding: 0.8rem;
}
.text {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
   display: flex; 
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  position: relative;
  text-indent: 0.5em;
}
.text::before {
  content: "";
  height: calc(100% - 1.5rem);
  float: right;
}
.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
  margin-left: -6.25rem;
}
.btn {
  float: right;
  clear: both;
  margin-left: 0.625rem;
  font-size: 1rem;
  padding: 0 0.5rem;
  background: white;
  line-height: 1.5rem;
  border-radius: 0.25rem;
  color: rgb(148, 145, 138);
  cursor: pointer;
}
.btn::before {
  content: "展开";
}
.exp {
  display: none;
}
.exp:checked + .text {
  -webkit-line-clamp: 999;
}
.exp:checked + .text::after {
  visibility: hidden;
}
.exp:checked + .text .btn::before {
  content: "收起";
}

.actor {
  width: 100%;
  height: 12rem;
  background-color: rgb(180, 123, 48);
}
.aimg > img {
  float: left;
  width: 7rem;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}
.intro {
  // position: relative;
  // top: 2rem;
  display: flex;
  margin-right: 8rem;
  flex-flow: nowrap column;
  padding-left: 2rem;
}
.intro div:first-child {
  width: 8rem;
  margin-top: 1rem;
  color: white;
  font-size: 1.5625rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.intro div:not(:first-child) {
  width: 8rem;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
}
.db-img {
  margin-top: 1.5rem;
}
.db-img > img {
  float: left;
  width: 5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
}
.movie div:first-child {
  font-size: 1.25rem;
  font-weight: 600;
}
.movie div:not(:first-child) {
  color: gray;
}
</style>