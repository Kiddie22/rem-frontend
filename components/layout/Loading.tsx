import { CircularProgress } from '@mui/material';
import { useIsFetching } from '@tanstack/react-query';
import { ReactElement } from 'react';

export default function Loading(): ReactElement {
  const isFetching = useIsFetching();

  const display = isFetching ? 'inherit' : 'none';

  return (
    <CircularProgress
      style={{
        position: 'fixed',
        zIndex: '9999',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display,
      }}
    />
  );
}
