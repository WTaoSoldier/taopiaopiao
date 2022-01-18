<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import Home from './views/Home.vue';
  export default {
    created(){
      //在页面加载时读取sessionStorage里的信息，并且存到store中,替代合并
      if(sessionStorage.getItem('state')){
        this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("state"))));
      }
        //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener('beforeunload',()=>{
      sessionStorage.setItem('state',JSON.stringify(this.$store.state))
      })
    },
    // cv的token
    mounted () {
      let token = localStorage.getItem("token")
      if (!token) {
        this.$get("/v1/login/verify", { token }).then(res => {
          if (res.data.msg == "token无效") {
            localStorage.removeItem("token")
          }
        })
      }
    },
    

    components: { MyFooter, Home }
  }
</script>

<style lang="scss">

</style>
