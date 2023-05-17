import { Container, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { Property } from '@/utils/properties-utils';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import queryKeys from '@/react-query/contants';
import Widgets from '@/components/properties/detailed-property-widgets';

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
        <Widgets.PropertyDetailsHeader property={property} />
        <Widgets.PropertyDetailsCommands property={property} />
        <Widgets.PropertyTenantDetails property={property} />
        <Widgets.PropertyDetailsTasks property={property} />
      </Grid>
    </Container>
  );
}

export default PropertyDetailsPage;
