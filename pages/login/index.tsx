import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLogin } from '@/store/user';
import LoginForm from '@/components/forms/login-form';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const login = async (username: string, password: string): Promise<string> => {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const response = await res.json();

    if (response.statusCode === 401) {
      return response.message;
    }
    if (response.statusCode === 400) {
      return 'Please check your login credentials';
    }
    if (response.statusCode === 200) {
      dispatch(
        setLogin({
          username: response.username,
          accessToken: response.accessToken,
        }),
      );
      router.push('/');
    }
    return '';
  };
  return <LoginForm login={login} />;
}

export default LoginPage;
