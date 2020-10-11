<template>
  <div class="center col-sm-5 m-auto p-0">
    <panel title="Log In">
      <div class="container">
        <form v-on:submit.prevent="login">
          <div>
            <label for="email">Email Address</label>
            <input
              type="email"
              v-model="email"
              class="form-control"
              name="email"
              placeholder="enter your email address"
            />
          </div>

          <div>
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              name="password"
              placeholder="enter your password"
            />
          </div>

          <button class="btn btn-sm btn-success" type="submit">Login</button>
        </form>

        <div class="error" v-html="error" />
      </div>
    </panel>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "songs",
        });
        console.log(response.data);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style scoped>
.container {
  align-items: center;
}
.error {
  color: red;
}
.btn {
  width: 25%;
  text-align: center;
  margin-top: 15px;
  font-size: 20px;
}
.center {
  box-shadow: 0 0 10px #474744;
}
</style>
