import {
  Button,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import Link from 'next/link';
import { subject } from '@casl/ability';
import { Property } from '@/utils/properties-utils';
import { Can } from '@/context/CanProvider';

function PropertyCard(props: { property: Property }): JSX.Element {
  const { property } = props;
  return (
    <Paper
      elevation={6}
      style={{
        borderWidth: '5px',
        borderRadius: '5%',
      }}
    >
      <Link
        href={`properties/${property.id}`}
        style={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        <CardMedia
          component="img"
          height="300px"
          image="cover.svg"
          alt="Property Image"
          style={{
            borderTopLeftRadius: '5%',
            borderTopRightRadius: '5%',
          }}
        />
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
          <Stack
            direction="row"
            paddingTop={1}
            color="text.secondary"
            divider={<Divider orientation="vertical" flexItem />}
            fontSize={14}
            spacing={1}
            justifyContent="center"
          >
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
          </Stack>
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
    </Paper>
  );
}

export default PropertyCard;
