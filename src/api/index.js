import axios from 'axios';
import config from '../utils/config';

const api = axios.create({
    baseURL: config.backend_url + '/api',
});

const getSejours = () => api.get(`/sejour`);
const getSejourById = id => api.get(`/sejour/${id}`);
const getSejourWithHebergement = id => api.get(`/sejour/${id}?hebergement=true`);
const updateSejourById = (id, payload) => api.put(`/sejour/${id}`, payload);
const deleteSejourById = id => api.delete(`/sejour/${id}`);

const getThemes = () => api.get(`/theme`);
const getThemeById = id => api.get(`/theme/${id}`);
const updateThemeById = (id, payload) => api.put(`/theme/${id}`, payload);
const deleteThemeById = id => api.delete(`/theme/${id}`);

const getDestinations = () => api.get(`/destination`);
const getDestinationById = id => api.get(`/destination/${id}`);

const getHebergements = () => api.get(`/hebergement`);
const getHebergementById = id => api.get(`/hebergement/${id}`);
const newHebergement = payload => api.post(`/hebergement`, payload);

const getDomaines = () => api.get(`/cave`);
const getDomaineById = id => api.get(`/cave/${id}`);

const getActivites = () => api.get(`/activite`);
const getActiviteById = id => api.get(`/activite/${id}`);
const newActivite = payload => api.post(`/activite`, payload);

const getSociete = () => api.get(`/societe`);
const getSocieteById = id => api.get(`/societe/${id}`);

const getReviews = (idsejour) => api.get(`/avis?sejour=${idsejour}`);

const uploadImage = (payload) => api.post(`/upload`, payload);

const getCommandes = () => api.get(`/commande`);
const getCommandeById = (id, details) => details ? api.get(`/commande/${id}?full=true`) : api.get(`/commande/${id}`);

const getHotelById = id => api.get(`/hotel/${id}`);

const addAvis = payload => api.post(`/avis`, payload);
const editAvis = (id, payload) => api.put(`/avis/${id}`, payload);

const checkCoupon = payload => api.post(`/coupon/check`, payload);

const apis = {
    getSejours,
    getSejourById,
    getSejourWithHebergement,
    updateSejourById,
    deleteSejourById,
    getThemes,
    getThemeById,
    updateThemeById,
    deleteThemeById,
    getDestinations,
    getDestinationById,
    getHebergements,
    getHebergementById,
    getDomaines,
    getDomaineById,
    getActivites,
    getActiviteById,
    getSociete,
    getSocieteById,
    newActivite,
    getReviews,
    newHebergement,
    uploadImage,
    getCommandes,
    getCommandeById,
    getHotelById,
    addAvis,
    editAvis,
    checkCoupon,
};

export default apis;