<template>
    <div>
      <h1>In Progress Courses</h1>
      <ul>
        <li v-for="progress in inProgressCourses" :key="progress.id">
          {{ progress.course.title }} - {{ progress.progress_percentage }}%
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        inProgressCourses: [],
      };
    },
    async created() {
      try {
        const response = await axios.get('/api/in-progress-courses/');
        this.inProgressCourses = response.data;
      } catch (error) {
        console.error("Error fetching in-progress courses:", error);
      }
    },
  };
  </script>