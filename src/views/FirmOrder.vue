<template>
  <div>
    <div class="all">
      <!-- 王丽君-确认订单页 -->
      <mt-header title="确认订单" fixed>
        <div @click="$router.back(-1)" slot="left">
          <mt-button icon="back">返回</mt-button>
        </div>
      </mt-header>
      <!-- 开始遍历 -->
      <div style="height: 2.5rem"></div>
      <div
        style="margin-left: 2vw"
        v-for="(item, index) in data"
        :key="index"
        class="bao1"
      >
        <div class="kuang">
          <div class="a1">
            <img
              :src="`${item.fmpic}`"
              style="
                border: 0.133vw solid white;
                border-radius: 3vw;
                margin-top: 1vw;
              "
            />
          </div>

          <div style="margin-left: 2vw; margin-top: 2vw">
            <h5 style="font-weight: 600; padding-top: 0.3rem">
              {{ item.title
              }}<span style="font-weight: 400">
                共{{ choosenum }}张 原价 ¥{{ chooseprice | nums }}</span
              >
            </h5>
            <span>{{ item.show_time | time1 }}~22:33 {{ item.yt_type }}</span
            ><br />
            <span>{{ item.cinema_name }}</span
            ><br />
            <span>{{ item.addr }}</span><br>
            <span >{{ item.yt }}</span><br>
            <span style="display:inline-block;width:14rem;height:2.6rem;text-overflow: ellipsis;overflow:hidden;white-space:nowrap;">{{ chooseseat }}</span> 
            
          </div>
        </div>
      </div>
      <div class="bao2">
        <van-cell is-link @click="showPopup">
          <img
            class="err"
            slot="icon"
            src="/wljlogo/err.png"
          />不支持退票，不支持改签
        </van-cell>
      </div>
      <van-popup v-model="show" style="border-radius: 4vw">
        <div style="border: 0.2vw solid gray; width: 70vw; height: 60vw">
          <h5 style="margin-left: 4vw; margin-top: 4vw; font-weight: 400">
            退改签详情:
          </h5>
          <div id="x">
            <img class="err" slot="icon" src="/wljlogo/err.png" />
            <span style="font-weight: 400">不支持退票</span>
            <p>本影院暂不支持退票</p>
            <img class="err" slot="icon" src="/wljlogo/err.png" />
            <span style="font-weight: 400"> 不支持改签</span>
            <p>本影院暂不支持改签</p>
            <img class="err" slot="icon" src="/wljlogo/err.png" />
            <span style="font-weight: 400">影城卡不支持退卡</span>
          </div>
        </div>
      </van-popup>
      <div class="bao3">
        <h6
          style="
            margin: 1vw 0 0 2vw;
            padding: 0.5rem 0 0.5rem 0;
            font-weight: 550;
          "
        >
          本单可享受优惠
        </h6>
        <mt-cell title=" 优惠券&活动" is-link>
          <span style="color: red">已选最大优惠 -¥{{ youhui }}</span>
        </mt-cell>
        <div class="bao4">
          <div class="b41">开卡后，本单立省7元</div>
          <div class="b42">杭州星际汇影城卡</div>
          <div class="b43" @click="shijiu = shijiu == 19.9 ? 0 : 19.9">
            <label for="mianmi">￥{{ ka }}/半年 </label
            ><input type="checkbox" id="mianmi" value="" />
          </div>
        </div>
      </div>
      <div class="buy">
        <div class="b-1">
          <div class="b-11">观影伴侣·美味小食</div>
          <div class="b-12">边吃边看更爽哦</div>
        </div>
        <div class="b-2">
          <div class="b-21">单人餐</div>
          <div class="b-3">
            <div class="b-31"><img src="/img/xttpic/002.png" alt="" /></div>
            <div class="b-32">
              <div class="b-321">爆米花一桶</div>
              <div class="b-322">￥{{ price1 | nums }}</div>
            </div>
            <div class="b-33">
              <div class="b3btn" @click="num1 != 0 ? num1-- : ''">-</div>
              <span> {{ num1 }} </span>
              <div class="b3btn" @click="num1++">+</div>
            </div>
          </div>
        </div>
        <div class="b-2">
          <div class="b-21">双人餐</div>
          <div class="b-3">
            <div class="b-31"><img src="/img/xttpic/002.png" alt="" /></div>
            <div class="b-32">
              <div>爆米花一桶+牛乳茶2瓶</div>
              <div class="b-322">￥{{ price2 | nums }}</div>
            </div>
            <div class="b-33">
              <div class="b3btn" @click="num2 != 0 ? num2-- : ''">-</div>
              <span> {{ num2 }} </span>
              <div class="b3btn" @click="num2++">+</div>
            </div>
          </div>
          <div class="b-3">
            <div class="b-31"><img src="/img/xttpic/002.png" alt="" /></div>
            <div class="b-32">
              <div class="b-321">爆米花二桶+牛乳茶3瓶</div>
              <div class="b-322">￥{{ price3 | nums }}</div>
            </div>
            <div class="b-33">
              <div class="b3btn" @click="num3 != 0 ? num3-- : ''">-</div>
              <span> {{ num3 }} </span>
              <div class="b3btn" @click="num3++">+</div>
            </div>
          </div>

          <mt-cell title="" is-link>
            <span>无可用优惠</span>
          </mt-cell>
          <div class="b-4">
            <span>共{{ num1 + num2 + num3 }}份</span>
            <span style="color: black">
              小食总计：￥{{
                (price1 * num1 + price2 * num2 + price3 * num3) | nums
              }}</span
            >
          </div>
        </div>
      </div>
      <div class="bao4">
        <mt-cell
          :title="`手机号:${choosephone}`"
          is-link
          value="仅用于生成订单"
          style="margin-bottom: 1vw"
        >
          <img slot="icon" src="/wljlogo/dianhua.png" width="20" height="20" />
        </mt-cell>
      </div>

      <div class="bao5">
        <h5 style="font-weight: 600">购票须知</h5>
        <hr />
        <p>1.请确认场次和时间无误,购买成功后将不予退换</p>
        <p>
          2.由于设备故障等不可抗力因素,存在少量场次取消的情况,会进行退票退款
        </p>
        <p>3.由于影院系统不稳定等因素,存在出票失败的情况,会进行退票退款</p>
        <p>4.取票码可以在"电影票"中查看</p>
      </div>
      <div class="bai"></div>
      <div class="di">
        <div class="between">
          <div class="d1">
            <div class="d11">
              ￥{{
                (price1 * num1 +
                  price2 * num2 +
                  price3 * num3 +
                  chooseprice +
                  shijiu -
                  youhui)
                  | nums
              }}
            </div>
            <div class="d12">总计优惠{{ youhui | nums }}元</div>
          </div>
          <div class="d2">
            <div class="d21" @click="wwchu">明细 ^</div>
            <div class="d22"><span @click="piaohao">立即付款</span></div>
          </div>
        </div>
      </div>
      <div class="hui" id="hui">
        <div class="huix" style="height: 18.8rem" @click="ww"></div>
        <div class="jie">
          <div class="j1">
            <div class="j11">结算明细</div>
            <div class="j12" @click="ww">×</div>
          </div>
          <div class="j2">已使用最推荐的优惠组合，实际价格以结算明细为准</div>
          <div class="j3">
            <div class="j31">电影票</div>
            <div class="j32">
              <div class="j41">
                <div>原价（含服务费3元/张）</div>
                <div>平台券</div>
              </div>
              <div class="j42">
                <div>￥{{ chooseprice | nums }}</div>
                <div>-￥{{ youhui | nums }}</div>
              </div>
            </div>
          </div>
          <div class="j3">
            <div class="j31">观影小食</div>
            <div class="j32">
              <div class="j41">
                <div>原价</div>
                <div>平台券</div>
              </div>
              <div class="j42">
                <div>
                  ￥{{ (price1 * num1 + price2 * num2 + price3 * num3) | nums }}
                </div>
                <div>0</div>
              </div>
            </div>
          </div>
          <div class="j3 j66" v-if="shijiu !== 0">
            <div class="j31">影城卡</div>
            <div class="j61"></div>
            <div class="j32">
              <div class="j41">
                <div>原价</div>
              </div>
              <div class="j42">
                <div>￥19.90</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapState([
      "choosesite",
      "chooseprice",
      "chooseseat",
      "choosecinema",
      "choosemovie",
      "username",
      "choosenum",
      "choosephone",
      "choosepiao",
      "choosepiaopiao",
    ]),
  },
  data() {
    return {
      show: false,
      data: "",
      price: "",
      num1: 0,
      num2: 0,
      num3: 0,
      price1: 15.8,
      price2: 25.88,
      price3: 30.8,
      ka: 19.9,
      youhui: 3,
      shijiu: 0,
    };
  },
  filters: {
    nums: function (value) {
      let a = value;
      let b = a.toFixed(2);
      return b;
    },
    time1: function (value) {
      let a1 = value;
      let b1 = moment(a1).format("YYYY-MM-DD HH:mm");
      return b1;
    },
  },
  methods: {
    ...mapMutations({
      changesite: "changesite",
      changeprice: "changeprice",
      changepiao: "changepiao",
    }),
    piaohao() {
      this.choosepiaopiao.forEach((item) => {
        let url = `v1/buy/seatchange?name=${item}&status=1`;
        axios.get(url).then((res) => {
          console.log(res);
        });
      });
      let hao =
        "" +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10) +
        Math.floor(Math.random() * 10);

      let priceall =
        this.price1 * this.num1 +
        this.price2 * this.num2 +
        this.price3 * this.num3 +
        this.chooseprice +
        this.shijiu;
      let url = "v1/buy/buyhao";
      let bodyy = `cm_id=${this.choosesite}&did=${this.username}&seatplace=${this.chooseseat}&many=${this.choosenum}&moneym=${priceall}&hao=${hao}`;
      console.log(priceall);
      console.log(bodyy);
      axios.post(url, bodyy).then((res) => {
        console.log(res);
      });
      this.changepiao(1);
      console.log(this.choosepiao);
      this.$router.push("/success");
    },
    showPopup() {
      this.show = true;
    },
    onClickButton() {
      console.log("立即购买");
    },
    getdata() {
      // let c1='{{choosesite}}'
      let url = `v1/buy/firmorder/${this.choosesite}`;
      console.log(this.choosesite);
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
        console.log(this.data);
      });
    },
    ww() {
      let a = document.getElementById("hui");
      a.style.transform = `translateY(150vh)`;
    },
    wwchu() {
      let a = document.getElementById("hui");
      a.style.transform = `translateY(0)`;
    },
  },
  mounted() {
    this.getdata();
    // this.price=this.chooseprice
  },
};
</script>
<style lang="scss" scoped>
button {
  box-shadow: none;
}
.all {
  background-color: #f0f0f0;
  .bao1 {
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    background-color: white;
    border-radius: 0.4rem;
  }
  .bao2 {
    font-weight: 600;
    margin: 0.4rem;
    background-color: white;
    border-radius: 0.4rem;
  }
  .bao3 {
    margin: 0.4rem;
    border-radius: 0.4rem;
    background-color: white;
    padding-bottom: 0.6rem;
    .bao4 {
      background-color: rgb(224, 255, 245);
      margin: 0 0.6rem;
      font-size: 0.8rem;
      color: #857979;
      padding: 0.3rem;
      border-radius: 0.3rem;
      position: relative;
      .b41 {
        color: black;
        padding-left: 0.3rem;
      }
      .b42 {
        color: rgb(114, 114, 114);
        padding-left: 0.3rem;
      }
      .b43 {
        position: absolute;
        right: 0.5rem;
        top: 0.8rem;
        input {
          display: inline-block;
          margin-left: 0.5rem;
        }
      }
    }
  }
}

.buy {
  margin: 0.4rem;
  border-radius: 0.4rem;
  background-color: rgb(255, 255, 255);
  padding: 0.5rem;
  .b-1 {
    display: flex;
    justify-content: space-between;
    .b-11 {
      font-weight: 800;
    }
    .b-12 {
      font-size: 0.8rem;
      padding-right: 0.8rem;
    }
  }
  .b-2 {
    .b-21 {
      margin: 0.5rem;
      color: #5f5f5f;
      font-size: 0.8rem;
    }
  }
  .b-3 {
    position: relative;
    display: flex;
    margin: 0.5rem;
    margin-bottom: 0.5rem;
    .b-31 {
      border-radius: 0.5rem;
      img {
        border-radius: 0.5rem;
        display: inline-block;
      }
    }
    .b-32 {
      margin: 0 0.5rem;
      font-size: 0.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .b-321 {
        padding-left: 0.2rem;
        padding-top: 0.2rem;
      }
      .b-322 {
        color: rgb(255, 0, 43);
      }
    }
    .b-33 {
      position: absolute;
      right: 1rem;
      top: 50%;
      width: 3.8rem;
      display: flex;
      justify-content: space-between;
      .b3btn {
        display: inline-block;
        text-align: center;
        line-height: 1.2rem;
        background-color: rgb(233, 233, 233);
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        box-shadow: 0;
      }
    }
  }
  .b-4 {
    margin: 0.2rem;
    // border-top: 0.1rem solid rgb(218, 218, 218);
    display: flex;
    justify-content: flex-end;
    span {
      display: inline-block;
    }
  }
}
.bao4 {
  margin: 0.4rem;
  border-radius: 0.4rem;
  overflow: hidden;
}
.bao5 {
  margin: 0.4rem;
  border-radius: 0.4rem 0.4rem 0.4rem 0.4rem;
  background-color: rgb(255, 255, 255);
  padding: 0.6rem;
  margin-bottom: 6rem;
  p {
    margin: 0;
  }
}
.bai {
  background-color: #ffffff00;
  height: 2rem;
}
.di {
  background-color: rgb(255, 255, 255);
  position: fixed;
  height: 4rem;
  bottom: 0;
  width: 100%;
  padding-top: 0.5rem;
  z-index: 10;
  .between {
    display: flex;
    flex-flow: nowrap row;
    justify-content: space-between;
    .d1 {
      left: 1rem;
      margin: 0 5rem 1rem 1rem;
      .d11 {
        font-size: 1.2rem;
        color: red;
      }
      .d12 {
        font-size: 0.8rem;
        color: #a1a1a1;
      }
    }
    .d2 {
      right: 1rem;
      div {
        display: inline-block;
      }
      .d21 {
        font-size: 0.8rem;
        color: #a1a1a1;
      }
      .d22 {
        width: 6rem;
        height: 2rem;
        background-color: rgb(240, 75, 75);
        border-radius: 1rem;
        text-align: center;
        color: white;
        margin: 1rem 1rem 0.5rem 0.5rem;
        line-height: 2rem;
        span {
          color: white;
          font-size: 1rem;
        }
      }
    }
  }
}
.hui {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #7c7c7c6c;
  transform: translateY(120vh);
  .jie {
    position: fixed;
    width: 100%;
    bottom: 4rem;
    background-color: white;
    padding: 1rem 1rem 3rem 1rem;
    border-radius: 1rem 1rem 0 0;
    .j1 {
      display: flex;
      justify-content: space-between;
      .j11 {
        font-size: 1.2rem;
        font-weight: 800;
      }
      .j12 {
        text-align: center;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        background-color: #cccccc;
        border-radius: 50%;
        margin-top: 0.2rem;
      }
    }
    .j2 {
      margin: auto;
      margin-top: 0.6rem;
      margin-bottom: 1rem;
      font-size: 0.6rem;
      background-color: rgb(255, 239, 196);
      padding: 0.2rem;
      width: 19rem;
      height: 1.6rem;
      text-align: center;
      color: #e27900;
      border-radius: 0.8rem;
    }
    .j3 {
      font-size: 0.7rem;
      padding: 0.5rem 0.5rem 0.5rem 0;

      .j31 {
        font-weight: 800;
        margin-bottom: 0.5rem;
      }
      .j32 {
        display: flex;
        justify-content: space-between;
        position: relative;
        .j42 {
          position: absolute;
          right: 2rem;
          text-align: center;
        }
        .j42 {
          position: absolute;
          right: 2rem;
          text-align: center;
        }
      }
    }
  }
  .j66 {
    position: relative;
    .j61 {
      position: absolute;
      right: 2.5rem;
      top: 0.5rem;
    }
  }
}

.kuang[data-v-2db046e6] {
  margin: 0.4rem;
}
.all .bao2[data-v-2db046e6] {
  margin: 0.4rem;
}
.van-cell--clickable {
  border-radius: 0.6rem;
}
.a1 {
  padding-top: 0.8rem;
}
.kuang {
  margin: 0.5rem 0;
  height: 10.5rem;
  display: flex;
}
.kuang img {
  width: 26vw;
  margin: 1.5rem 0.5rem;
  // height: 40vw;
  display: inline-block;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 16vw;
  height: 16vw;
  background-color: #fff;
}
.err {
  width: 6vw;
  height: 6vw;
}
p {
  font-size: 0.9375rem;
  color: #8e8e8e;
  margin-top: 2vw;
}
span {
  font-size: 0.875rem;
  color: #8e8e8e;
}
#x {
  margin-left: 3vw;
  margin-top: 4vw;
}
#x span {
  color: black;
  font-size: 0.9375rem;
}
#x img {
  margin-right: 1.5vw;
}
</style>