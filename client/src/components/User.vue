<template>
  <div class="center col-sm-5 mr-auto ml-auto p-0">
      <panel title="User Information">
          <table class=" m-auto">
              <thead>
                  <tr>
                      <th>UserName</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{{user.email}}</td>
                  </tr>
              </tbody>
          </table>
          <button
            class="btn btn-primary mt-4"
            @click="navigateTo({ name: 'user-edit', params: { userId: user._id } })"
          >Edit</button>
          <button
            class="btn btn-danger mt-4"
            @click="deleteUser()"
          >Delete Account</button>
      </panel>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import UserService from "@/services/UserService";
export default {
  data() {
    return {
      user: {
      }
    };
  },
  async mounted() {
    this.user  = await this.$store.state.user;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser() {
      try {
        
        const conf = confirm("Are You Sure You want To delete This Account?")
        console.log(this.user._id)
        const res = await UserService.delete(this.user._id);
        this.$store.dispatch("setToken", null);
        this.$store.dispatch("setUser", null);
        this.$router.push({
          name:"songs"
        })
      } catch (err) {
        console.log(err);
      }
    },
  },
  }
  
</script>

<style>

</style>
