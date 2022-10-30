import axios from 'axios';

const BASE_API_URL = process.env.API_URL;
const API_USERNAME = process.env.API_APPLICATION_USERNAME;
const API_PASSWORD = process.env.API_APPLICATION_PASSWORD;

const api = axios.create({
  baseURL: `${BASE_API_URL}/wp/v2/`,
  // headers: {
  //   Autorization: `Bearer ${token}`
  // }
});

export default api;
