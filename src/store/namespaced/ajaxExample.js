import $ from 'jquery'

const state = {
  data: {}
}

const actions = {
  async get({
    commit
  }) {

    let result = await $.getJSON('your api data')
    commit('get', result)
  }
}

const mutations = {
  get(state, data) {
    state.data = data
  }
}

const getters = {
  data: state => state.data //取得state裡面的內容
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true //多加了namespaced為true
}
