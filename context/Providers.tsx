import { QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './AuthProvider';
import { CaslProvider } from './CaslProvider';
import queryClient from '@/react-query/queryClient';

function Providers(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CaslProvider>{children}</CaslProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default Providers;
