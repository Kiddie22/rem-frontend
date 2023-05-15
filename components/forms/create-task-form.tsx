import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react';
import { Alert, LinearProgress } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import FormComponents from '../layout/form-components';
import { SetSubmitting } from '@/utils/form-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { Property } from '@/utils/properties-utils';
import queryKeys from '@/react-query/contants';
import {
  PropsType,
  ValuesType,
  initialFormValues,
  taskCreationSchema,
} from '@/utils/task-form-utils';

function CreateTaskForm(props: PropsType): JSX.Element {
  const { handleClose, propertyId } = props;
  const [errorMessage, setErrorMessage] = useState('');
  const instance = useAxiosInstance();
  const queryClient = useQueryClient();

  const createTask = async (values: ValuesType): Promise<Property> => {
    const res = await instance.post(`properties/${propertyId}/tasks`, {
      taskTitle: values.taskTitle,
      taskDetails: values.taskDetails,
    });
    return res.data;
  };

  const createTasksMutation = useMutation({
    mutationFn: (values: ValuesType) => createTask(values),
    onSuccess: () => {
      handleClose();
    },
    onError: (error: Error) => {
      setErrorMessage(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries([queryKeys.tasks]);
    },
  });

  const handleFormSubmit = async (
    values: ValuesType,
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    setSubmitting(true);
    await createTasksMutation.mutateAsync(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleFormSubmit}
      validationSchema={taskCreationSchema}
    >
      {({ submitForm, isSubmitting }): JSX.Element => (
        <Form>
          <Field
            component={FormComponents.CustomTextField}
            name="taskTitle"
            type="text"
            label="Task Title"
          />
          <Field
            component={FormComponents.CustomTextField}
            name="taskDetails"
            type="text"
            label="Task Details"
          />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          {isSubmitting && <LinearProgress />}
          <FormComponents.CustomSubmitButton
            isSubmitting={isSubmitting}
            submitForm={submitForm}
          >
            Create Task
          </FormComponents.CustomSubmitButton>
        </Form>
      )}
    </Formik>
  );
}

export default CreateTaskForm;
