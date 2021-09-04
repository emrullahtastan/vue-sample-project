<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t("menu.home") }}</router-link>
      |
      <router-link to="/about">{{ $t("menu.about") }}</router-link>
      |
      <router-link v-if="userInfo['email']" to="/login">
        <span @click="logout">
          {{ $t("menu.logout") }}
        </span>
      </router-link>
      <router-link v-if="!userInfo['email']" to="/login"
        >{{ $t("menu.login") }}
      </router-link>
      |
      <div style="display: inline-flex">
        <div
          v-if="visibleLangMenuItem('tr')"
          style="cursor: pointer"
          @click="changeLang('tr')"
        >
          Turkish
        </div>
        <div
          v-if="visibleLangMenuItem('en')"
          style="cursor: pointer"
          @click="changeLang('en')"
        >
          English
        </div>
      </div>
      <div v-if="userInfo['email']" style="display: inline">
        | {{ $t("hello") + " " + userInfo["name"] }}
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      userInfo: this.getUserInfo(),
    };
  },
  methods: {
    ...mapGetters({ getUserInfo: "getUserInfo" }),
    ...mapActions({
      "setLangKey": "setLanguage",
      "clearUserInfo": "clearUserInfo",
    }),
    changeLang(langKey) {
      this.setLangKey({ langKey });
      this.$i18n.locale = langKey;
    },
    visibleLangMenuItem(langKey) {
      return !(this.$i18n.locale === langKey);
    },
    logout() {
      this.clearUserInfo();
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
