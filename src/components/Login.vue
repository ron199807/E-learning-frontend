<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Log_in',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/login/', {
          username: this.username,
          password: this.password,
        });
        console.log('Login successful:', response.data);
        // Save the token to local storage
        localStorage.setItem('token', response.data.token);
        // Redirect to home or dashboard
        this.$router.push('/');
      } catch (error) {
        this.error = error.response?.data?.message || 'Login failed. Please try again.';
        console.error('Login error:', error.response?.data);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>