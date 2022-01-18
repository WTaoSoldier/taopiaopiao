<template>
  <div>
    <!-- 胥立栋 售票详情 -->
    <div>
      <div class="detail" style="margin-bottom: 1.25rem">
        <!-- 顶部栏 -->
        <div></div>
        <header>
          <mt-header fixed>
            <mt-button icon="back" slot="left" @click="$router.back(-1)">
              电影票详情
            </mt-button>
          </mt-header>
        </header>
      </div>
      <div class="bg">
        <div
          style="text-align: center; padding: 2rem 0rem 3rem 0rem; color: #fff"
        >
          <p style="font-size: 0.875rem">
            凭二维码取票更方便,取票码将不再以短信形式发送
          </p>
        </div>
        <div class="nbg">
          <!-- 电影信息 -->
          <div class="circle circle0"></div>
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
          <div
            class="zuanshi"
            style="width: 5rem; height: 5rem; border-radius: 50%"
          >
            <img src="/xld/icon/钻石.png" alt="" />
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              border-bottom: 0.0625rem dashed #dedede;
              margin: 2.5rem 1.875rem 0.625rem 1.875rem;
              padding-bottom: 1.5625rem;
            "
          >
            <div style="margin-top: 0.625rem">
              <h4 style="font-weight: bold">{{ data.电影名 }}</h4>
              <span style="font-size: 0.875rem; font-weight: bold"
                >{{ data.放映时间 | moment }}({{ data.影厅类型 }})</span
              ><br />
              <span style="font-size: 0.875rem; font-weight: bold">{{
                data.电影院名
              }}</span
              ><br>
              <span style="font-size: 0.875rem; font-weight: bold">{{
                data.影厅
              }}</span
              >
              <br />
              <span style="font-size: 0.8125rem; color: #949494">{{
                data.座位
              }}</span>
            </div>
            <div>
              <img :src="data.封面图" style="border-radius: 0.9375rem" />
            </div>
          </div>
          <!-- 取电影票 -->
          <div v-if="data.票的状态 == `未使用`">
            <div
              style="text-align:center;
                border-bottom: 0.0625rem dashed #dedede;
                padding-bottom: 1.5625rem;
                margin: 0.625rem 1.875rem;
              "
            >
              <p style="font-size: 1.5rem; font-weight: bold">取电影票</p>
              <div style="text-align: center">
                <img
                  :src="`https://api.pwmqr.com/qrcode/create/?url=${data.取票码}`"
                  style="width: 9.375rem"
                />
                <p style="font-size: 0.875rem">{{ data.票数几张 }}张电影票</p>
              </div>
              <div class="qupiao" @click="shiyong">
                <span style="font-size: 0.875rem; color: #9e9e9e"
                  >取票号:<span style="font-size: 1rem; color: #000000">{{
                    data.取票码
                  }}</span></span
                >
              </div>
            </div>
            <!-- 退票按钮 -->
            <div
              style="
                display:flex;
                justify-content: center;
                margin-left: 0.75rem;
                border-bottom: 0.0625rem dashed #dedede;
                margin: 0.625rem 1.875rem;
                padding-bottom: 0.9375rem;
              ">
              <button class="btn"><span>申请改签</span></button>
              <button class="btn" @click="return1()">
                <span>申请退票</span>
              </button>
            </div>
          </div>
          <!-- 影城信息 -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              border-bottom: 0.0625rem dashed #dedede;
              margin: 0.625rem 1.875rem;
            "
          >
            <div style="margin-top: 0.625rem; padding-bottom: 1.25rem">
              <p
                style="
                  font-size: 1.25rem;
                  font-weight: bold;
                  margin-bottom: 0rem;
                "
              >
                {{ data.电影院名 }}
              </p>
              <span style="font-size: 0.875rem; color: #9e9e9e">{{
                data.影院地址
              }}</span>
              <span style="font-size: 0.875rem; color: #9e9e9e">{{
                data.影厅
              }}</span>
            </div>
            <div>
              <img
                src="/xld/icon/电话.png"
                style="width: 3.125rem; margin-top: 0.8125rem"
              />
            </div>
          </div>
          <!-- 付款信息 -->
          <div
            style="
              border-bottom: 0.0625rem dashed #dedede;
              margin: 1.25rem 1.875rem;
              padding-bottom: 0.9375rem;
            "
          >
            <span style="font-size: 1.25rem; font-weight: bold"
              >实付金额: ￥{{ data.moneym }}</span
            >
            <div class="dd">
              <span>订单号:2338876046445351</span><br />
              <span>购买时间: 2021-12-25</span><br />
              <span>手机号:138****9989</span>
            </div>
          </div>
          <!-- 观影须知 -->
          <div class="xuzhi">
            <p
              style="
                font-size: 1.25rem;
                font-weight: bold;
                margin-bottom: 0.3125rem;
              "
            >
              观影须知
            </p>
            <span
              >1.请提前到达影院现场，找到自助取票机，打印纸质电影票，完成取票。</span
            ><br />
            <span
              >2.如现场自助取票机无法打印电影票，请联系影院工作人员处理。</span
            ><br />
            <span>3.凭打印好的纸质电影票，检票入场观影。</span><br />
            <span
              >4.如果订单使用了兑换券，或购买了特殊场次，暂不支持退票和改签。</span
            ><br />
            <span
              >如有开具所购电影票发票的需求，请保留好电影票根，尽量在观影当天联系影城工作人员进行开具，如遇特殊情况请及时联系淘票票人工客服咨询。</span
            ><br />
            <span
              >6.改签、退票服务由影城决定，特殊场次及使用兑换券的场次不支持改签、退票。</span
            ><br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["username", "chooseticket", "choosenum","xttzuo"]),
  },
  data() {
    return {
      data: [],
    };
  },

  methods: {
    ...mapMutations({ changepiao: "changepiao",changeprice:"changeprice",changepiaopiao:"changepiaopiao",changexttzuo:"changexttzuo" }),
    shiyong() {
      this.changepiao(1);
      let id = this.chooseticket;
      let url = `v1/buy/shiyong/${id}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.$router.push("/dianyingpiao");
      });
    },
    getdata() {
      let id = this.chooseticket;
      console.log(id);
      let url = `v1/buy/piaopiao?id=${id}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data[0];
        console.log(this.data);
        let a = this.data.座位
        let a1=new String(a)
        let b = a1.split("/");
        this.changexttzuo(b)
        console.log(this.xttzuo)
      });
    },
    return1() {
      this.changeprice(this.data.moneym)
      this.$router.replace("/return");
    },
  },
  mounted() {
    this.getdata();
    console.log(this.chooseticket);
  },
};
</script>

<style lang="scss" scoped>
.zuanshi {
  position: absolute;
  left: 50%;
  top: 0%;
  margin-left: -3.125rem;
  margin-top: -3.125rem;
}
.detail {
  margin-top: 2.5rem;
}
.bg {
  padding: 0rem 0.9375rem 1.25rem 0.9375rem;
  background-color: #f78c6c;
}
img {
  width: 6.25rem;
}
.qupiao {
  border: 0.0625rem solid #ececec;
  width: 17rem;
  height: 3.125rem;
  text-align: center;
  line-height: 3.125rem;
  border-radius: 0.375rem;
  margin-left: 0.4375rem;
}
.btn {
  background-color: #fff;
  border: 0.0625rem solid #f05353;
  border-radius: 3.125rem;
  width: 8rem;
  height: 2.5rem;
  margin: 1.1rem 0.4rem;
}
.btn span {
  color: #f05353;
  font-size: 0.875rem;
}
.nbg {
  background-color: #fff;
  padding: 1.25rem 0rem;
  border-radius: 1.25rem;
  position: relative;
}
.xuzhi {
  font-size: 0.875rem;
  border-bottom: 0.0625rem dashed #dedede;
  margin: 0.625rem 1.875rem;
  padding-bottom: 1.5625rem;
}
.xuzhi span {
  color: #c0c0c0;
}
.dd span {
  font-size: 0.875rem;
  color: #9e9e9e;
}
.circle {
  width: 1.25rem;
  height: 1.25rem;
  background-color: #f78c6c;
  border-radius: 50%;
  position: absolute;
}
.circle0 {
  left: -0.625rem;
  top: 13rem;
}
.circle1 {
  top: 13rem;
  right: -0.625rem;
}
.circle2 {
  left: -0.625rem;
  top: 39.6875rem;
}
.circle3 {
  right: -0.625rem;
  top: 39.6875rem;
}
</style>