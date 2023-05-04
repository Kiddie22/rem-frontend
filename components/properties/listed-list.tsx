import { Box, Grid } from '@mui/material';
import PropertyCard from './property-card';
import { useListedProperties } from '@/hooks/react-query/useProperties';

function ListedList(): JSX.Element {
  const properties = useListedProperties();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {properties?.map((property) => (
          <Grid item key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListedList;
