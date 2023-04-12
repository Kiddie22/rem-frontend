import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import React, { useState } from 'react';
import { Alert, LinearProgress, MenuItem, Select } from '@mui/material';
import FormComponents from '../layout/form-components';
import { SetSubmitting } from '@/utils/form-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import usePropertiesApi from '@/hooks/usePropertiesApi';
import { Property } from '@/utils/properties-utils';

const initialFormValues = {
  propertyName: '',
  propertyType: 'House',
  noOfBedrooms: 0,
  noOfBathrooms: 0,
};

const loginSchema = yup.object({
  propertyName: yup.string().required('Required'),
  propertyType: yup.string().required('Required'),
  noOfBedrooms: yup.number().required('Required'),
  noOfBathrooms: yup.number().required('Required'),
});

type PropTypes = { handleClose: () => void };

function CreatePropertyForm(props: PropTypes): JSX.Element {
  const { handleClose } = props;
  const [errorMessage, setErrorMessage] = useState('');
  const instance = useAxiosInstance();
  const setProperties = usePropertiesApi();

  const handleFormSubmit = async (
    values: {
      propertyName: string;
      propertyType: string;
      noOfBedrooms: number;
      noOfBathrooms: number;
    },
    { setSubmitting }: SetSubmitting,
  ): Promise<void> => {
    try {
      const res = await instance.post('properties', {
        propertyName: values.propertyName,
        propertyType: values.propertyType,
        noOfBedrooms: Number(values.noOfBedrooms),
        noOfBathrooms: Number(values.noOfBathrooms),
      });
      const newProperty: Property = res.data;
      setProperties((prevValue) => [...prevValue, newProperty]);
      handleClose();
    } catch (error) {
      setErrorMessage(error);
    }
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
