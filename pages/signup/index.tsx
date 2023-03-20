import SignUpForm from '@/components/forms/signup-form';

const SignUpPage = () => {
  const signUp = async (username: string, email: string, password: string) => {
    const res = await fetch('http://localhost:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await res.json();
    return data;
  };
  return (
    <>
      <SignUpForm signUp={signUp} />
    </>
  );
};

export default SignUpPage;
