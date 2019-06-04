import Vue from 'vue'
import App from './App.vue'

import router from './router'
import 'style/reset.css'
// 全局引入样式重置文件 将css 文件当成模块引入 没有文件类型的概念 一切文件皆模块
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
