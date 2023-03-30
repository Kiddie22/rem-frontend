import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import SignUpForm from '@/components/forms/signup-form';
import instance from '@/api/axios-instance';
import { setLogin } from '@/store/user';

function SignUpPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

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
      dispatch(setLogin({ accessToken }));
      router.push('/');
      return null;
    } catch (error) {
      return error;
    }
  };
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
