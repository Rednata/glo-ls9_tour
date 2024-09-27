import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SingleTour from '@/views/SingleTour.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tour',
    name: 'tour',
    component: SingleTour
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
