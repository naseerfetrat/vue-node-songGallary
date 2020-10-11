<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Song Gallary</router-link>

      <!-- TODO:implement me -->
      <form class="form-inline mr-auto">
        <button class="btn btn-default">
          <router-link to="/songs" class="text-white">BROWSE</router-link>
        </button>
      </form>
      <ul class="navbar-nav">
        <li class="navbar-item" v-if="!$store.state.isUserLoggedIn">
          <router-link class="nav-link" to="/login">LOG IN</router-link>
        </li>
        <li class="navbar-item" v-if="!$store.state.isUserLoggedIn">
          <router-link class="nav-link" to="/register">SIGN UP</router-link>
        </li>
        <li class="navbar-item" v-if="$store.state.isUserLoggedIn">
          <span class="nav-link"
           @click="navigateTo({ name: 'user', params: { userId: userId } })"
          >Account</span>
        </li>
        <li class="navbar-item" v-if="$store.state.isUserLoggedIn" @click="logOut">
          <router-link class="nav-link" to="/songs">LogOut</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import UserService from "@/services/UserService";
export default {
  data() {
    return {
    userId: this.$store.state.user._id
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    },
  },
  async mounted(){
  }
};
</script>
<style scoped>
nav {
  margin-bottom: 50px;
  padding-left: 0;
}
a:hover {
  text-decoration: none;
}
span{
  cursor: pointer;
}
</style>>