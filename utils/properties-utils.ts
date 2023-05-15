import { Dispatch, SetStateAction } from 'react';
import { User } from './user-utils';

export type Property = {
  id: string;
  propertyName: string;
  propertyType: string;
  location: string;
  squareFeet: number;
  noOfBedrooms: number;
  noOfBathrooms: number;
  isListed: boolean;
  owner: User;
  tenant: User;
};

export type PropertiesContextDataType = Property[];

export type PropertiesContextApiType = Dispatch<SetStateAction<Property[]>>;
