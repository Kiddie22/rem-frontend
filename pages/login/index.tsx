import { useRouter } from 'next/router';
import LoginForm from '@/components/forms/login-form';
import instance from '@/api/axios-instance';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const login = async (
    username: string,
    password: string,
  ): Promise<string | null> => {
    try {
      const response = await instance.post('/auth/login', {
        username,
        password,
      });
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      router.push('/');
      return null;
    } catch (error) {
      return error;
    }
  };

  return <LoginForm login={login} />;
}

export default LoginPage;
