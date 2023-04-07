import { Grid } from '@mui/material';
import Link from 'next/link';

export default function CustomLoginFooter(): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Link href="/signup">Don&apos;t have an account? Sign Up</Link>
    </Grid>
  );
}
