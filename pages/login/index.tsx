import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import LoginForm from '@/components/forms/login-form';
import instance from '@/api/axios-instance';
import { setLogin } from '@/store/user';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

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
      dispatch(setLogin({ accessToken }));
      router.push('/');
      return null;
    } catch (error) {
      return error;
    }
  };

  return <LoginForm login={login} />;
}

export default LoginPage;
