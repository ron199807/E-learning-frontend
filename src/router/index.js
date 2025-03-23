import { createRouter, createWebHistory } from 'vue-router';
import Log_in from '@/components/Login.vue';
import UserSignup from '@/components/Signup.vue';
// import CourseList from '@/components/CourseList.vue';
import CourseMaterial from '@/components/CourseMaterial.vue';
import UserHome from '@/components/Home.vue';
import UserPayment from '@/components/Payment.vue';
import Studentdashboard from '@/components/StudentDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UserHome,
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
    path: '/studentdashboard',
    name: 'StudentDashboard',
    component: Studentdashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add navigation guard to protect routes
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