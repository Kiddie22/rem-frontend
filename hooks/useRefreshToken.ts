import { useRouter } from 'next/router';
import { instance } from '@/api/axios-instance';
import useAuthApi from './useAuthApi';

const useRefreshToken = (): (() => Promise<string | null>) => {
  const setAuth = useAuthApi();
  const router = useRouter();

  const refreshTokens = async (): Promise<string | null> => {
    try {
      const response = await instance.get('auth/refresh', {
        withCredentials: true,
      });
      if (setAuth)
        setAuth((prev: object) => ({
          ...prev,
          accessToken: response.data.accessToken,
        }));
      return response.data.accessToken;
    } catch (error) {
      router.push('/login');
      return null;
    }
  };

  return refreshTokens;
};

export default useRefreshToken;
