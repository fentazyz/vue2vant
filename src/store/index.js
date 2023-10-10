import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/user'
import Cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    User,
    Cart
  }
})
