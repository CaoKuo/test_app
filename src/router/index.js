import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
import Day2 from '@/components/Day2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Day2',
    component: Day2
  }
]

const router = new VueRouter({
  routes
})

export default router
