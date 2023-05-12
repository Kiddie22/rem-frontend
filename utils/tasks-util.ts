import { Property } from './properties-utils';

export type Task = {
  taskId: string;
  taskTitle: string;
  taskDetails: string;
  isCompleted: boolean;
  property: Property;
};
