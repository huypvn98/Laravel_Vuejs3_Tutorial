import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
