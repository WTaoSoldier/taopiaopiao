<template>
  <div>
    <!-- 王丽君-影院详情页 -->
    <mt-header title="影院详情" fixed>
      <div @click="$router.back(-1)" slot="left">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <div style="height:3rem"></div>
    <div class="w" v-for="(item, index) in data" :key="index">
      <!-- <span>{{choosecinema}}</span> -->
      <h5 style="margin-top: 0.3125rem">{{ item.影院名 }}</h5>
      <hr />
      <span>
        <img slot="icon" src="/wljlogo/dingwei.png" />{{ item.影院地址 }}</span
      >
      <hr />
      <span>
        <img slot="icon" src="/wljlogo/dianhua.png" />0571-86812391;
        18668425525</span
      >
      <hr />

      <div class="xq">
        <div>
          <h5>服务</h5>
          <br />
          <span class="tag">退票</span>
          <p>支持开场前1小时退票,退票规则点击查看</p>
        </div>
        <div>
          <van-button
            to="TpDetail"
            style="
              margin-top: 20vw;
              margin-left: 6vw;
              border-radius: 12vw;
              border: 0.0625rem solid #c8c8c8;
              width: 75%;
              height: 25%;
              font-size: 0.75rem;
            "
            >详情</van-button
          >
        </div>
      </div>
      <hr />
      <span class="tag">儿童优惠</span>
      <p>1.2米(含)以下儿童免票无座,每位家长限带一名儿童</p>
      <hr />
      <span class="tag">3D眼镜</span>
      <p>免费提供</p>
      <hr />
      <span class="tag">情侣座</span>
      <p>每个厅最后一排,都是情侣座</p>
      <hr />
      <span class="tag">休息区</span>
      <p>大厅休息区</p>
      <hr />
    </div>
    <van-cell title="给影院提建议" to="IndexJy" />
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["choosecinema"]),
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    ...mapMutations({ changecinema: "changecinema" }),
    getdata() {
      // let a1=1
      let url = `v1/buy/cinemadetails/${this.choosecinema}`;
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data;
        console.log(this.data);
      });
    },
  },
  mounted() {
    this.getdata();
  },
};
</script>
<style lang="scss" scoped>
.w {
  margin-left: 4vw;
  font-size: 0.9375rem;
  color: #50505a;
}
.w img {
  width: 5vw;
  height: 5vw;
}
img {
  margin-right: 2vw;
}
.tag {
  // width: 10.667vw;
  color: #41c3ff;
  border: 0.133vw solid #41c3ff;
  border-radius: 1vw;
  margin-top: 0.267vw;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;
  height: 0.9375rem;
  line-height: 0.9375rem;
  padding: 0 0.1875rem;
}
.xq {
  display: flex;
  line-height: 1.5;
}
p {
  margin-top: 1.6vw;
  line-height: 4.8vw;
  font-size: 0.9375rem;
  color: #999;
}
.van-cell {
  height: 18vw;
  margin-top: 2vw;
  color: #00afff;
  font-size: 1.0625rem;
  text-align: center;
  background-color: #fff;
}
</style>