<template>
  <div class="todo-header">
    <input type="text" @keyup.enter="add" v-model="title" placeholder="请输入你的任务名称，按回车键确认"/>
  </div>
</template>

<script>
//引入nanoid，npm i nanoid
import {nanoid} from 'nanoid'
export default {
    name:'MyHeader',
    methods:{
        add(){
            if(!this.title.trim()) return alert('请输入待办事项！')
            //创建一个todo对象
            const todoObj = {id:nanoid(), title:this.title, done:false}    
            //通知app组件，添加一个todo对象
            this.$emit('addTodo',todoObj)
            //清空输入框
            this.title = ''
        }
    },
    data(){
        return{
            title:''
        }
    },

}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>