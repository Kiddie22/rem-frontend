import { Button } from '@mui/material';
import { Property } from '@/utils/properties-utils';
import {
  useDelistProperty,
  useListProperty,
} from '@/hooks/react-query/useProperties';
import CanEditProperty from '@/components/casl/can-property-edit';

type PropsType = { property: Property };

function PropertyDetailsCommands(props: PropsType): JSX.Element {
  const { property } = props;
  const listPropertyMutation = useListProperty();
  const delistPropertyMutation = useDelistProperty();

  return (
    <CanEditProperty property={property}>
      {property?.isListed ? (
        <Button
          onClick={(): void => delistPropertyMutation.mutate(property?.id)}
        >
          Delist
        </Button>
      ) : (
        <Button onClick={(): void => listPropertyMutation.mutate(property?.id)}>
          List
        </Button>
      )}
    </CanEditProperty>
  );
}

export default PropertyDetailsCommands;
