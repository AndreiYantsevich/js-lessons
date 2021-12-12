import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'ce8674ff';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`${configOMB.baseURL}/?apikey=${key}&t=${title}`)
    },
    searchFilmsByType: (title: string, type: string) => {
        return axiosInstance.get(`${configOMB.baseURL}/?apikey=${key}&t=${title}&type=${type}`)
    }
};


export default API;
