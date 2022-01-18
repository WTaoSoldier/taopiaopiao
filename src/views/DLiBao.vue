<template>
  <div>
    <mt-header title="" fixed>
      <mt-button slot="left" icon="back" @click="btn"
        >每周必抢电影礼包</mt-button
      >
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <div class="ebody">
        <div class="hong_qy">
          <div class="hang_one">
            <a class="max">领取成功</a><br />
            <a class="min">奖品可在 淘票票-我的-优惠券 中查看</a>
          </div>
          <div class="hang_two">
            <div class="hd_xm">
              <ul>
                <li>
                  <div class="a">
                    <div class="c">
                      <div>
                        <span>3元电影代金券</span><br />
                        <pre>有效期至：2021-12-20</pre>
                      </div>
                    </div>
                    <div class="b">
                      <div>
                        <a>3<span>元</span></a>
                      </div>
                    </div>
                    <div class="yuan1"></div>
                    <div class="yuan2"></div>
                  </div>
                </li>
                <li>
                  <div class="a">
                    <div class="c">
                      <div>
                        <span>3元电影代金券</span><br />
                        <pre>有效期至：2021-12-20</pre>
                      </div>
                    </div>
                    <div class="b">
                      <div>
                        <a>3<span>元</span></a>
                      </div>
                    </div>
                    <div class="yuan1"></div>
                    <div class="yuan2"></div>
                  </div>
                </li>
                <li>
                  <div class="a">
                    <div class="c">
                      <div>
                        <span>3元电影代金券</span><br />
                        <pre>有效期至：2021-12-20</pre>
                      </div>
                    </div>
                    <div class="b">
                      <div>
                        <a>3<span>元</span></a>
                      </div>
                    </div>
                    <div class="yuan1"></div>
                    <div class="yuan2"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="hang_three">
            <div class="btn_qy">
              <button @click="$router.push('/home')">去使用</button>
            </div>
          </div>
        </div>
        <div class="off_qy">
          <div class="bianyuan">
            <button class="btn" @click="btn">╳</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn1() {
      this.$router.push("/gifts");
    },
    btn() {
      this.$router.push("/giftss");
    },
    btn2() {
      this.$router.push("/gifts");
    },
  },
};
</script>


<style lang="scss" scoped>
// 背景
.ebody {
  width: 100%;
  height: 60rem;
  background-color: rgba(0, 0, 0, 0.472);
  padding: 6rem 3rem 20rem 3rem;
  //红区域
  .hong_qy {
    background-color: rgb(245, 58, 24);
    border-radius: 0.5rem;
    width: 100%;
    height: 25rem;
    padding: 2rem 1rem 1rem 1rem;
    // 红区域内第一行
    .hang_one {
      text-align: center;
      color: white;
      .max {
        font-size: 1.5rem;
      }
      .min {
        font-size: 0.85rem;
      }
    }
    // 红区域内第二行
    .hang_two {
      margin-top: 1rem;
      width: 100%;
      height: 13rem;
      background-color: transparent;
      // 上下滑动
      .hd_xm::-webkit-scrollbar {
        -webkit-appearance: none;
      }
      .hd_xm::-webkit-scrollbar:vertical {
        width: 0.6875rem;
      }
      .hd_xm::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        border: 0.125rem solid rgba(180, 180, 180, 0.534);
        background-color: rgb(216, 216, 216);
      }
      .hd_xm {
        overflow-y: auto;
        ul {
          padding: 0.5rem 0 0rem;
          height: 13rem;
          overflow: auto;
          li {
            margin-bottom: 0.5rem;
            display: flex;

            .a {
              position: relative;
              width: 15.75rem;
              height: 5.25rem;
              background: -webkit-gradient(
                linear,
                100% 0,
                0 0,
                from(#fff3d1),
                to(#fefefc)
              );
              /* border: 0.125rem solid black; */
              display: flex;
              position: relative;
              overflow: hidden;
              // 右
              .b {
                width: 6.25rem;
                height: 6.25rem;
                /* background-color: rgba(255, 255, 255, 0); */
                display: inline-block;
                border-left: 0.125rem dashed rgb(163, 154, 154);
                div {
                  margin-top: 1.5rem;
                  margin-left: 1.75rem;
                  a {
                    font-size: 1.75rem;
                    color: #c02200;
                    
                    span {
                      font-size: 0.5rem;
                    }
                  }
                }
              }
              // 左
              .c {
                width: 12.5rem;
                height: 6.25rem;
                /* background-color: rgba(255, 255, 255, 0); */
                display: inline-block;
                div {
                  font-size: 0.5rem;
                  margin: 1rem 0 0 0.75rem;
                  span {
                    color: #d4586a;
                    font-size: 0.6rem;
                    font-weight: 600;
                  }
                  pre {
                    color: rgb(190, 190, 190);
                    font-family: 黑体;
                    font-weight: 500;
                  }
                }
              }
              .yuan1 {
                position: absolute;
                background-color: rgb(245, 58, 24);
                top: -0.6rem;
                left: 9.8rem;
                border-radius: 50%;
                /* z-index: 3; */
                width: 1rem;
                height: 1rem;
              }

              .yuan2 {
                position: absolute;
                background-color: rgb(245, 58, 24);
                top: 4.8rem;
                left: 9.8rem;
                border-radius: 50%;
                /* z-index: 3; */
                width: 1rem;
                height: 1rem;
                display: flex;
              }
            }
          }
        }
      }
    }
    // 红区域内第三行
    .hang_three {
      margin-top: 1rem;
      width: 100%;
      height: 3rem;
      padding: 0 1rem 0 1rem;
      .btn_qy {
        width: 13.5rem;
        height: 2.5rem;
        border: 0.0625rem solid white;
        border-radius: 2rem 2rem;
        button {
          border: none;
          background-color: transparent;
          text-align: center;
          color: white;
          font-size: 1rem;
          padding: 0.5rem 4.5rem 0.5rem 5.25rem;
        }
      }
    }
  }
  // 关闭
  .off_qy {
    margin-top: 1.5rem;
    width: 100%;
    height: 3rem;
    background-color: rgba(138, 135, 135, 0.493);
    padding: 0.4rem 7.5rem 0.4rem 7.5rem;
    .bianyuan {
      width: 2.2rem;
      height: 2.2rem;
      padding: 0.1rem;
      background-color: rgba(255, 255, 255, 0.609);
      border-radius: 50%;
      .btn {
        width: 2rem;
        height: 2rem;
        border: none;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.301);
        padding: 0.1rem;
        color: rgba(255, 255, 255, 0.671);
      }
    }
  }
}
</style>