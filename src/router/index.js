import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Home from '../views/Home'
import Login from '../views/Login'
import About from '../views/About'
import Teste from '../views/Teste'
import Teste2 from '../views/Teste2'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
          { path: '/home/teste', name: 'Teste', component: Teste },
          { path: '/home/teste2', name: 'Teste2', component: Teste2 }
        ]
      },
      { path: '/about', name: 'About', component: About }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
