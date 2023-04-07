import { Grid, Link } from '@mui/material';

export default function CustomLoginFooter(): JSX.Element {
  return (
    <Grid container>
      <Grid item xs>
        <Link href="/" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link href="/signup" variant="body2">
          Don&apos;t have an account? Sign Up
        </Link>
      </Grid>
    </Grid>
  );
}
