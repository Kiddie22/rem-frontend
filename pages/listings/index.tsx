import { Container } from '@mui/material';
import ListedList from '@/components/properties/listed-list';

function TenantPage(): JSX.Element {
  return (
    <Container>
      <h1>Listings</h1>
      <ListedList />
    </Container>
  );
}

export default TenantPage;
