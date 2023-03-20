import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import LoginForm from '@/components/forms/login-form';
import handleFormSubmit from '@/helpers/form-helper';

function LoginPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const login = async (username: string, password: string): Promise<string> => {
    const response = await handleFormSubmit(
      '/auth/login',
      { username, password },
      router,
      dispatch,
    );
    return response;
  };

  return <LoginForm login={login} />;
}

export default LoginPage;
