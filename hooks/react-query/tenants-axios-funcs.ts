import { AxiosInstance } from 'axios';

export const addTenant = async (
  value: string,
  propertyId: string | string[] | undefined,
  axiosInstance: AxiosInstance,
): Promise<void> => {
  const response = await axiosInstance.post(
    `properties/${propertyId}/tenant`,
    { userId: value },
  );
  return response.data;
};

export const removeTenant = async (
  propertyId: string | string[] | undefined,
  axiosInstance: AxiosInstance,
): Promise<void> => {
  const response = await axiosInstance.delete(
    `properties/${propertyId}/tenant`,
  );
  return response.data;
};
