<template>
  <form @submit.prevent="addMovie">
    <input type="text" v-model="movieName" />
    <input type="text" v-model="movieDesc" />
    <button type="submit">Add</button>
     {{this.movieName}}
  </form>
 
</template>

<script>
export default {
  data() {
    return {
      movieName: null,
      movieDesc: null,
      newMovie: {},
    };
  },
  methods: {
    addMovie() {
      this.newMovie = {
        name: this.movieName,
        desc: this.movieDesc,
      };
      this.$store.dispatch("addMovie", this.newMovie);
    },
  },
};
</script>

<style>
</style>