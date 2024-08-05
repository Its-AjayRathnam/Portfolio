/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from './plugins'
import App from './App'
// Components
// Composables
import { createApp } from "vue"
import router from '../src/router/index'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')
