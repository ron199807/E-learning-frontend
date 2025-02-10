<template>
    <div>
      <h2>Enroll in a Course</h2>
      <form @submit.prevent="handleEnroll">
        <div>
          <label for="courseId">Course ID:</label>
          <input v-model="courseId" type="number" id="courseId" required />
        </div>
        <button type="submit">Enroll</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        courseId: null,
        error: '',
      };
    },
    methods: {
      async handleEnroll() {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post(
            'http://127.0.0.1:8000/courses/enroll/',
            { course_id: this.courseId },
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          console.log('Enrollment successful:', response.data);
          // Redirect to student dashboard or home
          this.$router.push('/student-dashboard');
        } catch (error) {
          this.error = error.response?.data?.message || 'Enrollment failed. Please try again.';
          console.error('Enrollment error:', error.response?.data);
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