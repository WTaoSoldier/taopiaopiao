<template>
<!-- 胡琳龙 小聚场 -->
    <div>
        <div>
            <header>
                <mt-header fixed>
                <mt-button icon="back" slot="left" @click="$router.back(-1)" style="font-size:1rem;margin-top:1rem"
                    >&nbsp;&nbsp;小聚场</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
            </header>
        </div>
        <div class="box1">
            <span style="font-size: 0.8125rem;margin-left:1rem">杭州</span>
            <div class="renqi" style="display: inline-block;">人气最高</div>
            <div class="zuijin" style="display: inline-block;">离我最近</div>
            <div @click="chuxian" class="shaixuan" style="display: inline-block;">
                筛选
                <img src="../../public/img/shaixuan.jpg" alt="" style="width:0.8rem"> 
            </div>
            <div class="shaixuan1" id="shaixuan1">
                <span class="lx">活动类型</span><br>
                <!-- ***** -->
                <div :class="{'xz':choose1==1}" @click="aa1">全部</div>
                <div :class="{'xz':choose1==2}" @click="aa2">观影团</div>
                <p style="margin-bottom:2rem"></p>
                <span class="lx">时间</span><br>
                <!-- ***** -->
                <div  :class="{'xz1':choose2==1}" @click="bb1">全部时间</div>
                <div :class="{'xz1':choose2==2}" @click="bb2">今天</div>
                <div :class="{'xz1':choose2==3}" @click="bb3">明天</div>
                <div :class="{'xz1':choose2==4}" @click="bb4">本周末</div>
                <div :class="{'xz1':choose2==5}" @click="bb5">下周末</div>
                <p style="margin-bottom:2rem"></p>
                <span>地区</span><br>
                <div class="xz2">全部地区</div>
                <div>西湖区</div><div>滨江区</div>
                <div>萧山区</div><div>上城区</div>
                <div>富阳区</div><div>拱墅区</div>
                <div>余杭区</div><div>桐庐县</div>
                <div>建德市</div><div>德清县</div>
                <div>临安区</div><div>淳安县</div>
                <div>下沙经济...</div>
                <div>临平区</div><div>钱塘区</div>
            </div>
        </div>
        <div class="box2">
            <div class="gyt">
                <img src="../../public/img/wusha.jpg" alt="" style="width:21.4rem">
                <div>
                    <div style="width:2rem;height:2rem;border-radius:50%;
                                margin-left:1rem;margin-top:1rem;display:inline-block;">
                        <img src="../../public/img/shimingtx.jpg" alt="">
                    </div>
                    <div style="margin-left:0.5rem;font-size:0.8125rem;display:inline-block;
                                height:2rem;padding-bottom:1rem">
                      <span>让我睡一会11</span>  
                    </div>
                    <img src="../../public/img/smrz.jpg" alt="">
                </div>
                <span style="font-size:0.9375rem" class="zi1">12月15日 19:20</span><br>
                <span style="font-weight:bold;" class="zi1">
                    杭州 | 《误杀》 淘票票观影团
                </span><br>
                <span class="zi1" style="font-size:0.8125rem">误杀2</span><br>
                <span class="zi1" style="font-size:0.875rem">
                    橙天嘉禾影城（杭州来福士店） 8.4km
                </span>
                <div style="margin-left:0.5rem;color:#eee;margin-bottom:0.01rem">
                    ————————————————————
                </div>
                <img src="../../public/img/baoming1.jpg" alt="" style="margin-left:0.5rem">
                <div style="display:inline-block;font-size:0.75rem;color:white;
                            margin-left:10.8rem;border:0.0625rem solid #eee;border-radius:1.5625rem;
                            width:3.5rem;text-align:center;background-color:#ff7988">
                    点击报名
                </div>
            </div>
            <div class="gyt">
                <img src="../../public/img/xssn.jpg" alt="" style="width:21.4rem">
                <div>
                    <div style="width:2rem;height:2rem;border-radius:50%;
                                margin-left:1rem;margin-top:1rem;display:inline-block;">
                        <img src="../../public/img/shimingtx.jpg" alt="">
                    </div>
                    <div style="margin-left:0.5rem;font-size:0.8125rem;display:inline-block;
                                height:2rem;padding-bottom:1rem">
                      <span>让我睡一会11</span>  
                    </div>
                    <img src="../../public/img/smrz.jpg" alt="">
                </div>
                <span style="font-size:0.9375rem" class="zi">12月05日 14:10</span><br>
                <span style="font-weight:bold;" class="zi">
                    杭州 | 《雄狮少年》 淘票票观影团
                </span><br>
                <span class="zi" style="font-size:0.8125rem">雄狮少年</span><br>
                <span class="zi" style="font-size:0.875rem">
                    杭州百美汇影城（LUXE嘉里中心店） 3.5km
                </span>
                <div style="margin-left:0.5rem;color:#eee;margin-bottom:0.01rem">
                    ————————————————————
                </div>
                <img src="../../public/img/baoming2.jpg" alt="" style="margin-left:0.5rem">
                <div style="display:inline-block;font-size:0.75rem;color: rgb(209, 209, 209);
                            margin-left:10.8rem">
                    报名已结束
                </div>
            </div>
            <p style="font-size:0.75rem;color:rgb(209, 209, 209);margin-left:8rem;
                      margin-top:1rem;margin-bottom:0">
                我是有底线的~
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                chuxian1: 0,
                choose1:1,
                choose2:1,
                choose3:1,
            }
        },
        methods: {
            aa1(){
                this.choose1=1
            },
            aa2(){
                this.choose1=2
            },
            bb1(){
                this.choose2=1
            },
            bb2(){
                this.choose2=2
            },
            bb3(){
                this.choose2=3
            },
            bb4(){
                this.choose2=4
            },
            bb5(){
                this.choose2=5
            },
            chuxian() {
                this.chuxian1++
                let a = this.chuxian1%2
                let shaixuan1=document.getElementById("shaixuan1")
                console.dir(shaixuan1)
                if(a==0){
                    shaixuan1.style.display="none"
                }else{
                    shaixuan1.style.display="block"
                }
            },
            xuanze(){}
        },
    }
</script>

<style lang="scss" scoped>
.box1{
    top:2.5rem;
    position:fixed;
    background-color:white;
    height: 2rem;
    .renqi{
        font-size: 0.8125rem;
        font-weight:bold;
        margin-left:7rem;
    }
    .zuijin{
        font-size: 0.8125rem;
        font-weight:bold;
        margin-left: 1.5rem;
        color:rgb(155, 151, 151);
    }
    .shaixuan{
        margin-left: 2.6rem;
        color:rgb(155, 151, 151);
    }
}
.box2{
    margin-top: 5rem;
    width: 100%;
    height: 45rem;
    background-color: rgb(248, 248, 248);
    padding-top: 1rem;
    padding-left: 1rem;
}
.gyt{
    width: 21.4rem;
    height: 20.5rem;
    background-color: white;  
    margin-bottom: 0.5rem;
    border: 0.0625rem solid transparent; 
    border-radius:0.625rem
}
.zi{
    color: rgb(209, 209, 209);
}
.zi1{
    color:black;
}
.shaixuan1{
    display:none;
    padding-top: 1rem;
    padding-left: 1rem;
    margin-top:1rem;
    width: 100%;
    height: 21rem;
    overflow:hidden;
    overflow:auto;
    position:fixed;
    background-color: white;
    top:3.5rem;
    .lx{
        font-size: 0.75rem;
    }
    div{
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        padding-top:0.4rem;
        font-size:0.75rem;
        text-align:center;
        display:inline-block;
        width: 5rem;
        height: 2rem;
        border: 0.0625rem solid #eee;
    }
    .xz{
        border: 0.0625rem solid #ff7988;
        color: #ff7988;
    }
    .xz1{
        border: 0.0625rem solid #ff7988;
        color: #ff7988;
    }
    .xz2{
        border: 0.0625rem solid #ff7988;
        color: #ff7988;
    }
}

</style>