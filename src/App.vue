<template>
  <div id="app">
    <AppNavbar />
    <!-- <Log_in /> -->
    <!-- <UserSignup /> -->
    <!-- <router-link to="/">Home</router-link> -->
    <UserHome />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'
import UserHome from './components/Home.vue'


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    UserHome,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
