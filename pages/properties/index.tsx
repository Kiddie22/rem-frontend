import { Container } from '@mui/material';
import withAuthorization from '@/components/withAuthorization';

function PropertiesPage(): JSX.Element {
  return (
    <Container>
      <h1>Properties</h1>
      <p>This page is restricted to an owner</p>
    </Container>
  );
}

export default withAuthorization(PropertiesPage, 'owner');
