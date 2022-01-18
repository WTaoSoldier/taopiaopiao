<template>
  <div>
    <div class="indicators">
      <!-- 鼠标进入哪一项，项目就是当前项  -->
      <span
        @mouseenter="curIndex = index"
        :class="{ cur: curIndex == index }"
        v-for="(item, index) in 4"
        :key="index"
      ></span>
    </div>

    <!-- 不循环的 -->
    <div class="indicators">
      <span @mouseenter="curIndex = 0" :class="{ cur: curIndex == 0 }"></span>

      <span @mouseenter="curIndex = 1" :class="{ cur: curIndex == 1 }"></span>
      <span @mouseenter="curIndex = 2" :class="{ cur: curIndex == 2 }"></span>
      <span @mouseenter="curIndex = 3" :class="{ cur: curIndex == 3 }"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curIndex: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.indicators {
  width: 400px;
  background-color: antiquewhite;
  padding: 5px;
  text-align: center;
  span {
    height: 15px;
    width: 15px;
    display: inline-block;
    margin: 0 10px;
    background-color: rgb(37, 252, 180);
    border-radius: 50%;

    &.cur {
      background-color: blue;
    }
  }
}
</style>
