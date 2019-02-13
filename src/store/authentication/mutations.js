import store from 'store'

const IS_AUTHENTICATED = function (state) {
  this.dispatch('isLoaded')
  var token = store.get('auth')

  if(!token || (Date.now() > parseInt(token.expires_in)) || typeof token.expires_in === "undefined"){

    return this.dispatch('destroyToken')
  }
  state.error = false
  state.auth = token
  state.isAuthenticated = true
}

const SET_ERROR = function (state, error) {
  state.error = error
  this.dispatch('destroyToken')
}

const SET_TOKEN = function (state, token) {
  store.set('auth', token)
  this.dispatch('isAuthenticated')
}

const DESTROY_TOKEN = function (state) {
  state.isAuthenticated = false
  state.auth = {}
  store.clearAll()
}

export default {
  IS_AUTHENTICATED,
  SET_TOKEN,
  DESTROY_TOKEN,
  SET_ERROR
}
