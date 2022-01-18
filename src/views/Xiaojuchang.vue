<template> 
    <!-- 胡琳龙 小剧场-->
    <div>
        <div>
            <header>
                <mt-header fixed>
                <mt-button icon="back" slot="left" @click="$router.back(-1)" style="font-size:1.125rem;margin-top:1rem"
                    >&nbsp;&nbsp;我的小剧场</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
            </header>
        </div>
        <div class="box2"  @click="$router.push('/xiaojuchang1')">
            <img src="../../public/img/xiaojuchang.jpg" alt="">
            <p>还没有参加过小聚场活动哦</p>
            <button>
                <span>
                去看看
                </span> 
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.box2{
    line-height:auto;
    img{
        height: 7rem;
        margin-top: 17rem;
        margin-left: 7.8rem;
    }
    p{
        margin-top: 0.5rem;
        margin-left: 5.6rem;
        color:rgb(168, 166, 166);
    }
    button{
        background-color: white;
        border: 0.0625rem solid rgb(168, 166, 166);
        border-radius:1.25rem;
        width: 7.1875rem;
        height: 2.5rem;
        margin-left: 8.5rem;
    }
}
</style>