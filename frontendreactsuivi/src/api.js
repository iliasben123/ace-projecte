import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080', // URL de votre backend (ajustez le port si nécessaire)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
