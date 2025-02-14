<template>
    <div>
      <h2>Student Dashboard</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul>
          <li v-for="course in courses" :key="course.id">
            {{ course.title }} - {{ course.description }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'StudentDashboard',
    data() {
      return {
        courses: [],
        loading: true,
        error: '',
      };
    },
    async created() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/student-dashboard/', {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        this.courses = response.data.courses;
      } catch (error) {
        this.error = error.response?.data?.message || 'Failed to fetch courses.';
        console.error('Dashboard error:', error.response?.data);
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>