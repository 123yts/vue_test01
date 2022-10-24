<template>
    <transition name="todo" appear>
        <li>
            <label>
            <input type="checkbox" :checked='todo.done' @change="handleChecked(todo.id)"/>
            <!-- <input type="checkbox" v-model='todo.done' "/> 这样也能实现功能，但是vue不建议修改todo的属性或者todo -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" 
              type="text" 
              :value="todo.title" 
              @blur="handleBlur(todo,$event)"
              ref="inputTitle"
            />
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
        </li>
    </transition>
</template>

<script>
export default {
    name:'MyItem',
    //声明接收todo对象
    props:['todo'],
    methods:{
        handleChecked(id){
            this.$bus.$emit('changeChecked',id)
        },
        handleDelete(id){
            if(confirm('是否要删除该项？')){
                //console.log(id)
                this.$bus.$emit('deleteTodo',id)
            }
        },
        //增加编辑属性
        handleEdit(todo){
          if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
            todo.isEdit = true
          }else{
            this.$set(todo,'isEdit',true)
          }
          this.$nextTick(function(){
            this.$refs.inputTitle.focus()
          })
        },
        //失去焦点就修改todo的title
        handleBlur(todo, e){
          if(!e.target.value.trim()) return alert('输入内容不能为空！')
          this.$bus.$emit('updateTodo',todo.id, e.target.value)
          todo.isEdit = false
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