import Vue from 'vue'
import Vuex from 'vuex'
import State from './state'
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'

Vue.use(Vuex)

export default {
  state: State,
  mutations: Mutations,
  getters: Getters,
  actions: Actions
}
