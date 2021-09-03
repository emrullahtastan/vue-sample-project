export default {
  state: {
    name: null,
    email: null
  },
  actions: {
    set({ commit}, data) {
      commit("set", data);
    }
  },
  mutations: {
    set(state, { name, email }) {
      state.name = name;
      state.email = email;
    }
  },
  getters: {
    getUserInfo(state){
      return state;
    }
  }
};