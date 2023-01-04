import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import config from "../utils/config";

const isAuthenticated = () => {
  const authStore = useAuthStore();
  return authStore.isAuthenticated;
};

const isAdmin = (email) => {
  return config.admins.includes(email);
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
      path: "/sejour/details/:id-hotel",
      name: "Hotel",
      component: () => import("../views/HotelView.vue"),
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
      meta: { Restricted: true },
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
      path: '/admin/sejours/:id-avis',
      name: 'AdminSejourAvis',
      component: () => import('../views/admin/Avis/ReviewsView.vue'),
    },
    {
      path: '/admin/domaines/modif-:id',
      name: 'AdminDomaine',
      component: () => import('../views/admin/Domaine/DomaineModifView.vue'),
    },
    {
      path: '/admin/activites/new',
      name: 'AdminActiviteNew',
      component: () => import('../views/admin/Activite/NewActiviteView.vue'),
    },
    {
      path: '/admin/hebergements',
      name: 'AdminHebergement',
      component: () => import('../views/admin/Hebergement/AllHebergementView.vue'),
    },
    {
      path: '/admin/hebergements/new',
      name: 'AdminHebergementNew',
      component: () => import('../views/admin/Hebergement/AddHebergementView.vue'),
    },
    {
      path: '/admin/commandes',
      name: 'AdminCommande',
      component: () => import('../views/admin/Commande/AllCommandesView.vue'),
    },
    {
      path: '/admin/commandes/modif-:id',
      name: 'AdminCommandeSingle',
      component: () => import('../views/admin/Commande/CommandeModifView.vue'),
    },
    {
      path: '/admin/aide',
      name: 'AdminAide',
      component: () => import('../views/admin/Aide/AdminAideView.vue'),
    },
    {
      path: '/paiement',
      name: 'RedirectPaiement',
      component: () => import('../views/MonPanierView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/paiement/validation',
      name: 'Paiement',	
      component: () => import('../views/Checkout/CheckoutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/paiement/facturation',
      name: 'Facturation',
      component: () => import('../views/Checkout/informationView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/paiement/cheque-ref=:ref',
      name: 'Cheque',
      component: () => import('../views/Checkout/ChequeCheckoutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/paiement/merci',
      name: 'Sucess',
      component: () => import('../views/Checkout/SucessView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/paiement/offir',
      name: 'Offrir',
      component: () => import('../views/Checkout/OffrirCheckoutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/favoris',
      name: 'Favoris',
      component: () => import('../views/FavView.vue'),
    },
    {
      path: '/route-alsace',
      name: 'RouteAlsace',
      component: () => import('../views/routes/RouteAlsaceView.vue'),
    },
    {
      path: '/route-bourgogne',
      name: 'RouteBourgogne',
      component: () => import('../views/routes/RouteBourgogneView.vue'),
    },
    {
      path: '/route-bordeaux',
      name: 'RouteBordeaux',
      component: () => import('../views/routes/RouteBordeauxView.vue'),
    },
    {
      path: '/route-provence',
      name: 'RouteProvence',
      component: () => import('../views/routes/RouteProvenceView.vue'),
    },
    {
      path: '/route-champagne',
      name: 'RouteChampagne',
      component: () => import('../views/routes/RouteChampagneView.vue'),
    },
    {
      path: '/route-val',
      name: 'RouteVal',
      component: () => import('../views/routes/RouteValView.vue'),
    },
    {
      path: '/route-languedoc',
      name: 'RouteLanguedoc',
      component: () => import('../views/routes/RouteLanguedocView.vue'),
    },
    {
      path: '/route-rhone',
      name: 'RouteRhone',
      component: () => import('../views/routes/RouteRhoneView.vue'),
    },
    {
      path: '/route-beaujolais',
      name: 'RouteBeaujolais',
      component: () => import('../views/routes/RouteBeaujolaisView.vue'),
    },
    {
      path: '/route-corse',
      name: 'RouteCorse',
      component: () => import('../views/routes/RouteCorseView.vue'),
    },
    {
      path: '/route-sud',
      name: 'RouteSud',
      component: () => import('../views/routes/RouteSudView.vue'),
    },
    {
      path: '/route-jura',
      name: 'RouteJura',
      component: () => import('../views/routes/RouteJuraView.vue'),
    },
    {
      path: '/route-savoie',
      name: 'RouteSavoie',
      component: () => import('../views/routes/RouteSavoieView.vue'),
    },
    {
      path: '/route-ile',
      name: 'RouteIle',
      component: () => import('../views/routes/RouteIleView.vue'),
    },
    {
      path: '/aide',
      name: 'BesoinDAide',
      component: () => import('../views/BesoinDaideView.vue'),
    } 
  ],
});

router.beforeEach((to, from, next) => {

  if(to.path.includes('admin') && isAuthenticated) {
    isAdmin(useAuthStore().user.emailclient) ? next() : next({ path: '/' });
  } else if(to.path.includes('admin')) {
    next({ path: '/' });
  } else if (to.meta.requiresAuth && !isAuthenticated()) {
    next({ path: '/connexion' });
  } else if ((to.name == "Connexion") && isAuthenticated()) {
    next({ path: '/mon-compte' });
  } else {
    next();
  }
  // next();
});


export default router;
