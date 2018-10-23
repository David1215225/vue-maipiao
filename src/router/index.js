import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import films from '@/components/Films/films'
import login from '@/components/loginRegister/login'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/films',
      name: 'films',
      component: films
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        requireAuth: true
      }
    }
  ]
})
