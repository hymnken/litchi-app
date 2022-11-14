import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import 'normalize.css'
import '@/style/base.css'
import 'virtual:windi.css'
import { Button, Tab, Tabs, Search } from 'vant';
createApp(App)
    .use(router)
    .use(Button).use(Tab).use(Tabs).use(Search)
    .mount('#app')
