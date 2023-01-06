import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BoardList',
    name: 'BoardList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BoardList.vue')
  },
  {
    path: '/NotYetDeveloped',
    name: 'NotYetDeveloped',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotYetDeveloped.vue')
  },
  {
    path: '/MyPage',
    name: 'MyPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
