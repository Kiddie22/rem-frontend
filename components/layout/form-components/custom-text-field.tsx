import { TextField } from '@mui/material';
import { fieldToTextField, TextFieldProps } from 'formik-mui';
import React from 'react';

export default function CustomTextField(props: TextFieldProps): JSX.Element {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    (event: { target: { value: string } }) => {
      const { value } = event.target;
      setFieldValue(name, value || '');
    },
    [setFieldValue, name],
  );
  return (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...fieldToTextField(props)}
      onChange={onChange}
      margin="normal"
      required
      fullWidth
      autoFocus
    />
  );
}
