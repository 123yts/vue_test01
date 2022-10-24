<template>
  <div>
    <span>我是hello</span>
    <span>woshi123</span>
    <div>nice</div>
        <ul>
            <li>
                <router-link active-class="active" to="/hello/news">News</router-link>
            </li>
            <li>
                <router-link active-class="active" to="/hello/message">Message</router-link>
            </li>
        </ul>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'MyHello',

}
</script>

<style>

</style>