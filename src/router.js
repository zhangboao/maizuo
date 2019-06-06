import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件
import Prefer from 'pages/prefer/prefer'
import Cinema from 'pages/cinema/cinema'
import Movie from 'pages/movie/movie'
import My from 'pages/my/my'
import nowPlaying from 'pages/movie/nowPlaying.vue'
import soonPlaying from 'pages/movie/soonPlaying.vue'
import details from 'pages/movie/details.vue'

// vue 使用路由插件
Vue.use(VueRouter)

// 抛出 vue实例
export default new VueRouter({
  routes: [
    {
      path: '/cinema', // 匹配的路径
      component: Cinema // 要渲染的组件
    },
    {
      path: '/prefer',
      component: Prefer
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/movie',
      component: Movie,
      children: [
        {
          path: 'nowPlaying',
          component: nowPlaying
        },
        {
          path: 'soonPlaying',
          component: soonPlaying
        },
        {
          path: 'details',
          component: details,
          name: 'details'
        }
      ]
    },
    {
      path: '/',
      redirect: '/movie/nowPlaying'
    }
  ]
})
