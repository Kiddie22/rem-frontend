import { Container } from '@mui/material';
import withAuthorization from '@/components/withAuthorization';
import PropertyList from '@/components/properties/property-list';

function PropertiesPage(): JSX.Element {
  return (
    <Container
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Properties</h1>
      <PropertyList />
    </Container>
  );
}

export default withAuthorization(PropertiesPage, 'owner');
