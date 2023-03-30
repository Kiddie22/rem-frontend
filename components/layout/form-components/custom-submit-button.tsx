import { Button } from '@mui/material';
import { ReactNode } from 'react';

export default function CustomSubmitButton(props: {
  children: ReactNode;
  isSubmitting: boolean;
  submitForm: () => Promise<void>;
}): JSX.Element {
  const { children, isSubmitting, submitForm } = props;
  return (
    <Button
      type="submit"
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
