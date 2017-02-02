export const state = {
  count: 1
}

export const actions = {
  addCount({
    commit
  }) {
    commit('addCount', 1) //呼叫mutations
  }
}

export const mutations = {
  addCount(state, num) {
    state.count += num //改變成state.js定義的count數值去加1，num是在actions我們丟進去的1
  }
}

export const getters = {
  count: state => state.count //取得state裡面的內容
}
