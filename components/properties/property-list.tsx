import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import PropertyCard from './property-card';
import CreateProperty from './create-property';
import useAxiosInstance from '@/hooks/useAxiosInstance';
import usePropertiesApi from '@/hooks/usePropertiesApi';
import usePropertiesData from '@/hooks/usePropertiesData';

function PropertyList(): JSX.Element {
  const instance = useAxiosInstance();
  const properties = usePropertiesData();
  const setProperties = usePropertiesApi();

  useEffect(() => {
    const fetchProperties = async (): Promise<void> => {
      const response = await instance.get('properties');
      setProperties(response.data);
    };

    fetchProperties();
  }, []);

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

export default PropertyList;
