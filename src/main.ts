import { createApp } from 'vue'
import {App} from './App'
import {Bar} from './views/Bar'
import {Foo} from './views/Foo'
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
  { path: '/', component: Bar },
  { path: '/about', component: Foo },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

