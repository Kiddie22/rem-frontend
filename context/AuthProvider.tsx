import { createContext, useState } from 'react';
import { AuthContextApiType, AuthContextDataType } from '@/utils/auth-utils';

export const AuthContextData = createContext<AuthContextDataType>({});

export const AuthContextApi = createContext<AuthContextApiType>(
  () => undefined,
);

export function AuthProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;
  const [auth, setAuth] = useState({});

  return (
    <AuthContextData.Provider value={auth}>
      <AuthContextApi.Provider value={setAuth}>
        {children}
      </AuthContextApi.Provider>
    </AuthContextData.Provider>
  );
}
