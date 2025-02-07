import axios from 'axios';

// Set the base URL for your Django backend
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',  // Replace with your Django backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in every request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  // Auth endpoints
  login(credentials) {
    return apiClient.post('/login/', credentials);
  },
  logout() {
    return apiClient.post('/logout/');
  },
  register(userData) {
    return apiClient.post('/register/', userData);
  },

  // Course endpoints
  getCourses() {
    return apiClient.get('/courses/');
  },
  getCourse(id) {
    return apiClient.get(`/courses/${id}/`);
  },
  enrollInCourse(courseId) {
    return apiClient.post('/courses/enroll/', { course_id: courseId });
  },

  // Category endpoints
  getCategories() {
    return apiClient.get('/categories/');
  },
};