import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import('../components/Home.vue')
    },
    {
      path: "/file",
      name: "File",
      component: () => import("../components/Formulario.vue")
    },
    
    {
      path: "/bienvenido",
      name: "Bienvenido",
      component: () => import('../components/extras/Bienvenido.vue')
    },
    {
      path: "/nosotros",
      name: "Nosotros",
      component: () => import('../components/extras/About.vue')
    }
  ],
});

export default router;
