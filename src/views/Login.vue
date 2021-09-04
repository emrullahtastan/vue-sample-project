<template>
  <div>
    <h4>{{ $t("login.title") }}</h4>
    <div>
      <div>
        <label for="name">{{ $t("login.form.name") }}</label>
        <input id="name" v-model="name" />
      </div>
      <div>
        <label for="email">{{ $t("login.form.email") }}</label>
        <input id="email" type="email" v-model="email" />
      </div>
      <div>
        <label for="password">{{ $t("login.form.password") }}</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <div>
        <button class="btn btn--primary" @click="login">
          {{ $t("loginButtonText") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    ...mapActions({
      setUserInfo: "setUserInfo",
    }),
    login() {
      this.setUserInfo({ name: this.name, email: this.email });
      this.$router.push("/");
    },
  },
};
</script>
