<template>
  <div>
    <!-- 钟瑞-电影详情页 -->
    <div
      class="detail"
      style="margin-bottom: 3rem"
      v-for="(item, i) in mdata.result"
      :key="'detail -' + i"
    >
      <!-- 顶部栏 -->
      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.push('/home')"
            >&nbsp;&nbsp;{{ item.title }}</mt-button
          >
        </mt-header>
      </header>
    </div>
    <!-- 电影简介 -->
    <div
      class="movie-header"
      v-for="(item, i) in mdata.result"
      :key="'movie-header -' + i"
    >
      <div class="movie-img">
        <img :src="`${item.fmpic}`" />
      </div>
      <ul class="movie-info">
        <li style="margin-bottom: 0.75rem">{{ item.title }}</li>
        <li>{{ item.tag }}/{{ item.long_time }}分钟</li>
        <li>{{ item.play_time | moment }}</li>
        <li style="margin-bottom: 0.625rem">{{ item.place }}</li>
        <li>{{ item.cseed }}人想看</li>
      </ul>
    </div>
    <!-- 评分 -->
    <div class="pf">
      <div class="star">
        <van-rate
          v-model="value"
          :count="5"
          color="#ffd21e"
          void-icon="star"
          readonly
        />
      </div>
      <div class="fs" v-for="(item, i) in mdata.result" :key="i">
        {{ item.tuijian * 10000 * 10 / 10000 }}
      </div>
    </div>

    <!-- 想看 -->

    <div class="hopeful">
      <div class="xk">
        <span @click="toggleWanted()" :class="{ ax: true, active: isToggle }">
          <i
            :class="{
              iconfont: true,
              'icon-xiai-copy': true,
              active: isToggle,
            }"
          ></i>
          {{ isToggle ? "已" : "" }}想看</span
        >
        &nbsp;&nbsp;&nbsp;
        <span @click="toggleCollect" :class="{ wjx: true, active: isTog }">
          <i
            :class="{
              iconfont: true,
              'icon-wujiaoxing--copy': true,
              active: isTog,
            }"
          ></i>
          {{ isTog ? "已" : "" }}看过</span
        >
      </div>
    </div>
    <div class="xkmovie" v-show="ifshowTip">
      <div class="show">
        <span style="margin-left: 1rem">这是我想看的第{{movieNum}}部电影</span>
      </div>
    </div>
    <!-- 电影介绍 -->
    <div class="intro">
      <input id="exp1" class="exp" type="checkbox" />
      <div class="text" v-for="(item, i) in mdata.result" :key="'intro -' + i">
        <label class="btn" for="exp1"></label>
        {{ item.jieshao }}
      </div>
    </div>
    <!-- 演职人员 -->
    <div class="recommand">
      <div class="title">
        <span class="title-hotrec">演职人员</span>
      </div>
      <div ref="wrapper">
        <ul class="cont" ref="cont">
          <li class="cont-item" v-for="item of actor.result" :key="item.aid">
            <router-link
              :to="`/actordetail?aname=${item.aname}`"
              @click="changemovie(item.detailid)"
            >
              <div class="cont-img">
                <img class="img" :src="item.act_pic" alt="" />
              </div>
              <div class="cont-dest">{{ item.aname }}</div>
              <div class="cont-price">
                <span class="price">{{ item.ac_type }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 视频 -->
    <div class="recom">
      <div class="title">
        <span class="title-hotrec">视频</span>
      </div>
      <div ref="wrapper">
        <ul class="cont" ref="cont">
          <li
            class="cont-sp"
            v-for="(item, i) in mvideo.result"
            :key="'sp-item -' + i"
          >
            <div class="cont-msp">
              <img class="img" :src="`/img/vpic/` + item.vpic" alt="" />
            </div>
            <div class="movie-time">
              <img src="@/assets/movie_detail/video.png" alt="" />
              {{ item.long_time | getHMS }}
            </div>
            <div class="movie-title">
              <span class="mtitle">{{ item.title }}</span>
            </div>
          </li>
        </ul>
        <div style="font-size: 0.9375rem; text-align: center">
          <router-link to="/relatedvideo" @click="changemovie(item.detailid)">
            <span style="color: #349cec; position: relative; bottom: 2.3rem"
              >全部视频</span
            >
          </router-link>
        </div>
      </div>
    </div>
    <!-- 剧照 -->
    <div class="recommand">
      <div class="title">
        <span class="title-hotrec">剧照</span>
      </div>
      <div ref="wrapper">
        <ul class="cont" ref="cont">
          <li
            class="cont-jz"
            v-for="(item, i) in img.result"
            :key="'jz-item -' + i"
          >
            <div class="cont-mjz">
              <img class="img" :src="`${item.movie_pic}`" alt="" />
            </div>
          </li>
        </ul>
        <div
          style="margin-top: 0.625rem; font-size: 0.9375rem; text-align: center"
        >
          <router-link to="/photos" @click="changemovie(item.detailid)">
            <span style="color: #349cec">全部剧照</span>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 热门评论 -->
    <div class="hot-comment" style="margin-top: 1.25rem">
      <div class="h-c-header" style="margin-left: 1.25rem">
        <span>观众热评</span>
        <router-link to="/say" @click="changemovie(item.detailid)">
          <el-button round size="small" class="x-btn" type="danger"
            >写影评</el-button
          >
        </router-link>
      </div>
      <ul
        style="margin-top: 1.875rem; margin-left: 0rem"
        class="comment"
        v-for="(item, i) in comment.result"
        :key="i"
      >
        <li class="tx">
          <img :src="`${item.upic}`" alt="" />
        </li>
        <li class="nickname" style="margin-left: 6.25rem">
          <span>{{ item.uname }}</span>
          <div class="plstar" style="margin-left: 0rem; margin-top: 0rem">
            <van-rate
              :value="handleStarData(item.score)"
              :count="5"
              :size="15"
              color="#ffd21e"
              void-icon="star"
              readonly
            />
            <span class="score">{{ item.score }}</span>
          </div>
        </li>
        <div class="pl">
          <span>{{ item.title }}</span>
        </div>
        <div class="time">
          <span> {{ item.pltime | moment }}</span>
        </div>
      </ul>
      <div class="more">
        <router-link to="/discuss" @click="changemovie(item.detailid)">
          <span>更多</span>
        </router-link>
      </div>
    </div>
    <!-- 选座购票 -->
    <div class="buy">
      <router-link to="/choosecinema" @click="changemovie(item.detailid)">
        <span>选座购票</span>
      </router-link>
    </div>
  </div>
</template>
<script>
import { getHMS } from "../assets/movie_detail/date.js";
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
import axios from "axios";
export default {
  computed: {
    ...mapState(['username',"choosemovie"]),
  },
  filters: {
    getHMS(time) {
      return getHMS(time);
    },
  },

  data() {
    return {
      isTog: false,
      isToggle: false,
      mdata: [],
      actor: [],
      mpic: [],
      mvideo: [],
      comment: [],
      img: [],
      want:[],
      playStatus: "",
      muteStatus: "",
      isMute: true,
      isPlay: false,
      preload: "auto",
      controls: true,
      value: null,
      movieNum:0, //想看的电影
      ifshowTip:false, //是否显示这是我想看...
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {},
    toggleCollect() {
      if (this.isToggle) {
        this.movieNum--
      }
      this.isTog = !this.isTog;
      if (this.isTog) {
        this.isToggle = false;
        this.ifshowTip = false
      }
      if (!this.isToggle) {
         //点击取消想看 告诉后台删除这条数据
        let params=`seed=想看&userid=${this.username}&detailid=${this.choosemovie}`
        let url=`v1/details/movie_delete?userid=${this.username} &detailid=${this.choosemovie}`
        axios.delete(url,params).then(res=>{
          console.log(res);
        })
      }
    },
    toggleWanted() {
      this.isToggle = !this.isToggle;

      if (this.isToggle) {
        this.isTog = false;
      }
      if (this.isToggle) {
        //如果点击的时候,该电影变成我想看的,就把该电影id传给后台记录,同时显示这是我想看...
        let params=`seed=想看&userid=${this.username}&detailid=${this.choosemovie}`
        let url="v1/details/want_insert"
        axios.post(url,params).then(res=>{
          console.log(res);
        })
        //第几部想看的数量加一
        this.movieNum++
        this.ifshowTip = true //显示这是我想看...

      }else{
        //点击取消想看 告诉后台删除这条数据
        let params=`seed=想看&userid=${this.username}&detailid=${this.choosemovie}`
        let url=`v1/details/movie_delete?userid=${this.username} &detailid=${this.choosemovie}`
        axios.delete(url,params).then(res=>{
          console.log(res);
        })
        this.movieNum--
        this.ifshowTip = false //不显示这是我想看...
      }
    },
    ...mapMutations({ changemovie: "changemovie" }),
    handleStarData(n) {
      let cvalue = 0;
      switch (true) {
        case n > 0 && n <= 2:
          cvalue = 1;
          break;
        case n > 2 && n <= 4:
          cvalue = 2;
          break;
        case n > 4 && n <= 6:
          cvalue = 3;
          break;
        case n > 6 && n <= 8:
          cvalue = 4;
          break;
        default:
          cvalue = 5;
      }
      return cvalue;
    },
    verScroll() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.wrapper, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: "horizontal",
          });
        } else {
          this.scroll.refresh(); //如果dom结构发生改变调用该方法
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer);
          this.verScroll();
        }
      }, 0);
    });
    let id = this.choosemovie;
    console.log("当前加载的电影ID:" + id);
    //   发送请求 加载文章详情
    let url = `v1/details/home?did=${this.choosemovie}`;
    axios.get(url).then((res) => {
      // console.log(res);
      this.mdata = res.data;
      const n = res.data.result[0].tuijian;
      // console.log(n);

      switch (true) {
        case n > 0 && n <= 0.2:
          this.value = 1;
          break;
        case n > 0.2 && n <= 0.4:
          this.value = 2;
          break;
        case n > 0.4 && n <= 0.6:
          this.value = 3;
          break;
        case n > 0.6 && n <= 0.8:
          this.value = 4;
          break;
        default:
          this.value = 5;
      }
    });
    axios.get(`v1/details/actors?detailid=${this.choosemovie}`).then((res) => {
      // console.log(res);
      this.actor = res.data;
    });
    axios.get(`v1/details/video?detailid=${this.choosemovie}`).then((res) => {
      // console.log(res);
      this.mvideo = res.data;
    });
    axios
      .get(
        `v1/details/image?detailid=${this.choosemovie}&picfl=剧照`
      )
      .then((res) => {
        // console.log(res);
        this.img = res.data;
      });

    //接口获取当前用户的想看电影列表
    axios
      .get(
        `v1/details/want?userid=${this.username}`
      )
      .then((res) => {
        
        this.movieNum = res.data.result.length  //电影列表长度
        this.want = res.data;
        res.data.result.forEach(e => {  //循环列表
          if(e.detailid == this.choosemovie){ //当前电影的id存在想看电影列表时
            this.isToggle = true //想看固定
            this.ifshowTip = true//不显示这是我想看...
          }
        });
      });
    axios
      .get( 
        `v1/details/comment?detailid=${this.choosemovie}`
      )
      .then((res) => {
        // console.log(res);
        this.comment = res.data;
      });
   
  },
};
</script>

<style lang="scss" scoped>
@import url("../assets/icon/iconfont.css");
</style>
<style lang="scss" scoped>
.intro {
  display: flex;
  margin: 1rem auto;
  min-width: 18.75rem;
  overflow: hidden;
  padding: 0.8rem;
}
.text {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
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
  color: #40aaff;
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

.movie-img > img {
  width: 6.25rem;
  float: left;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  border-radius: 0.25rem;
}

.ax i.active {
  color: red;
}
.ax.active {
  background-color: #fffbf1;
  border: 0.0625rem solid #ffeec4;
}
.wjx.active {
  background-color: #fffbf1;
  border: 0.0625rem solid #ffeec4;
}
.wjx i.active {
  color: #ffd21e;
}
.pf {
  width: 100%;
  display: flex;
  justify-content: start;
  .fs {
    margin-top: 2rem;
    margin-left: 1rem;
    color: #ffd21e;
    font-weight: 700;
  }
}
.star {
  margin-top: 2rem;
  margin-left: 1.25rem;
}

.hopeful {
  display: flex;
}

.xk {
  margin: 0 auto;
}

.xk span {
  background-color: #f5f7fa;
  line-height: 2.5rem;
  display: inline-block;
  /* margin-right: 0.9375rem; */
  width: 9rem;
  height: 2.5rem;
  border: 0.0625rem solid #ebeef5;
  border-radius: 1.25rem;
  text-align: center;
  color: #323233;
}

.hopeful {
  margin-top: 1.25rem;
}

.hide {
  float: right;
  margin-right: 1.25rem;
}

.comment {
  position: relative;
}

.nickname {
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
}

.score {
  font-size: 0.9rem;
  margin-left: 0.625rem;
  color: #ffd21e;
}
.pl {
  margin-left: 1.25rem;
  margin-top: 0.9375rem;
}

.time {
  margin-left: 1.25rem;
  margin-top: 0.625rem;
  color: #969799;
  font-size: 0.8rem;
}

.more {
  margin-top: 1.25rem;
  text-align: center;
  margin-bottom: 3rem;
}

.movie-info li:first-child {
  font-weight: 600;
}

.movie-info li:not(:first-child) {
  color: gray;
}

.movie-info .name {
  font-size: 1rem;
  font-weight: bold;
  color: #000;
}

.btn > button {
  width: 3rem;
  padding: 0.3125rem 0.75rem;
  border: none;
  border-radius: 0.3125rem;
  font-size: 0.75rem;
}

.title {
  position: relative;
  height: 2.5rem;
  display: flex;
  padding: 0.75rem 0;
  box-sizing: border-box;
}

.title-hotrec {
  font-size: 1rem;
  margin-left: 1rem;
  font-weight: 37.5rem;
}

.recommand {
  margin-bottom: 2rem;
  transform: 0 !important;
}

.cont {
  list-style: none;
  overflow-x: scroll;
  white-space: nowrap;
  font-size: 0.75rem;
  text-align: center;
  padding-right: 0.24rem;
  transform: 0 !important;
  margin-left: 1rem;
  margin-right: 1rem;
}

.cont::-webkit-scrollbar {
  display: none;
}

.cont-jz {
  position: relative;
  display: inline-block;
  padding: 0.06rem 0 0.2rem;
  width: 12.5rem;
  margin: 0 rem;
}

.cont-mjz {
  overflow: hidden;
  width: 12rem;
  height: 0;
  padding-bottom: 8rem;
}
.cont-sp {
  position: relative;
  display: inline-block;
  padding: 0.06rem 0 0.2rem;
  width: 14rem;
  padding-bottom: 0;
}
.cont-msp {
  overflow: hidden;
  width: 13.5rem;
  height: 0;
  padding-bottom: 8rem;
}
.cont-msp img {
  width: 100%;
}
.cont-item {
  position: relative;
  display: inline-block;
  padding: 0.06rem 0 0.2rem;
  width: 6rem;
  margin: 0 rem;
}

.cont-img {
  /* overflow: hidden; */
  width: 5.4rem;
  height: 0;
  padding-bottom: 100%;
}
.movie-time > img {
  width: 1rem;
}
.movie-time {
  color: white;
  position: relative;
  bottom: 3.2rem;
  right: 4.5rem;
  font-size: 0.5rem;
}

.movie-title {
  width: 11.5rem;
  color: white;
  position: relative;
  bottom: 3.2rem;
  left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mtitle {
  width: 100%;
}

.cont-img .img {
  width: 100%;
  border-radius: 0.25rem;
}

.cont-mjz .img {
  width: 100%;
}

.cont-title {
  width: 3.125rem;
}

.cont-dest {
  margin: 0.1rem 0;
  margin-top: 4.0625rem;
  color: black;
  font-size: 1rem;
}

.cont-price .price {
  color: #807e7d;
  font-size: 0.9rem;
}
.buy {
  width: 100%;
  background-color: #ff6b8b;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  text-align: center;
  line-height: 2.8125rem;
}
.buy > a {
  color: white;
  font-weight: 600;
}
.swiper {
  width: 100%;
}

.x-btn {
  float: right;
  margin-right: 1.25rem;
}
.tx {
  margin-left: 1.25rem;
  width: 3.5rem;
  height: 3.5rem;
}
.tx img {
  width: 100%;
  height: 100%;
  border-radius: 3.125rem;
}
.nickname {
  font-weight: 600;
  margin-left: 5.2rem !important;
}
.xkmovie {
  width: 20rem;
  line-height: 3rem;
  background-color: #fffbf1;
  border: 0.0625rem solid #ffeec4;
  margin: 1rem auto;
  margin-top: 1rem;
  border-radius: 0.3rem;
}
</style>