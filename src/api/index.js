import axios from 'axios';
import config from '../utils/config';

const api = axios.create({
    baseURL: config.backend_url + '/api',
    timeout: 2000,
});

const getSejours = () => api.get(`/sejour`);
const getSejourById = id => api.get(`/sejour/${id}`);
const updateSejourById = (id, payload) => api.put(`/sejour/${id}`, payload);
const deleteSejourById = id => api.delete(`/sejour/${id}`);

const apis = {
    getSejours,
    getSejourById,
    updateSejourById,
    deleteSejourById
};

export default apis;