import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import LoginPage from '../pages/LoginPage.vue';
import SignupPage from '../pages/SignupPage.vue';
import DashboardPage from '../pages/DashBoardPage.vue';
import TicketsPage from '../pages/TicketsPage.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignupPage },
  { 
    path: '/dashboard', 
    component: DashboardPage,
    meta: { requiresAuth: true }
  },
  { 
    path: '/tickets', 
    component: TicketsPage,
    meta: { requiresAuth: true }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('user');
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
