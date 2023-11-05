import { createApp } from 'vue'

import App from './App.vue'
import router from './routes'
// Vuetify
import vuetifyPlugin from './plugins/vuetify'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

// const vuetify = createVuetify({
//   components,
//   directives
// })

const app = createApp(App)

app.use(router)
app.use(vuetifyPlugin)

app.mount('#app')
