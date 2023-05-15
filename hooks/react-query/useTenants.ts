import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import useAxiosInstance from '../useAxiosInstance';
import queryKeys from '@/react-query/contants';
import usePropertyId from '../usePropertyId';
import { addTenant, removeTenant } from './tenants-axios-funcs';

export function useAddTenantMutation(): UseMutationResult<
  void,
  unknown,
  string,
  unknown
> {
  const queryClient = useQueryClient();
  const propertyId = usePropertyId();
  const axiosInstance = useAxiosInstance();
  const addTenantMutation = useMutation({
    mutationFn: (value: string) => addTenant(value, propertyId, axiosInstance),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.properties, propertyId],
      });
    },
  });
  return addTenantMutation;
}

export function useRemoveTenantMutation(): UseMutationResult<
  void,
  unknown,
  void,
  unknown
> {
  const queryClient = useQueryClient();
  const propertyId = usePropertyId();
  const axiosInstance = useAxiosInstance();
  const removeTenantMutation = useMutation({
    mutationFn: () => removeTenant(propertyId, axiosInstance),
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.properties, propertyId],
      });
    },
  });
  return removeTenantMutation;
}
