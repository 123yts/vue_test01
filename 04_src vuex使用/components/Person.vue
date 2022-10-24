<template>
  <div>
    <input type="text" v-model="name" placeholder="请输入人名"/>
    <button @click="addPerson">添加</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'MyPerson',
    data(){
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personList
        }
    },
    methods:{
        addPerson(){
            const personObj = {id:nanoid(), name:this.name}
            console.log('添加一个人 ',personObj)
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    }
}
</script>

<style>

</style>