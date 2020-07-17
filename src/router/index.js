import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

import routes from './routes'

Vue.use(VueRouter)
Vue.use(Meta)

const router = new VueRouter({
  routes
})

export default router
