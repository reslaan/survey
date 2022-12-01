import './bootstrap'

import { createApp } from 'vue'
import App from './vue/App.vue'
import store from './vue/store'
import router from './vue/router/router.js'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
