import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import 'boxicons'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
