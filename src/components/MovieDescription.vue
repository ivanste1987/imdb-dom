<template>
  <section class="movie-descript">
    <div>{{ this.movie.name }}</div>
    <img
      :src="`http://imdb2.mars-server.net${this.movie.img}`"
      :alt="this.movie.name"
    />
    <article>
      <p>{{ this.movie.desc }}</p>
    </article>

    <p></p>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      movieID: this.$route.params.id,
      movie: {},
    };
  },

  mounted() {
    this.movieDescript();
    this.findMovie();
  },

  methods: {
    movieDescript() {
      this.$store.dispatch("getAllMovies");
    },

    findMovie() {
      for (let i = 0; i < this.getMovies.length; i++) {
        if (this.getMovies[i].mov_id == this.movieID) {
          this.movie = {
            name: this.getMovies[i].mov_name,
            desc: this.getMovies[i].mov_desc,
            img: this.getMovies[i].mov_img,
          };

          console.log(this.movie);
        }
      }
    },
  },
  computed: {
    ...mapGetters(["getMovies"]),
  },
};
</script>

<style>
</style>