import { useContext } from 'react';
import { PropertiesContextApiType } from '@/utils/properties-utils';
import { PropertiesContextApi } from '@/context/PropertiesProvider';

const usePropertiesApi = (): PropertiesContextApiType =>
  useContext(PropertiesContextApi);

export default usePropertiesApi;
