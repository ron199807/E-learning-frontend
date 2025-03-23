<template>
  <div>
    <h1>Enrolled Courses</h1>
    <ul>
      <li v-for="course in enrolledCourses" :key="course.id">
        {{ course.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      enrolledCourses: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/enrolled-courses/');
      this.enrolledCourses = response.data;
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  },
};
</script>