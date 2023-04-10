import Link from 'next/link';
import useAuthData from '@/hooks/useAuthData';

function withAuthorization(WrappedComponent, role: string): () => JSX.Element {
  function Wrapper(props): JSX.Element {
    const { user } = useAuthData();
    if (role !== user?.role) {
      return (
        <>
          <h1>No access</h1>
          <Link href="/">Home</Link>
        </>
      );
    }

    // If the user's role is allowed, render the wrapped component
    return <WrappedComponent {...props} />;
  }

  return Wrapper();
}

export default withAuthorization;
