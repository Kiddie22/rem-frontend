import { Box, Grid } from '@mui/material';
import PropertyCard from './property-card';
import CreateProperty from './create-property';
import useProperties from '@/hooks/react-query/useProperties';

function UserList(): JSX.Element {
  const properties = useProperties();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {properties?.map((property) => (
          <Grid item key={property.id}>
            <PropertyCard property={property} />
          </Grid>
        ))}
        <Grid item>
          <CreateProperty />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserList;
