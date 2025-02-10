<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <div>
        <label for="signup-username">Username:</label>
        <input v-model="username" type="text" id="signup-username" required />
      </div>
      <div>
        <label for="signup-email">Email:</label>
        <input v-model="email" type="email" id="signup-email" required />
      </div>
      <div>
        <label for="signup-password">Password:</label>
        <input v-model="password" type="password" id="signup-password" required />
        <p v-if="passwordError" class="error">{{ passwordError }}</p>
      </div>
      <div>
        <label for="signup-role">Role:</label>
        <select v-model="role" id="signup-role" required>
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
  data() {
    return {
      username: '',
      email: '',
      password: '',
      role: 'student', // Default role
      error: '',
      passwordError: '',
    };
  },
  methods: {
    validatePassword() {
      if (this.password.length < 8) {
        this.passwordError = 'Password must be at least 8 characters long.';
        return false;
      }
      if (/^\d+$/.test(this.password)) {
        this.passwordError = 'Password cannot be entirely numeric.';
        return false;
      }
      if (this.password.toLowerCase() === 'password') {
        this.passwordError = 'Password is too common.';
        return false;
      }
      this.passwordError = '';
      return true;
    },
    async handleSignup() {
      if (!this.validatePassword()) {
        return;
      }
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register/', {
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