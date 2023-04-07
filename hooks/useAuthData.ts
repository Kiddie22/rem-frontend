import { useContext } from 'react';
import { AuthContextData } from '@/context/AuthProvider';
import { AuthContextDataType } from '@/utils/auth-utils';

const useAuthData = (): AuthContextDataType => useContext(AuthContextData);

export default useAuthData;
