import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('authToken');
    // console.log('config.url-->', config.url);

    if (
      token &&
      (config.url !== '/auth/login' || config.url !== '/auth/register')
    ) {
      console.log('config');
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  error => {
    return Promise.reject(error);
  },
);

export default api;
