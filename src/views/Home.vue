<template>
  <div class="home">
    <div class="search">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search title.."
        @change="filteredList"
      />
      <button><i class="fas fa-search fa-lg"></i></button>
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
export default {
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
  },
};
</script>
<style lang="scss" scoped>
.allmovies {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .movie {
    max-width: 300px;
    width: 100%;
    img {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>