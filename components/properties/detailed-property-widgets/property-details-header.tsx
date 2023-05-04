import { Container, Typography } from '@mui/material';
import { Property } from '@/utils/properties-utils';

type PropsType = { property: Property };

function PropertyDetailsHeader(props: PropsType): JSX.Element {
  const { property } = props;
  return (
    <Container
      style={{
        textAlign: 'center',
      }}
    >
      <Typography>{property?.propertyType.toUpperCase()}</Typography>
      <Typography variant="h3">{property?.propertyName}</Typography>
      <Typography variant="body1">{property?.location}</Typography>
    </Container>
  );
}

export default PropertyDetailsHeader;
