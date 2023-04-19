import { useContext } from 'react';
import { PropertiesContextDataType } from '@/utils/properties-utils';
import { PropertiesContextData } from '@/context/PropertiesProvider';

const usePropertiesData = (): PropertiesContextDataType =>
  useContext(PropertiesContextData);

export default usePropertiesData;
