import axios from 'axios';

const api = axios.create();

api.interceptors.request.use(async config => {
    const token = localStorage.getItem("@WebMedic:token");
    if (token) {
      config.headers!.Authorization = `${token}`;
    }
    return config;
  });
export default api;