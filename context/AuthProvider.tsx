import { Dispatch, SetStateAction, createContext, useState } from 'react';

export const AuthContextData = createContext<object>({});
export const AuthContextApi = createContext<Dispatch<SetStateAction<object>>>(
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
