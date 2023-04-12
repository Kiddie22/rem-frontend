import { AuthProvider } from './AuthProvider';
import { PropertiesProvider } from './PropertiesProvider';

function Providers(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <AuthProvider>
      <PropertiesProvider>{children}</PropertiesProvider>
    </AuthProvider>
  );
}

export default Providers;
