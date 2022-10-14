import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://viacep.com.br/ws/79003241/json',
    baseURL: 'https://viacep.com.br/ws'
})

export default api;