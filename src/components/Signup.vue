<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div>
        <label for="role">Role:</label>
        <select v-model="role" id="role" required>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserSignup',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      role: 'student', // Default role
      error: '',
    };
  },
  methods: {
    async handleSignup() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
          username: this.username,
          email: this.email,
          password: this.password,
          role: this.role,
        });
        console.log('Registration successful:', response.data);
        // Save the token to local storage
        localStorage.setItem('token', response.data.token);
        // Redirect to home or dashboard
        this.$router.push('/');
      } catch (error) {
        this.error = error.response?.data?.message || 'Registration failed. Please try again.';
        console.error('Registration error:', error.response?.data);
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