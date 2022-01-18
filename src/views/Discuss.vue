<template>
  <!-- 全部评论 钟瑞 -->
  <div>
    <div
      class="video-detail"
      style="margin-bottom: 2.5rem"
      v-for="(item, i) in movie.result"
      :key="i"
    >
      <!-- 顶部栏 -->

      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.back(-1)"
            >&nbsp;&nbsp;{{ item.title }}的影评</mt-button
          >
        </mt-header>
      </header>
    </div>
    <!-- 分类 -->
    <div class="q">
      <div class="nav" style="margin-left: 1.5rem">
        <mt-button
          size="small"
          @click.native.prevent="active = 'tab-container1'"
          >全部评论</mt-button
        >
        <mt-button
          size="small"
          @click.native.prevent="active = 'tab-container2'"
          style="margin-left: 1rem; margin-right: 1rem"
          >最新评论</mt-button
        >
        <mt-button
          size="small"
          @click.native.prevent="active = 'tab-container3'"
          >满星评论</mt-button
        >
      </div>
    </div>

    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active">
        <mt-tab-container-item id="tab-container1">
          <!-- 全部 -->
          <mt-cell>
            <div
              class="comment"
              style="width: 100%; margin-bottom: 1rem; margin-top: 2rem"
              v-for="(item, i) in comment.result"
              :key="'video-list -' + i"
            >
              <div class="tx">
                <div class="zuo">
                  <img :src="`${item.upic}`" alt="" />
                </div>
                <div class="you">
                  <div class="you1">{{ item.uname }}</div>
                  <div class="star" style="margin-top: 0.3125rem">
                    <van-rate
                      :value="handleStarData(item.score)"
                      :count="5"
                      :size="15"
                      color="#ffd21e"
                      void-icon="star"
                      readonly
                    />
                    <span class="score" style="margin-left: 1rem">{{
                      item.score
                    }}</span>
                  </div>
                </div>
              </div>

              <div class="pl">
                <div
                  style="margin-top: 1rem; margin-bottom: 0.5rem; color: black"
                >
                  {{ item.title }}
                </div>
                <div style="font-size: 0.875rem">{{ item.pltime | moment }}</div>
              </div>

              <div class="dz" @click="toggleDz2(i)">
                <i class="iconfont" v-show="!item.dianzan">&#xe8ad;</i>
                <i class="iconfont" style="color: red" v-show="item.dianzan"
                  >&#xe8c3;</i
                >
                {{ item.xsdz }}
              </div>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <!-- 最新 -->
          <mt-cell>
            <div
              class="comment"
              style="width: 100%; margin-bottom: 1rem; margin-top: 2rem"
              v-for="(item, i) in new_comment.result"
              :key="'video-list -' + i"
            >
              <div class="tx">
                <div class="zuo">
                  <img :src="`${item.upic}`" alt="" />
                </div>
                <div class="you">
                  <div class="you1">{{ item.uname }}</div>
                  <div class="star" style="margin-left: 0rem; margin-top: 0.3125rem">
                    <van-rate
                      :value="handleStarData(item.score)"
                      :count="5"
                      :size="15"
                      color="#ffd21e"
                      void-icon="star"
                      readonly
                    />
                    <span class="score" style="margin-left: 1rem">{{
                      item.score
                    }}</span>
                  </div>
                </div>
              </div>

              <div class="pl">
                <div
                  style="margin-top: 1rem; margin-bottom: 0.5rem; color: black"
                >
                  {{ item.title }}
                </div>
                <div style="font-size: 0.875rem">{{ item.pltime | moment }}</div>
              </div>

              <div class="dz" @click="toggleDz1(i)">
                <i class="iconfont" v-show="!item.dianzan">&#xe8ad;</i>
                <i class="iconfont" style="color: red" v-show="item.dianzan"
                  >&#xe8c3;</i
                >
                {{ item.xsdz }}
              </div>
            </div>
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <!-- 满星 -->
          <mt-cell>
            <div
              class="comment"
              style="width: 100%; margin-bottom: 1rem; margin-top: 2rem"
              v-for="(item, i) in score_comment.result"
              :key="'comment -' + i"
            >
              <div class="tx">
                <div class="zuo">
                  <img :src="`${item.upic}`" alt="" />
                </div>
                <div class="you">
                  <div class="you1">{{ item.uname }}</div>
                  <div class="star" style="margin-left: 0rem; margin-top: 0.3125rem">
                    <van-rate
                      :value="handleStarData(item.score)"
                      :count="5"
                      :size="15"
                      color="#ffd21e"
                      void-icon="star"
                      readonly
                    />
                    <span class="score" style="margin-left: 1rem">{{
                      item.score
                    }}</span>
                  </div>
                </div>
              </div>

              <div class="pl">
                <div
                  style="margin-top: 1rem; margin-bottom: 0.5rem; color: black"
                >
                  {{ item.title }}
                </div>
                <div style="font-size: 0.8rem;">{{ item.pltime | moment }}</div>
              </div>

              <div class="dz" @click="toggleDz(i)">
                <i class="iconfont" v-show="!item.dianzan">&#xe8ad;</i>
                <i class="iconfont" style="color: red" v-show="item.dianzan"
                  >&#xe8c3;</i
                >
                {{ item.xsdz }}
              </div>
            </div>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
 
<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "page-tab-container",

  data() {
    return {
      active: "tab-container1",
      comment: [],
      value: null,
      new_comment: [],
      score_comment: [],
      movie: [],
      temp: true,
      temp1: true,
      temp2: true,
    };
  },
  computed: {
    ...mapState(["choosemovie"]),
  },
  created() {
    axios
      .get(
        `v1/details/all_comment?detailid=${this.choosemovie}`
      )
      .then((res) => {
        console.log(res);
        this.comment = res.data;
      });
    axios
      .get(
        `v1/details/new_comment?detailid=${this.choosemovie}`
      )
      .then((res) => {
        console.log(res);
        this.new_comment = res.data;
      });
    axios
      .get(
        `v1/details/score_comment?detailid=${this.choosemovie}`
      )
      .then((res) => {
        console.log(res);
        this.score_comment = res.data;
      });
    axios
      .get(`v1/details/home?did=${this.choosemovie}`)
      .then((res) => {
        console.log(res);
        this.movie = res.data;
      });
  },
  methods: {
    toggleDz(index) {
      if (!this.score_comment.result[index].temp) {
        this.score_comment.result[index].xsdz++;
        this.score_comment.result[index].dianzan = true;
        this.score_comment.result[index].temp = true;
      } else {
        this.score_comment.result[index].xsdz--;
        this.score_comment.result[index].dianzan = false;
        this.score_comment.result[index].temp = false;
      }
    },
    toggleDz1(index) {
      if (!this.new_comment.result[index].temp1) {
        this.new_comment.result[index].xsdz++;
        // this.temp1 =!this.temp1
        this.new_comment.result[index].dianzan = true;
        this.new_comment.result[index].temp1 = true;
      } else {
        this.new_comment.result[index].xsdz--;
        // this.temp1 =!this.temp1
        this.new_comment.result[index].dianzan = false;
        this.new_comment.result[index].temp1 = false;
      }
    },
    toggleDz2(index) {
      if (!this.comment.result[index].temp2) {
        this.comment.result[index].xsdz++;
        this.comment.result[index].dianzan = true;
        this.comment.result[index].temp2 = true;
      } else {
        this.comment.result[index].xsdz--;
        this.comment.result[index].dianzan = false;
        this.comment.result[index].temp2 = false;
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
  },
  mounted() {
    let id = this.choosemovie;
    console.log("当前加载的电影ID:" + id);
  },
};
</script>
<style lang="scss" scoped>
@import url("../assets/icon/iconfont.css");
</style>
<style lang="scss" scoped>
.pl {
  margin-left: 1rem;
  display: inline-block;
}
.dz {
  position: absolute;
  right: 1rem;
}
.tx {
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  .zuo {
    img {
      width: 3rem;
      height: 3rem;
      display: inline-block;
      border-radius: 3.125rem;
      margin-left: 1rem;
    }
  }
  .you {
    margin-left: 1rem;

    .you1 {
      display: inline-block;
      color: black;
    }
    .star {
      .score {
        font-weight: 600;
        font-size: 1rem;
        color: #FFD21E;
      }
    }
  }
}

.item {
  display: inline-block;
}
.q {
  width: 100%;
  height: 4rem;
  background-color: white;
  position: fixed;
  z-index: 1000;
}
.nav {
  padding: 0.5rem;
  margin-left: 0rem !important ;
}

.link {
  color: inherit;
  padding: 1.25rem;
  display: block;
}
.nav .mint-button {
  border-radius: 2.8125rem;
  padding-top: 0.4rem;
  width: 5rem;
  font-size: 0.75rem;
  border: 0.0625rem solid #e5e5e5;
  color: black;
}
.icon-dianzan1 {
  background-color: red;
}

.active {
  background: #fd7522;
  border: 0.0625rem solid #fd7522;
  color: #fff;
}
</style>