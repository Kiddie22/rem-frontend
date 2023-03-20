import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLogin } from '@/store/user';
import SignUpForm from '@/components/forms/signup-form';
import instance from '@/api/axios-instance';

function SignUpPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<string> => {
    try {
      const res = await instance.post(
        '/auth/signup',
        JSON.stringify({ username, email, password }),
      );

      const response = res.data;
      if (response.statusCode === 201) {
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
      if (response.statusCode === 400) {
        return response.message[0];
      }
      if (response.statusCode === 409) {
        return response.message;
      }
      return response.message[0];
    }
    return '';
  };
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
