import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blogpessoal-h068.onrender.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers['Authorization'] = token;
  }

  return config;
}, (error) => Promise.reject(error)
);

export default api;