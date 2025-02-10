<template>
    <div>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    methods: {
      async handleLogout() {
        try {
          const token = localStorage.getItem('token');
          await axios.post(
            'http://127.0.0.1:8000/api/auth/logout/',
            {},
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          // Remove the token from local storage
          localStorage.removeItem('token');
          // Redirect to login page
          this.$router.push('/login');
        } catch (error) {
          console.error('Logout error:', error.response?.data);
        }
      },
    },
  };
  </script>