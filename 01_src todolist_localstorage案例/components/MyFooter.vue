<template>
    <div class="todo-footer" v-show="todosLength">
    <label>
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{checkedNum}}</span> / {{todosLength}}全部
    </span>
    <button class="btn btn-danger" @click="deleteDone">清除已完成任务</button>
  </div>
</template>

<script>

export default {
    name:'MyFooter',
    props:['todos','checkAll','deleteChecked'],
    computed:{
      //已勾选事项数量
      checkedNum(){
        return this.todos.reduce((pre,todo)=>{
          //console.log('pre:', pre)
          return pre + (todo.done ? 1:0)
        },0)
      },
      //是否全勾选
      isAll:{
        get(){
          return this.checkedNum === this.todos.length && this.todosLength > 0
        },
        set(value){
          this.checkAll(value)
        }
      },
      //todos长度
      todosLength(){
       return this.todos.length
      }
    },
  methods:{
    deleteDone(){
      this.deleteChecked()
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>