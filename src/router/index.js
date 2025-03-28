import { createRouter, createWebHistory } from 'vue-router';
import Log_in from '@/components/LandingPage/Login.vue';
import UserSignup from '@/components/LandingPage/Signup.vue';
import CourseMaterial from '@/components/LandingPage/CourseMaterial.vue';
import UserPayment from '@/components/LandingPage/Payment.vue';
import LandingPage from '@/components/views/LandingPage.vue';
import ElearningDashboard from '@/components/views/ELearningDashboard.vue';
import DigitalServices from '@/components/views/DigitalServices.vue';


const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Log_in,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: UserSignup,
  },
  {
    path: '/course/:courseId',
    name: 'CourseMaterial',
    component: CourseMaterial,
    meta: { requiresAuth: true },
  },
  {
    path: '/payment/:courseId',
    name: 'Payment',
    component: UserPayment,
    meta: { requiresAuth: true },
  },

  {
    path: '/dashboard',
    name: 'ElearningDashboard',
    component: ElearningDashboard,
    meta: { requiresAuth: true },
  },

  {
    path: '/digital_solutions',
    name: 'DigitalServices',
    component: DigitalServices,
  }

 

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login'); // Redirect to login if not authenticated
  } else if ((to.path === '/login' || to.path === '/signup') && token) {
    next('/'); // Redirect to home if already authenticated
  } else {
    next(); // Proceed to the route
  }
});

export default router;