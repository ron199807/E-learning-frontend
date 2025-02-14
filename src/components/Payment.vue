<template>
    <div>
      <h2>Payment for {{ course.title }}</h2>
      <p>Price: ${{ course.price }}</p>
      <button @click="processPayment">Pay Now</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserPayment',
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
    methods: {
      async processPayment() {
        try {
          // Simulate payment processing
          await axios.post(`http://127.0.0.1:8000/courses/${this.course.id}/enroll/`, {}, {
            headers: { Authorization: `Token ${this.$store.state.token}` },
          });
          alert('Payment successful! You now have access to the course.');
          this.$router.push(`/student-dashboard/${this.course.id}`);
        } catch (error) {
          console.error('Error processing payment:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the payment component */
  </style>