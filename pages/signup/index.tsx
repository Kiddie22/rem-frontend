import { useRouter } from 'next/router';
import SignUpForm from '@/components/forms/signup-form';
import instance from '@/api/axios-instance';

function SignUpPage(): JSX.Element {
  const router = useRouter();

  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<string | null> => {
    try {
      const response = await instance.post('/auth/signup', {
        username,
        email,
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
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
