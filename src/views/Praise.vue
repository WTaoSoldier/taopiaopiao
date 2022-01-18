<template>
  <div>
    <!-- 口碑 -->
    <mt-header title="热映影片口啤趋势" fixed>
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="ebody">
      <div class="e-one">
        <!-- 第一大模块 热榜 -->
        <div class="one-top">
          <!--热榜 头-->
          <img
            src="/img/xggpic/火焰标志.png"
            style="
              float: left;
              width: 1.2rem;
              height: 1.2rem;
              margin-top: 0.2rem;
            "
            alt=""
          /><!--火焰logo-->
          <span style="float: left; font-size: 1.1rem"><b>24</b>小时热榜</span
          ><!--左字-->
          <span
            style="
              float: right;
              font-size: 0.5rem;
              color: #959aa5;
              margin-top: 0.1rem;
            "
            >查看完整榜单 ＞</span
          >
          <!--右字-->
        </div>
        <div  class="one-boot">
          <!--热榜 脚-->

          <div class="boot-aline">
            <!--脚内一行-->
            <div class="oppl1">
              <!--每行小块-->
              <div class="ranking"><!--名次--></div>
              <img src="/img/xggpic/xssn.jpg" alt="" /><!--左图 -->
              <div>
                <!--右双排字 -->
                <span style="font-size: 1rem"><b>#</b>文化自信</span
                ><img src="/img/xggpic/等待中.png" alt="" /><br />
                <span>雄狮少年<a>9.3</a></span>
              </div>
            </div>
            <div class="oppl2">
              <!--每行小块-->
              <div class="ranking"><!--名次--></div>
              <img src="/img/fengmian/001.png" alt="" /><!--左图 -->
              <div>
                <!--右双排字 -->
                <span style="font-size: 1rem"><b>#</b>鉴定大师</span
                ><img src="/img/xggpic/等待中.png" alt="" /><br />
                <span>古董局中局<a>8.9</a></span>
              </div>
            </div>
          </div>
          <div class="boot-aline">
            <!--脚内一行-->
            <div class="oppl1">
              <!--每行小块-->
              <div class="ranking"><!--名次--></div>
              <img src="/img/fengmian/002.png" alt="" /><!--左图 -->
              <div>
                <!--右双排字 -->
                <span style="font-size: 1rem"><b>#</b>抗美援朝</span
                ><img src="/img/xggpic/上箭头.png" alt="" /><br />
                <span>长津湖<a>9.5</a></span>
              </div>
            </div>
            <div class="oppl2">
              <!--每行小块-->
              <div class="ranking"><!--名次--></div>
              <img src="/img/xggpic/myfs.jpg" alt="" /><!--左图 -->
              <div>
                <!--右双排字 -->
                <span style="font-size: 1rem"><b>#</b>夕阳之歌</span
                ><img src="/img/xggpic/上箭头.png" alt="" /><br />
                <span
                  >梅艳芳<br /><span
                    style="font-size: 0.5rem; margin-left: -0.3rem"
                    ><a>9.3万</a>人想看</span
                  ></span
                >
              </div>
            </div>
          </div>
          <div class="boot-aline">
            <!--脚内一行-->
            <div class="oppl1">
              <!--每行小块-->
              <div class="ranking"><!--名次--></div>
              <img src="/img/xggpic/wxhs.png" alt="" /><!--左图 -->
              <div>
                <!--右双排字 -->
                <span style="font-size: 1rem"><b>#</b>传奇特工</span
                ><img src="/img/xggpic/下箭头.png" alt="" /><br />
                <span>007无暇赴死<a>6.7</a></span>
              </div>
            </div>

            <div class="oppl2">
              <!--每行小块-->
              <div class="ranking"><!--名次--></div>
              <img src="/img/xggpic/tdyx.png" alt="" /><!--左图 -->
              <div>
                <!--右双排字 -->
                <span style="font-size: 1rem"><b>#</b>革命精神</span
                ><img src="/img/xggpic/上箭头.png" alt="" /><br />
                <span>铁道英雄<a>9.1</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="e-two">
        <!--第二大模块 一周哈评大赏-->
        <div class="two-top">
          <img src="/img/xggpic/笑脸.png" alt="" /><!--左-->
          <span style="float: left; margin-left: 0.4rem; font-weight: 600"
            >一周哈评大赏</span
          ><!--左-->
          <span style="float: right; font-size: 0.8rem; color: #959aa5;"
            >查看往期 ＞</span
          ><!--右-->
        </div>
        <div class="two-boot" style="top: 1rem">
          <div class="boot-qy">
            <!-- <div style="position：relative;color:white;">
              <span style="font-size:1.2rem;font-weight:600;">我看以后谁还敢动肖央的孩子!</span><br />
              <span style="font-size:0.5rem">本周电影:《误杀2》《雄狮少年》《跨过鸭绿江》</span>
            </div> -->
            <div class="lb_qy">
              <div class="marquee-wrap">
                <ul class="marquee-list" :class="{ 'animate-up': animateUp }">
                  <li v-for="(item, index) in listData" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!--字排-->
          <img src="/img/xggpic/ws2.jpg" alt="" />
        </div>
      </div>
      <div class="e-three">
        <!--最后大模块 影评排名赛-->
        <div class="three-top">
          <!--头-->
          <img src="/img/xggpic/比剑.png" alt="" />
          <span> 影评排名赛 </span>
        </div>
        <div class="three-boot">
          <!--脚-->
          <div class="oppl">
            <!--每行小块-->
            <div class="zsj">
              <span>火爆</span>
            </div>
            <!--左上角 热门-->
            <img src="/img/xggpic/cjh.jpg" alt="" />
            <div class="wz">
              <span>长津湖之战取得胜利！</span>
            </div>
          </div>

          <div class="oppl">
            <!--每行小块-->
            <div class="zsj">
              <span>热门</span>
            </div>
            <!--左上角 热门-->
            <img src="/img/xggpic/ws2hb.jpg" alt="" />
            <div class="wz">
              <span>善恶只在一念之间</span>
            </div>
          </div>

           <div class="oppl">
            <!--每行小块-->
            <div class="zsj">
              <span>热门</span>
            </div>
            <!--左上角 热门-->
            <img src="/img/xggpic/gdjzj.png" alt="" />
            <div class="wz">
              <span>古董结局之谜 破骗局识人心</span>
            </div>
          </div>

           <div class="oppl">
            <!--每行小块-->
            <div class="zsj">
              <span>已下架</span>
            </div>
            <!--左上角 热门-->
            <img src="/img/xggpic/hgf.jpg" alt="" />
            <div class="wz">
              <span>漫威英雄之战 黑寡妇逆袭</span>
            </div>
          </div>
           <div class="oppl">
            <!--每行小块-->
            <div class="zsj">
              <span>已下架</span>
            </div>
            <!--左上角 热门-->
            <img src="/img/xggpic/myf.png" alt="" />
            <div class="wz">
              <span>生如夏花之绚烂，死如秋叶之静美</span>
            </div>
          </div>
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
        "游客A:哭了哭了！...",
        "游客B:谁能想到唱小苹果的演技这么好",
        "游客C:彩蛋证实了我的想法，一切都是剧本",
        "游客D:好不容易开个盲盒中奖，偏偏......",
        "游客E:影片表达了我想要的三个字，哭拉了..",
        "游客F:没想到我的老婆看了之后，神情绷不住了..",
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
.ebody {
  width: 100%;
  height: 100%;
  margin-top: 2.5rem;
  font-size: 1rem;
  padding: 0.5rem;
  .e-one {
    .one-top {
      width: 100%;
      height: 2rem;
      padding: 0.2rem;
      span {
        font-family: 方正宋体;
      }
    }
    .one-boot {
      width: 100%;
      height: 100%;
      padding: 0.5rem 0.2rem 0.5rem;
      .boot-aline {
        width: 100%;
        height: 5rem;
        overflow: hidden;
        padding: 0.1rem 0 0.1rem;
        margin-bottom: 0.35rem;
        .oppl1 {
          width: 50%;
          height: 4rem;
          float: left;
          font-size: 0.5rem;
          padding: 0.2rem;

          img {
            float: left;
            width: 2.5rem;
            height: 3.75rem;
            position: relative;
            border-radius: 0.25rem;
          }
          div {
            top: -3.5rem;
            left: -1.5rem;
            float: right;
            width: 6rem;
            height: 4rem;
            position: relative;
            img {
              float: right;
              width: 1rem;
              height: 1.2rem;
            }
            span {
              a {
                font-weight: 600;
                color: orange;
                margin-left: 0.3rem;
              }
            }
          }
        }
        .oppl2 {
          width: 50%;
          height: 4rem;
          float: right;
          font-size: 0.5rem;
          padding: 0.2rem;
          img {
            float: left;
            width: 2.5rem;
            height: 3.75rem;
            position: relative;
            border-radius: 0.25rem;
          }
          div {
            top: -3.5rem;
            left: -1.5rem;
            float: right;
            width: 6rem;
            height: 4rem;
            position: relative;
            img {
              float: right;
              width: 1rem;
              height: 1.2rem;
            }
            span {
              a {
                font-weight: 600;
                color: orange;
                margin-left: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
  .e-two {
    margin-top: -1.5rem;
    width: 100%;
    height: 100%;
    .two-top {
      width: 100%;
      height: 3rem;
      padding: 1.4rem 0.4rem 0.6rem;
      img {
        float: left;
        width: 1.2rem;
        height: 1.2rem;
      }
    }
    .two-boot {
      margin-top: 1rem;
      width: 100%;
      height: 100%;
      padding: 0 0.3rem 0;
      img {
        margin-top: 1rem;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
      .boot-qy {
        span {
          margin-left: 0.5rem;
          top: 8rem;
          position: relative;
          color: rgba(255, 255, 255, 0.486);
        }
        .lb_qy {
          position: relative;
          margin-top: -10rem;
          top: 20rem;
          .marquee-wrap {
            position: relative;
            width: 80%;
            height: 2.25rem;
            border-radius: 1.25rem;
            background-color: rgba(97, 97, 97, 0.349);
            margin: 1rem 0.5rem 0;
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
      }
    }
  }
  .e-three {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    .three-top {
      width: 100%;
      height: 3rem;
      padding: 0.5rem 0;
      img {
        width: 2rem;
        height: 2rem;
        margin-top: -0.2rem;
        position: relative;
      }
      span {
        font-weight: 600;
        font-size: 1.4rem;
      }
    }
    .three-boot {
      margin-top: 0.5rem;
      width: 100%;
      height: 100%;
      padding: 0.2rem;
      .oppl {
        margin-top: 1rem;
        .zsj{
          
          width: 2.5rem;
          height:1rem;
          top: 1rem;
          border-radius: 0.25rem 0 0.25rem 0;
          text-align: center;
          position: relative;
          background: -webkit-gradient(linear, 100% 0, 0 0, from( #ff92ae), to(#fa9e50 ));
          color: white;
          font-size: 0.5rem;
        }
        img {
          width: 100%;
          height: 10rem;
          border-radius: 0.5rem;margin-bottom: 1rem;
        }
        .wz {
          margin-top: 1rem;
          width: 100%;
          span {
            margin-top: 0.25rem;
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>