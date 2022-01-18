<template>
  <div>
    <!-- 钟瑞-电影相关视频 -->
    <div class="video-detail" style="margin-bottom: 2.5rem">
      <!-- 顶部栏 -->

      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.back(-1)"
            >&nbsp;&nbsp;视频</mt-button
          >
        </mt-header>
      </header>
    </div>
    <!-- 视频播放 -->
    <div class="video-play">
      <video
        class="video"
        :preload="preload"
        :poster="`/img/vpic/${moviePic}`"
        align="center"
        :controls="controls"
        :src="`/img/movie/${movieSrc}`"
        autoplay
      >
        <source type="video/mp4" />
      </video>
    </div>
    <!-- 视频标题 -->
    <div
      class="video-titile"
      v-for="(item, i) in movie.result"
      :key="'video-titile -' + i"
    >
      <div class="ptitle">
        <img
          class="img"
          :src="`${item.fmpic}`"
          alt=""
          style="width: 2.5rem; height: 2.5rem; border-radius: 50%"
        />
        <span>{{ item.title }}</span>
      </div>
      <div class="vtitle">
        <span>{{ movieTitle }}</span>
      </div>
      <div class="bf">
        <span>{{ value }}万次播放</span>
      </div>
    </div>
    <!-- 购票链接 -->
    <div class="buy1" v-for="(item, i) in movie.result" :key="'buy -' + i">
      <div class="movie-img">
        <img :src="`${item.fmpic}`" />
      </div>
      <ul class="movie-info">
        <li style="">
          <span>{{ item.title }}</span>
          <span>正在热映</span>
        </li>
        <li>
          <span>淘票票评分</span>
          <span>{{ item.tuijian*10 }}</span>
          <span>| 李现 雷佳音 辛芷蕾...</span>
        </li>
        <li>
          <router-link to="/choosecinema">
            <div class="buy1-btn">购票</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 视频列表 -->
    <div
      class="video-list"
      v-for="(item, i) in video.result"
      :key="'video-list -' + i"
      @click="handleChangeMovie(item)"
    >
      <div class="movie-video">
        <video
          class="video"
          :preload="preload"
          :poster="`/img/vpic/` + item.vpic"
          align="center"
          :controls="controls"
          width="150rem"
        >
          <source :src="`/img/movie/` + item.addr" type="video/mp4" />
        </video>
      </div>
      <div class="right-title">
        <div>{{ item.title }}</div>
        <div>{{ data }}万次播放</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      videoSrc: "/img/movie/antique.mp4",
      videoImg: "/img/vpic/vp001.jpg",
      playStatus: "",
      muteStatus: "",
      isMute: true,
      isPlay: false,
      preload: "auto",
      controls: true,
      video: [],
      movie: [],
      movieTitle: "电影真好看",
      movieSrc: "antique.mp4",
      moviePic: "vp001.jpg",
      data: "",
    };
  },
  computed: {
    ...mapState(["choosemovie"]),
  },
  created() {
    this.getRandomInt(1, 10), this.getRandomInt1(1, 10);
  },

  methods: {
    getRandomInt() {
      this.data = Math.floor(Math.random() * 100 + 1);
    },
    getRandomInt1() {
      this.value = Math.floor(Math.random() * 100 + 1);
    },
    ...mapMutations({ changemovie: "changemovie" }),
    getvideo() {
      axios
        .get(
          `v1/details/video?detailid=${this.choosemovie}`
        )
        .then((res) => {
          console.log(res);
          this.movieTitle = res.data.result[0].title;
          this.movieSrc = res.data.result[0].addr;
          this.video = res.data;
        });
    },
    getmovie() {
      axios
        .get(`v1/details/home?did=${this.choosemovie}`)
        .then((res) => {
          console.log(res);
          this.movie = res.data;
        });
    },
    handleChangeMovie(e) {
      console.log(e);
      this.movieTitle = e.title;
      this.movieSrc = e.addr;
      this.moviePic = e.vpic;
    },
  },
  mounted() {
    let id = this.choosemovie;
    console.log("当前加载的电影ID:" + id);
    this.getvideo();
    this.getmovie();
  },
};
</script>

<style  scoped>
.ptitle {
  margin-left: 1rem;
}

.ptitle span {
  margin-left: 1rem;
  color: gray;
}

.vtitle {
  margin-left: 1rem;
  margin-right: 1rem;
  text-indent: 0.5em;
  font-weight: 600;
}

.bf span {
  margin-left: 1rem;
  color: gray;
  font-size: 0.8125rem;
}

.buy1 {
  height: 5rem;
  background-color: #e9e9e9;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  margin-top: 1.8rem;
}

.movie-img > img {
  width: 3.5rem;
  float: left;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
}

.movie-info {
  /* line-height:1.8rem; */
  position: relative;
  top: 1rem;
}

.movie-info li:first-child {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.8125rem;
}

.movie-info li:first-child > span:not(:first-child) {
  margin-left: 0.5rem;
  color: rgb(224, 105, 125);
}

.movie-info li:not(:first-child) {
  color: gray;
  font-size: 0.75rem;
}

.movie-info li:nth-child(2) > span:nth-child(2) {
  color: orange;
  font-weight: 600;
  margin-left: 0.3rem;
  margin-right: 0.1rem;
}

.movie-info li:nth-child(2) > span:nth-child(3) {
  margin-left: 0.1rem;
}

.movie-info li:nth-child(3) {
  position: relative;
  bottom: 2.2rem;
  left: 0.8rem;
}

.buy1-btn {
  float: right;
  width: 3.3rem;
  height: 1.8rem;
  border-radius: 0.9375rem;
  border: 0.0625rem solid rgb(224, 105, 125);
  color: rgb(224, 105, 125);
  margin-right: 1.3rem;
  text-align: center;
  line-height: 1.8rem;
}

.video-list {
  margin-top: 1.5rem;
  margin-right: 1rem;
  margin-left: 1rem;
  /* margin-bottom:1rem; */
}

.movie-video > video {
  float: left;
  margin-right: 0.8rem;
}

.right-title div:first-child {
  font-size: 0.875rem;
  position: relative;
  top: 0.5rem;
}

.right-title div:last-child {
  font-size: 0.75rem;
  margin-top: 0.7rem;
  color: gray;
}
</style>