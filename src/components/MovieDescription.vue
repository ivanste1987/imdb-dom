<template>
  <section class="movie-descript">
    <the-header></the-header>
    <div class="desc-container">
      <div class="left">
        <img
          :src="`http://imdb2.mars-server.net${this.movie.img}`"
          :alt="this.movie.name"
        />
      </div>
      <article>
        <h1>{{ this.movie.name }}</h1>
        <p>{{ this.movie.desc }}</p>
      </article>
    </div>
  </section>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TheHeader,
  },
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

<style lang="scss">
.desc-container {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  .left {
    padding: 20px;
  }

  article {
    padding: 20px;
    h1 {
      color: #42b883;
    }
    p {
      width: 70%;
      color: #fefefe;
    }
  }
}
</style>