import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);
app.config.globalProperties.$url_backend = "https://backend-vuejs-tpfinal.agence-pixi.fr/"
app.use(router).mount('#app');

import "bootstrap/dist/js/bootstrap.js"