import { Button, Divider, Typography } from '@mui/material';
import TenantSearch from '@/components/tenant/tenant-search';
import { Property } from '@/utils/properties-utils';
import { useRemoveTenantMutation } from '@/hooks/react-query/useTenants';

type PropsType = { property: Property };

export default function PropertyTenantDetails(props: PropsType): JSX.Element {
  const { property } = props;
  const removeTenantMutation = useRemoveTenantMutation();

  if (!property?.tenant) {
    return (
      <>
        <h1>Tenant Details</h1>
        <TenantSearch />
      </>
    );
  }

  return (
    <>
      <h1>Tenant Details</h1>
      <Typography variant="h5"> {property?.tenant.username}</Typography>
      <Typography variant="caption">{property?.tenant.email}</Typography>
      <Divider />
      <Button
        variant="outlined"
        onClick={(): void => removeTenantMutation.mutate()}
        style={{ marginTop: '10px' }}
      >
        Remove Tenant
      </Button>
    </>
  );
}
