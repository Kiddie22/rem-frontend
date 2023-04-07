import { useRouter } from 'next/router';
import LoginForm from '@/components/forms/login-form';
import useAuthApi from '@/hooks/useAuthApi';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { ReturnType } from '@/utils/form-utils';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const setAuth = useAuthApi();
  const instance = useAxiosInstance();

  const login = async (
    username: string,
    password: string,
  ): Promise<ReturnType> => {
    try {
      const response = await instance.post('/auth/login', {
        username,
        password,
      });
      const { user, accessToken } = response.data;
      setAuth({ user, accessToken });
      router.push('/');
      return null;
    } catch (error) {
      return error;
    }
  };

  return <LoginForm login={login} />;
}

export default LoginPage;
