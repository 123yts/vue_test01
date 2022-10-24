import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

//引入自定义的路由
import router from './router';

Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
