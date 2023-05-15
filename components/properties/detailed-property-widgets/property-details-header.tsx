import { Container, Typography } from '@mui/material';
import { Property } from '@/utils/properties-utils';
import CanPropertyAbility from '@/components/casl/can-property-ability';

type PropsType = { property: Property };

function PropertyDetailsHeader(props: PropsType): JSX.Element {
  const { property } = props;
  return (
    <CanPropertyAbility property={property} md={12} ability="read">
      <Container
        style={{
          textAlign: 'center',
        }}
      >
        <Typography>{property?.propertyType.toUpperCase()}</Typography>
        <Typography variant="h3">{property?.propertyName}</Typography>
        <Typography variant="body1">{property?.location}</Typography>
      </Container>
    </CanPropertyAbility>
  );
}

export default PropertyDetailsHeader;
