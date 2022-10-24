<template>
  <div>
    <MyCount/>
    <hr/>
    <MyPerson/>
  </div>
</template>

<script>

import MyCount from './components/Count.vue'
import MyPerson from './components/Person.vue'
export default {
  name: 'App',
  components: {
    MyCount,
    MyPerson
  },
  data(){
    return {
    }
  },
  mounted(){
    console.log('app',this)
  }
}
</script>

<style>
 
</style>
