import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import MyWall from '@/views/MyWall'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/mywall', name: 'My Wall', component: MyWall },
  { path: '/jobs', name: 'Jobs', component: () => import(/* webpackChunkName: "about" */ '../views/Jobs.vue')},
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  { path: '/documentation', name: 'Documentation', component: () => import(/* webpackChunkName: "documentation" */ '../views/Documentation.vue')},
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')},
  { path: '/report', name: 'Report', component: () => import(/* webpackChunkName: "about" */ '../views/Report.vue')}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
