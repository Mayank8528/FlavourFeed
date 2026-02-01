import axios from 'axios';
const baseURL = (

  'http://localhost:3000/api'
);

const client = axios.create({
  baseURL,
  withCredentials: true, 
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    // Surface server-provided message when available
    const message = error?.response?.data?.message || error.message || 'Request failed';
    // Attach a normalized message for callers
    error.normalizedMessage = message;
    return Promise.reject(error);
  }
);

export default client;
