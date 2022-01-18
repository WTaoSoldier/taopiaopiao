<template>
<!-- 胡琳龙 小食 -->
    <div>
        <div>
            <header>
                <mt-header fixed>
                <mt-button icon="back" slot="left" @click="$router.back(-1)" style="font-size:1.125rem;margin-top:1rem"
                    >&nbsp;&nbsp;我的小食</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
            </header>
        </div>「」「
        <div class="box2">
            <div>
               <span>暂无小食哦~</span> 
            </div>
            <p>如有买票时赠送的小食，请到「电影票」查看</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.box2{
    width: 100%;
    height: 96rem;
    background-color: rgb(248, 248, 248);
    margin-top: 1rem;
    line-height:auto;
    div{
        padding-top: 20rem;
       span{
           margin-top: 18rem;
           margin-left: 9rem;
        } 
    }
    p{
        font-size: 0.8125rem;
        margin-top: 0.2rem;
        margin-left: 3.7rem;
        color:rgb(184, 179, 179) ;
    }
}
</style>