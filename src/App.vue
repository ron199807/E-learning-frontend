<template>
  <div id="app">
    <AppNavbar />
    <!-- <Log_in /> -->
    <!-- <UserSignup /> -->
    <!-- <router-link to="/">Home</router-link> -->
     <CourseMaterial />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue'
import AppFooter from './components/Footer.vue'
// import Log_in from  './components/Login.vue'
//import UserSignup from './components/Signup.vue'
import CourseList from './components/CourseList.vue'
import CourseMaterial from './components/CourseMaterial.vue'
import CourseMaterial from './components/CourseMaterial.vue';


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    // Log_in,
    //UserSignup,
    CourseList,
    CourseMaterial,
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
