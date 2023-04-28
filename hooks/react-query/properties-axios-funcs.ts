import { AxiosInstance } from 'axios';
import { Property } from '@/utils/properties-utils';

export const fetchProperties = async (
  axiosInstance: AxiosInstance,
): Promise<Property[]> => {
  const response = await axiosInstance.get('properties');
  return response.data;
};

export const fetchListedProperties = async (
  axiosInstance: AxiosInstance,
): Promise<Property[]> => {
  const response = await axiosInstance.get('properties/listed');
  return response.data;
};

export const listProperty = async (
  propertyId: string,
  axiosInstance: AxiosInstance,
): Promise<string> => {
  const response = await axiosInstance.patch(`properties/list/${propertyId}`);
  return response.data;
};

export const delistProperty = async (
  propertyId: string,
  axiosInstance: AxiosInstance,
): Promise<string> => {
  const response = await axiosInstance.patch(`properties/delist/${propertyId}`);
  return response.data;
};
