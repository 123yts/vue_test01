<template>
    <transition name="todo" appear>
        <li>
            <label>
            <input type="checkbox" :checked='todo.done' @change="handleChecked(todo.id)"/>
            <!-- <input type="checkbox" v-model='todo.done' "/> 这样也能实现功能，但是vue不建议修改todo的属性或者todo -->
            <span>{{todo.title}}</span>
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button class="btn btn-edit">编辑</button>
        </li>
    </transition>
</template>

<script>
export default {
    name:'MyItem',
    //声明接收todo对象
    props:['todo','changeChecked','deleteTodo'],
    methods:{
        handleChecked(id){
            this.changeChecked(id)
        },
        handleDelete(id){
            if(confirm('是否要删除该项？')){
                console.log(id)
                this.deleteTodo(id)
            }
        }
    }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
.todo-enter-active{
  animation: todo 0.5s linear;
}
.todo-leave-active{
  animation: todo 0.5s linear reverse;
}
@keyframes todo {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>