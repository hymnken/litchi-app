import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index"
import { Button, Icon } from "@nutui/nutui";
createApp(App)
.use(router)
.use(Button)
.mount('#app')
