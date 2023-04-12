import { Dispatch, SetStateAction } from 'react';

export type Property = {
  id: string;
  propertyName: string;
  propertyType: string;
  location: string;
  squareFeet: number;
  noOfBedrooms: number;
  noOfBathrooms: number;
};

export type PropertiesContextDataType = Property[];

export type PropertiesContextApiType = Dispatch<SetStateAction<Property[]>>;
