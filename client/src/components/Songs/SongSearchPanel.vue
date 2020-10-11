<template>
  <panel title="Search Song">
    <div class="col-sm-12">
      <input
        class="form-control"
        placeholder="Search your Song Here!!!"
        v-model="search"
      />
    </div>
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
    };
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: "songs",
      };
      if (this.search !== "") {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 700),

    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      },
    },
  },
};
</script>

<style>
</style>