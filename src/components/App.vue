<template>
  <div id="app">
    <AppNavbar />
    <AppHero />
    <AppStats />
    <AppFeatures />
    <AppCourses />
    <AppTestimonials />
    <AppPricing />
    <AppCta2 />
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from '@/components/LandingPage/Navbar.vue';
import AppFooter from '@/components/LandingPage/AppFooter.vue';
import AppHero from '@/components/LandingPage/AppHero.vue';
import AppStats from '@/components/LandingPage/AppStats.vue';
import AppFeatures from '@/components/LandingPage/AppFeatures.vue';
import AppCourses from '@/components/LandingPage/AppCourses.vue';
import AppTestimonials from '@/components/LandingPage/AppTestimonials.vue';
import AppPricing from '@/components/LandingPage/AppPricing.vue';
import AppCta2 from '@/components/LandingPage/AppCta2.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
    AppHero,
    AppStats,
    AppFeatures,
    AppCourses,
    AppTestimonials,
    AppPricing,
    AppCta2,
    AppFooter,
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