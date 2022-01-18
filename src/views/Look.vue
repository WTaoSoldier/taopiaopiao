<template>
<!-- 王丽君 看过 -->
<div>
<mt-header>
<router-link to="/me" slot="left">
<mt-button icon="back">看过的电影</mt-button>
</router-link>
</mt-header>
<div class="b1">
<div class="t1">
    <img src="/wljlogo/look/jjdy.jpg" style="border-radius:0.9375rem;">
</div >
<div class="w1">
    <h5>建军大业</h5>
    <p style="color:#999;font-size:0.9rem">2021-08-01上映</p>
    <span style="color:#999;font-size:0.9rem">导演:刘伟强</span>
    <p style="color:#999;font-size:0.9rem">主演:刘烨 朱亚文 黄志忠 王景春 欧豪</p>
</div>
</div>
<div style="margin-left:5%;margin-top:3%">
    <span style="color:#999;font-size:1.15rem;">我评:</span>
    <van-rate v-model="value" :size="25" color="#ffd21e" void-icon="star" void-color="#eee"/>
    </div>  
<hr>
 <div class="b1">
<div class="t1">
    <img src="/wljlogo/look/adog.jpg" style="border-radius:0.9375rem;">
</div >
<div class="w1">
    <h5>一条狗的使命</h5>
    <p style="color:#999;font-size:0.9rem">2020-07-20上映</p>
    <span style="color:#999;font-size:0.9rem">导演:莱赛.霍尔斯道姆</span>
    <p style="color:#999;font-size:0.9rem">主演:丹尼斯.奎德 佩吉.利普顿</p>
</div>
</div>
<div style="margin-left:5%;margin-top:3%">
    <span style="color:#999;font-size:1.15rem;">我评:</span>
    <van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
  
/></div>  
<hr>
<div class="b1">
<div class="t1">
    <img src="/wljlogo/look/tt2.jpg" style="border-radius:0.9375rem;">
</div >
<div class="w1">
    <h5>唐人街探案2</h5>
    <p style="color:#999;font-size:0.9rem">2018-02-16上映</p>
    <span style="color:#999;font-size:0.9rem">导演:陈思诚</span>
    <p style="color:#999;font-size:0.9rem">主演:王宝强 刘昊然 肖央 刘承羽</p>
</div>
</div>
<div style="margin-left:5%;margin-top:3%">
    <span style="color:#999;font-size:1.15rem;">我评:</span>
    <van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/></div>  
<hr>
<div class="b1">
<div class="t1">
    <img src="/wljlogo/look/yynzh.jpg" style="border-radius:0.9375rem;">
</div >
<div class="w1">
    <h5>遇见你真好</h5>
    <p style="color:#999;font-size:0.9rem">2018-03-29上映</p>
    <span style="color:#999;font-size:0.9rem">导演:顾长卫</span>
    <p style="color:#999;font-size:0.9rem">主演:白客 蓝盈莹 张海宇 周楚濋</p>
</div>
</div>
<div style="margin-left:5%;margin-top:3%">
    <span style="color:#999;font-size:1.15rem;">我评:</span>
    <van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/></div>  
<hr>

<div class="b1">
<div class="t1">
    <img src="/wljlogo/look/fczlm.jpg" style="border-radius:0.9375rem;">
</div >
<div class="w1">
    <h5>复仇者联盟3:无限战争</h5>
    <p style="color:#999;font-size:0.9rem">2018-05-11上映</p>
    <span style="color:#999;font-size:0.9rem">导演:安东尼.罗素 乔.罗素</span>
    <p style="color:#999;font-size:0.9rem">主演:小罗伯特.唐尼 海姆斯沃斯</p>
</div>
</div>
<div style="margin-left:5%;margin-top:3%">
    <span style="color:#999;font-size:1.15rem;">我评:</span>
    <van-rate
  v-model="value"
  :size="25"
  color="#ffd21e"
  void-icon="star"
  void-color="#eee"
/></div>  
<hr>
 
</div>
</template>

<script>
    export default {
        data() {
            return {
                 value: 5,
        
            }
        },
    }
</script>

<style lang="scss" scoped>
.b1{
    display: flex;
 }
 .t1 img{
    width: 6rem;
     height: 9rem;
     margin-left: 1rem;
 }
 .w1{
     margin-left: 0.6rem;
     margin-top:0.5rem;
 }
</style>