<template>
    <div>
      <h1>Welcome to BTEE</h1>
  
      <!-- Categories as Links -->
      <div class="categories">
        <h2>Categories</h2>
        <ul>
          <li v-for="category in categories" :key="category.id">
            <router-link :to="`/category/${category.id}`">{{ category.name }}</router-link>
          </li>
        </ul>
      </div>
  
      <!-- Search Bar -->
      <div class="search-bar">
        <input class="search-field" v-model="searchQuery" type="text" placeholder="Search for courses..." />
        <button class="btn-search" @click="searchCourses">Search</button>
      </div>
  
      <!-- Course List -->
      <div class="course-list">
        <h2>Courses</h2>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <div v-for="course in courses" :key="course.id" class="course-card" @click="viewCourse(course.id)">
            <img :src="course.image" :alt="course.title" class="course-image" v-if="course.image" />
            <div class="course-details">
              <h3>{{ course.title }}</h3>
              <p><strong>Instructor:</strong> {{ course.instructor }}</p>
              <p><strong>Price:</strong> {{ course.is_paid ? `$${course.price}` : 'Free' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserHome',
    data() {
      return {
        categories: [],
        courses: [],
        searchQuery: '',
        loading: true,
        error: '',
      };
    },
    async created() {
      // Fetch categories
      try {
        const categoriesResponse = await axios.get('http://127.0.0.1:8000/api/categories/');
        this.categories = categoriesResponse.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
  
      // Fetch all courses
      try {
        const coursesResponse = await axios.get('http://127.0.0.1:8000/api/courses/');
        this.courses = coursesResponse.data;
      } catch (error) {
        this.error = 'Failed to fetch courses. Please try again.';
        console.error('Error fetching courses:', error);
      } finally {
        this.loading = false;
      }
    },
    methods: {
      async searchCourses() {
        try {
          const response = await axios.get('http://127.0.0.1:8000/api/courses/search/', {
            params: { query: this.searchQuery },
          });
          this.courses = response.data;
        } catch (error) {
          console.error('Error searching courses:', error);
        }
      },
      async viewCourse(courseId) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/courses/${courseId}/check-access/`);
          if (response.data.has_access) {
            // Redirect to the student dashboard
            this.$router.push(`/student-dashboard/${courseId}`);
          } else {
            if (this.$store.state.user) {
              // Redirect to the payment component
              this.$router.push(`/payment/${courseId}`);
            } else {
              // Redirect to the signup component
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
  .categories ul {
    list-style: none;
    padding: 0;
  }
  
  .categories li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .categories a {
    text-decoration: none;
    color: #2b54cd;
    border: 1px solid #ccc;
    padding: 4px;
    border-radius: 4px;
  }
   
  /* search bar styles */

  .search-bar {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 5px 0; */
    margin: auto;
    width: 80%;
    gap: .5rem;
  }
  
  .search-field{
    border: 0;
    width: 60%;
    height: 1.5rem;
    border-radius: .3rem;
    box-shadow: 0 0 2px #838080;
  }

  .btn-search {
    border: 0;
    color: #fff;
    background: #2b54cd;
    font-weight: bold;
    height: 1.5rem;
    border-radius: .3rem;
    cursor: pointer;
  }

  .course-list {
    margin-top: 20px;
  }
  
  .course-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
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