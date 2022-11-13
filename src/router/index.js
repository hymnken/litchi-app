import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/home/home.vue";
const routes =[
    {   // 首页
        path:"/",
        name:"home",
        component:Home,
        
    },
    {   
        path:"/",
        name:"home",
        component:Home
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router