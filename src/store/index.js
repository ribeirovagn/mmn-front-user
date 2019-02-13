import Vue from 'vue'
import Vuex from 'vuex'
import authentication from './authentication'
import loader from './loader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication: authentication,
    loader: loader
  },
  strict: true
})
