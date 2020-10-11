<template>
  <div id="app">
    <page-header />
    <router-view />
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import pageHeader from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    pageHeader
  }
};
</script>

<style scoped>
div {
  background-color: white;
  text-align: center;
  color: #2c3e50;
}
</style>
