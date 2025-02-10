import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', 
});

// Auth endpoints
export const login = (credentials) => api.post('/auth/login/', credentials);
export const logout = () => api.post('/auth/logout/');
export const register = (userData) => api.post('/auth/register/', userData);

// Course endpoints
export const getCourses = () => api.get('/courses/');
export const getCourse = (id) => api.get(`/courses/${id}/`);
export const enrollInCourse = (courseId) => api.post(`/courses/${courseId}/enroll/`);

// Category endpoints
export const getCategories = () => api.get('/categories/');

export default api;