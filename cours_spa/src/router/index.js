import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscrits',
    name: 'inscrits',
    component: () => import(/* webpackChunkName: "inscrits" */ '../views/InscritsListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
