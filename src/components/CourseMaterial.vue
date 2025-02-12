<template>
    <div>
      <h2>{{ course.title }}</h2>
      <p>{{ course.description }}</p>
      <!-- Add course materials here -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CourseMaterial',
    data() {
      return {
        course: {},
        loading: true,
        error: '',
      };
    },
    async created() {
      const courseId = this.$route.params.courseId;
      try {
        const response = await axios.get(`http://127.0.0.1:8000/courses/${courseId}/`);
        this.course = response.data;
      } catch (error) {
        this.error = 'Failed to fetch course details. Please try again.';
        console.error('Error fetching course details:', error);
      } finally {
        this.loading = false;
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the course material page */
  </style>