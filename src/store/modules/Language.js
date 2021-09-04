export default {
  state: {
    langKey: null,
  },
  actions: {
    setLanguage({ commit }, data) {
      commit("setLanguage", data);
    },
  },
  mutations: {
    setLanguage(state, { langKey }) {
      state.langKey = langKey;
    },
  },
  getters: {
    getLangKey(state) {
      return state.langKey;
    },
  },
};
