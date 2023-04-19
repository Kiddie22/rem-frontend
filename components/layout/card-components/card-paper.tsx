import { Paper } from '@mui/material';
import { ReactNode } from 'react';

type PropsType = { children: ReactNode };

function CardPaper(props: PropsType): JSX.Element {
  const { children } = props;
  return (
    <Paper
      elevation={6}
      style={{
        borderWidth: '5px',
        borderRadius: '5%',
      }}
    >
      {children}
    </Paper>
  );
}

export default CardPaper;
