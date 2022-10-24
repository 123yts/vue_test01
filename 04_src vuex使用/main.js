import Vue from 'vue'
import App from './App.vue'

//引入store
import store from './store'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  //自定义事件总线$bus
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
