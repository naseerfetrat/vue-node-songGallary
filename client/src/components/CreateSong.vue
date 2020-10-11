<template>
  <div class="row">
    <div class="ml-5 col-sm-4">
      <panel title="Song Meta Data">
        <form>
          <div>
            <div class="row break">
              <div class="col-sm-2">
                <label for="title">Title</label>
              </div>
              <div class="col-sm-12">
                <input
                  class="form-control"
                  placeholder="Enter title of the song here"
                  v-model="song.title"
                />
                <div class="invalid-feedback">Required.</div>
              </div>
            </div>
            <div class="row break">
              <div class="col-sm-2">
                <label for="artist">Artist</label>
              </div>
              <div class="col-sm-12">
                <input
                  class="form-control"
                  placeholder="Enter artist name here"
                  v-model="song.artist"
                />
                <div class="invalid-feedback">Required.</div>
              </div>
            </div>
            <div class="row break">
              <div class="col-lg-2">
                <label for="album">Ablum</label>
              </div>
              <div class="col-sm-12">
                <input
                  class="form-control"
                  placeholder="Enter album name here"
                  v-model="song.album"
                />
                <div class="invalid-feedback">Required.</div>
              </div>
            </div>
            <div class="row break">
              <div class="col-sm-2">
                <label for="genre">Genre</label>
              </div>
              <div class="col-sm-12">
                <input
                  class="form-control"
                  placeholder="Enter genre of the song here"
                  v-model="song.genre"
                />
              </div>
            </div>
            <div class="row break">
              <div class="col-sm-5">
                <label for="albumImageUrl">Album Image Url</label>
              </div>
              <div class="col-sm-12">
                <input
                  class="form-control"
                  placeholder="Enter album image url here"
                  v-model="song.albumImageUrl"
                />
                <div class="invalid-feedback">Required.</div>
              </div>
            </div>
            <div class="row break">
              <div class="col-sm-4">
                <label for="youtubeId">Youtebe Id</label>
              </div>
              <div class="col-sm-12">
                <input
                  class="form-control"
                  placeholder="Enter Youtube Id here"
                  v-model="song.youtubeId"
                />
                <div class="invalid-feedback">Required.</div>
              </div>
            </div>
          </div>
        </form>
      </panel>
    </div>
    <div class="col-sm-7 block">
      <panel title="Song Structure">
        <form>
          <div class="row break">
            <div class="col-sm-1">
              <label for="tab">Tab</label>
            </div>
            <div class="col-sm-12">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter Tab here"
                v-model="song.tab"
              />
              <div class="invalid-feedback">Required.</div>
            </div>
          </div>
          <div class="row break">
            <div class="col-sm-1">
              <label for="lyrics">Lyrics</label>
            </div>
            <div class="col-sm-12">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Enter song lyrics here"
                v-model="song.lyrics"
              />
              <div class="invalid-feedback">Required.</div>
            </div>
          </div>
        </form>
        <span class="error pt-5">{{error}}</span>
        <br />
        <button class="btn btn-dark mt-4" @click="create">Create Song</button>
      </panel>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

import SongsServices from "@/services/SongsServices";
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null,
      },
      error: null,
      validValud: "",
      required: (value) => !!value || "Required.",
    };
  },
  methods: {
    async create() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        (key) => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields";
        return;
      }
      try {
        await SongsServices.createSong(this.song);
        this.$router.push({
          name: "songs",
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.break {
  display: block;
}
/* input {
  width: 330px;
} */
.row {
  margin-right: 0;
}
</style>