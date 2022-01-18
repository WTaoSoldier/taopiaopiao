<template>
  <div>
    <!-- 徐高广-邀请好友页 -->
    <mt-header title="邀好友上涛票票看电影" fixed>
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- 上部分 -->

    <div class="head-image">
      <img src="/img/xggpic/lhyou1.png" />
      <div class="head_qy">
        <div class="gp——qy">
          <div class="gz_btn">
            <button id="btn" @click="gz">规则</button>
          </div>
          <!-- <div class="ptjl_btn">
            <button>
              <a>拼团<br />记录</a>
            </button>
          </div> -->
        </div>
        <div class="lb_qy">
          <div class="marquee-wrap">
            <ul class="marquee-list" :class="{ 'animate-up': animateUp }">
              <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="ebody">
      <div class="white_qy">
        <div class="white_one">
          <!--第一行 -->
          <p class="l"><a style="color: red">6人</a>团</p>
          <p class="r"><a style="color: red">79648</a>人正在参团</p>
        </div>
        <div class="white_two">
          <!--第二行 -->
          <img class="t1" src="/img/xggpic/a.png" alt="" />
          <img class="t2" src="/img/xggpic/b.png" alt="" />
        </div>
        <div class="white_three">
          <a class="la" style="font-size: 0.85rem">《雄狮少年20券》</a
          ><a class="rb" style="margin-top: 0.225rem; font-size: 0.85rem"
            >《雄狮少年15券》</a
          >
        </div>
        <div class="white_btn">
          <button class="btn2">去发团赢大奖</button>
        </div>
      </div>
      <div class="tub">
        <img class="btntu" src="/img/xggpic/tppipt.jpg" />
      </div>
    </div>
    <!-- 第二张白 -->
    <div class="ebody" style="margin-top: 18.5rem">
      <div class="white_qy">
        <div class="white_one">
          <!--第一行 -->
          <p class="l"><a style="color: red">5人</a>团</p>
          <p class="r"><a style="color: red">7120</a>人正在参团</p>
        </div>
        <div class="white_two">
          <!--第二行 -->
          <img class="t1" src="/img/xggpic/c.png" alt="" />
          <img class="t2" src="/img/xggpic/d.png" alt="" />
        </div>
        <div class="white_three">
          <a class="la" style="font-size: 0.85rem">15元《误杀2》万达影券</a
          ><a class="rb" style="margin-top: 0.225rem; font-size: 0.85rem"
            >10元《误杀2》万达影券</a
          >
        </div>
        <div class="white_btn">
          <button class="btn2">去发团赢大奖</button>
        </div>
      </div>
      <div class="tub">
        <img class="btntu" src="/img/xggpic/tppipt.jpg" />
      </div>
    </div>
    <div class="ebody" style="margin-top: 37.25rem">
      <div class="white_qy">
        <div class="white_one">
          <!--第一行 -->
          <p class="l"><a style="color: red">5人</a>团</p>
          <p class="r"><a style="color: red">7120</a>人正在参团</p>
        </div>
        <div class="white_two">
          <!--第二行 -->
          <img class="t1" src="/img/xggpic/a.png" alt="" />
          <img class="t2" src="/img/xggpic/b.png" alt="" />
        </div>
        <div class="white_three">
          <a class="la">10元电影代金券</a
          ><a class="rb" style="margin-right:2rem">6元电影代金券券</a>
        </div>
        <div class="white_btn">
          <button class="btn2">去发团赢大奖</button>
        </div>
      </div>
      <div class="tub">
        <div class="qy">
          <img class="btntu" src="/img/xggpic/tppipt.jpg" /><br />
          <a style="font-size: 0.35rem;margin-left:23%; color: white"
            >微信搜索"涛票票电影"可以找到我</a
          >
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "marquee-up",
  data() {
    return {
      animateUp: false,
      listData: [
        "团长 陈*生 10人团组团成功，周末快乐看电影啦~",
        "团长 小*兽 10人团组团成功，周末快乐看电影啦~",
        "团长 t*5 5人团组团成功，周末快乐看电影啦~",
        "团长 薄***呐 10人团组团成功，周末快乐看电影啦~",
        "团长 小*兽 5人团组团成功，周末快乐看电影啦~",
        "团长 张*三 15人团组团成功，周末快乐看电影啦~",
      ],
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(this.scrollAnimate, 1500);
  },
  methods: {
    scrollAnimate() {
      this.animateUp = true;
      setTimeout(() => {
        this.listData.push(this.listData[0]);
        this.listData.shift();
        this.animateUp = false;
      }, 500);
    },
    gz() {
      this.$router.push("/gz");
    },
    destroyed() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style lang="scss" scoped>
.head-image {
  border: 0 solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  // position: fixed;
  margin-top: 1.875rem;
}

.head_qy {
  width: 100%;
  height: 20rem;
  position: absolute;
}

.gz_btn > button {
  margin-top: 2.5rem;
  border-radius: 1.5rem 0 0 1.5rem;
  width: 2.5rem;
  margin-left: 20.95rem;
  height: 1.5rem;
  padding: 0 0 0 0.5rem;
  border: none;
  background-color: rgba(143, 12, 12, 0.692);
  font-size: 0.75rem;
  color: white;
  transition: 0.75s;
}
.gz_btn > button:hover {
  border-radius: 1.5rem 0 0 1.5rem;
  margin-left: 20.5rem;
  width: 2.95rem;
  border: none;
  font-size: 0.75rem;
  color: white;
  padding-right: 0.75rem;
}

.ptjl_btn > button {
  margin-top: 1.25rem;
  border-radius: 1.5rem 0 0 1.5rem;
  width: 2.65rem;
  margin-left: 20.8rem;
  height: 2.5rem;
  border: none;
  background-color: rgb(253, 240, 116);
  font-size: 0.75rem;
  color: red;
  padding-left: 0.5rem;
  transition: 0.75s;
}
.ptjl_btn > button:hover {
  width: 3.25rem;
  margin-left: 20.2rem;
  height: 2.5rem;
}

.lb_qy {
  margin-top: 14.8rem;
  .marquee-wrap {
    width: 80%;
    height: 2.25rem;
    border-radius: 1.25rem;
    background-color: black;
    margin: 1.5rem 1rem 0;
    padding: -1rem 0 0;
    overflow: hidden;
    .marquee-list {
      padding: -0.5rem 0 0;
      li {
        width: 100%;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-top: 0;
        padding: 0 -0.5rem 1.3rem 0.5rem;
        list-style: none;
        line-height: 2.5rem;
        text-align: center;
        color: #fff;
        font-size: 0.75rem;
        font-weight: 400;
        position: relative;
      }
    }
    .animate-up {
      transition: all 0.5s ease-in-out;
      transform: translateY(-2.5rem);
    }
  }
}

.ebody {
  position: absolute;
  background-color: #86101c;
  width: 100%;
  margin-top: -0.25rem;
  height: 60%;
  padding: 0 0.75rem 0 0.75rem;
  border-radius: 0.5rem 0.5rem 0 0;
  .white_qy {
    height: 18rem;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
  }
}

.white_one {
  width: 100%;
  height: 2rem;
}
.white_one > .l {
  float: left;
}
.white_one > .r {
  float: right;
  margin-left: 3rem;
}

.white_two > .t1 {
  width: 9.5rem;
  height: 8rem;
  margin-right: 0.75rem;
}
.white_two > .t2 {
  width: 9.5rem;
  height: 8rem;
}
.whte_three {
  width: 100%;
  height: 2rem;
}
.white_three > .fa {
  float: left;
}
.white_three > .rb {
  float: right;
  margin-right: 1rem;
}
.white_btn {
  margin-top: 1rem;
  width: 100%;
  height: 2.8rem;
  padding: 0.2rem;
  color: white;
  font-size: 1.25rem;
}
.white_btn > button {
  border: none;
  height: 2.4rem;
  width: 100%;
  border-radius: 4rem;
}
.btn2 {
  /*! autoprefixer: off */
  background: -webkit-gradient(linear, 100% 0, 0 0, from(#ea3f4a), to(#fe965a));
}
.tub {
  width: 100%;
  height: 2rem;
  margin-top: 2rem;
  .qy {
    margin: auto;
    img,a{
      margin:0 21% 0;
    }
  }
}
</style>