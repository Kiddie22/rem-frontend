import { Container } from '@mui/material';
import UserList from '@/components/properties/user-list';

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
      <UserList />
    </Container>
  );
}

export default PropertiesPage;
