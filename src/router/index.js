import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Repositories from "../components/Repositories.vue";
import RepositoryDetails from "../components/RepositoryDetails.vue";
import NotFound from "../views/NotFound.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Repositories",
    name: "Repositories",
    component: Repositories,
  },
  {
    path: "/Repositories/:id",
    name: "RepositoryDetails",
    component: RepositoryDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
