import { useContext } from 'react';
import { AuthContextApi } from '@/context/AuthProvider';
import { AuthContextApiType } from '@/utils/auth-utils';

const useAuthApi = (): AuthContextApiType => useContext(AuthContextApi);

export default useAuthApi;
