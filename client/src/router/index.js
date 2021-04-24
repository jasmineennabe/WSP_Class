import Vue from 'vue'
import VueRouter from 'vue-router'
import MyWall from '@/views/MyWall'
import MyFeed from '@/views/MyFeed';
import Login from '@/views/Login'
import Users from '@/views/Users'
import Session from '../models/Session';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Feed', component: MyFeed },
  { path: '/login', name: 'Login', component: Login },
  { path: '/users', name: 'Users', component: Users },
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

router.beforeEach( (to, from, next) =>{
  console.log({ from, to })
  if(to.path == '/mywall' && !Session.user){
    Session.nextRoute = to;
    next('/login') 
  } else{
    next();
  }
})

export default router