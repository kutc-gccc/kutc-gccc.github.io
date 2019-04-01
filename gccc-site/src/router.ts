import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import News from "./views/News.vue";
import Works from "./views/Works.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/news/:id", name: "news", component: News },
    { path: "/works", name: "works", component: Works },
  ],
});
