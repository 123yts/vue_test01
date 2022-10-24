//该文件用于创建整个应用的路由器
import VueRouter from "vue-router"
//引入组件
import MyAbout from '../pages/about.vue'
import MyHello from '../pages/hello.vue'
import MyNews from '../pages/news.vue'
import MyMessage from '../pages/message.vue'
import MyDetail from '../pages/detail.vue'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:MyAbout
        },
        {
            path:'/hello',
            component:MyHello,
            children:[
                {
                    path:'news',
                    component:MyNews
                },
                {
                    path:'message',
                    component:MyMessage,
                    //params传参
                    children:[
                        {
                            name:'getDetail',
                            path:'detail/:id/:title',
                            component:MyDetail
                        }
                    ]
                    // children:[
                    //     {
                    //         path:'detail',
                    //         component:MyDetail
                    //     }
                    // ]
                }
            ]
        }
    ]
})