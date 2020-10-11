// eslint-disable-next-line
/* eslint-disable */
import Api from "@/services/Api.js";

export default {
  delete(userId){
      return Api().delete(`user/${userId}`);
  },
  put(user) {
    return Api().put(`user/${user.id}`, user);
  },
  show(userId) {
    return Api().get(`user/${userId}`);
  },
};
