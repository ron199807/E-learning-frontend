<template>
  <div id="app">
    <router-view></router-view> <!-- This will render the current route's component -->
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>