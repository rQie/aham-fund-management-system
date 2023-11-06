import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
// Vuetify
import vuetifyPlugin from './plugins/vuetify'
import '@/scss/style.scss'
import VueTablerIcons from 'vue-tabler-icons'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const app = createApp(App)

app.use(router)
app.use(VueTablerIcons)
app.use(vuetifyPlugin).mount('#app')
