import { AxiosInstance } from 'axios';
import { Task } from '@/utils/tasks-util';

const fetchPropertyTasks = async (
  propertyId: string | string[] | undefined,
  axiosInstance: AxiosInstance,
): Promise<Task[]> => {
  const response = await axiosInstance.get(`properties/${propertyId}/tasks`);
  return response.data.data;
};

export default fetchPropertyTasks;
