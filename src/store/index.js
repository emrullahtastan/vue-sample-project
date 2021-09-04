import Vue from "vue";
import Vuex from "vuex";
import UserInfo from "./modules/UserInfo";
import Language from "./modules/Language";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { UserInfo, Language },
});
