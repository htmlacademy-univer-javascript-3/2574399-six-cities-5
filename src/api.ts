import axios, { AxiosInstance, AxiosError } from 'axios';

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities'; // URL сервера
const REQUEST_TIMEOUT = 5000; // Время ожидания

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('six-cities-token');
    if (token) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      const errorMessage =
        error.response?.data?.error || error.message || 'Unknown error';
      return Promise.reject(new Error(errorMessage));
    }
  );

  return api;
};
