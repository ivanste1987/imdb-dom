import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      allMovies: [],
    };
  },
  mutations: {
    setMovies(state, payload) {
      state.allMovies = payload;
    },
    addMovie(state, payload) {
      state.movie = {
        name: payload.name,
        desc: payload.desc,
      };
    },
  },
  actions: {
    async getAllMovies(context) {
      let response = await axios.get("http://imdb2.mars-server.net/api/movies");

      context.commit("setMovies", response.data.data);
    },
    async addMovie(context, payload) {
      let newMovie = {
        mov_name: payload.name,
        mov_desc: payload.desc,
      };
      try {
        let response = await axios.post(
          "http://imdb2.mars-server.net/api/movies",
          newMovie
        );
        if (response.status === 400) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    },

  },
  getters: {
    getMovies: (state) => {
      return state.allMovies;
    },
  },
});
