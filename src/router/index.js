import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
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
    }
      
  ],
});

router.beforeEach(async (to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // var auth = useAuthStore();

  // if ((to.name == "Connexion") && auth) {
  //     auth.returnUrl = to.fullPath;
  //     return '/mon-compte';
  // } else {
  //   next();
  // }
  next();

});

export default router;
