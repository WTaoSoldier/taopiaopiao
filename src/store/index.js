// 
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  // 状态值state，用于管理共享的所有数据
  state: {
    // 选择城市
    citychoose: "杭州",
    // 是否登录
    islogin:false,
    // 用户的id
    username:"",
    // 选择的电影id
    choosemovie:null,
    // 选择的影院id
    choosecinema:"",
    // 选择的场次id
    choosesite:"",
    // 选择的座位数组
    choosezuowei:"",
    // 选择的价格
    chooseprice:"",
    // 选择的座位文本格式
    chooseseat:"",
    chooseticket:"",
    choosenum:"",
    choosephone:"",
    choosehui:"",
    choosepiao:"",
    chooseren:"",
    choosepiaopiao:"",
    xttzuo:""
  },
  
  mutations: {
    changexttzuo (state,value) {
      // 变更状态
      state.xttzuo=value
    },
    changepiaopiao (state,value) {
      // 变更状态
      state.choosepiaopiao=value
    },
    changeren (state,value) {
      // 变更状态
      state.chooseren=value
    },
    changepiao (state,value) {
      // 变更状态
      state.choosepiao=value
    },
    changehui (state,value) {
      // 变更状态
      state.choosehui=value
    },
    changecity (state,value) {
      // 变更状态
      state.citychoose=value
    },
    changeislogin (state,value) {
      // 变更状态
      state.islogin=value
    },
    changeusername (state,value) {
      // 变更状态
      state.username=value
    },
    changemovie (state,value) {
      // 变更状态
      state.choosemovie=value
    },
    changecinema (state,value) {
      // 变更状态
      state.choosecinema=value
    },
    changesite (state,value) {
      // 变更状态
      state.choosesite=value
    },
    changezuowei (state,value) {
      // 变更状态
      state.choosezuowei=value
    },
    changeprice (state,value) {
      // 变更状态
      state.chooseprice=value
    },
    changeseat (state,value) {
      // 变更状态
      state.chooseseat=value
    },
    changeticket (state,value) {
      // 变更状态
      state.chooseticket=value
    },
    changenum (state,value) {
      // 变更状态
      state.choosenum=value
    },
    changephone (state,value) {
      // 变更状态
      state.choosephone=value
    },
    
  },

  actions: {
  },

  modules: {
  },

  getters(){

  }
})
