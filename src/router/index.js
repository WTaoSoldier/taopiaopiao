// 谢婷婷
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// import Home from './../components/Home.vue';
import ChooseCinema from '../views/ChooseCinema.vue';
import Dianyingpiao from '../views/Dianyingpiao.vue';
import Me from '../views/Me.vue';


Vue.use(VueRouter)

const routes = [
    // 路由器按照首字母排序的，如需修改，请组内讨论并提交谢婷婷修改
    // wlj两个信息路由跳转不要删
    {
        path:'/',
        component: () =>
        import ('../views/Syt.vue'),
      },
    {
        path:'/home',
        component:Home,
        meta:{
          showTab:true,
          keepAlive: true  // 希望被缓存
        },
        
      },
      {
        path:'/choosecinema',
        component:ChooseCinema,
        meta:{
          showTab:true,
          keepAlive: true  // 希望被缓存
        },

      },
      {
        path:'/me',
        component:Me,
        meta:{
          showTab:true,
          keepAlive: true  // 希望被缓存
        }
      },
      {
        path: '/dianyingpiao',
        component:Dianyingpiao,
        meta:{
            showTab:true,
            keepAlive: true  // 希望被缓存
          },
        
      },
      
      {
        path:'/home',
        redirect:'/home',
        meta: {
            keepAlive: true  // 希望被缓存
        },
      },


      {
        path: '/ticket',
        name: 'Ticket',
        component: () =>
            import ('../views/Ticket.vue'),
    },
   
    {
        path: '/uploader',
        name: 'Uploader',
        component: () =>
            import ('../views/Uploader.vue'),
    },
    {
        path: '/look',
        name: 'Look',
        component: () =>
            import ('../views/Look.vue'),
    },
    {
        path: '/want',
        name: 'Want',
        component: () =>
            import ('../views/Want.vue'),
    },
    {
        path: '/gz',//拼团规则
        name: 'Gz',
        component: () =>
            import ('../views/Gz.vue'),
    },
    {
        path: '/seat',
        name: 'Seat',
        component: () =>
            import ('../views/Seat.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue'),
           
    },
    {
        path: '/indexjy',
        name: 'IndexJy',
        component: () =>
            import ('../views/IndexJy.vue'),
    },
    {
        path: '/tpdetail',
        name: 'TpDetail',
        component: () =>
            import ('../views/TpDetail.vue'),
    },
    {
        path: '/actordetail',
        name: 'Actordetail',
        component: () =>
            import ('../views/ActorDetail.vue'),
    },
    {
        path: '/choosecinema',
        name: 'Choosecinema',
        component: () =>
            import ('../views/ChooseCinema.vue'),
    },
    {
        path: '/choosesite',
        name: 'Choosesite',
        component: () =>
            import ('../views/ChooseSite.vue'),
    },
    {
        path: '/cinemadetails',
        name: 'Cinemadetails',
        component: () =>
            import ('../views/CinemaDetails.vue'),
    },
    {
        path: '/city',
        name: 'City',
        meta: {
            keepAlive: true  // 希望被缓存
        },
        component: () =>
            import ('../views/City.vue'),
    },
    // conpon优惠券
    {
        path: '/conpon',
        name: 'Conpon',
        component: () =>
            import ('../views/Conpon.vue'),
    },
    {
        path: '/conpons',
        name: 'Conpons',
        component: () =>
            import ('../views/Conpons.vue'),
    },
    {
        path: '/discuss',
        name: 'Discuss',
        component: () =>
            import ('../views/Discuss.vue'),
    },
    {
        path: '/firmorder',
        name: 'Firmorder',
        component: () =>
            import ('../views/FirmOrder.vue'),
    },
    {
        path: '/gifts',
        name: 'Gifts',
        component: () =>
            import ('../views/Gifts.vue'),
    },
    {
        path: '/homewill',
        name: 'HomeWill',
        component: () =>
            import ('../views/HomeWill.vue'),
    },
    {
        path: '/invitefriends',
        name: 'Invitefriends',
        component: () =>
            import ('../views/InviteFriends.vue'),
    },
    {
        path: '/me',
        name: 'Me',
        meta: {
            keepAlive: true  // 希望被缓存
        },
        component: () =>
            import ('../views/Me.vue'),
    },
    {
        path: '/moviedetail',
        name: 'MovieDetail',
        component: () =>
            import ('../views/MovieDetail.vue'),
    },
    {
        path: '/photos',
        name: 'Photos',
        component: () =>
            import ('../views/Photos.vue'),
    },
    {
        path: '/relatedvideo',
        name: 'RelatedVideo',
        component: () =>
            import ('../views/RelatedVideo.vue'),
    },
    {
        path: '/say',
        name: 'Say',
        component: () =>
            import ('../views/Say.vue'),
    },
    {
        path: '/praise',
        name: 'Praise',
        component: () =>
            import ('../views/Praise.vue'),
    },
    {
        path: '/selectseat',
        name: 'SelectSeat',
        component: () =>
            import ('../views/SelectSeat.vue'),
    },
    {
        path: '/quanyika',
        name: 'Quanyika',
        component: () =>
            import ('../views/Quanyika.vue'),
    },
    {
        path: '/yingchengka',
        name: 'Yingchengka',
        component: () =>
            import ('../views/Yingchengka.vue'),
    },
    {
        path: '/xiaojuchang',
        name: 'Xiaojuchang',
        component: () =>
            import ('../views/Xiaojuchang.vue'),
    },
    {
        path: '/xiaojuchang1',
        name: 'Xiaojuchang1',
        component: () =>
            import ('../views/Xiaojuchang1.vue'),
    },
    {
        path: '/wodexiaoshi',
        name: 'Wodexiaoshi',
        component: () =>
            import ('../views/Wodexiaoshi'),
    },
    

    {
        path: '/giftss',
        name: 'Giftss',
        component: () =>
            import ('../views/Giftss.vue'),
    },
    {
        path: '/hotlist',
        name: 'HotList',
        component: () =>
            import ('../views/HotList'),
    },
    {
        path: '/dlibao',
        name: 'DLiBao',
        component: () =>
            import ('../views/DLiBao.vue'),
    },
    {
        path: '/return',
        name: 'Return',
        component: () =>
            import ('../views/Return.vue'),
    },
    {

        path: '/logins',
        name: 'Logins',
        component: () =>
            import ('../views/Logins.vue'),
    },
    {
        path: '/registers',
        name: 'Registers',
        component: () =>
            import ('../views/Registers.vue'),
    },
    {
        path: '/success',
        name: 'Success',
        component: () =>
            import ('../views/Success.vue'),
    },
    {
        path: '/touxiang',
        name: 'Touxiang',
        component: () =>
            import ('../views/Touxiang.vue'),
    },
    {
        path: '/cs',
        component: () =>
            import ('../views/cs.vue'),
    },
    {
        path: '/cs2',
        component: () =>
            import ('../views/cs2.vue'),
    },

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router