import 'element-plus/dist/index.css'
import '@/styles/reset.css'
import '@/styles/global.css'
import '@/styles/variables.css'
import '@/styles/rwd.css'
import '@/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })

app.mount('#app')
