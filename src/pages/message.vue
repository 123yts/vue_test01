<template>
  <div>
    <h3>messages模块</h3>
    <ul>
        <li v-for="message in mesList" :key="message.id">
            <!-- <router-link :to="`/hello/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link> -->
            <!-- <router-link :to="{
                path:'/hello/message/detail',
                query:{
                    id:message.id,
                    title:message.title
                }
            }"> -->
            <router-link active-class="active" :to="{
                name:'getDetail',
                params:{
                    id: message.id,
                    title: message.title
                }
            }">
                {{message.title}}
            </router-link>
        </li>
    </ul>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'MyMessage',
    data(){
        return {
            mesList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'}
            ]
        }
    }
}
</script>

<style>

</style>