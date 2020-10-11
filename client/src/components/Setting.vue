<template>
  <div>
      <div class="center col-sm-5 mr-auto ml-auto p-0">
    <panel title="Edit User">
      <div class="container">
        <form v-on:submit.prevent="save">
          <div>
            <label for="email">Email Address</label>
            <input
              type="email"
              v-model="user.email"
              class="form-control"
              name="email"
              placeholder="enter your email address"
            />
          </div>

          <div>
            <label for="password">New Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              v-model="user.password"
              placeholder="Enter your New password"
            />
          </div>

          <button class="btn btn-sm btn-success mt-4" type="submit">Update</button>
        </form>
        <div class="error" v-html="error" />
      </div>
    </panel>
  </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import UserService from "@/services/UserService"
export default {

data(){
  return {
    user:{
      email:null,
      password:null
    },
    error: null,
  }
},
methods: {
    async save() {
      this.error = null;
      
      const userId = this.$store.state.route.params.userId;
      try {
        await UserService.put(this.user);
        this.$router.push({
          name: "user",
          params() {
            return {
              userId: userId,
            };
          },
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  
  },
async mounted() {
    // const userId = await this.$store.state.user._Id;
    const userId = this.$store.state.route.params.userId;
    console.log(userId)

    this.user = (await UserService.show(userId)).data;
    // this.user = this.$store.state.user
    console.log(this.user)
  },
}
</script>

<style scoped>
.error {
  color: red;
}
.center {
  box-shadow: 0 0 10px #474744;
}
</style>
