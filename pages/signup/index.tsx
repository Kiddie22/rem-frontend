import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setLogin } from '@/store/user';
import SignUpForm from '@/components/forms/signup-form';

function SignUpPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<string> => {
    const res = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const response = await res.json();

    if (response.statusCode === 400) {
      return response.message[0];
    }
    if (response.statusCode === 409) {
      return response.message;
    }
    if (response.statusCode === 201) {
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
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
