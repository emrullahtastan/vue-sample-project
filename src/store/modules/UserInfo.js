export default {
  state: {
    name: null,
    email: null,
  },
  actions: {
    setUserInfo({ commit }, data) {
      commit("setUserInfo", data);
    },
    clearUserInfo({ commit }) {
      commit("clearUserInfo");
    },
  },
  mutations: {
    setUserInfo(state, { name, email }) {
      state.name = name;
      state.email = email;
    },
    clearUserInfo(state) {
      state.name = null;
      state.email = null;
    },
  },
  getters: {
    getUserInfo(state) {
      return state;
    },
  },
};
