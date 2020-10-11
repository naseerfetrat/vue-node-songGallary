<template>
  <div class="ml-0 col-sm-6">
    <div class="jumbotron pt-0 pr-0 pl-0 pb-0">
      <div class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <router-link class="navbar-brand" to="/">Chords</router-link>
        </div>
      </div>
      <div>
        <textarea class="form-control bg-white" readonly rows="11" v-model="song.tab" />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: ["song"],
};
</script>

<style scoped>
textarea {
  font-family: monospace;
  outline: none;
}
</style>