import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLogin } from '@/store/user';
import LoginForm from '@/components/forms/login-form';
import instance from '@/api/axios-instance';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const login = async (username: string, password: string): Promise<string> => {
    try {
      const res = await instance.post(
        '/auth/login',
        JSON.stringify({ username, password }),
      );
      const response = res.data;
      if (response.statusCode === 200) {
        dispatch(
          setLogin({
            username: response.username,
            accessToken: response.accessToken,
          }),
        );
        router.push('/');
      }
    } catch (error) {
      const response = error.response.data;
      if (response.statusCode === 401) {
        return response.message;
      }
      if (response.statusCode === 400) {
        return 'Please check your login credentials';
      }
      return response.message[0];
    }
    return '';
  };

  return <LoginForm login={login} />;
}

export default LoginPage;
