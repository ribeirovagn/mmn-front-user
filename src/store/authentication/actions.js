import Vue from 'vue'
import router from '../../router'

const isAuthenticated = function ({ commit }) {
  commit('IS_AUTHENTICATED')
}

const setToken = function ({ commit }, objToken) {

  Vue.http.post(process.env.LOGIN_ENDPOINT, objToken).then(response => {
    response.data.expires_in = response.data.expires_in + Date.now()
    commit('SET_TOKEN', response.data)
    if(this.state.authentication.isAuthenticated){
      window.location = "/"
    }
  }, error => {
    this.dispatch('setError', error.data)
  })
}

const setError = function ({commit}, error) {
  commit('SET_ERROR', error)
}

const destroyToken = function ({ commit }) {
  commit('DESTROY_TOKEN')
}

export default {
  isAuthenticated,
  setToken,
  destroyToken,
  setError
}
