<template>
    <!-- 胡琳龙 权益卡 -->
    <div>
        <div>
            <header>
                <mt-header fixed>
                <mt-button icon="back" slot="left" @click="$router.back(-1)"
                    >&nbsp;&nbsp;我的权益卡</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
            </header>
        </div>
        <div class="box1" style="">
            <div>
                <span @click="$router.push('/yingchengka')" style="text-decoration:none;">
                    <img src="../../public/img/vip.jpg" alt="" class="vip">
                    <span style="margin-left:2vw;font-size:0.75rem;color:#b6a5a5">开通影城卡</span>
                    <img src="../../public/img/展开.jpg" alt="" style="margin-left:56vw"> 
                </span>
                
            </div>
        </div>
        <div class="box2">
            <img src="../../public/img/quanyika.jpg" alt="" class="qyk"><br>
            <span class="kt">你一张权益卡都没有开通呢</span>
            <span class="kt kt1">开通越多越划算哦~</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.box1{
    margin-top: 3.75rem;
    margin-bottom: 2.25rem;
    width: 100%;
    height: 1.875rem;

}
.box1 > div{
    padding-top: 0.9375rem;
    margin-left: 3vw;
    width:93vw;
    height:3.4375rem;
    background-color:#FDF4F5
}
.vip{
    margin-left:5vw;
    width: 8vw;
    height: 1.5625rem;
}
.box2{
    width: 100%;
    height: 42.8125rem;
    background-color: #F6F6F6;
    line-height:auto;
}
.qyk{
    width:40vw;
    margin-left: 30vw;
    margin-top: 38vw;
}
.kt{
    color:#A8A8A8;
    margin-left: 25vw;
    font-size: 0.9375rem;
}
.kt{
    color:#A8A8A8;
    margin-left: 28vw;
    font-size: 0.875rem;
}
.kt1{
    margin-left: 33vw;
}
</style>