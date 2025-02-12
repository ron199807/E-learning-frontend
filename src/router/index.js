import { createRouter, createWebHistory } from 'vue-router'
import Log_in from '@/components/Login.vue'
import UserSignup from '@/components/Signup.vue'
import CourseList from '@/components/CourseList.vue'
import CourseMaterial from '@/components/CourseMaterial.vue'

const routes = [
  // {
  //   path: '/', name: 'Home', component: Home,
 // meta: {requiresAuth: true},
  // },
  { path: '/login',
    component: Log_in
  },
  { path: '/signup',
    component: UserSignup
  }, 
  { path: '/',
    component: CourseList
  },
  {
    path: '/course/:courseId',
    name: 'CourseMaterial',
    component: CourseMaterial,
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
  } else {
    next(); // Proceed to the route
  }
});

export default router;