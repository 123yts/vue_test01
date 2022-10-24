export default {
    //开启命名空间
    namespaced:true,
    //准备actions--用于响应组件中的动作
    actions:{

    },
    //准备mutations--用于操作数据（state）
    mutations:{
        ADD_PERSON(state,value){
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    //准备state--用于存储数据
    state:{
        personList:[{id:'001', name:'张三'}]
    },

    //准备getters--用于加工state里面的数据
    getters:{

    }

}