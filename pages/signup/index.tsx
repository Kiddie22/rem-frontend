import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import SignUpForm from '@/components/forms/signup-form';
import handleFormSubmit from '@/helpers/form-helper';

function SignUpPage(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<string> => {
    const response = await handleFormSubmit(
      '/auth/signup',
      { username, email, password },
      router,
      dispatch,
    );
    return response;
  };
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
