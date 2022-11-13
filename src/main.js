import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import { Button, Tab, Tabs } from 'vant';
createApp(App)
    .use(router)
    .use(Button).use(Tab).use(Tabs)
    .mount('#app')
