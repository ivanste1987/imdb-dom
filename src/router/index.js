import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDescription from '../components/MovieDescription.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MovieDescipt/:id',
    name: 'MovieDescipt',
    component: MovieDescription
  },
  {
    path: '/addmovie',
    name: 'addmovie',
    component: () => import(/* webpackChunkName: "jamaica" */ '../components/AddMovie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
