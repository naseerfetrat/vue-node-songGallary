<template>
  <div class="ml-5 col-sm-5">
    <panel title="Song MetaData">
      <div class="row">
        <div class="col-sm-6">
          <div class="song-title">{{ song.title }}</div>
          <div class="song-artist">{{ song.artist }}</div>
          <div class="song-genre">{{ song.genre }}</div>
          <button
            class="btn btn-primary mt-4"
            v-if="isUserLoggedIn"
            @click="navigateTo({ name: 'song-edit', params: { songId: song._id } })"
          >Edit</button>
          <button
            class="btn btn-danger mt-4"
            v-if="isUserLoggedIn"
            @click="deleteSong()"
          >Delete</button>
        </div>
        <div class="col-sm-6">
          <img :src="song.albumImageUrl" alt="image" class="ablum-image" />
          <br />
          {{song.album}}
        </div>
      </div>
    </panel>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState } from "vuex";
import SongsService from "@/services/SongsServices";
export default {
  data() {
    return {
      bookmark: null,
    };
  },
  props: ["song"],
  computed: {
    ...mapState(["isUserLoggedIn"]),
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteSong() {
      try {
        
        const conf = confirm("Are You Sure to Delete This Song?")
        console.log(this.song._id)
        const res = await SongsService.delete(this.song._id);
        this.$router.push({
          name:"songs"
        })
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
img {
  width: 80%;
}
</style>