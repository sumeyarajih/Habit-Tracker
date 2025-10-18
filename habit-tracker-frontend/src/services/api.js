// import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     timeout: 10000,
// });

// // Add request interceptor for debugging
// api.interceptors.request.use(
//     (config) => {
//         console.log('API Request:', config.method?.toUpperCase(), config.url);
//         return config;
//     },
//     (error) => {
//         console.error('API Request Error:', error);
//         return Promise.reject(error);
//     }
// );

// // Add response interceptor for debugging
// api.interceptors.response.use(
//     (response) => {
//         console.log('API Response:', response.status, response.data);
//         return response;
//     },
//     (error) => {
//         console.error('API Response Error:', error);
//         if (error.code === 'ECONNABORTED') {
//             error.message = 'Request timeout - Server is not responding';
//         } else if (error.response) {
//             // Server responded with error status
//             console.error('Error Data:', error.response.data);
//             console.error('Error Status:', error.response.status);
//         } else if (error.request) {
//             // Request was made but no response received
//             error.message = 'No response from server - Check if backend is running';
//         }
//         return Promise.reject(error);
//     }
// );

// export default api;