import { useRouter } from 'next/router';
import SignUpForm from '@/components/forms/signup-form';
import useAuthApi from '@/hooks/useAuthApi';
import useAxiosInstance from '@/hooks/useAxiosInstance';

function SignUpPage(): JSX.Element {
  const router = useRouter();
  const setAuth = useAuthApi();
  const instance = useAxiosInstance();

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
      const { user, accessToken } = response.data;
      setAuth({ user, accessToken });
      router.push('/');
      return null;
    } catch (error) {
      return error;
    }
  };
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
