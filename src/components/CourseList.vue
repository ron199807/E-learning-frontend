<template>
  <div>
    <h2>Course List</h2>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-for="course in courses" :key="course.id" class="course-card">
        <img :src="course.image" :alt="course.title" class="course-image" v-if="course.image" />
        <div class="course-details">
          <h3>{{ course.title }}</h3>
          <p><strong>Instructor:</strong> {{ course.instructor }}</p>
          <p><strong>Price:</strong> {{ course.is_paid ? `$${course.price}` : 'Free' }}</p>
          <button @click="viewCourse(course.id)">View Course</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      courses: [],
      loading: true,
      error: '',
    };
  },
  async created() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/courses/');
      this.courses = response.data;
    } catch (error) {
      this.error = 'Failed to fetch courses. Please try again.';
      console.error('Error fetching courses:', error);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    async viewCourse(courseId) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/courses/${courseId}/check-access/`);
        if (response.data.has_access) {
          // Redirect to the course material page
          this.$router.push(`/course/${courseId}`);
        } else {
          // Show a payment or signup prompt
          if (this.$store.state.user) {
            alert('You need to pay to access this course.');
          } else {
            alert('Please sign up or log in to access this course.');
            this.$router.push('/signup');
          }
        }
      } catch (error) {
        console.error('Error checking course access:', error);
      }
    },
  },
};
</script>

<style scoped>
.course-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  align-items: center;
}

.course-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 16px;
}

.course-details {
  flex: 1;
}

h3 {
  margin: 0 0 8px 0;
}

p {
  margin: 4px 0;
}
</style>