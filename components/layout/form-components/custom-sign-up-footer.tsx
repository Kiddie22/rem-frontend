import { Grid } from '@mui/material';
import Link from 'next/link';

export default function CustomSignUpFooter(): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Link href="/login">Already have an account? Log in</Link>
      </Grid>
    </Grid>
  );
}
