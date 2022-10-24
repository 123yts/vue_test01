//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

import personOption from './person'
import countOption from './count'
//创建store
export default new Vuex.Store({
    modules:{
        personAbout:personOption,
        countAbout:countOption
    }
})

