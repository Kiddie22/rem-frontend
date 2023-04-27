import { Container } from '@mui/material';
import { usePrefetchProperties } from '@/hooks/react-query/useProperties';

function Home(): JSX.Element {
  usePrefetchProperties();
  return (
    <Container component="main" maxWidth="xs">
      <h1>Home</h1>
    </Container>
  );
}

export default Home;
