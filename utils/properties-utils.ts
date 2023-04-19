import { Dispatch, SetStateAction } from 'react';

export type Property = {
  id: string;
  propertyName: string;
  propertyType: string;
  location: string;
  squareFeet: number;
  noOfBedrooms: number;
  noOfBathrooms: number;
  user: {
    id: string;
    username: string;
    email: string;
  };
};

export type PropertiesContextDataType = Property[];

export type PropertiesContextApiType = Dispatch<SetStateAction<Property[]>>;
