import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import films from '@/components/Films/films'

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
    }
  ]
})
