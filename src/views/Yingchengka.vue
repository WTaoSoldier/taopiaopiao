<template>
<!-- 胡琳龙 影城卡 -->
    <div>
        <div>
            <header>
                <mt-header fixed>
                <mt-button icon="back" slot="left" @click="$router.back(-1)"
                    >&nbsp;&nbsp;影城卡</mt-button>
                <mt-button icon="more" slot="right"></mt-button>
                </mt-header>
            </header>
        </div>
        <div style="margin-top:2.5rem;">
            <img src="../../public/img/zhekou.jpg" alt="" class="zk">
        </div>
        <div class="box1 lv" style="margin-top:0.625rem;position:relative;">
            <div class="yuan1"><div class="yuan2"></div></div>
            <div class="touxiang">
                <img src="../../public/img/touxiang.png" alt="">
            </div>
            <span class="ka">
                国际影城黄龙店影城卡
                <span class="jg">9.9元</span>
            </span> 
            <span class="ka ka2">开卡可享购票超值会员价</span>
            <div class="yuan3"><div class="yuan4"></div></div>
            <div class="bian">
                有效期:3个月
            </div>
        </div>
        <div class="box1 hong" style="margin-top:0.625rem;position:relative;">
            <div class="yuan1"><div class="yuan2"></div></div>
            <div class="touxiang">
                <img src="../../public/img/touxiang.png" alt="">
            </div>
            <span class="ka">
                杭州德信星光城店影城卡
                <span class="jg">9.9元</span>
            </span> 
            <span class="ka ka2">开卡可享购票超值会员价</span>
            <div class="yuan3"><div class="yuan4"></div></div>
            <div class="bian">
                有效期:3个月
            </div>
        </div>
        <div class="box1 blue" style="margin-top:0.625rem;position:relative;">
            <div class="yuan1"><div class="yuan2"></div></div>
            <div class="touxiang">
                <img src="../../public/img/touxiang.png" alt="">
            </div>
            <span class="ka">
                九艺时代影城卡
                <span class="jg">9.9元起</span>
            </span> 
            <span class="ka ka2">开卡可享购票超值会员价</span>
            <div class="yuan3"><div class="yuan4"></div></div>
            <div class="bian">
                有效期:3个月
            </div>
        </div>
        <div class="box1 zi" style="margin-top:0.625rem;position:relative;">
            <div class="yuan1"><div class="yuan2"></div></div>
            <div class="touxiang">
                <img src="../../public/img/touxiang.png" alt="">
            </div>
            <span class="ka">
                UME紫荆天街店影城卡
                <span class="jg">9.9元</span>
            </span> 
            <span class="ka ka2">开卡可享购票超值会员价</span>
            <div class="yuan3"><div class="yuan4"></div></div>
            <div class="bian">
                有效期:3个月
            </div>
        </div>
        <div class="box1 lan" style="margin-top:0.625rem;position:relative;">
            <div class="yuan1"><div class="yuan2"></div></div>
            <div class="touxiang">
                <img src="../../public/img/touxiang.png" alt="">
            </div>
            <span class="ka">
                百老汇影城卡
                <span class="jg">14.85元</span>
            </span> 
            <span class="ka ka2">开卡可享购票超值会员价</span>
            <div class="yuan3"><div class="yuan4"></div></div>
            <div class="bian">
                有效期:3个月
            </div>
        </div>
        <div class="box1 orange" style="margin-top:0.625rem;position:relative;">
            <div class="yuan1"><div class="yuan2"></div></div>
            <div class="touxiang">
                <img src="../../public/img/touxiang.png" alt="">
            </div>
            <span class="ka">
                SFC上影影城卡
                <span class="jg">12.9元起</span>
            </span> 
            <span class="ka ka2">开卡可享购票超值会员价</span>
            <div class="yuan3"><div class="yuan4"></div></div>
            <div class="bian">
                有效期:3个月
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.touxiang{
    background-color: black;
    position:absolute;
    width: 2rem;
    height: 2rem;
    border-radius:50%;
    left: 1.5rem;
    top: 1rem;
    overflow:hidden;
    img{
        height: 2.1rem;
        position:relative;
        right: 0.0625rem;
        bottom: 0.0625rem;
    }
}
.zk{
    width: 100%;
}
.box1{
    margin-left: 4vw;
    width: 92vw;
    height: 11.25rem;
    border-radius:0.625rem;
    border: 0.0625rem solid transparent;
    overflow:hidden;
}
.lv{
  background-color:#60C86F;  
  .yuan1 .yuan2{
    background-color:#60C86F;  
  }
  .yuan3 .yuan4{
    background-color:#60C86F;
  }
}
.hong{
   background-color: rgb(255, 81, 81);
    .yuan1 .yuan2{
    background-color:rgb(255, 81, 81);  
  }
  .yuan3 .yuan4{
    background-color:rgb(255, 81, 81);
  }
}
.blue{
    background-color: rgb(116, 116, 252);
    .yuan1 .yuan2{
    background-color:rgb(116, 116, 252);
  }
  .yuan3 .yuan4{
    background-color:rgb(116, 116, 252);
  }
}
.zi{
    background-color: #C668E9;
    .yuan1 .yuan2{
    background-color:#C668E9;
  }
  .yuan3 .yuan4{
    background-color:#C668E9;
  }
}
.lan{
    background-color: #25BDFE;
    .yuan1 .yuan2{
    background-color:#25BDFE;
  }
  .yuan3 .yuan4{
    background-color:#25BDFE;
  }
}
.orange{
    background-color: orange;
    .yuan1 .yuan2{
    background-color:orange;
  }
  .yuan3 .yuan4{
    background-color:orange;
  }
}
.ka{
    position:absolute;
    display: block;
    margin-top: 1.5rem;
    margin-left: 16vw;
    font-size: 0.9375rem;
    color: white;
}
.jg{
    margin-left: 5rem;
}
.hong .jg {
    margin-left: 4.5rem;
}
.blue .jg{
    margin-left: 7rem;
}
.zi .jg{
    margin-left: 5rem;
}
.lan .jg{
    margin-left: 8rem;
}
.qing .jg{
    margin-left: 6.8rem;
}
.ka2{
    color: #E5E5E5;
    margin-top: 5rem;
    margin-left: 28vw;
}
.bian{
    padding-top: 0.3125rem;
    padding-left: 0.9375rem;
    margin-top: 7.7rem;
    width: 100%;
    height: 1.875rem;
    background-color:rgba(0,0,0,0.1);
    font-size: 0.25rem;
    color: #E5E5E5;
    margin-top: 9.5rem;
    margin-right: 0.625rem;
    position:absolute;
}
.yuan1{
    background-color: rgba(0,0,0,0.05);
    width: 18rem;
    height: 18rem;
    border-radius:50%;
    padding-top:3rem ;
    line-height:auto;
    position:absolute;
    right: 6rem;
    bottom: 5rem;
    .yuan2{
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        margin:auto;
    }
}
.yuan3{
    background-color: rgba(0,0,0,0.05);
    width: 13rem;
    height: 13rem;
    border-radius:50%;
    padding-top:2.5rem ;
    line-height:auto;
    position:absolute;
    left: 10rem;
    top: 6rem;
    .yuan4{
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        margin:auto;
    }
}
</style>