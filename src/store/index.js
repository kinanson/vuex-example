import Vue from 'vue'
import Vuex from 'vuex'

import {
  actions,
  state,
  mutations,
  getters
} from './root'

import countForNamespaced from './namespaced/countForNamespaced'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  state,
  mutations,
  getters,
  modules:{
    countForNamespaced
  },
  struct: true
})
