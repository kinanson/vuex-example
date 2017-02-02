const state = {
  count: 1
}

const actions = {
  addCount({
    commit
  }) {
    commit('addCount', 2) //呼叫mutations，此邏輯為+2
  }
}

const mutations = {
  addCount(state, num) {
    state.count += num //改變成state.js定義的count數值去加1，num是在actions我們丟進去的1
  }
}

const getters = {
  count: state => state.count //取得state裡面的內容
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true //多加了namespaced為true
}
