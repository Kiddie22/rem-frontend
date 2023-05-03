import { Container, Typography } from '@mui/material';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HotelIcon from '@mui/icons-material/Hotel';
import { Property } from '@/utils/properties-utils';
import CardStack from '@/components/layout/card-components/card-stack';

function PropertyDetails({ property }: { property: Property }): JSX.Element {
  return (
    <Container
      style={{
        textAlign: 'center',
      }}
    >
      <Typography style={{ color: '#EA5455' }} variant="button">
        {property?.propertyType.toUpperCase()}
      </Typography>
      <Typography variant="h3">{property?.propertyName}</Typography>
      <Typography variant="body1">{property?.location}</Typography>
      <CardStack>
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
      </CardStack>
    </Container>
  );
}

export default PropertyDetails;
