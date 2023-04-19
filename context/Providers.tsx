import { AuthProvider } from './AuthProvider';
import { CaslProvider } from './CaslProvider';
import { PropertiesProvider } from './PropertiesProvider';

function Providers(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <AuthProvider>
      <PropertiesProvider>
        <CaslProvider>{children}</CaslProvider>
      </PropertiesProvider>
    </AuthProvider>
  );
}

export default Providers;
