import { Dispatch, SetStateAction, useContext } from 'react';
import { AuthContextApi } from '@/context/AuthProvider';

const useAuthApi = (): Dispatch<SetStateAction<object>> =>
  useContext(AuthContextApi);

export default useAuthApi;
