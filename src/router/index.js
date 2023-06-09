import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/login', component: () => import('@/views/Login.vue') },
    { path: '/horarios', component: () => import('@/views/Horarios.vue') },
    { path: '/faltas', component: () => import('@/views/Faltas.vue') },
    { path: '/notas', component: () => import('@/views/Notas.vue') },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) next('/login');
  else next();
});

export default router
