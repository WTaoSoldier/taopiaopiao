<template>
  <div>
    <div>
      <header>
        <mt-header fixed>
          <mt-button
            icon="back"
            slot="left"
            @click="$router.back(-1)"
            style="margin-top: 0.5rem"
          >
            &nbsp;&nbsp;申请退票
          </mt-button>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      </header>
    </div>
    <div class="box">
      <div
        style="
          height: 2.6rem;
          margin-top: 3rem;
          padding-left: 1rem;
          padding-top: 0.5rem;
        "
      >
        <span style="font-size: 0.8125rem; color: rgb(145, 144, 144)">
          退还金额
        </span>
      </div>
      <div style="padding-left: 1rem; height: 5.8rem; background-color: white">
        <div
          style="
            width: 22.3rem;
            height: 2.5rem;
            border-bottom: 0.0625rem solid #eee;
            padding-top: 0.5rem;
            color: #dc4174;
            font-size: 0.875rem;
          "
        >
          {{ this.chooseprice }}元
        </div>
        <div style="padding-top: 1rem; font-size: 0.875rem">
          预计3个工作日内原路退回。
        </div>
      </div>
      <div
        style="
          font-size: 0.8125rem;
          color: rgb(145, 144, 144);
          padding-top: 0.7rem;
          padding-bottom: 0.7rem;
          padding-left: 1rem;
        "
      >
        退票原因（至少选一项）
      </div>
      <div
        style="
          background-color: white;
          padding-left: 1rem;
          margin-bottom: 1.5rem;
        "
      >
        <div class="tpyy">
          <label for="yy1">买错了（如买错影院、场次、座位）</label>
          <input
            type="checkbox"
            name="yy"
            style="margin-left: 6.1rem"
            id="yy1"
          />
        </div>
        <div class="tpyy">
          <label for="yy2">计划有变/没时间看/去不了</label>
          <input
            type="checkbox"
            name="yy"
            style="margin-left: 10rem"
            id="yy2"
          />
        </div>
        <div class="tpyy">
          <label for="yy3">影院原因（放映机坏了、场次取消了）</label>
          <input
            type="checkbox"
            name="yy"
            style="margin-left: 5.3rem"
            id="yy3"
          />
        </div>
        <div class="tpyy">
          <label for="yy4">买贵了</label>
          <input
            type="checkbox"
            name="yy"
            style="margin-left: 17.5rem"
            id="yy4"
          />
        </div>
        <div class="tpyy">
          <label for="yy5">其他</label>
          <input
            type="checkbox"
            name="yy"
            style="margin-left: 18.4rem"
            id="yy5"
          />
        </div>
      </div>
      <div
        @click="tui"
        style="
          width: 22.1rem;
          height: 3.2rem;
          background-color: #ff4f58;
          margin-left: 0.7rem;
          color: white;
          font-size: 0.9375rem;
          text-align: center;
          padding-top: 0.9rem;
          margin-bottom: 0.5rem;
        "
      >
        提交退票申请
      </div>
      <div
        style="
          font-size: 0.875rem;
          color: rgb(145, 144, 144);
          text-align: center;
        "
      >
        本月还可退票
        <span style="color: rgb(233, 37, 37); font-weight: bold">2</span>
        次，发起退票后不可撤销
      </div>
      <div class="box2" id="box2">
        <div
          style="
            width: 17.6rem;
            margin-left: 2.7rem;
            background-color: white;
            position: fixed;
            top: 15.3rem;
            padding-left: 0.5rem;
            border-radius: 0.625rem;
            padding-top: 1rem;
          "
        >
          <div style="text-align: center">
            <span style="font-weight: 800; font-size: 1.1rem">退票说明</span
            ><br />
            <span class="shuoming">退票费收取规则</span>
          </div>
          <span class="shuoming">
            1.电影开场前24小时（含）以上，免收退票服务费。 </span
          ><br />
          <span class="shuoming">
            2.电影开场前1小时（含）至24小时，收取退票服务费5.0元/张。 </span
          ><br />
          <span class="shuoming"> 3.电影开场前1小时内不允许退票。 </span><br />
          <div style="margin-left: -0.5rem; margin-top: 1rem">
            <div
              class="anniu"
              style="border-radius: 0 0 0 0.625rem"
              @click="tui3"
            >
              取消
            </div>
            <div
              @click="tui1"
              class="anniu"
              style="border-radius: 0 0 0.625rem 0; color: rgb(88, 189, 236)"
            >
              确定
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
export default {
  computed: {
    ...mapState(["chooseticket", "chooseprice", "xttzuo"]),
  },
  methods: {
    ...mapMutations({ changepiao: "changepiao" }),
    tui() {
      let a = document.getElementById("box2");
      a.style.display = "block";
    },
    tui3() {
      console.log(111);
      let a = document.getElementById("box2");
      a.style.display = "none";
    },
    tui1() {
      //   ********
      console.log(this.xttzuo);
      let a111 = this.xttzuo[0]
      console.log(a111)
      let b111=a111.split(",")
      console.log(b111)
      b111.forEach((item) => {
        let url1 = `v1/buy/seatchange?name=${item}&status=0`;
        axios.get(url1).then((res) => {
          console.log(res);
        });
      });  
      this.changepiao(1);
      let a = document.getElementById("box2");
      a.style.display = "none";
      let id = this.chooseticket;
      let url = `v1/buy/tui/${id}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.$router.push("/dianyingpiao");
      });
      
    },
  },
  mounted() {
    console.log(this.xttzuo);
  },
};
</script>

<style lang="scss" scoped>
.box {
  width: 23.45rem;
  height: 38.7rem;
  background-color: rgb(241, 241, 241);
}
.gz {
  color: rgb(88, 189, 236);
}
.tpyy {
  width: 21.5rem;
  height: 2.5rem;
  border-bottom: 0.0625rem solid #eee;
  padding-top: 0.5rem;
  color: rgb(145, 144, 144);
  font-size: 0.875rem;
}
.zz {
  color: rgb(233, 37, 37);
}
.shuoming {
  font-size: 0.875rem;
}
.box2 {
  width: 22.6rem;
  height: 41.7rem;
  background-color: rgba(0, 0, 0, 0.507);
  position: fixed;
  top: 0;
  display: none;
}
.anniu {
  display: inline-block;
  border: 0.0625rem solid #eee;
  width: 8.8rem;
  height: 2.8rem;
  padding-top: 0.6rem;
  text-align: center;
}
</style>