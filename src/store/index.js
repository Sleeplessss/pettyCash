import Vue from 'vue'
import Vuex from 'vuex'
import Corestacks from './corestates'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    Corestacks
  },
  strict: debug
})
