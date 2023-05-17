import * as yup from 'yup';
import { UseMutationResult } from '@tanstack/react-query';
import { Task } from './tasks-util';

export const initialFormValues = {
  taskTitle: '',
  taskDetails: '',
};

export const taskCreationSchema = yup.object({
  taskTitle: yup.string().required('Required'),
  taskDetails: yup.string().required('Required'),
});

export type PropsType = {
  handleClose: () => void;
};

export type ValuesType = {
  taskTitle: string;
  taskDetails: string;
};

export type CreateTasksMutation = UseMutationResult<
  Task,
  unknown,
  ValuesType,
  unknown
>;
