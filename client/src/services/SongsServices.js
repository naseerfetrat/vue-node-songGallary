// eslint-disable-next-line
/* eslint-disable */
import Api from "@/services/Api.js";
export default {
  index(search) {
    return Api().get("songs", {
      params: {
        search: search
      }
    });
  },
  createSong(data) {
    return Api().post("songs", data);
  },
  show(songId) {
    return Api().get(`songs/${songId}`);
  },
  put(song) {
    return Api().put(`songs/${song.id}`, song);
  },
  delete(songId){
    return Api().delete(`songs/${songId}`)
  }
};
