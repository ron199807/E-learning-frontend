<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input v-model="credentials.username" placeholder="Username" />
        <input v-model="credentials.password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Log_in',
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      async login() {
        try {
          await this.$store.dispatch('login', this.credentials);
          this.$router.push('/');
        } catch (error) {
          alert('Login failed');
        }
      },
    },
  };
  </script>