import { Button, CardContent, Typography } from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Link from 'next/link';
import { subject } from '@casl/ability';
import { Property } from '@/utils/properties-utils';
import { Can } from '@/context/CaslProvider';
import CardComponents from '../layout/card-components';

function PropertyCard(props: { property: Property }): JSX.Element {
  const { property } = props;
  return (
    <CardComponents.CardPaper>
      <Link
        href={`properties/${property.id}`}
        style={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <CardComponents.CustomCardMedia src="cover.svg" alt="Property Image" />
        <CardContent>
          <Typography
            sx={{ fontSize: 14, textAlign: 'center' }}
            color="text.secondary"
          >
            {property.propertyType.toUpperCase()}
          </Typography>
          <Typography variant="h6" component="div" textAlign="center">
            {property.propertyName}
          </Typography>
          <CardComponents.CardStack>
            <>
              <HotelIcon />
              {property.noOfBedrooms === 1
                ? '1 bedroom'
                : `${property.noOfBedrooms} bedrooms`}
            </>
            <>
              <BathtubIcon />
              {property.noOfBathrooms === 1
                ? '1 bathroom'
                : `${property.noOfBathrooms} bathrooms`}
            </>
          </CardComponents.CardStack>
          <Can do="read" this={subject('Property', property)}>
            <Button>Read</Button>
          </Can>
          <Can do="edit" this={subject('Property', property)}>
            <Button>Edit</Button>
          </Can>
          <Can do="delete" this={subject('Property', property)}>
            <Button>Delete</Button>
          </Can>
        </CardContent>
      </Link>
    </CardComponents.CardPaper>
  );
}

export default PropertyCard;
