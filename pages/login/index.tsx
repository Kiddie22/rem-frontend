import { useRouter } from 'next/router';
import LoginForm from '@/components/forms/login-form';
import axios from '@/api/axios-instance';
import useAuthApi from '@/hooks/useAuthApi';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const setAuth = useAuthApi();

  const login = async (
    username: string,
    password: string,
  ): Promise<string | null> => {
    try {
      const response = await axios.post('/auth/login', { username, password });
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
