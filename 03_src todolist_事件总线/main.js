import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //自定义事件总线$bus
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')
