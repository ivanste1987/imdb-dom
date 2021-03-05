<template>
  <div id="app">
    <the-header></the-header>
    <router-view />
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheHeader },
};
</script>

<style lang="scss">
#app,
body {
  width: 100%;
}
</style>
