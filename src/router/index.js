import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const isAuthenticated = () => {
  const authStore = useAuthStore();
  return authStore.isAuthenticated;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/sejour",
      name: "Séjour",
      component: () => import("../views/SejourView.vue"),
    },
    {
      path: "/sejour/:id-:slug",
      name: "SingleSejour",
      props: {
        header: true,
        content: true
      },
      component: () => import("../views/SingleSejourView.vue"),
    },
    {
      path: "/connexion",
      name: "Connexion",
      component: () => import("../views/LoginView.vue"),
    },
    { 
      path: "/vignoble",
      name: "Vignoble",
      component: () => import("../views/VignobleView.vue"),
    },
    { 
      path: "/route-des-vins",
      name: "RouteDesVins",
      component: () => import("../views/RouteDesVinsView.vue"),
    },
    { 
      path: "/coffretCadeau",
      name: "CoffretCadeau",
      component: () => import("../views/CoffretCadeauView.vue"),
    },
    { 
      path: "/offreEntreprise",
      name: "OffreEntreprise",
      component: () => import("../views/OffreEntrepriseView.vue"),
    },
    { 
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/politique-de-confidentialite",
      name: "PolitiqueDeConfidentialite",
      component: () => import("../views/PolitiqueView.vue"),
    },
    {
      path: "/mentions-legales",
      name: "MentionsLegales",
      component: () => import("../views/MentionsLegalesView.vue"),
    },
    {
      path: "/gestion-des-cookies",
      name: "GestionDesCookies",
      component: () => import("../views/GestionDesCookiesView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/mot-de-passe-oublie",
      name: "MotDePasseOublie",
      component: () => import("../views/ForgotPasswordView.vue"),
    },
    {
      path: "/mon-compte",
      name: "MonCompte",
      component: () => import("../views/MyAccountView.vue"),
      meta: { requiresAuth: true },
    },
    {
      path: "/mon-panier",
      name: "MonPanier",
      component: () => import("../views/MonPanierView.vue"),
    },
    {
      path: "/verif-mail",
      name: "VerifierMail",
      component: () => import("../views/VerifMail.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("../views/TestView.vue"),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/admin/DashboardView.vue'),
    },
    {
      path: '/admin/sejours',
      name: 'AdminSejour',
      component: () => import('../views/admin/Sejour/AllSejourView.vue'),
    },
    {
      path: '/admin/sejours/modif-:id',
      name: 'AdminSejourModif',
      component: () => import('../views/admin/Sejour/SejourModifView.vue'),
    },
    {
      path: '/admin/domaines/modif-:id',
      name: 'AdminDomaine',
      component: () => import('../views/admin/Domaine/DomaineModifView.vue'),
    },
    {
      path: '/paiement',
      name: 'Paiement',	
      component: () => import('../views/Checkout/CheckoutView.vue'),
    },
    {
      path: '/favoris',
      name: 'Favoris',
      component: () => import('../views/FavView.vue'),
    },      
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // redirect to login page if the route requires authentication and the user is not authenticated
    next({ path: '/connexion' });
  } else if ((to.name == "Connexion") && isAuthenticated()) {
    next({ path: '/mon-compte' });
  } else {
    next();
  }
});


export default router;
