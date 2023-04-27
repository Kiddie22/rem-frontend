import { Container, Divider, Paper, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { useQuery } from '@tanstack/react-query';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import { Property } from '@/utils/properties-utils';

function PropertyDetailsPage(): JSX.Element {
  const router = useRouter();
  const { id } = router.query;
  const instance = useAxiosInstance();

  const fetchProperty = async (): Promise<void> => {
    const response = await instance.get(`properties/${id}`);
    return response.data;
  };

  const { data: property }: { property: Property } = useQuery(
    ['property', id],
    fetchProperty,
  );

  return (
    <Container
      style={{
        textAlign: 'center',
      }}
    >
      <Paper
        elevation={2}
        style={{
          borderWidth: '5px',
          borderRadius: '5%',
          paddingTop: '10px',
          marginTop: '100px',
          backgroundColor: '#F9F5EB',
        }}
      >
        <Typography style={{ color: '#EA5455' }} variant="button">
          {property?.propertyType.toUpperCase()}
        </Typography>
        <Typography variant="h3">{property?.propertyName}</Typography>
        <Typography variant="body1">{property?.location}</Typography>
        <Stack
          direction="row"
          paddingTop={1}
          color="text.secondary"
          divider={<Divider orientation="vertical" flexItem />}
          fontSize={14}
          spacing={3}
          justifyContent="center"
          paddingBottom={3}
        >
          <>
            <HotelIcon />
            {property?.noOfBedrooms === 1
              ? '1 bedroom'
              : `${property?.noOfBedrooms} bedrooms`}
          </>
          <>
            <BathtubIcon />
            {property?.noOfBathrooms === 1
              ? '1 bathroom'
              : `${property?.noOfBathrooms} bathrooms`}
          </>
          <>
            <SquareFootIcon />
            {`${property?.squareFeet} sq ft.`}
          </>
        </Stack>
      </Paper>
    </Container>
  );
}

export default PropertyDetailsPage;
