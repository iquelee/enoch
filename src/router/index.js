import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import mainFrame from '../views/mainFrame.vue'
import termFrame from '../views/termFrame.vue'
import doorFrame from '../views/doorFrame.vue'
import fix from '../views/fix.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/mainFrame',
        name: 'mainFrame',
        component: mainFrame
      },
      {
        path: '/termFrame',
        name: 'termFrame',
        component: termFrame
      },
      {
        path: '/doorFrame',
        name: 'doorFrame',
        component: doorFrame
      },
      {
        path: '/fix',
        name: 'fix',
        component: fix
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
