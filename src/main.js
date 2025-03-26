import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'
import store from './store' // Import the store
import axios from 'axios';

const app = createApp(App)
// Set base URL for Axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

// Add a request interceptor to include the token
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

app.use(router) // Use the router
app.use(store) // Use the store
app.mount('#app')
