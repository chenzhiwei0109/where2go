import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import 'swiper/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import _ from 'lodash'



Vue.prototype.$bus = new Vue({})
Vue.prototype._ = _;
Vue.use(VueLazyLoad, {
  loading: require('./assets/loading-bars.svg')
})
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

fastclick.attach(document.body)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
