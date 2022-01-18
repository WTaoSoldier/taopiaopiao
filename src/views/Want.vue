<template>
<!-- 王丽君  想看 -->
    <div>
    <mt-header>
      <router-link to="/me" slot="left">
        <mt-button icon="back">想看的电影</mt-button>
      </router-link>
    </mt-header>
<van-cell title="共5部影片" is-link arrow-direction="down" value="按标记时间" />
<div class="box2">
<div class="box1">
<div class="t2">
    <img src="/wljlogo/want/cghd.jpg" style="border-radius:0.9375rem;">
</div>
<div class="w2">
    <h5>穿过寒冬拥抱你</h5>
    <span style="color:orange; font-size:0.9rem">33.4万</span>
    <span style="color:#999;font-size:0.9rem">人想看</span><br><br>
    <span style="color:#999;font-size:0.9rem">薛晓璐</span>
    <p style="color:#999;font-size:0.9rem">2021-12-31 在中国大陆上映</p>
</div>
</div>
<div>
<van-button type="info" style="border-radius:4rem; margin-right:0.6rem; margin-top:4rem;width:3.8rem;height:1.9rem;" >预售</van-button>  
</div>
</div>
<hr>
<div class="box2">
<div class="box1">
<div class="t2">
    <img src="/wljlogo/want/ftfb5.jpg" style="border-radius:0.9375rem;">
</div>
<div class="w2">
    <h5>反贪风暴5:最终章</h5>
    <span style="color:orange; font-size:0.9rem">20.9万</span>
    <span style="color:#999;font-size:0.9rem">人想看</span><br><br>
    <span style="color:#999;font-size:0.9rem">林德禄</span>
    <p style="color:#999;font-size:0.9rem">2021-12-31 在中国大陆上映</p>
</div>
</div>
<div>
<van-button type="info" style="border-radius:4rem;margin-right:0.6rem; margin-top:4rem;width:3.8rem;height:1.9rem;" >预售</van-button>  
</div>
</div>
<hr>
<div class="box2">
<div class="box1">
<div class="t2">
    <img src="/wljlogo/want/ndsj.jpg" style="border-radius:0.9375rem;">
</div>
<div class="w2">
    <h5>你的世界如果没有我</h5>
    <span style="color:#999;font-size:0.9rem">暂无评分</span><br><br>
    <span style="color:#999;font-size:0.9rem">刘伟恒</span>
    <p style="color:#999;font-size:0.9rem">2021-12-03 在中国大陆上映</p>
</div>
</div>
<div>
<van-button type="danger" style="border-radius:4rem;margin-right:0.6rem; margin-top:4rem;width:3.8rem;height:1.9rem;">购票</van-button>  
</div>
</div>
<hr>
<div class="box2">
<div class="box1">
<div class="t2">
    <img src="/wljlogo/want/xssn.jpg" style="border-radius:0.9375rem;">
</div>
<div class="w2">
    <h5>雄狮少年</h5>
    <span style="color:#999;font-size:0.9rem">点映评分</span>
    <span style="color:orange;font-size:0.9rem">9.3</span><br><br>
    <span style="color:#999;font-size:0.9rem">孙海鹏</span>
    <p style="color:#999;font-size:0.9rem">2021-12-17 在中国大陆上映</p>
</div>
</div>
<div>
<van-button type="info" style="border-radius:4rem;margin-right:0.6rem; margin-top:4rem;width:3.8rem;height:1.9rem; " >预售</van-button>  
</div>
</div>
<hr>
<div class="box2">
<div class="box1">
<div class="t2">
    <img src="/wljlogo/want/cjh.jpg" style="border-radius:0.9375rem;">
</div>
<div class="w2">
    <h5>长津湖</h5>
    <span style="color:#999;font-size:0.9rem">淘票票评分</span>
    <span style="color:orange;font-size:0.9rem">9.5</span><br><br>
    <span style="color:#999;font-size:0.9rem">陈凯歌</span>
    <p style="color:#999;font-size:0.9rem">2021-09-30 在中国大陆上映</p>
</div>
</div>
<div>
<van-button type="danger" style="border-radius:4rem;margin-right:0.6rem; margin-top:4rem;width:3.8rem;height:1.9rem; ">购票</van-button>  
</div>
</div>
<hr>
</div>
 
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>
 .box1{
    display: flex;
 }
 .box2{
    display: flex;
 }
 .t2 img{
     width: 6rem;
     height: 9rem;
     margin-left: 1rem;
 }
 .w2{
     margin-left: 0.7rem;
 }
</style>