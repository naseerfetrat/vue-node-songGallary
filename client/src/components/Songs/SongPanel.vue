<template>
  <panel title="Songs">
    <span slot="addIcon" class="text-info" v-on:click="navigateTo('songs/create')">
      <img v-if="isUserLoggedIn" src="@/assets/add.png" alt="Create Song" />
    </span>
    <div v-for="song in songs" :key="song.id" class="song">
      <div class="row">
        <div class="col-sm-6">
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          <div class="song-genre">{{ song.genre }}</div>
          <button
            class="btn btn-dark mt-4"
            @click="navigateTo({ name: 'song', params: { songId: song._id } })"
          >View</button>
        </div>
        <div class="col-sm-6">
          <img :src='song.albumImageUrl' alt="image" class="ablum-image" />
        </div>
      </div>
    </div>
  </panel>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import SongServices from "@/services/SongsServices";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isUserLoggedIn"]),
  },
  data() {
    return {
      songs: null,
    };
  },

  // async mounted() {
  //   //do a request to the backend for all songs
  //   this.songs = (await SongServices.index()).data;
  // },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongServices.index(value)).data;
      },
    },
  },
};
</script>
<style scoped="">
.container {
  box-shadow: 0 0 10px #474744;
}
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
