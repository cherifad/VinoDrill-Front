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

const getDomaines = () => api.get(`/cave`);
const getDomaineById = id => api.get(`/cave/${id}`);

const getActivites = () => api.get(`/activite`);
const getActiviteById = id => api.get(`/activite/${id}`);
const newActivite = payload => api.post(`/activite`, payload);

const getSociete = () => api.get(`/societe`);
const getSocieteById = id => api.get(`/societe/${id}`);

const getReviews = (idsejour) => api.get(`/avis?sejour=${idsejour}`);

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
};

export default apis;