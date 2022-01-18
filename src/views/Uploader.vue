<template>
  <div class="bg1">
    <div class="detail" style="margin-bottom: 2.5rem">
        <!-- 顶部栏 -->
      <header>
        <mt-header fixed>
          <mt-button icon="back" slot="left" @click="$router.back(-1)">
            用户信息
          </mt-button>
        </mt-header>
      </header>
    </div>
    <div class="bg" style="margin:1.25rem;padding:5rem 1.25rem;text-align:center">
      <h4 style="font-weight:bold;margin:2.5rem;color:#fff">个人信息</h4>
    <div class="inp">
      <div>
        <span class="biaoti">昵称:</span>
        <span class="neirong">{{data.uname}}</span>
      </div>
      <input id="input1" class="inp1" v-if="name" type="text" placeholder="请输入">
      <span class="gai" @click="xiugai">点击修改</span>
    </div>
    <hr>
    <div class="inp">
      <div>
        <span class="biaoti" style="">密码:</span>
        <span class="neirong">{{data.upwd}}</span>
      </div>
      <input id="input2" class="inp2" v-show="pwd" type="text" placeholder="请输入">
      <span class="gai" @click="xiugai2">点击修改</span>
    </div>
    <hr>
    <div class="btn" @click="checkForm">
      <button><span>确认修改</span></button>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

  export default {
    computed: {
    ...mapState(["username", "islogin", "chooseren"]),
  },
    data() {
      return {
        data:[],
        name:false,
        pwd:false,
        name:'',
        newpwd:'',
        id:''
      }
    },

    methods: {
      ...mapMutations({changeren:"changeren"}),
      getdata() {
      let b1 = this.username;
      console.log(b1)
      let url = `v1/buy/me/${b1}`;
      console.log(url)
      axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data[0];
        console.log(this.data)
        });
      },
      xiugai(){
        this.name=true
      },
      xiugai2(){
        this.pwd=true
      },
      checkForm(){
        let name = document.getElementById('input1').value
        console.log(name)
        let newpwd= document.getElementById('input2').value
        if(!name||!newpwd){
          return
        }
        console.log(newpwd)
        console.log(this.uname,name)
        if(name != this.uname && name != null){
          this.uname = name
          console.log(this.uname)
          this.pwd = newpwd
          console.log(this.pwd)
          let params=`id=${this.data.u_id}&name=${this.uname}&password=${this.pwd}`
          console.log(params)
          axios.get(`v1/buy/change?${params}`).then(res=>{
            if(res.data.code == 200){
              console.log(res)
              // this.$messagebox('提示', '修改成功，请登录') 
              this.changeren(1)
              this.$router.push('/me')
            }else{alert('用户名/密码错误')}
          })
        }
      }
    },
    mounted () {
      this.getdata();
    },
    
  }
</script>

<style lang="scss" scoped>
.inp{
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 1.25rem 0;
  line-height: 1.125rem;
}
input{
  position: absolute;
  left: 3.5rem;
  border: none;
  font-weight: bold;
  width: 10rem;
}
.neirong{
  font-weight: bold;
}
.gai{
  font-size: 0.75rem;
  color: rgb(34, 184, 221);
  width: 5rem;
}
.biaoti{
  margin-right:1rem;
  width: 5rem;
  font-size: 1.125rem;
  font-weight: bold;
}
.btn{
  width: 12.5rem;
  margin-top: 9.375rem;
  button{
    width: 9.375rem;
    height: 3.125rem;
    border: none;
    border-radius: 3.125rem;
    background-color: rgb(46, 176, 216);
    span{
      color:#fff
    }
  }
}
.bg{

  background-color: rgba(211, 194, 194,0.2);
  background-repeat: no-repeat;   //不重复
  background-repeat: repeat-x;
  background-size: 100% 100%;     // 满屏
}
.bg1{
  width: 100%;
  height: 38.75rem;
  background-image: url("/xld/swipe/5.jpg"); 
  background-size: 100% auto;
}
span{color: #fff;}

</style>