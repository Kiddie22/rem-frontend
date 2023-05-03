import { CardContent, Typography } from '@mui/material';
import Link from 'next/link';
import { Property } from '@/utils/properties-utils';
import CardComponents from '../layout/card-components';
import PropertyInfoStack from './property-info-stack';

type PropsType = { property: Property };

function PropertyCard(props: PropsType): JSX.Element {
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
          <PropertyInfoStack property={property} />
        </CardContent>
      </Link>
    </CardComponents.CardPaper>
  );
}

export default PropertyCard;
