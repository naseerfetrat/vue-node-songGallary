<template>
  <div class="jumbotron pt-0 pr-0 pl-0 pb-4">
    <div class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">{{title}}</router-link>
        <slot name="addIcon" class="ml-auto"></slot>
      </div>
    </div>
    <div class="pl-4 pt-2 pr-4">
      <slot>no content identified!</slot>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: ["title"],
};
</script>
<style  scoped>
</style>