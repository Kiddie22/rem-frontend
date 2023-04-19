import { AuthProvider } from './AuthProvider';
import { CanProvider } from './CanProvider';
import { PropertiesProvider } from './PropertiesProvider';

function Providers(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props;
  return (
    <AuthProvider>
      <PropertiesProvider>
        <CanProvider>{children}</CanProvider>
      </PropertiesProvider>
    </AuthProvider>
  );
}

export default Providers;
