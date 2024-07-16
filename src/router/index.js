// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Impor store
import Welcome from '../views/WelcomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import Profile from '../views/ProfilePage.vue';
import EditProfile from '../views/EditProfile.vue';
import Movein from '../views/BookMovin.vue';
import Packin from '../views/BookPackin.vue';
import EditBooking from '../views/EditPesanan.vue';
import Checkout from '../views/ValidatePayment.vue';
import PaymentMovein from '../views/PaymentMovein.vue';
import PaymentPackin from '../views/PaymentPackin.vue';
import History from '../views/RiwayatPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  { path: '/', component: Welcome, meta: { guest: true } },
  { path: '/login', component: LoginPage, meta: { guest: true } },
  { path: '/register', component: RegisterPage, meta: { guest: true } },
  { path: '/home', component: HomePage, meta: { requiresAuth: true } },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
  {
    path: '/profile/edit',
    component: EditProfile,
    meta: { requiresAuth: true },
  },
  { path: '/book/movein', component: Movein, meta: { requiresAuth: true } },
  { path: '/book/packin', component: Packin, meta: { requiresAuth: true } },
  {
    path: '/book/edit/:id',
    component: EditBooking,
    meta: { requiresAuth: true },
  },
  { path: '/checkout', component: Checkout, meta: { requiresAuth: true } },
  {
    path: '/payment/movein',
    component: PaymentMovein,
    meta: { requiresAuth: true },
  },
  {
    path: '/payment/packin',
    component: PaymentPackin,
    meta: { requiresAuth: true },
  },
  { path: '/history', component: History, meta: { requiresAuth: true } },
  { path: '/:catchAll(.*)', redirect: '/' }, // Redirect to '/' for any other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to check authentication status
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated; // Gunakan getter isAuthenticated dari Vuex

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login page if not authenticated
  } else if (to.meta.guest && isAuthenticated) {
    next('/home'); // Redirect to home page if already authenticated
  } else {
    next();
  }
});

export default router;
