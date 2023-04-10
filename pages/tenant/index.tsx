import { Container } from '@mui/material';
import withAuthorization from '@/components/auth/withAuthorization';

function TenantPage(): JSX.Element {
  return (
    <Container>
      <h1>Tenant</h1>
      <p>This page is restricted to a tenant</p>
    </Container>
  );
}

export default withAuthorization(TenantPage, 'tenant');
