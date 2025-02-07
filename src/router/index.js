import Vue from 'vue';
import VueRouter from 'vue-router';
import Log_in from '@/components/Login.vue';
import CourseList from '@/components/CourseList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Log_in },
  { path: '/', component: CourseList, meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

// Add navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = router.app.$store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;