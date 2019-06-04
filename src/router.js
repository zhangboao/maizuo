import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import Rank from 'pages/prefer/prefer'
import Singer from 'pages/cinema/cinema'
import Recommend from 'pages/movie/movie'
import Search from 'pages/my/my'
//vue 使用路由插件
Vue.use(VueRouter)

//抛出 vue实例
export default new VueRouter({
  routes:[
    {
      path:'/singer',//匹配的路径
      component:Singer// 要渲染的组件
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/recommend',
      component:Recommend
    }
  ]
})