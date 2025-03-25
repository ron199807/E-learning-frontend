<template>
  <div class="signup-container">
    <h2 class="signup-title">Sign Up</h2>
    <form @submit.prevent="handleSignup" class="signup-form">
      <div class="form-group">
        <label for="signup-username" class="form-label">Username:</label>
        <input
          v-model="username"
          type="text"
          id="signup-username"
          class="form-input"
          required
          placeholder="Enter your username"
        />
      </div>
      <div class="form-group">
        <label for="signup-email" class="form-label">Email:</label>
        <input
          v-model="email"
          type="email"
          id="signup-email"
          class="form-input"
          required
          placeholder="Enter your email"
        />
      </div>
      <div class="form-group">
        <label for="signup-password" class="form-label">Password:</label>
        <input
          v-model="password"
          type="password"
          id="signup-password"
          class="form-input"
          required
          placeholder="Enter your password"
        />
        <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
      </div>
      <div class="form-group">
        <label for="signup-role" class="form-label">Role:</label>
        <select
          v-model="role"
          id="signup-role"
          class="form-select"
          required
        >
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" class="submit-button">Sign Up</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
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
.signup-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.signup-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
}

.signup-form {
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

.form-input,
.form-select {
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #2c3e50;
  background-color: #f7fafc;
  transition: border-color 0.2s ease;
}

.form-input:focus,
.form-select:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.form-input::placeholder {
  color: #a0aec0;
}

.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234A5568%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 12px;
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