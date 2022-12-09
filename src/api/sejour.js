import api from '.';

searchByTitle = async (title) => {
    return await api.get(`/sejour?title=${title}`);
};

export default {
    searchByTitle,
};