import {
  UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import useAxiosInstance from '../useAxiosInstance';
import { Property } from '@/utils/properties-utils';
import queryKeys from '@/react-query/contants';
import {
  delistProperty,
  fetchListedProperties,
  fetchProperties,
  listProperty,
} from './properties-axios-funcs';

export default function useProperties(): Property[] | undefined {
  const instance = useAxiosInstance();
  const { data } = useQuery({
    queryKey: [queryKeys.properties],
    queryFn: () => fetchProperties(instance),
  });
  return data;
}

export function useListedProperties(): Property[] | undefined {
  const instance = useAxiosInstance();
  const { data } = useQuery({
    queryKey: [queryKeys.properties],
    queryFn: () => fetchListedProperties(instance),
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

export function useListProperty(): UseMutationResult<
  string,
  unknown,
  string,
  unknown
> {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosInstance();
  const listPropertyMutation = useMutation({
    mutationFn: (propertyId: string) => listProperty(propertyId, axiosInstance),
    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries([queryKeys.properties, variables]);
    },
  });
  return listPropertyMutation;
}

export function useDelistProperty(): UseMutationResult<
  string,
  unknown,
  string,
  unknown
> {
  const queryClient = useQueryClient();
  const axiosInstance = useAxiosInstance();
  const delistPropertyMutation = useMutation({
    mutationFn: (propertyId: string) =>
      delistProperty(propertyId, axiosInstance),
    onSettled: (_data, _error, variables) => {
      queryClient.invalidateQueries([queryKeys.properties, variables]);
    },
  });
  return delistPropertyMutation;
}
