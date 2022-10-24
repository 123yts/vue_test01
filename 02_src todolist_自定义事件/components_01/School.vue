<template>
  <div class="demo">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{schoolAddr}}</h2>
    <button @click="showSchoolName">点击展示学校名称</button>
  </div>
</template>

<script>
export default {
    name:'school',
    data(){
        return {
            schoolName:'成都理工大学',
            schoolAddr:'成都市成华区二仙桥成华大道2号'
        }
    },
    methods: {
        showSchoolName(){
            alert(this.schoolName)
        }
    }
}
</script>

<style>
    .demo{
        background-color: yellow;
    }
</style>