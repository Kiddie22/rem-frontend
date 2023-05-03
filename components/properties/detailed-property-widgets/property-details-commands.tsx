import { subject } from '@casl/ability';
import { Box, Button, Grid } from '@mui/material';
import { Can } from '@/context/CaslProvider';
import { Property } from '@/utils/properties-utils';
import {
  useDelistProperty,
  useListProperty,
} from '@/hooks/react-query/useProperties';

function PropertyDetailsCommands(props: { property: Property }): JSX.Element {
  const { property } = props;
  const listPropertyMutation = useListProperty();
  const delistPropertyMutation = useDelistProperty();

  return (
    <Can do="edit" this={subject('Property', property)}>
      <Grid item md={4}>
        <Box boxShadow={8} p={2}>
          {property?.isListed ? (
            <Button
              onClick={(): void => delistPropertyMutation.mutate(property?.id)}
            >
              Delist
            </Button>
          ) : (
            <Button
              onClick={(): void => listPropertyMutation.mutate(property?.id)}
            >
              List
            </Button>
          )}
        </Box>
      </Grid>
    </Can>
  );
}

export default PropertyDetailsCommands;
