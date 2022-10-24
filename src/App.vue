<template>
  <div>
    <div>
      <router-link to="/about" active-class="active">about</router-link><br/>
      <router-link to="/hello" active-class="active">hello</router-link>
    </div>
    <hr>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  mounted(){
    console.log('app',this)
  }
}
</script>

<style>
 .active{
  background-color: red;
 }
</style>
