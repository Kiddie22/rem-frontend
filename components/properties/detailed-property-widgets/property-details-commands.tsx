import { Button } from '@mui/material';
import { Property } from '@/utils/properties-utils';
import {
  useDelistProperty,
  useListProperty,
} from '@/hooks/react-query/useProperties';
import CanPropertyAbility from '@/components/casl/can-property-ability';

type PropsType = { property: Property };

function PropertyDetailsCommands(props: PropsType): JSX.Element {
  const { property } = props;
  const listPropertyMutation = useListProperty();
  const delistPropertyMutation = useDelistProperty();

  return (
    <CanPropertyAbility property={property} md={12} ability="edit">
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
    </CanPropertyAbility>
  );
}

export default PropertyDetailsCommands;
