<template>
  <div class="addMovie">
    <the-header></the-header>
    <form @submit.prevent="addMovie">
      <label>Add Movie name</label>
      <input type="text" v-model="movieName" placeholder="Movie name..."/>
      <label>Add Movie Description</label>
      <textarea type="text" v-model="movieDesc" placeholder="Movie description..." />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
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

<style lang="scss">
form {
  width: 30%;
  margin: 10% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 60px -20px  #42b883;
  padding: 30px 0;
  background: #2c2c2c;
  label {
    color: #fefefe;
  }
  input,
  textarea,
  button {
      width: 50%;
    line-height: 2;
    margin: 20px;
    padding: 5px 10px;
    border: 2px solid #42b883;
    border-radius: 25px;
    background: transparent;
    outline: none;
    color: #42b883;
  }
  textarea{
      height: 200px;
  }
  textarea::placeholder{
      color: #42b883;
  }
  input::placeholder {
    color: #42b883;
  }
}
</style>