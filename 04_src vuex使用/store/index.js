//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions--用于响应组件中的动作
const actions = {
    // add(context,value){
    //     console.log('add调用',value)
    //     context.commit('ADD',value)
    // },
    // sub(context,value){
    //     console.log('sub调用',value)
    //     context.commit('SUB',value)
    // },
    addOdd(context,value){
        console.log('addOdd调用',value)
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        console.log('addWait调用',value)
        setTimeout(()=>{
            context.commit('ADD',value)
        },1000)
        
    }
}
//准备mutations--用于操作数据（state）
const mutations = {
    ADD(state,value){
        console.log('mutations中的ADD被调用了')
        state.sum += value
    },
    SUB(state,value){
        console.log('mutations中的SUB被调用了')
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log('mutations中的ADD_PERSON被调用了')
        state.personList.unshift(value)
    }
}
//准备state--用于存储数据
const state = {
    sum:0, //计算结果
    hobby:'学习',
    personList:[{id:'001', name:'张三'}]
}

//准备getters--用于加工state里面的数据
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

