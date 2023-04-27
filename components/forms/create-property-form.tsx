import { Form, Formik, Field } from 'formik';
import React, { useState } from 'react';
import { Alert, LinearProgress, MenuItem, Select } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import FormComponents from '../layout/form-components';
import { SetSubmitting } from '@/utils/form-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { Property } from '@/utils/properties-utils';
import {
  PropTypes,
  UpdatePropertiesMutation,
  ValuesType,
  initialFormValues,
  loginSchema,
} from '@/utils/propety-form-utils';
import queryKeys from '@/react-query/contants';

function CreatePropertyForm(props: PropTypes): JSX.Element {
  const { handleClose } = props;
  const [errorMessage, setErrorMessage] = useState('');
  const instance = useAxiosInstance();
  const queryClient = useQueryClient();

  const createProperty = async (values: ValuesType): Promise<Property> => {
    const res = await instance.post('properties', {
      propertyName: values.propertyName,
      propertyType: values.propertyType,
      location: values.location,
      squareFeet: Number(values.squareFeet),
      noOfBedrooms: Number(values.noOfBedrooms),
      noOfBathrooms: Number(values.noOfBathrooms),
    });
    return res.data;
  };

  const updatePropertiesMutation: UpdatePropertiesMutation = useMutation({
    mutationFn: (values: ValuesType) => createProperty(values),
    onSuccess: () => {
      handleClose();
    },
    onError: (error: Error) => {
      setErrorMessage(error.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries([queryKeys.properties]);
    },
  });

  const handleFormSubmit = async (
    values: ValuesType,
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    setSubmitting(true);
    await updatePropertiesMutation.mutateAsync(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleFormSubmit}
      validationSchema={loginSchema}
    >
      {({ values, handleChange, submitForm, isSubmitting }): JSX.Element => (
        <Form>
          <Field
            component={FormComponents.CustomTextField}
            name="propertyName"
            type="text"
            label="Property Name"
          />
          <Field
            as={Select}
            name="propertyType"
            label="Property Type"
            value={values.propertyType}
            onChange={handleChange}
          >
            <MenuItem value="House">House</MenuItem>
            <MenuItem value="Apartment">Apartment</MenuItem>
            <MenuItem value="Mobile">Mobile</MenuItem>
          </Field>
          <Field
            component={FormComponents.CustomTextField}
            name="location"
            type="text"
            label="Location"
          />
          <Field
            component={FormComponents.CustomTextField}
            name="squareFeet"
            type="text"
            label="Square Feet"
          />
          <Field
            component={FormComponents.CustomTextField}
            name="noOfBedrooms"
            type="number"
            label="Number of Bedrooms"
          />
          <Field
            component={FormComponents.CustomTextField}
            name="noOfBathrooms"
            type="number"
            label="Number of Bathrooms"
          />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          {isSubmitting && <LinearProgress />}
          <FormComponents.CustomSubmitButton
            isSubmitting={isSubmitting}
            submitForm={submitForm}
          >
            Create Property
          </FormComponents.CustomSubmitButton>
        </Form>
      )}
    </Formik>
  );
}

export default CreatePropertyForm;
