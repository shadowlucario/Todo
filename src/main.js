import { createApp } from 'vue'
import App from './App.vue'

import 'spectre.css/dist/spectre.min.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
//import 'spectre.css/dist/spectre.icons.min.css'

createApp(App).use(Quasar, quasarUserOptions).mount('#app')
