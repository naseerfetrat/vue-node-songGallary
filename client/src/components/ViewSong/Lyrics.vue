<template>
  <div class="ml-5 col-sm-5">
    <div class="jumbotron pt-0 pr-0 pl-0 pb-0">
      <div class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <router-link class="navbar-brand" to="/">Lyrics</router-link>
        </div>
      </div>
      <div>
        <textarea class="form-control bg-white pl-5" readonly rows="9" v-model="song.lyrics" />
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

<style>
</style>