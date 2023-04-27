import * as yup from 'yup';
import { Property } from './properties-utils';
import { UseMutationResult } from '@tanstack/react-query';

export const initialFormValues = {
  propertyName: '',
  propertyType: 'House',
  location: '',
  squareFeet: 0,
  noOfBedrooms: 0,
  noOfBathrooms: 0,
};

export const loginSchema = yup.object({
  propertyName: yup.string().required('Required'),
  propertyType: yup.string().required('Required'),
  noOfBedrooms: yup.number().required('Required'),
  noOfBathrooms: yup.number().required('Required'),
});

export type PropTypes = { handleClose: () => void };

export type ValuesType = {
  propertyName: string;
  propertyType: string;
  location: string;
  squareFeet: number;
  noOfBedrooms: number;
  noOfBathrooms: number;
};

export type UpdatePropertiesMutation = UseMutationResult<
  Property,
  unknown,
  ValuesType,
  unknown
>;
