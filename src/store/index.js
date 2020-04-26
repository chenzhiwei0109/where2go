import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultcity = '上海';
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {
  console.log(e)
 }
export default new Vuex.Store({
  state: {
    city: defaultcity
  },
  mutations: {
    changeCity(state, city) {
      state.city = city;
      try {
        localStorage.city = city
      } catch (e) { 
        console.log(e)
      }
    }
  },
  actions: {
    changeCity({ commit }, city) {
      commit('changeCity', city)
    }
  },
  modules: {
  }
})
