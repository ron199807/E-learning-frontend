<template>
    <nav class="nav-container">
      <div>
        <router-link class="btn-home" to="/">Home</router-link>
      </div>

      <div>
        <router-link to="/login" v-if="!isAuthenticated">Login</router-link>
        <router-link to="/signup" v-if="!isAuthenticated" @click="debugNavigation">Sign Up</router-link>
        <router-link to="/dashboard" v-if="isAuthenticated">Dashboard</router-link>
        <button class="btn-logout" @click="logout" v-if="isAuthenticated">Logout</button>
    </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppNavbar',
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      },
    },
    methods: {
      debugNavigation() {
        console.log('Sign Up link clicked');
      },
      async logout() {
        await this.$store.dispatch('logout')
        this.$router.push('api/login')
      },
    },
  }
  </script>
  
  <style scoped>
  .nav-container {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    align-items: center;
    background-color: #ccc;
    padding: 10px;
    z-index: 99999;
  }
  
  nav a {
    color: white;
    margin-right: 10px;
    text-decoration: none;
    font-weight: bold;
  }
  
  nav a:hover {
    background: #2e08e8;
  }
  
  button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }

  .btn-logout{
    border-radius: .3rem;
    font-weight: bold;
  }

  .btn-home{
    background: #1a077b;
    padding: 5px 10px;
    border-radius: .3rem;
  }
  
  button:hover {
    background-color: #d32f2f;
  }
  </style>