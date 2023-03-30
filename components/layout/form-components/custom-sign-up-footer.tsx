import { Grid, Link } from '@mui/material';

export default function CustomSignUpFooter(): JSX.Element {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Link href="/login" variant="body2">
          Already have an account? Log in
        </Link>
      </Grid>
    </Grid>
  );
}
