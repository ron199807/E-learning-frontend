<template>
  <div class="dashboard-container">
    <h2 class="dashboard-title">Dashboard</h2>
    <div class="dashboard-content">
      <p>Welcome to your dashboard, {{ username }}!</p>
      <div class="dashboard-stats">
        <div class="stat-card">
          <h3>Courses Enrolled</h3>
          <p>{{ coursesEnrolled }}</p>
        </div>
        <div class="stat-card">
          <h3>Completed Courses</h3>
          <p>{{ completedCourses }}</p>
        </div>
        <div class="stat-card">
          <h3>Progress</h3>
          <p>{{ progress }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentDashboard',
  data() {
    return {
      username: '', // Will be fetched from the backend
      coursesEnrolled: 0, // Will be fetched from the backend
      completedCourses: 0, // Will be fetched from the backend
      progress: 0, // Will be fetched from the backend
      error: '', // To handle errors
    };
  },
  async created() {
    await this.fetchDashboardData();
  },
  methods: {
    async fetchDashboardData() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          this.$router.push('/login'); // Redirect to login if no token is found
          return;
        }

        // Make an API call to fetch dashboard data
        const response = await axios.get('http://127.0.0.1:8000/api/dashboard/', {
          headers: {
            Authorization: `Token ${token}`, // Send the token for authentication
          },
        });

        // Update the component data with the response
        const data = response.data;
        this.username = data.username;
        this.coursesEnrolled = data.courses_enrolled;
        this.completedCourses = data.completed_courses;
        this.progress = data.progress;
      } catch (error) {
        this.error = error.response?.data?.message || 'Failed to fetch dashboard data.';
        console.error('Dashboard error:', error.response?.data);
      }
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.dashboard-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
}

.dashboard-content {
  font-size: 1rem;
  color: #4a5568;
}

.dashboard-stats {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

.stat-card {
  flex: 1;
  padding: 1rem;
  background-color: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  text-align: center;
}

.stat-card h3 {
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.stat-card p {
  font-size: 1.25rem;
  font-weight: 600;
  color: #3182ce;
}
</style>