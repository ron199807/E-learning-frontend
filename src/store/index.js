import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem('token') || null,
    courses: [],
    categories: [],
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
  },
  actions: {
    async login({ commit }, credentials) {
      const response = await api.login(credentials);
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', response.data.token);
    },
    async logout({ commit }) {
      await api.logout();
      commit('CLEAR_AUTH');
    },
    async register({ commit }, userData) {
      const response = await api.register(userData);
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', response.data.token);
    },
    async fetchCourses({ commit }) {
      const response = await api.getCourses();
      commit('SET_COURSES', response.data);
    },
    async fetchCategories({ commit }) {
      const response = await api.getCategories();
      commit('SET_CATEGORIES', response.data);
    },
    async enrollInCourse({ commit }, courseId) {
      await api.enrollInCourse(courseId);
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token;
    },
    userRole(state) {
      return state.user ? state.user.role : null;
    },
  },
});