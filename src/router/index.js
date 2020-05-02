import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: "city" */ '@/views/city/City.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "city" */ '@/views/detail/Detail.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
