<template>
  <div class="login-container">
    <h2 class="login-title">Login</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="username" class="form-label">Username:</label>
        <input
          v-model="username"
          type="text"
          id="username"
          class="form-input"
          required
          placeholder="Enter your username"
        />
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password:</label>
        <input
          v-model="password"
          type="password"
          id="password"
          class="form-input"
          required
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" class="submit-button">Login</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
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
        const response = await axios.post('http://127.0.0.1:8000/api/login/', {
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
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4a5568;
}

.form-input {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #2c3e50;
  background-color: #f7fafc;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.form-input::placeholder {
  color: #a0aec0;
}

.submit-button {
  padding: 0.75rem;
  background-color: #3182ce;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.submit-button:hover {
  background-color: #2c5282;
}

.error-message {
  font-size: 0.875rem;
  color: #e53e3e;
  margin-top: 0.5rem;
}
</style>