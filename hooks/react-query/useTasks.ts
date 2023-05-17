import { useQuery } from '@tanstack/react-query';
import useAxiosInstance from '../useAxiosInstance';
import queryKeys from '@/react-query/contants';
import { Task } from '@/utils/tasks-util';
import fetchPropertyTasks from './tasks-axios-funcs';

export default function useTasks(
  propertyId: string | string[] | undefined,
): Task[] | undefined {
  const instance = useAxiosInstance();
  const { data } = useQuery({
    queryKey: [queryKeys.tasks],
    queryFn: () => fetchPropertyTasks(propertyId, instance),
    enabled: !!propertyId,
  });
  return data;
}
