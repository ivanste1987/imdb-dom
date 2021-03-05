<template>
  <div class="home">
    <div id="header" @scroll="checkHeader">
      <the-header></the-header>
      <div class="search">
        <div class="input-container">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search title.."
            @change="filteredList"
          />
          <button><i class="fas fa-search fa-lg"></i></button>
        </div>
      </div>
    </div>

    <div class="allmovies">
      <div class="movie" v-for="movie in allMovies" :key="movie.mov_id">
        <router-link
          :to="{ name: 'MovieDescipt', params: { id: movie.mov_id } }"
        >
          <h2>{{ movie.mov_name }}</h2></router-link
        >
        <router-link
          :to="{ name: 'MovieDescipt', params: { id: movie.mov_id } }"
        >
          <img
            :src="`http://imdb2.mars-server.net/api/movies/${movie.mov_id}/photo`"
            :alt="movie.mov_name"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
export default {
  components: { TheHeader },
  name: "Home",
  data() {
    return {
      movies: null,
      searchQuery: "",
    };
  },
  mounted() {
    this.getAllMovies();
  },
  computed: {
    allMovies() {
      const filteredMovies = this.$store.getters.getMovies;
      if (this.searchQuery.length > 0) {
        return filteredMovies.filter((movie) =>
          movie.mov_name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return filteredMovies;
      }
    },
  },
  methods: {
    getAllMovies() {
      this.$store.dispatch("getAllMovies");
    },
    filteredList() {
      const findMovie = this.$store.getters.getMovies;
      findMovie.filter((movie) => {
        return movie.mov_name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
      return findMovie;
    },
    checkHeader() {
      const header = document.querySelector("#header");
      if (window.offsetHeight > 200) {
        header.style.position = "fixed";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  padding-bottom: 20px;
  background: #2c2c2c;
  box-shadow: 0 4px 2px -2px #2c2c2c;

  .input-container {
    border: 2px solid #42b883;
    width: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 90% 10%;
    padding: 0 25px;
    border-radius: 25px;
    input,
    button {
      line-height: 2;
      margin: 0;
      padding: 5px 10px;
      border: none;
      background: transparent;
      outline: none;
      color: #42b883;
    }
    input::placeholder {
      color: #42b883;
    }
  }
}
.allmovies {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 70%;
  margin: 0 auto;

  .movie {
    max-width: 300px;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 90%;

    a {
      width: 100%;
    }
    img {
      max-width: 100%;
      width: 100%;
      height: 450px;
    }
  }
}
</style>