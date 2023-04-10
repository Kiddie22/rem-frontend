import Link from 'next/link';
import { ComponentType } from 'react';
import useAuthData from '@/hooks/useAuthData';

interface Props {
  role: string;
}

function withAuthorization<T extends Props>(
  WrappedComponent: ComponentType<T>,
  role: string,
) {
  return function Wrapper({ ...props }: T): JSX.Element {
    const { user } = useAuthData();
    if (role !== user?.role) {
      return (
        <>
          <h1>No access</h1>
          <Link href="/">Home</Link>
        </>
      );
    }

    return <WrappedComponent {...(props as T)} />;
  };
}

export default withAuthorization;
