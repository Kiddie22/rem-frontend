import { Dispatch, SetStateAction } from 'react';

export type Property = {
  id: string;
  propertyName: string;
  propertyType: string;
  location: string;
  squareFeet: number;
  noOfBedrooms: number;
  noOfBathrooms: number;
  isListed: boolean;
  owner: {
    id: string;
    username: string;
    email: string;
  };
  tenant: {
    id: string;
    username: string;
    email: string;
  };
};

export type PropertiesContextDataType = Property[];

export type PropertiesContextApiType = Dispatch<SetStateAction<Property[]>>;
