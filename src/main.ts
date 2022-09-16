import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import store from './store'

createApp(App).use(router).use(store).mount('#app')
