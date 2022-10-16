import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Aa from '../views/Aa.vue'
import Cc from '../views/Cc.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/aaa/:name',
    name: 'aa',
    component: Aa,
    meta: {
      label: 'aa'
    },
    children: [
      {
        path: 'cc/:id+',
        name: 'cc',
        component: Cc,
        meta: {
          label: 'cc'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
