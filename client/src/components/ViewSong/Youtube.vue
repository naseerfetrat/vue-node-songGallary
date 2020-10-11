<template>
  <div class="ml-0 col-sm-6">
    <panel title="Youtube Video Link">
      <youtube
        :video-id="youtubeId"
        :player-width="450"
        :player-height="190"
        :player-vars="{autoplay: 1}"
      ></youtube>
    </panel>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: ["youtubeId"],
};
</script>

<style>
</style>