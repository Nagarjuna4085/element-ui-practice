import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UiElements from "../components/UiElements";
import LayoutContainer from "../components/LayoutContainer";
import PracticeUi from "../components/PracticeUi";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/layout",
    name: "LayoutContainer",
    component: LayoutContainer,
  },
  {
    path: "/uielements",
    name: "UiElements",
    component: UiElements,
  },
  {
    path: "PracticeUi",
    name: "PracticeUi",
    component: PracticeUi,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
