<template>
  <div>
    <!-- 热销榜-徐高广 -->

    <mt-header style="width: 100%" title="影城卡影券爆款榜单" fixed>
      <mt-button slot="left" icon="back" @click="btn0"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="head">
      <!--定位-->
      <div class="dw-qy">
        <div class="head_dw" @click="btn1">
          <span>{{citychoose}}</span>
        </div>
        <div class="logo-qy">
          <div class="logo">
            <div class="bk">
              <img src="/img/xggpic/tpplogo2.png" alt="" />
            </div>
            <span>涛票票</span>
          </div>
        </div>
      </div>

      <!--大字下面的一排小字 -->
      <div class="qy" style="width: 100%; padding: 0 3.5rem 0; color: white">
        <div class="min_zi" style="text-align: center">
          <div style="font-size: 0.5rem; position: relative">
            卡首单+卡权益最高减<a>10</a>元 电影券优惠上折
          </div>
        </div>
      </div>
      <!--顶部-->
      <img style="margin-top: 1.6rem" src="/img/xggpic/tou.png" alt="" />
    </div>
    <div class="ebody">
      <div class="zhog" style="width: 100%; background-color: #ff8144">
        <!--中部-->
        <!-- 第一行列 -->
        <div class="z_one">
          <div class="z-top">
            <span>热映大片</span>
          </div>
          <div class="z-boot" style="display: flex">
            <div class="b">
              <div class="hei">
                <span
                  >{{ name }} <b>{{ fs }}</b></span
                >
              </div>
              <img :src="img1" alt="" />
              <div class="whi">
                <span>{{ name1 }}</span
                ><br />
                <a>{{ name2 }}</a>
                <button class="btn1" @click="btns1">{{ btnwz1 }}</button>
              </div>
            </div>
            <div class="b">
              <div class="hei">
                <span
                  >{{ name }} <b>{{ fs }}</b></span
                >
              </div>
              <img :src="img1" alt="" />
              <div class="whi">
                <span>{{ name1 }}</span
                ><br />
                <a>{{ name2 }}</a>
                <button class="btn1" @click="btns1">{{ btnwz1 }}</button>
              </div>
            </div>
            <div class="b">
              <div class="hei">
                <span
                  >{{ name }} <b>{{ fs }}</b></span
                >
              </div>
              <img :src="img1" alt="" />
              <div class="whi">
                <span>{{ name1 }}</span
                ><br />
                <a>{{ name2 }}</a>
                <button class="btn1" @click="btns1">{{ btnwz1 }}</button>
              </div>
            </div>
          </div>
          <div class="bootbtn-qy">
            <div class="btn" @click="btns2"><a>查看更多影片 ＞</a></div>
          </div>
        </div>
        <!-- 第二行列 -->
        <div class="z_two">
          <!--two -->
          <div class="z-boot" style="display: flex">
            <div class="b">
              <div class="twzi">
                <a>{{ sxk }}</a>
              </div>
              <img :src="img2" alt="" />
              <div class="whi2">
                <span style="font-size: 0.5rem">{{ name3 }}</span>
                <span
                  style="
                    color: red;
                    font-family: 华文宋体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>{{fh}}</a
                  >{{ price }}
                  <a style="color: #808080; text-decoration: line-through">{{
                    price1
                  }}</a></span
                >

                <button class="btn2">{{ btnwz2 }}</button>
              </div>
            </div>
            <div class="b">
              <div class="twzi">
                <a>{{ sxk }}</a>
              </div>
              <img :src="img2" alt="" />
              <div class="whi2">
                <span style="font-size: 0.5rem">{{ name3 }}</span>
                <span
                  style="
                    color: red;
                    font-family: 华文宋体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>{{fh}}</a
                  >{{ price }}
                  <a style="color: #808080; text-decoration: line-through">{{
                    price1
                  }}</a></span
                >
                <button class="btn2">{{ btnwz2 }}</button>
              </div>
            </div>
            <div class="b">
              <div class="twzi">
                <a>{{ sxk }}</a>
              </div>
              <img :src="img2" alt="" />
              <div class="whi2">
                <span style="font-size: 0.5rem">{{ name3 }}</span>
                <span
                  style="
                    color: red;
                    font-family: 华文宋体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>{{fh}}</a
                  >{{ price }}
                  <a style="color: #808080; text-decoration: line-through">{{
                    price1
                  }}</a></span
                >
                <button class="btn2">{{ btnwz2 }}</button>
              </div>
            </div>
          </div>
          <div class="none" v-show="isDisplay">
            <div class="two">
              <div class="z-boot" style="display: flex; margin-top: -0.25rem">
                <div class="b">
                  <div class="twzi">
                    <a>{{ sxk }}</a>
                  </div>
                  <img :src="img2" alt="" />
                  <div class="whi2">
                    <span style="font-size: 0.5rem">{{ name3 }}</span>
                    <span
                      style="
                        color: red;
                        font-family: 华文宋体;
                        font-size: 1.25rem;
                        font-weight: 600;
                      "
                      ><a>{{fh}}</a
                      >{{ price }}
                      <a
                        style="color: #808080; text-decoration: line-through"
                        >{{ price1 }}</a
                      ></span
                    >

                    <button class="btn2">{{ btnwz2 }}</button>
                  </div>
                </div>
                <div class="b">
                  <div class="twzi">
                    <a>{{ sxk }}</a>
                  </div>
                  <img :src="img2" alt="" />
                  <div class="whi2">
                    <span style="font-size: 0.5rem">{{ name3 }}</span>
                    <span
                      style="
                        color: red;
                        font-family: 华文宋体;
                        font-size: 1.25rem;
                        font-weight: 600;
                      "
                      ><a>￥</a>6.6
                      <a style="color: #808080; text-decoration: line-through"
                        >24</a
                      ></span
                    >
                    <button class="btn2">{{ btnwz2 }}</button>
                  </div>
                </div>
                <div class="b">
                  <div class="twzi">
                    <a>{{ sxk }}</a>
                  </div>
                  <img :src="img2" alt="" />
                  <div class="whi2">
                    <span style="font-size: 0.5rem">{{ name3 }}</span>
                    <span
                      style="
                        color: red;
                        font-family: 华文宋体;
                        font-size: 1.25rem;
                        font-weight: 600;
                      "
                      ><a>￥</a>6.6
                      <a style="color: #808080; text-decoration: line-through"
                        >24</a
                      ></span
                    >
                    <button class="btn2">{{ btnwz2 }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="none" v-show="isDisplay1">
            <div class="two">
              <div class="z-boot" style="display: flex; margin-top: -0.25rem">
                <div class="b">
                  <div class="twzi">
                    <a>{{ sxk }}</a>
                  </div>
                  <img :src="img2" alt="" />
                  <div class="whi2">
                    <span style="font-size: 0.5rem">{{ name3 }}</span>
                    <span
                      style="
                        color: red;
                        font-family: 华文宋体;
                        font-size: 1.25rem;
                        font-weight: 600;
                      "
                      ><a>￥</a>6.6
                      <a style="color: #808080; text-decoration: line-through"
                        >24</a
                      ></span
                    >

                    <button class="btn2">{{ btnwz2 }}</button>
                  </div>
                </div>
                <div class="b">
                  <div class="twzi">
                    <a>{{ sxk }}</a>
                  </div>
                  <img :src="img2" alt="" />
                  <div class="whi2">
                    <span style="font-size: 0.5rem">{{ name3 }}</span>
                    <span
                      style="
                        color: red;
                        font-family: 华文宋体;
                        font-size: 1.25rem;
                        font-weight: 600;
                      "
                      ><a>￥</a>6.6
                      <a style="color: #808080; text-decoration: line-through"
                        >24</a
                      ></span
                    >
                    <button class="btn2">{{ btnwz2 }}</button>
                  </div>
                </div>
                <div class="b">
                  <div class="twzi">
                    <a>{{ sxk }}</a>
                  </div>
                  <img :src="img2" alt="" />
                  <div class="whi2">
                    <span style="font-size: 0.5rem">{{ name3 }}</span>
                    <span
                      style="
                        color: red;
                        font-family: 华文宋体;
                        font-size: 1.25rem;
                        font-weight: 600;
                      "
                      ><a>￥</a>6.6
                      <a style="color: #808080; text-decoration: line-through"
                        >24</a
                      ></span
                    >
                    <button class="btn2">{{ btnwz2 }}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bootbtn-qy">
            <div class="btn" @click="changeDisplay">
              <a v-if="isDisplay == false">加载更多 ＞</a>
              <a v-else-if="isDisplay1 == false">加载更多 ＞</a>
              <a v-else>加载完毕</a>
            </div>
          </div>
        </div>
        <!-- 第三行列 -->
        <div class="z_three" style="margin-top: 0.5rem">
          <div class="z-top">
            <span>购影城卡 享折上折优惠</span>
          </div>
          <div class="z-boot" style="display: flex; margin-top: 0.5rem">
            <div class="b">
              <div class="bj" style="background-color: #8579d6">
                <div class="wz">
                  <span>影城卡</span><br />
                  <span><b>GGV</b>影城卡</span>
                </div>
                <div class="xtqy">
                  <div>
                    <div class="xt"></div>
                    <div class="xt1"></div>
                    <div class="xt2"></div>
                    <div class="xt3"></div>
                    <div class="xt4"></div>
                  </div>
                </div>
              </div>
              <div class="whi3">
                <span
                  ><a>￥</a>9.9
                  <a style="color: #808080; text-decoration: line-through"
                    >24</a
                  ></span
                >
                <div class="qy">
                  <div>
                    <div style="font-family: 方正宋体">
                      {{ gk }}
                    </div>
                  </div>
                </div>
                <button class="btn2" @click="$router.push('/yingchengka')">
                  {{ btnwz3 }}
                </button>
              </div>
            </div>
            <div class="b">
              <div class="bj" style="background-color: #fe8267">
                <div class="wz">
                  <span>影城卡</span><br />
                  <span><b>GGV</b>影城卡</span>
                </div>
                <div class="xtqy">
                  <div>
                    <div class="xt"></div>
                    <div class="xt1"></div>
                    <div class="xt2"></div>
                    <div class="xt3"></div>
                    <div class="xt4"></div>
                  </div>
                </div>
              </div>
              <div class="whi3">
                <span
                  style="
                    color: red;
                    font-family: 方正姚体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>￥</a>9.9
                  <a style="color: #808080; text-decoration: line-through"
                    >24</a
                  ></span
                >
                <div class="qy">
                  <div>
                    <div style="font-size: 0.5rem; font-family: 方正宋体">
                      {{ gk }}
                    </div>
                  </div>
                </div>
                <button class="btn2" @click="$router.push('/yingchengka')">
                  {{ btnwz3 }}
                </button>
              </div>
            </div>
            <div class="b">
              <div class="bj" style="background-color: #4fa8b0">
                <div class="wz">
                  <span>影城卡</span><br />
                  <span><b>GGV</b>影城卡</span>
                </div>
                <div class="xtqy">
                  <div>
                    <div class="xt"></div>
                    <div class="xt1"></div>
                    <div class="xt2"></div>
                    <div class="xt3"></div>
                    <div class="xt4"></div>
                  </div>
                </div>
              </div>
              <div class="whi3">
                <span
                  style="
                    color: red;
                    font-family: 方正姚体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>￥</a>9.9
                  <a style="color: #808080; text-decoration: line-through"
                    >24</a
                  ></span
                >
                <div class="qy">
                  <div>
                    <div style="font-size: 0.25rem; font-family: 方正宋体">
                      {{ gk }}
                    </div>
                  </div>
                </div>
                <button class="btn2" @click="$router.push('/yingchengka')">
                  {{ btnwz3 }}
                </button>
              </div>
            </div>
          </div>
          <div class="z-boot" style="display: flex; margin-top: 0.5rem">
            <!-- 隐藏了下面-->
            <div class="b">
              <div class="bj" style="background-color: #e08c4e">
                <div class="wz">
                  <span>影城卡</span><br />
                  <span><b>GGV</b>影城卡</span>
                </div>
                <div class="xtqy">
                  <div>
                    <div class="xt"></div>
                    <div class="xt1"></div>
                    <div class="xt2"></div>
                    <div class="xt3"></div>
                    <div class="xt4"></div>
                  </div>
                </div>
              </div>
              <div class="whi3">
                <span
                  style="
                    color: red;
                    font-family: 方正姚体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>￥</a>9.9
                  <a style="color: #808080; text-decoration: line-through"
                    >24</a
                  ></span
                >
                <div class="qy">
                  <div>
                    <div style="font-size: 0.25rem; font-family: 方正宋体">
                      {{ gk }}
                    </div>
                  </div>
                </div>
                <button class="btn2" @click="$router.push('/yingchengka')">
                  {{ btnwz3 }}
                </button>
              </div>
            </div>
            <div class="b">
              <div class="bj" style="background-color: #7189a1">
                <div class="wz">
                  <span>影城卡</span><br />
                  <span><b>GGV</b>影城卡</span>
                </div>
                <div class="xtqy">
                  <div>
                    <div class="xt"></div>
                    <div class="xt1"></div>
                    <div class="xt2"></div>
                    <div class="xt3"></div>
                    <div class="xt4"></div>
                  </div>
                </div>
              </div>
              <div class="whi3">
                <span
                  style="
                    color: red;
                    font-family: 方正姚体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>￥</a>9.9
                  <a style="color: #808080; text-decoration: line-through"
                    >24</a
                  ></span
                >
                <div class="qy">
                  <div>
                    <div style="font-size: 0.25rem; font-family: 方正宋体">
                      {{ gk }}
                    </div>
                  </div>
                </div>
                <button class="btn2" @click="$router.push('/yingchengka')">
                  {{ btnwz3 }}
                </button>
              </div>
            </div>
            <div class="b">
              <div class="bj" style="background-color: #de7fa8">
                <div class="wz">
                  <span>影城卡</span><br />
                  <span><b>GGV</b>影城卡</span>
                </div>
                <div class="xtqy">
                  <div>
                    <div class="xt"></div>
                    <div class="xt1"></div>
                    <div class="xt2"></div>
                    <div class="xt3"></div>
                    <div class="xt4"></div>
                  </div>
                </div>
              </div>
              <div class="whi3">
                <span
                  style="
                    color: red;
                    font-family: 方正姚体;
                    font-size: 1.25rem;
                    font-weight: 600;
                  "
                  ><a>￥</a>9.9
                  <a style="color: #808080; text-decoration: line-through"
                    >24</a
                  ></span
                >
                <div class="qy">
                  <div>
                    <div style="font-size: 0.25rem; font-family: 方正宋体">
                      {{ gk }}
                    </div>
                  </div>
                </div>
                <button class="btn2" @click="$router.push('/yingchengka')">
                  {{ btnwz3 }}
                </button>
              </div>
            </div>
          </div>
          <div class="on" v-show="b">
            <div class="z-boot" style="display: flex; margin-top: 0.5rem">
              <div class="b">
                <div class="bj" style="background-color: #8579d6">
                  <div class="wz">
                    <span>影城卡</span><br />
                    <span><b>GGV</b>影城卡</span>
                  </div>
                  <div class="xtqy">
                    <div>
                      <div class="xt"></div>
                      <div class="xt1"></div>
                      <div class="xt2"></div>
                      <div class="xt3"></div>
                      <div class="xt4"></div>
                    </div>
                  </div>
                </div>
                <div class="whi3">
                  <span
                    style="
                      color: red;
                      font-family: 方正姚体;
                      font-size: 1.25rem;
                      font-weight: 600;
                    "
                    ><a>￥</a>9.9
                    <a style="color: #808080; text-decoration: line-through"
                      >24</a
                    ></span
                  >
                  <div class="qy">
                    <div>
                      <div style="font-size: 0.25rem; font-family: 方正宋体">
                        {{ gk }}
                      </div>
                    </div>
                  </div>
                  <button class="btn2" @click="$router.push('/yingchengka')">
                    {{ btnwz3 }}
                  </button>
                </div>
              </div>
              <div class="b">
                <div class="bj" style="background-color: #fe8267">
                  <div class="wz">
                    <span>影城卡</span><br />
                    <span><b>GGV</b>影城卡</span>
                  </div>
                  <div class="xtqy">
                    <div>
                      <div class="xt"></div>
                      <div class="xt1"></div>
                      <div class="xt2"></div>
                      <div class="xt3"></div>
                      <div class="xt4"></div>
                    </div>
                  </div>
                </div>
                <div class="whi3">
                  <span
                    style="
                      color: red;
                      font-family: 方正姚体;
                      font-size: 1.25rem;
                      font-weight: 600;
                    "
                    ><a>￥</a>9.9
                    <a style="color: #808080; text-decoration: line-through"
                      >24</a
                    ></span
                  >
                  <div class="qy">
                    <div>
                      <div style="font-size: 0.25rem; font-family: 方正宋体">
                        {{ gk }}
                      </div>
                    </div>
                  </div>
                  <button class="btn2" @click="$router.push('/yingchengka')">
                    {{ btnwz3 }}
                  </button>
                </div>
              </div>
              <div class="b">
                <div class="bj" style="background-color: #4fa8b0">
                  <div class="wz">
                    <span>影城卡</span><br />
                    <span><b>GGV</b>影城卡</span>
                  </div>
                  <div class="xtqy">
                    <div>
                      <div class="xt"></div>
                      <div class="xt1"></div>
                      <div class="xt2"></div>
                      <div class="xt3"></div>
                      <div class="xt4"></div>
                    </div>
                  </div>
                </div>
                <div class="whi3">
                  <span
                    style="
                      color: red;
                      font-family: 方正姚体;
                      font-size: 1.25rem;
                      font-weight: 600;
                    "
                    ><a>￥</a>9.9
                    <a style="color: #808080; text-decoration: line-through"
                      >24</a
                    ></span
                  >
                  <div class="qy">
                    <div>
                      <div style="font-size: 0.25rem; font-family: 方正宋体">
                        {{ gk }}
                      </div>
                    </div>
                  </div>
                  <button class="btn2" @click="$router.push('/yingchengka')">
                    {{ btnwz3 }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="on" v-show="b1">
            <div class="z-boot" style="display: flex; margin-top: 0.5rem">
              <div class="b">
                <div class="bj" style="background-color: #e08c4e">
                  <div class="wz">
                    <span>影城卡</span><br />
                    <span><b>GGV</b>影城卡</span>
                  </div>
                  <div class="xtqy">
                    <div>
                      <div class="xt"></div>
                      <div class="xt1"></div>
                      <div class="xt2"></div>
                      <div class="xt3"></div>
                      <div class="xt4"></div>
                    </div>
                  </div>
                </div>
                <div class="whi3">
                  <span
                    style="
                      color: red;
                      font-family: 方正姚体;
                      font-size: 1.25rem;
                      font-weight: 600;
                    "
                    ><a>￥</a>9.9
                    <a style="color: #808080; text-decoration: line-through"
                      >24</a
                    ></span
                  >
                  <div class="qy">
                    <div>
                      <div style="font-size: 0.25rem; font-family: 方正宋体">
                        {{ gk }}
                      </div>
                    </div>
                  </div>
                  <button class="btn2" @click="$router.push('/yingchengka')">
                    {{ btnwz3 }}
                  </button>
                </div>
              </div>
              <div class="b">
                <div class="bj" style="background-color: #7189a1">
                  <div class="wz">
                    <span>影城卡</span><br />
                    <span><b>GGV</b>影城卡</span>
                  </div>
                  <div class="xtqy">
                    <div>
                      <div class="xt"></div>
                      <div class="xt1"></div>
                      <div class="xt2"></div>
                      <div class="xt3"></div>
                      <div class="xt4"></div>
                    </div>
                  </div>
                </div>
                <div class="whi3">
                  <span
                    style="
                      color: red;
                      font-family: 方正姚体;
                      font-size: 1.25rem;
                      font-weight: 600;
                    "
                    ><a>￥</a>9.9
                    <a style="color: #808080; text-decoration: line-through"
                      >24</a
                    ></span
                  >
                  <div class="qy">
                    <div>
                      <div style="font-size: 0.25rem; font-family: 方正宋体">
                        {{ gk }}
                      </div>
                    </div>
                  </div>
                  <button class="btn2" @click="$router.push('/yingchengka')">
                    {{ btnwz3 }}
                  </button>
                </div>
              </div>
              <div class="b">
                <div class="bj" style="background-color: #de7fa8">
                  <div class="wz">
                    <span>影城卡</span><br />
                    <span><b>GGV</b>影城卡</span>
                  </div>
                  <div class="xtqy">
                    <div>
                      <div class="xt"></div>
                      <div class="xt1"></div>
                      <div class="xt2"></div>
                      <div class="xt3"></div>
                      <div class="xt4"></div>
                    </div>
                  </div>
                </div>
                <div class="whi3">
                  <span
                    style="
                      color: red;
                      font-family: 方正姚体;
                      font-size: 1.25rem;
                      font-weight: 600;
                    "
                    ><a>￥</a>9.9
                    <a style="color: #808080; text-decoration: line-through"
                      >24</a
                    ></span
                  >
                  <div class="qy">
                    <div>
                      <div style="font-size: 0.25rem; font-family: 方正宋体">
                        {{ gk }}
                      </div>
                    </div>
                  </div>
                  <button class="btn2" @click="$router.push('/yingchengka')">
                    {{ btnwz3 }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bootbtn-qy">
            <div class="btn" @click="changeb">
              <a v-if="b == false">展开更多影片 ＞</a>
              <a v-else-if="b1 == false">继续展开 ＞</a>
              <a v-else>展开完毕</a>
            </div>
          </div>
        </div>
        <!-- logo -->
        <div style="margin: auto; text-algin: center">
          <div
            style="
              heigth: 2rem;
              margin: 0 33% 0;
              font-family: 方正黑体;
              color: white;
            "
          >
            <img
              style="border-radius: 0.5rem; width: 2rem; height: 2rem"
              src="/img/xggpic/logo.png"
            />
            <span style="font-size: 1.8rem; font-weight: 800"
              >&nbsp;淘票票</span
            >
            <!-- <a style="margin-top:-2rem;font-size: 0.5rem;">淘&nbsp;&nbsp;出&nbsp;&nbsp;好&nbsp;&nbsp;時&nbsp;&nbsp;光</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
    ...mapState(["citychoose"]),
  },
  data() {
    return {
      btnwz3: "立即开卡",
      gk: "9.9购卡",
      b: false,
      b1: false,
      isDisplay: false,
      isDisplay1: false,
      // 第一列引用
      name: "淘票票评分:",
      fs: "9.5",
      name1: "古董局中局",
      name2: "古玩界惊天骗局",
      btnwz1: "优惠购票",
      img1: "/img/fengmian/001.png",
      // 第二列引用
      sxk: "随心看",
      img2: "/img/xggpic/cghd.jpg",
      name3: "横店影城全国通用",
      fh: "￥",
      price: "6.6",
      price1: "24",
      btnwz2: "立即抢购",

      // 第三列引用
    };
  },
  methods: {
    btn0() {
      this.$router.push("/home");
    },
    btn1() {
      this.$router.push("/city");
    },
    btns1() {
      this.$router.push("/city");
    },
    btns2() {
      // this.$router.push("/");
    },
    changeDisplay() {
      this.isDisplay = !this.isDisplay;
      this.isDisplay1 = !this.isDisplay;
      this.isDisplay2 = !this.isDisplay;
      this.isDisplay = this.isDispaly1 = true;
    },
    changeb() {
      this.b = !this.b;
      this.b1 = !this.b;
      this.b = this.b1 = true;
    },
  },
  // computed: {
  //   ...mapState(["citychoose"]),
  // },
};
</script>
<style lang="scss" scoped>
.head {
  margin-top: -2.5rem;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
  .dw-qy {
    width: 100%;
    height: 2rem;
    position: relative;
    .head_dw {
      top: 6rem;
      left: 1rem;
      width: 2.8rem;
      height: 1.5rem;
      background-color: rgba(159, 159, 159, 0.472);
      border: 0.0625rem solid white;
      text-align: center;
      position: relative;

      span {
        color: rgb(255, 255, 255);
        top: -0.15rem;
        font-size: 0.75rem;
        position: relative;
      }
    }
    .logo-qy {
      top: 4.5rem;
      left: 8rem;
      width: 7rem;
      height: 1.5rem;
      background-color: #fe6646;
      position: relative;
      padding: 0 1.25rem 0;
      border-radius: 1rem;
      overflow: hidden;
      color: white;
      font-family: 黑体;
      font-weight: 600;
      .bk {
        width: 1.1rem;
        height: 1.1rem;
        background-color: white;
        border-radius: 0.2rem;
        top: 0.2rem;
        position: relative;
        float: left;
        img {
          width: 1.75rem;
          height: 1.75rem;
          position: relative;
          top: -0.35rem;
          left: -0.3rem;
        }
      }
      span {
        float: right;
      }
    }
  }
  // 定位

  //大字下面的小字
  .min_zi {
    bottom: -8rem;
    height: 1.25rem;
    border-radius: 1rem;
    background: -webkit-gradient(
      linear,
      100% 0,
      0 0,
      from(#ff674a),
      to(#fe7e5c)
    );
    position: relative;
    text-align: center;
    div {
      top: 0.125rem;
      position: relative;
    }
  }
}
// 下面部分背景
.ebody {
  width: 100%;
  height: 100%;
  font-size: 2rem;
  // 下部分块
  .zhog {
    margin-top: -2rem;
    width: 100%;
    height: 100%;
    // 每大行
    .z_one,
    .z_two,
    .z_three {
      margin-top: 0.5rem;
      width: 100%;
      // 头部（上部分）
      .z-top {
        width: 100%;
        text-align: center;
        span {
          color: white;
          font-size: 1.25rem;
          font-style: italic;
          font-family: 温软雅黑;
          font-weight: 500;
        }
      }
      // 每行/脚部（下部分）
      .z-boot {
        margin: 0 0.6rem 0;
        width: 95%;
        overflow: hidden;
        // 每行一小块
        .b {
          margin: auto;
          padding: 0 0.2rem 0;
          // 组合1:
          .whi,
          .whi2 {
            background-color: white;
            height: 40%;
            font-size: 1rem;
            padding: 0.5rem;
            border-radius: 0 0 0.5rem 0.5rem;
            span {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            a {
              font-size: 0.0625rem;
              margin-top: -1rem;
              color: red;
            }
            .btn1 {
              width: 5.8rem;
              margin: 0.25rem 0.25rem 0.1rem;
              height: 2rem;
              border: none;
              border-radius: 0.4rem;
              background-color: #ff5356;
              font-size: 1rem;
              color: white;
            }
            .btn2 {
              width: 5.8rem;
              margin: 0.5rem 0.25rem 0.1rem;
              padding-top: 0.1rem;
              height: 1.4rem;
              border: none;
              border-radius: 1rem;
              background-color: #ff5356;
              font-size: 0.8rem;
              color: white;
            }
          }
          // 组合2:
          .whi,
          .whi2,
          .whi3,
          img {
            width: 100%;
          }
          // 组合3:
          .whi,
          .whi2,
          .whi3 {
            padding: 0.25rem;
          }
          .whi3 {
            background-color: white;
            width: 7rem;
            height: 30%;
            font-size: 1rem;
            padding: 0.3rem;
            border-radius: 0 0 0.5rem 0.5rem;
            span {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              color: red;
              font-family: 方正姚体;
              font-size: 1.25rem;
              font-weight: 600;
              margin-left: 0.2rem;
              a {
                font-size: 0.5rem;
              }
            }
            .qy {
              width: 3.4rem;
              text-align: center;
              font-size: 0.5rem;
              margin-left: 0.2rem;
              div {
                background: -webkit-gradient(
                  linear,
                  100% 0,
                  0 0,
                  from(#ffbfae),
                  to(#ffd4a6)
                );
                border-radius: 0.2rem;
                div {
                  font-size: 0.5rem;
                  position: relative;
                }
              }
            }
            .btn1 {
              width: 5.8rem;
              margin: 0.5rem 0.25rem 0.5rem;
              height: 2rem;
              border: none;
              border-radius: 0.4rem;
              background-color: #ff5356;
              font-size: 1rem;
              color: white;
            }
            .btn2 {
              width: 5.9rem;
              margin: 0.5rem 0.25rem 0.1rem;
              padding-top: 0.15rem;
              height: 1.4rem;
              border: none;
              border-radius: 1rem;
              background-color: #ff5356;
              font-size: 0.8rem;
              color: white;
            }
          }
          // 第一列的
          .hei {
            top: 9.6rem;
            height: 1rem;
            color: rgb(0, 0, 0);
            position: relative;
            font-size: 0.5rem;
            text-align: center;
            span {
              color: white;
              b {
                color: orange;
              }
            }
          }
          // 第二列的
          .twzi {
            top: 1.1rem;
            width: 3.2rem;
            text-align: center;
            position: relative;
            font-size: 0.5rem;
            background: -webkit-gradient(
              linear,
              100% 0,
              0 0,
              from(#ff7e03),
              to(#fe0000)
            );
            color: white;
            border-radius: 0.5rem 0 0.5rem 0;
            a {
              font-style: italic;
            }
          }
          img {
            border-radius: 0.5rem 0.5rem 0 0;
          }
          // 第三列的
          .bj {
            width: 7rem;
            height: 7.5rem;
            overflow: hidden;
            position: relative;
            border-radius: 0.5rem 0.5rem 0 0;
            padding: 0.4rem;
            .wz {
              width: 6rem;
              height: 6.5rem;
              position: relative;
              font-size: 0.8rem;
              span {
                color: white;
                font-size: 500;
                padding: 0 0.2rem 0;
              }
            }
            .xtqy {
              margin-top: -7rem;
              width: 5rem;
              height: 7.5rem;
              margin-left: 2.5rem;
              position: relative;
              overflow: hidden;
              .xt {
                width: 4.5rem;
                height: 4.5rem;
                top: -1.2rem;
                left: 2rem;
                border-radius: 5rem;
                position: relative;
                background-color: rgba(255, 255, 255, 0.123);
              }
              .xt1 {
                top: -3rem;
                left: 2rem;
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 5rem;
                position: relative;
                background-color: rgba(255, 255, 255, 0.123);
              }
              .xt2 {
                top: -6rem;
                left: 0.5rem;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 5rem;
                position: relative;
                background-color: rgba(255, 255, 255, 0.123);
              }
              .xt3 {
                top: -7rem;
                left: 1.5rem;
                width: 2.5rem;
                height: 2.5rem;
                border-radius: 5rem;
                position: relative;
                background-color: rgba(255, 255, 255, 0.123);
              }
              .xt4 {
                top: -12.5rem;
                left: 0.5rem;
                width: 1rem;
                height: 1rem;
                border-radius: 5rem;
                position: relative;
                background-color: rgba(255, 255, 255, 0.123);
              }
            }
          }
        }
      }
      // 每大行的下部分按钮
      .bootbtn-qy {
        margin: 1rem auto;
        text-align: center;
        .btn {
          width: 9rem;
          height: 2.2rem;
          font-size: 1rem;
          border-radius: 1rem;
          border: 0.0625rem solid white;
          color: white;
          text-align: center;
          padding: 0.3rem 0 0.2rem;
        }
      }
    }
  }
}
</style>