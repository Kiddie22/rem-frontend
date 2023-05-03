import { Box, Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Property } from '@/utils/properties-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import queryKeys from '@/react-query/contants';
import PropertyDetails from '@/components/properties/detailed-property-widgets/property-details';
import PropertyTenantDetails from '@/components/properties/detailed-property-widgets/property-tenant-details';
import PropertyDetailsCommands from '@/components/properties/detailed-property-widgets/property-details-commands';

function PropertyDetailsPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const instance = useAxiosInstance();

  const fetchProperty = async (): Promise<void> => {
    const response = await instance.get(`properties/${id}`);
    return response.data;
  };

  const { data: property }: { property: Property } = useQuery({
    queryKey: [queryKeys.properties, id],
    queryFn: fetchProperty,
    enabled: !!id,
  });

  return (
    <Container>
      <Grid container spacing={3} pt={3}>
        <Grid item md={12}>
          <Box boxShadow={8} p={2}>
            <PropertyDetails property={property} />
          </Box>
        </Grid>
        <PropertyDetailsCommands property={property} />
        <Grid item md={8}>
          <Box boxShadow={8} p={2}>
            <PropertyTenantDetails />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PropertyDetailsPage;
