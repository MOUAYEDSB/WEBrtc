// src/api/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7081', // Replace with your backend's base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/plain',
  },
  // Add additional settings if needed
});

export default axiosInstance;
