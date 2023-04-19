import { createContext, useState } from 'react';
import {
  PropertiesContextApiType,
  PropertiesContextDataType,
  Property,
} from '@/utils/properties-utils';

export const PropertiesContextData = createContext<PropertiesContextDataType>(
  [],
);

export const PropertiesContextApi = createContext<PropertiesContextApiType>(
  () => undefined,
);

export function PropertiesProvider(props: {
  children: React.ReactNode;
}): JSX.Element {
  const { children } = props;
  const [properties, setProperties] = useState<Property[]>([]);

  return (
    <PropertiesContextData.Provider value={properties}>
      <PropertiesContextApi.Provider value={setProperties}>
        {children}
      </PropertiesContextApi.Provider>
    </PropertiesContextData.Provider>
  );
}
