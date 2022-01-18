<template>
  <div>
    <div>
      <img src="/wljlogo/logining.jpg" alt="">
      <span id="num" @click="ktz">{{count}}秒跳转</span>
    </div>
  
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count:'',//倒计时
      }
    },
    created(){
      //跳转首页
      this.goHome()
    },
    methods: {
      goHome() {
        const TIME_COUNT=5
        if(!this.timer){
          this.count=TIME_COUNT
          this.show=false
          this.timer=setInterval(()=>{
            if(this.count>0 && this.count <=TIME_COUNT){
              this.count--
            }else{
              this.show=true
              clearInterval(this.timer)
              this.timer=null
              //跳转到首页
              this.$router.push('/home')
            }
          },1000)
        }
      },
      ktz(){
        this.$router.push('/home')
      },
    },
  }
</script>

<style lang="scss" scoped>
img{
  width: 100%;
  height: 165vw;
}
span{
  border: 1px solid #f1f1f1;
  border-radius: 2rem;
  margin-left: 80vw;
  color:gray;
  font-size: 0.9rem;
  padding: 0.4rem;
  margin-top: 0.1rem;
}
</style>