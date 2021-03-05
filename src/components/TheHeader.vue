<template>
  <div>
    <div class="nav">
      <ul>
        <li><img src="@/assets/logo.png" alt="Logo" /></li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/AddMovie">Add Movie</router-link></li>
      </ul>
     
    </div>
  </div>
</template>


<style lang="scss">
.nav {
  width: 100%;
  height: auto;
  background: #2c2c2c;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 20px;
      padding: 10px;
      a {
        color: #fefefe;
        text-decoration: none;
      }
      img {
        max-width: 70px;
      }
    }
  }
}
</style>