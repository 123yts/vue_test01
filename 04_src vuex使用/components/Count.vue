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
            //sum:0
        }
    },
    computed:{
        //这种写法要求属性与state里面属性名一致
        //...mapState(['sum','hobby']) 
        ...mapState({he:'sum',aihao:'hobby',personList:'personList'}),
        //...mapGetters(['bigSum'])
        ...mapGetters({bigSum:'bigSum'})
    },
    methods:{
        // increment(){
        //     //this.sum += this.num
        //     //因为没有业务逻辑，所以不需要写actions方法
        //     this.$store.commit('ADD',this.num)
        // },
        // decrement(){
        //     //this.sum -= this.num
        //     this.$store.commit('SUB',this.num)
        // },
        // incrementOdd(){
        //     // if(this.sum % 2){
        //     //     this.sum += this.num
        //     // }
        //     this.$store.dispatch('addOdd',this.num)
        // },
        // incrementWait(){
        //     // setTimeout(()=>{
        //     //     this.sum += this.num
        //     // },1000)
        //     this.$store.dispatch('addWait',this.num)
        // },    

        //记得传参数，在标签里传
        //...mapMutations(['ADD','SUB'])
        //...mapActions(['addOdd','addWait'])
        ...mapMutations({increment:'ADD', decrement:'SUB'}),
        ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'})
    }
}
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>