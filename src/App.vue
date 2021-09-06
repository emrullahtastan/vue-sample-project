<template>
  <div id="app">
    <div id="nav">
      <div class="container nav__container">
        <div class="nav__left-side">
          <router-link to="/" class="flex align-item-center">
            <svg
              class="home-icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="512"
              height="512"
              viewBox="0 0 512 512"
            >
              <title></title>
              <g id="icomoon-ignore"></g>
              <path
                d="M512 295.222l-256-198.713-256 198.714v-81.019l256-198.713 256 198.714zM448 288v192h-128v-128h-128v128h-128v-192l192-144z"
              ></path>
            </svg>
            <span class="ml-10 mt-5"> Sample Project </span>
          </router-link>
        </div>
        <div class="nav__right-side" :class="openMobileMenu ? 'open' : null">
          <router-link to="/about" class="nav__right-side-item"
            >{{ $t("menu.about") }}
          </router-link>
          <router-link
            v-if="userInfo['email']"
            to="/login"
            class="nav__right-side-item"
          >
            <span @click="logout">
              {{ $t("menu.logout") }}
            </span>
          </router-link>
          <router-link
            v-if="!userInfo['email']"
            to="/login"
            class="nav__right-side-item"
            >{{ $t("menu.login") }}
          </router-link>
          <div style="display: inline-flex" class="nav__right-side-item">
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
        <div class="nav__mobile-menu-icon" @click="openMobileMenuFunc">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <title>menu</title>
            <g id="icomoon-ignore"></g>
            <path
              d="M32 96h448v96h-448zM32 224h448v96h-448zM32 352h448v96h-448z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div style="padding-top: 50px">
      <router-view />
    </div>
  </div>
</template>

<script>
import "css-reset-and-normalize";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      userInfo: this.getUserInfo(),
      openMobileMenu: false,
    };
  },
  watch: {
    $route() {
      this.openMobileMenu = false;
    },
  },
  methods: {
    ...mapGetters({ getUserInfo: "getUserInfo" }),
    ...mapActions({
      setLangKey: "setLanguage",
      clearUserInfo: "clearUserInfo",
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
    openMobileMenuFunc() {
      this.openMobileMenu = !this.openMobileMenu;
    },
  },
};
</script>
<style lang="scss">
@import "assets/styles/main";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #2c3e50;
  color: white;

  a {
    font-weight: bold;
    text-decoration: none;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
