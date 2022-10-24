<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 绑定自定义事件 -->
        <MyHeader @addTodo="addTodo"></MyHeader>

        <MyList :todos="todos" :changeChecked="changeChecked" :deleteTodo="deleteTodo"></MyList>
        
        <MyFooter :todos="todos" @checkAll="checkAll" @deleteChecked="deleteChecked"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue';
import MyList from './components/MyList.vue';

export default {
  name: 'App',
  components: {
    MyHeader,MyList,MyFooter
  },
  data(){
    return {
        // todos:[
        //     {id:'001', title:'吃饭',done:true},
        //     {id:'002', title:'睡觉',done:true},
        //     {id:'003', title:'喝茶',done:true}
        // ]
        todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    //添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //修改todo勾选状态
    changeChecked(id){
      this.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    //删除todo
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    //全选or全不勾选
    checkAll(done){
      this.todos.forEach(todo => todo.done = done)
    },
    //清除已完成事项
    deleteChecked(){
      this.todos = this.todos.filter(todo => todo.done == false)
    }
  },
  watch:{
    todos:{
      //必须开启深度监视，因为存的是对象
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-edit {
    color: #fff;
    background-color: lightgreen;
    border: 1px solid green;
    margin-right: 5px;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn-edit:hover {
    color: #fff;
    background-color: green;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
