import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blogpessoal-h068.onrender.com',
});

export default api;