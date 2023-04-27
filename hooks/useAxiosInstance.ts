import { AxiosInstance } from 'axios';
import { useEffect } from 'react';
import useAuthData from './useAuthData';
import useRefreshToken from './useRefreshToken';
import instance from '@/api/axios-instance';

const useAxiosInstance = (): AxiosInstance => {
  const refreshTokens = useRefreshToken();
  const { accessToken } = useAuthData();

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(
      (config) => {
        const newConfig = { ...config };
        if (!newConfig.headers.Authorization) {
          newConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return newConfig;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = instance.interceptors.response.use(
      (response) => response,
      async (err) => {
        const originalConfig = err.config;
        const errData = err.response?.data;
        if (
          (err.response?.status === 400 && errData) ||
          (err.response?.status === 403 && errData) ||
          (err.response?.status === 409 && errData)
        ) {
          return Promise.reject(errData.message);
        }

        // refresh access token
        if (
          err.response?.status === 401 &&
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
  }, [accessToken, refreshTokens]);

  return instance;
};

export default useAxiosInstance;
