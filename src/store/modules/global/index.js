export default {
  namespaced: true,
  strict: true,
  state: {
    loader: {
      fullPage: false,
      startPage: true,
    },
  },
  mutations: {
    SET_LOADER_FULL_PAGE(state, payload) {
      state.loader.fullPage = payload
    },
    SET_LOADER_START_PAGE(state, payload) {
      state.loader.startPage = payload
    },
  },
}
