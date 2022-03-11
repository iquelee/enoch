import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: 'detail',
        name: 'Detail',
        component: Detail,
        props ($route) {
          return { info: $route.query.info }
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
