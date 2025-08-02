import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createRulesPlugin } from 'vuetify/labs/rules'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})
app.use(router).use(pinia).use(vuetify).use(VueAxios, axios).use(
  createRulesPlugin(
    {
      /* options */
    },
    vuetify.locale,
  ),
)
app.mount('#app')
