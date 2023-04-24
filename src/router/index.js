import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/Home.vue') },
    { path: '/login', component: () => import('@/views/Login.vue') },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/']; //remover o '/' quando a autenticação estiver pronta
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) next('/login');
  else next();
});

export default router
