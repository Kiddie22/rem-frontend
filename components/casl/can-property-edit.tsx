import { subject } from '@casl/ability';
import { Box, Grid } from '@mui/material';
import { Can } from '@/context/CaslProvider';
import { Property } from '@/utils/properties-utils';

type PropsType = { children: React.ReactNode; property: Property };

function CanEditProperty(props: PropsType): JSX.Element {
  const { children, property } = props;

  return (
    <Can do="edit" this={subject('Property', property)}>
      <Grid item md={12}>
        <Box boxShadow={1} p={2}>
          {children}
        </Box>
      </Grid>
    </Can>
  );
}

export default CanEditProperty;
