import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ui from '../packages/index'

createApp(App).use(ui).use(store).use(router).mount('#app')
