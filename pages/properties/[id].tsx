import { Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Property } from '@/utils/properties-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import queryKeys from '@/react-query/contants';
import PropertyDetailsHeader from '@/components/properties/detailed-property-widgets/property-details-header';
import PropertyTenantDetails from '@/components/properties/detailed-property-widgets/property-tenant-details';
import PropertyDetailsCommands from '@/components/properties/detailed-property-widgets/property-details-commands';
import PropertyDetailsTasks from '@/components/properties/detailed-property-widgets/property-details-tasks';

type PropTypes = { property: Property };

function PropertyDetailsPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const instance = useAxiosInstance();

  const fetchProperty = async (): Promise<void> => {
    const response = await instance.get(`properties/${id}`);
    return response.data;
  };

  const { data: property }: PropTypes = useQuery({
    queryKey: [queryKeys.properties, id],
    queryFn: fetchProperty,
    enabled: !!id,
  });

  return (
    <Container>
      <Grid container spacing={3} pt={3}>
        <PropertyDetailsHeader property={property} />
        <PropertyDetailsCommands property={property} />
        <PropertyTenantDetails property={property} />
        <PropertyDetailsTasks property={property} />
      </Grid>
    </Container>
  );
}

export default PropertyDetailsPage;
