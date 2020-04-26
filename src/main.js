import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-bars.svg'
})
import 'swiper/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

fastclick.attach(document.body)

Vue.prototype.$bus = new Vue({})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
