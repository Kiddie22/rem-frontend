import { useRouter } from 'next/router';
import SignUpForm from '@/components/forms/signup-form';
import axios from '@/api/axios-instance';
import useAuthApi from '@/hooks/useAuthApi';

function SignUpPage(): JSX.Element {
  const router = useRouter();
  const setAuth = useAuthApi();

  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<string | null> => {
    try {
      const response = await axios.post('/auth/signup', {
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
