export default {
    //开启命名空间
    namespaced:true,
    //准备actions--用于响应组件中的动作
    actions:{
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
    },
    //准备mutations--用于操作数据（state）
    mutations:{
        ADD(state,value){
            console.log('mutations中的ADD被调用了')
            state.sum += value
        },
        SUB(state,value){
            console.log('mutations中的SUB被调用了')
            state.sum -= value
        }
    },
    //准备state--用于存储数据
    state:{
        sum:0, //计算结果
        hobby:'学习',
    },

    //准备getters--用于加工state里面的数据
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }

}