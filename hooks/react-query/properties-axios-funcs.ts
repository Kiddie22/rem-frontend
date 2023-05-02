import { AxiosInstance } from 'axios';
import { Property } from '@/utils/properties-utils';

export const fetchUserProperties = async (
  userId: string,
  axiosInstance: AxiosInstance,
): Promise<Property[]> => {
  const response = await axiosInstance.get(`properties?ownerId=${userId}`);
  return response.data;
};

export const fetchListedProperties = async (
  axiosInstance: AxiosInstance,
): Promise<Property[]> => {
  const response = await axiosInstance.get('properties?isListed=true');
  return response.data;
};

export const listProperty = async (
  propertyId: string,
  axiosInstance: AxiosInstance,
): Promise<string> => {
  const response = await axiosInstance.patch(`properties/${propertyId}/list`);
  return response.data;
};

export const delistProperty = async (
  propertyId: string,
  axiosInstance: AxiosInstance,
): Promise<string> => {
  const response = await axiosInstance.patch(`properties/${propertyId}/delist`);
  return response.data;
};
