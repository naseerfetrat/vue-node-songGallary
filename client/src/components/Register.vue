<template>
  <div class="center col-sm-5 mr-auto ml-auto p-0">
    <panel title="Register">
      <div class="container">
        <form v-on:submit.prevent="register">
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

          <button class="btn btn-sm btn-success" type="submit">Register</button>
        </form>
        <div class="error" v-html="error" />
      </div>
    </panel>
  </div>

<!-- <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form
          name="tab-tracker-form"
          autocomplete="off">
          <v-text-field
            label="Email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout> -->

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
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        // this.$store.dispatch("setToken", response.data.token);
        // this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "login",
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
.col {
  border-radius: 10px;
  height: 400px;
  width: 300px;
  text-align: center;
  align-items: center;
  align-content: center;
}
.center {
  box-shadow: 0 0 10px #474744;
}
</style>
