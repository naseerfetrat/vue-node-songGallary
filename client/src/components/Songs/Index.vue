<template>
  <div class="m-auto col-sm-8 p-0 container">
    <SongSearchPanel class="mb-2" />
    <SongPanel />
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import SongPanel from "@/components/Songs/SongPanel";
import SongSearchPanel from "@/components/Songs/SongSearchPanel";
import SongServices from "@/services/SongsServices";
export default {
  components: {
    SongPanel,
    SongSearchPanel,
  },
  data() {
    return {
      songs: null,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
<style scoped="">
/* .SongPanel {
  box-shadow: 0 0 10px #474744;

} */
.text-info {
  cursor: pointer;
}
img {
  width: 70%;
}
.container {
  border-radius: 5px;
}
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 32px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
</style>
