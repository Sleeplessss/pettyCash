const state = {
  detail_key: '',
  detail_key_poa: ''
}
const mutations = {
  SET_DetailKey (state, payload) {
    state.detail_key = payload
  },
  SET_DetailKeyPoa (state, payload) {
    state.detail_key_poa = payload
  }
}
const actions = {
  setDetailKey: ({ commit }, value) => commit('SET_DetailKey', value),
  setDetailKeyPoa: ({ commit }, value) => commit('SET_DetailKeyPoa', value)
}

const getters = {
  getDetailKey: state => state.detail_key,
  getDetailKeyPoa: state => state.detail_key_poa
}
export default {
  state,
  getters,
  mutations,
  actions
}
