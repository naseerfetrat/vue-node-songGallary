<template>
  <div class="row">
    <SongMetaData :song="song" />
    <youtube :youtubeId="song.youtubeId" />
    <lyrics :song="song" />
    <tab :song="song" />
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import SongsServices from "@/services/SongsServices";
import SongMetaData from "@/components/ViewSong/SongMetaData";
import Youtube from "@/components/ViewSong/Youtube";
import Tab from "@/components/ViewSong/Tab";
import Lyrics from "@/components/ViewSong/Lyrics";
export default {
  components: {
    SongMetaData,
    Youtube,
    Tab,
    Lyrics,
  },
  data() {
    return {
      song: {},
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongsServices.show(songId)).data;
  },
};
</script>
<style  scoped>
</style>