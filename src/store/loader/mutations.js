const IS_LOADING = function (state) {
  state.isloading = true
}

const IS_LOADED = function (state) {
  state.isloading = false
}

export default {
  IS_LOADING,
  IS_LOADED
}
