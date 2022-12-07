import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../components/NotFound.vue'

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
  },
  {
    path: '/compteur',
    name: 'compteur',
    component: () => import(/* webpackChunkName: "compteur" */ '../views/CompteurDisplayView.vue')
  },
  {
    path: '/404', name:'NotFound', component: NotFound
  },
  {
    path: '/:catchAll(.*)', redirect: '404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
