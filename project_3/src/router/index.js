import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import GamesLayout from "@/pages/GamesLayout.vue";
import AllGamesPage from "@/pages/AllGamesPage.vue";
import GamePage from "@/pages/GamePage.vue";
import AboutUs from "@/pages/AboutUs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about-us",
    component: AboutUs,
  },
  {
    path: "/all",
    name: "all",
    component: GamesLayout,
    children: [
      {
        path: "",
        name: "all-games",
        component: AllGamesPage,
      },
      {
        path: ":id",
        name: "game-page",
        component: GamePage,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
