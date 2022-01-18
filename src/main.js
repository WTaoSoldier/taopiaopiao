import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
Vue.prototype.moment = moment

import axios from "axios"
// import VueAxios from "vue-axios"
// axios.defaults(VueAxios,axios)

// 本地测试用*******************************************
axios.defaults.baseURL="http://127.0.0.1:3000/"

// 上线打包前用*****************************************
// axios.defaults.baseURL="http://101.34.151.198:3000/"


// Vue.use(VueAxios,axios)


import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import './assets/css/my-mint.scss'; //全局修改mint-UI样式

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 时间戳转换
Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm';
  return moment(value).format(formatString);
});

  Vue.prototype.$moment = moment
Vue.use(Vant);

Vue.config.productionTip = false

// 默认页面跳转到顶部
router.beforeEach((to, from, next) => {
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')