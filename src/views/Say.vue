<template>
  <div>
    <!-- 胡琳龙-发表一条评论页 -->
    <div>
      <div><mt-header fixed>
      <div  @click="$router.back(-1)" slot="left">
        <mt-button icon="back">发表评论</mt-button>
      </div>
      <mt-button icon="more" slot="right"></mt-button>
      </mt-header></div>
      <div style="margin-top:3.125rem">
        <div style="text-align:center">
          <textarea style="width:90%;height:40vw; background-color:#F6F6F6; border-radius:2vw; resize:none;" placeholder="想说的话...." id="text">
          </textarea>
          
        </div>    
        <br>
        <div class="star">
          <div class="xiaobao">
            <img  @click="move" id="pic"
            src="../assets/xtt/001.png" alt="">
          </div>
          <div class="fen">{{fen}}分
            
          </div>
          <button class="fs" @click="postcomment">发送</button>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState,mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['username','choosemovie']),
    },
    data() {
      return {
        dafen:0,
        data:[],
        value:5,
        fen:0,
        num:0,
        num1:0,
      }
    },
    methods: {
      postcomment() {
        let a = document.getElementById("text")
        let b = a.value
        let url = "v1/buy/pinglun";
        let tt=new Date()
        console.log(tt)
        let a1="2021-12-15 19:30:00"
        let params=`wenzi=${b}&score=${this.fen}&movieid=${this.choosemovie}&userid=${this.username}&a1=${a1}`
        console.log(params)
        axios.post(url,params).then((res) => {
          console.log(res);
          if(res.data.code==200){
            // alert("评论成功")
            this.$toast("评论成功")
            this.$router.push("/moviedetail")
          }
        });
      },
      move(e){
        let pic=document.getElementById("pic")
        if(e.layerX<30&&e.layerX>0){
          // console.dir(pic)
          pic.style.transform=`translateX(-7.5rem)`
          this.fen=2
        }else if(e.layerX<60){
          console.dir(pic)
          pic.style.transform=`translateX(-5.625rem)`
          this.fen=4
        }else if(e.layerX<90){
          console.dir(pic)
          pic.style.transform=`translateX(-3.75rem)`
          this.fen=6
        }else if(e.layerX<120){
          console.dir(pic)
          pic.style.transform=`translateX(-1.875rem)`
          this.fen=8
        }else if(e.layerX<150){
          console.dir(pic)
          pic.style.transform=`translateX(0rem)`
          this.fen=10
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.star{
  position: relative;
  .xiaobao{
  width:9.375rem ;height:1.875rem;background-color:red;
  margin-left: 1.5rem;
  overflow: hidden;
    img{
      transform: translateX(-9.375rem);
      width: 18.75rem;
    }
  }
  .fen{
    display: inline-block;
    position: absolute;
    right:10.5rem;
    top:0.3rem;
    color: rgb(230, 207, 0);
  }
}

.fs{
  background-color: rgb(199, 73, 73);
  border: 0;
  margin-left: 18.6rem;
  margin-top: 0.625rem;
  border-radius:0.9375rem;
  width:15vw;
  height: 1.875rem;
  font-size: 0.625rem;
  color:rgb(255, 255, 255);
}
.sz{
  margin-left: 3vw;
  color: rgb(160, 160, 160);
  font-size: 0.9375rem;
}
</style>