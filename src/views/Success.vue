<template>
  <div>
    <div>
      <div class="gpjg">购票结果</div>
      <div class="box1">
        <div
          style="
            width: 2.8rem;
            height: 2.87rem;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
          "
        >
          <img src="../../public/img/goupiaochenggong.jpg" alt="" />
        </div>
        <br />
        <span style="font-size: 1.375rem; font-weight: bold"> 购票成功 </span>
        <p
          style="
            font-size: 0.9063rem;
            margin-top: 0.8rem;
            margin-bottom: 1.3rem;
          "
        >
          古董局中局({{choosenum}}张)
        </p>
        <div
          class="anniu"
          style="margin-right: 1rem"
          @click="$router.push('/home')"
        >
          返回首页
        </div>
        <div
          class="anniu"
          style="background-color: red; color: white"
          @click="$router.push('/dianyingpiao')"
        >
          查看电影票
        </div>
      </div>
      <div class="box2">
        <div
          style="border-radious:1rem;
            background-color: white;
            padding: 0.2rem;
            width: 22.2rem;
            margin: 0.6rem;
            height: 2.6rem;
          ">
          <div style="display: inline-block; margin: 0 0 0 2.5rem;">
            <img
              src="../../public/img/mayinengliang.jpg"
              alt=""
              style="width: 0.8rem"
            />
          </div>
          <span style="color: black; font-size: 0.875rem; line-height:2.2rem">
            恭喜获得180克能量，记得第二天去收哦
          </span>
        </div>
      </div>
      <div class="box3" @click="nnn" v-if="nn">
        <div class="cg" style="">
          <img src="../../public/img/chenggong.jpg" alt="" />
        </div>
        <div>
          <div class="jb1"></div>
          <div class="jb2"></div>
          <div style="transform:translateY(-1rem)">
              <span style="font-size: 1.125rem">
            本次购买奖励
            <span style="color: #d88588">{{Math.floor(Math.random()*30)+40}}</span>
            会员积分 </span>
          </div>
          <div style="transform:translateY(-1rem)">
             <span style="color: #888888">
            积分可
            <span style="color: #c2816b">免费兑换代金券</span>
            哦~ </span
          > 
          </div>
          
          <div 
            style=" transform:translateY(-4rem);
              margin-top: 1rem;
              background-image: linear-gradient(
                to right,
                #fadec6,
                50%,
                #febfae
              );
              width: 15rem;
              height: 2.4rem;
              padding-top: 0.5rem;
              font-size: 0.875rem;
              border-radius: 1.25rem;
            "
          >
            去兑换
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["choosenum"]),
  },
  data() {
    return {
      nn: 1,
    };
  },
  methods: {
    nnn() {
      this.nn = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.gpjg {
  height: 2.8rem;
  border-bottom: 0.0625rem solid #eee;
  padding-left: 1rem;
  padding-top: 0.6rem;
  font-size: 1.0625rem;
}
.box1 {
  padding-top: 1rem;
  text-align: center;
}
.anniu {
  display: inline-block;
  border: 0.0625rem solid rgb(187, 186, 186);
  width: 8rem;
  height: 2rem;
  border-radius: 1.875rem;
  padding-top: 0.3rem;
  font-size: 0.9375rem;
  margin-bottom: 1.5rem;
}
.box2 {
  background-color: #f6f6f6;
  height: 25.6rem;
  padding-top: 0.6rem;
}
.box3 {
  width: 23.5rem;
  height: 38.9rem;
  background-color: rgba(0, 0, 0, 0.507);
  position: fixed;
  top: 2.8rem;
  padding-left: 2.8rem;
  // display:none;
  > div {
    width: 18rem;
    height: 12rem;
    background-color: white;
    position: fixed;
    top: 17rem;
    border-radius: 1.25rem;
    text-align: center;
    > div {
      display: inline-block;
      height: 4rem;
    }
    .jb1 {
      width: 13.5rem;
      background-image: linear-gradient(to bottom, #fadec6, 50%, white);
      border-radius: 1.25rem 0 0 0;
      border-bottom: 0.0625rem solid white;
    }
    .jb2 {
      width: 4.5rem;
      height: 4rem;
      border-radius: 50%;
      background-image: linear-gradient(to bottom, #fadec61a, 90%, white),
        linear-gradient(65deg, #fdf3ea6e, 65%, #bc49e252);
      border-radius: 0 1.25rem 0 0;
      // transform:rotate(36deg);
      border-bottom: 0.0625rem solid white;
    }
    .cg {
      position: absolute;
      top: 5rem;
      margin-left: 12rem;
      overflow: hidden;
      width: 3.3rem;
      height: 3.3rem;
      border-radius: 50%;
      z-index: 5;
    }
  }
}
</style>