import LoginForm from '@/components/forms/login-form';

const LoginPage = () => {
  const login = async (username: string, password: string) => {
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    return data;
  };
  return <LoginForm login={login} />;
};

export default LoginPage;
