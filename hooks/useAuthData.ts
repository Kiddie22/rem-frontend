import { useContext } from 'react';
import { AuthContextData } from '@/context/AuthProvider';

const useAuthData = (): object => useContext(AuthContextData);

export default useAuthData;
