import { Divider, Stack } from '@mui/material';
import { ReactNode } from 'react';

type PropsType = { children: ReactNode };

function CardStack(props: PropsType): JSX.Element {
  const { children } = props;
  return (
    <Stack
      direction="row"
      paddingTop={1}
      color="text.secondary"
      divider={<Divider orientation="vertical" flexItem />}
      fontSize={14}
      spacing={1}
      justifyContent="center"
    >
      {children}
    </Stack>
  );
}

export default CardStack;
