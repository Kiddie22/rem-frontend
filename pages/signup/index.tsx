import SignUpForm from '@/components/forms/signup-form';
import instance from '@/api/axios-instance';

function SignUpPage(): JSX.Element {
  const signUp = async (
    username: string,
    email: string,
    password: string,
  ): Promise<string> => {
    const response = await instance.post('/auth/signup', {
      username,
      email,
      password,
    });
    return String(response);
  };
  return <SignUpForm signUp={signUp} />;
}

export default SignUpPage;
