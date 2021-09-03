<template>
  <div>
    <h4>Login page</h4>
    <div>
      <div>
        <label for="name">Name</label>
        <input id="name" v-model="name">
      </div>
      <div>
        <label for="email">E-mail</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <div>
        <button class="btn btn--primary" @click="login">Login</button>
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
      password: null
    };
  },
  methods: {
    ...mapActions({
      "setUserInfo": "set"
    }),
    login() {
      this.setUserInfo({ name: this.name, email: this.email });
      this.$router.push('/');
    }
  }
};
</script>
