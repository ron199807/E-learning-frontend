<template>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
      <router-link to="/signup" v-if="!isAuthenticated">Sign Up</router-link>
      <button @click="logout" v-if="isAuthenticated">Logout</button>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated;
      },
    },
    methods: {
      async logout() {
        await this.$store.dispatch('logout');
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  nav a {
    color: white;
    margin-right: 10px;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d32f2f;
  }
  </style>