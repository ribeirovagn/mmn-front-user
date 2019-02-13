const isLoading = function ({ commit }) {
  commit('IS_LOADING')
}



const isLoaded = function ({ commit }) {
  commit('IS_LOADED')
}


export default {
  isLoading,
  isLoaded
}
