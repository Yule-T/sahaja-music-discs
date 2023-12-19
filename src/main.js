import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 路由
import router from "./router";
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
.use(ElementPlus)
.use(router)
.mount('#app')
