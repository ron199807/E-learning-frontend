<template>
    <div>
      <h2>Courses</h2>
      <ul>
        <li v-for="course in courses" :key="course.id">
          {{ course.title }} - {{ course.instructor.username }}
          <button @click="enroll(course.id)">Enroll</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      courses() {
        return this.$store.state.courses;
      },
    },
    async created() {
      await this.$store.dispatch('fetchCourses');
    },
    methods: {
      async enroll(courseId) {
        try {
          await this.$store.dispatch('enrollInCourse', courseId);
          alert('Enrolled successfully');
        } catch (error) {
          alert('Enrollment failed');
        }
      },
    },
  };
  </script>