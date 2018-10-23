// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'
import 'vue2-animate/dist/vue2-animate.min.css'
import '../node_modules/swiper/dist/css/swiper.min.css'
import './modules/filters'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import autoFunction from './modules'
Vue.use(mintUI)
Vue.use(autoFunction)

fontawesome.library.add(solid)
fontawesome.library.add(regular)
fontawesome.library.add(brands)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Nprogress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    Nprogress.start()
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    Nprogress.start()
    next()
  }
})
router.afterEach(() => {
  Nprogress.done()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
