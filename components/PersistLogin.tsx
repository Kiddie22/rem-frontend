import { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import useRefreshToken from '@/hooks/useRefreshToken';
import useAuthData from '@/hooks/useAuthData';

function PersistLogin(props: { children: JSX.Element }): JSX.Element {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(true);
  const { accessToken } = useAuthData();
  const refreshTokens = useRefreshToken();

  useEffect(() => {
    const verifyRefreshToken = async (): Promise<void> => {
      await refreshTokens();
      setIsLoading(false);
    };
    if (!accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading)
    return (
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Grid>
    );

  return children;
}

export default PersistLogin;
