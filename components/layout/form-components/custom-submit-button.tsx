import { Button } from '@mui/material';
import { ReactNode } from 'react';

type CustomSubmitButtonProps = {
  children: ReactNode;
  isSubmitting: boolean;
  submitForm: () => Promise<void>;
};

export default function CustomSubmitButton(
  props: CustomSubmitButtonProps,
): JSX.Element {
  const { children, isSubmitting, submitForm } = props;
  return (
    <Button
      fullWidth
      variant="contained"
      disabled={isSubmitting}
      onClick={submitForm}
      sx={{ mt: 1, mb: 3 }}
    >
      {children}
    </Button>
  );
}
