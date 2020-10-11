// eslint-disable-next-line
/* eslint-disable */
import Api from "@/services/Api.js";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
  delete(userId){
    return Api().delete("user")
  }
};
