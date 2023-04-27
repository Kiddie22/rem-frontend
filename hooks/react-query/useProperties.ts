import { AxiosInstance } from 'axios';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosInstance from '../useAxiosInstance';
import { Property } from '@/utils/properties-utils';
import queryKeys from '@/react-query/contants';

export const fetchProperties = async (
  axiosInstance: AxiosInstance,
): Promise<Property[]> => {
  const response = await axiosInstance.get('properties');
  return response.data;
};

export default function useProperties(): Property[] | undefined {
  const instance = useAxiosInstance();
  const { data } = useQuery({
    queryKey: [queryKeys.properties],
    queryFn: () => fetchProperties(instance),
  });
  return data;
}

export function usePrefetchProperties(): void {
  const queryClient = useQueryClient();
  const instance = useAxiosInstance();
  queryClient.prefetchQuery({
    queryKey: [queryKeys.properties],
    queryFn: () => fetchProperties(instance),
  });
}
