<template>
  <div>
    <h2>计算结果为：{{he}}</h2><br/><br/>
    <h2>计算结果放大10倍为：{{bigSum}}</h2><br/><br/>
    <h2 style="color:red">person数量：{{personList.length}}</h2>
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(num)">加</button>
    <button @click="decrement(num)">减</button>
    <button @click="incrementOdd(num)">奇数才加</button>
    <button @click="incrementWait(num)">等会儿再加</button>
    <h2>我的爱好是：{{aihao}}</h2>
  </div>
</template>

<script>

//简化写法
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name:'MyCount',
    data(){
        return {
            num:1
        }
    },
    computed:{
        //这种写法要求属性与state里面属性名一致
        //...mapState(['sum','hobby']) 
        ...mapState('countAbout',{he:'sum',aihao:'hobby'}),
        ...mapState('personAbout',{personList:'personList'}),
        //...mapGetters(['bigSum'])
        ...mapGetters('countAbout',{bigSum:'bigSum'})
    },
    methods:{   
        //记得传参数，在标签里传
        //...mapMutations(['ADD','SUB'])
        //...mapActions(['addOdd','addWait'])
        ...mapMutations('countAbout',{increment:'ADD', decrement:'SUB'}),
        ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'})
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>