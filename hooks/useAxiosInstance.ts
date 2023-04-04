import { AxiosInstance } from 'axios';
import { useEffect } from 'react';
import { instance } from '@/api/axios-instance';
import useAuthData from './useAuthData';
import useRefreshToken from './useRefreshToken';

const useAxiosInstance = (): AxiosInstance => {
  const refreshTokens = useRefreshToken();
  const auth = useAuthData();

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = instance.interceptors.response.use(
      (response) => response,
      async (err) => {
        const originalConfig = err.config;
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
          const newAccessToken = await refreshTokens();
          if (newAccessToken) {
            originalConfig.headers.Authorization = `Bearer ${newAccessToken}`;
            return instance(originalConfig);
          }
        }

        return Promise.reject(err);
      },
    );

    return () => {
      instance.interceptors.request.eject(requestIntercept);
      instance.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refreshTokens]);

  return instance;
};

export default useAxiosInstance;
