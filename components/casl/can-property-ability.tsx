import { subject } from '@casl/ability';
import { Box, Grid } from '@mui/material';
import { Can } from '@/context/CaslProvider';
import { Property } from '@/utils/properties-utils';

type PropsType = {
  children: React.ReactNode;
  property: Property;
  md: number;
  ability: string;
};

function CanPropertyAbility(props: PropsType): JSX.Element {
  const { children, property, md, ability } = props;

  return (
    <Can do={ability} this={subject('Property', property)}>
      <Grid item md={md}>
        <Box boxShadow={1} p={2}>
          {children}
        </Box>
      </Grid>
    </Can>
  );
}

export default CanPropertyAbility;
