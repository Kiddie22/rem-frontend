import LoginForm from '@/components/forms/login-form';
import instance from '@/api/axios-instance';

function LoginPage(): JSX.Element {
  const login = async (username: string, password: string): Promise<string> => {
    const response = await instance.post('/auth/login', { username, password });
    return String(response);
  };

  return <LoginForm login={login} />;
}

export default LoginPage;
