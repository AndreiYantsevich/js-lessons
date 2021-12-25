import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '?apikey=ce8674ff';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `${key}&s=${title}`
        return axiosInstance.get(query);
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${configOMB.baseURL}/?apikey=${key}&t=${title}&type=${type}`)
    }
};


export default API;
