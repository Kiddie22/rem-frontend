import axios from 'axios';
import { store } from '@/store/store';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    const { accessToken } = store.getState().user;
    const authHeader = `Bearer ${accessToken}`;
    const returnConfig = config;
    returnConfig.headers.Authorization = authHeader;
    return returnConfig;
  },
  (error) => {
    Promise.reject(error);
  },
);

const getNewAccessToken = async (): Promise<void> => {
  try {
    const res = await instance.get('auth/refresh');
    const { accessToken } = res.data;
    if (accessToken) {
      store.dispatch({
        type: 'user/setLogin',
        payload: { accessToken },
      });
    }
  } catch (error) {
    window.location.href = '/login';
  }
};

instance.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      const errData = err.response.data;

      if (
        (err.response.status === 400 && errData) ||
        (err.response.status === 403 && errData) ||
        (err.response.status === 409 && errData)
      ) {
        if (err.request.responseURL.includes('auth/login')) {
          errData.message = 'Invalid credentials';
        }
        return Promise.reject(errData.message);
      }

      // refresh access token
      if (
        err.response.status === 401 &&
        !originalConfig.retry &&
        !err.request.responseURL.includes('auth/refresh')
      ) {
        originalConfig.retry = true;
        try {
          await getNewAccessToken();
          return await instance(originalConfig);
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  },
);

export default instance;
