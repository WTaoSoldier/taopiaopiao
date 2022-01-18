<template>
  <div>
    <!-- 王丽君 影院提意见 -->
<mt-header>
  <router-link to="cinemadetails" slot="left">
    <mt-button icon="back">给影院提意见</mt-button>
  </router-link>
</mt-header>
  <div style="text-align:center">
   <textarea style="width:90%;height:40vw; background-color:#F6F6F6; border-radius:2vw; resize:none;" placeholder="想说的话...."></textarea>
  <br><br>
   <van-button size="large" type="danger" style="border-radius:6vw; width:90%" >提交</van-button>
  </div>

  </div>
</template>
<style lang="scss" scoped>

</style>