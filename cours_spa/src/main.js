import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.globalProperties.$prenom = "Bob"
app.use(router).mount('#app')
