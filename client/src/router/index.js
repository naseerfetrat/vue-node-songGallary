// eslint-disable-next-line
/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Songs from "@/components/Songs/index";
import CreateSong from "@/components/CreateSong";
import ViewSong from "@/components/ViewSong/index";
import EditSong from "@/components/EditSong";
import Setting from "@/components/Setting";
import User from "@/components/User";

Vue.use(Router);

export default new Router({
  mode:'history',
  hash:'false',
  routes: [
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/songs",
      name: "songs",
      component: Songs
    },
    {
      path: "/songs/create",
      name: "songs-create",
      component: CreateSong
    },
    {
      path: "/songs/:songId",
      name: "song",
      component: ViewSong
    },
    {
      path: "/songs/:songId/edit",
      name: "song-edit",
      component: EditSong
    },
    {
      path: "/user/:userId/edit",
      name: "user-edit",
      component: Setting
    },
    {
      path: "/user/:userId",
      name: "user",
      component: User
    },
    {
      path: "*",
      redirect: "songs"
    }
  ]
});
