import { createStore } from 'vuex'; // Import createStore from vuex
import { login, logout, register, getCourses, getCourse, enrollInCourse, getCategories } from '@/store/api'; // Import API functions

export default createStore({
  state: {
    user: null,
    token: localStorage.getItem('token') || null,
    courses: [],
    categories: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    CLEAR_AUTH(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem('token');
    },
    SET_COURSES(state, courses) {
      state.courses = courses;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_LOADING(state, isLoading) {
      state.loading = isLoading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    // Auth actions
    async login({ commit }, credentials) {
      commit('SET_LOADING', true);
      try {
        const response = await login(credentials); // Use the imported `login` function
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
        commit('SET_ERROR', null);
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Login failed');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async logout({ commit }) {
      commit('SET_LOADING', true);
      try {
        await logout(); // Use the imported `logout` function
        commit('CLEAR_AUTH');
        commit('SET_ERROR', null);
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Logout failed');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async register({ commit }, userData) {
      commit('SET_LOADING', true);
      try {
        const response = await register(userData); // Use the imported `register` function
        commit('SET_USER', response.data.user);
        commit('SET_TOKEN', response.data.token);
        commit('SET_ERROR', null);
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Registration failed');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },

    // Course actions
    async fetchCourses({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await getCourses(); // Use the imported `getCourses` function
        commit('SET_COURSES', response.data);
        commit('SET_ERROR', null);
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Failed to fetch courses');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async fetchCourse({ commit }, id) {
      commit('SET_LOADING', true);
      try {
        const response = await getCourse(id); // Use the imported `getCourse` function
        commit('SET_ERROR', null);
        return response.data;
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Failed to fetch course');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async enrollInCourse({ commit }, courseId) {
      commit('SET_LOADING', true);
      try {
        await enrollInCourse(courseId); // Use the imported `enrollInCourse` function
        commit('SET_ERROR', null);
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Failed to enroll in course');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },

    // Category actions
    async fetchCategories({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await getCategories(); // Use the imported `getCategories` function
        commit('SET_CATEGORIES', response.data);
        commit('SET_ERROR', null);
      } catch (error) {
        commit('SET_ERROR', error.response?.data?.message || 'Failed to fetch categories');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    userRole(state) {
      return state.user ? state.user.role : null;
    },
    isLoading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
});